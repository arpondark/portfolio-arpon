import { spawn } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9400 + (process.pid % 500);
const projectRoot = process.cwd();
const profilePath = mkdtempSync(join(tmpdir(), "portfolio-review-"));
const reviewPath = resolve(projectRoot, ".impeccable", "review");

mkdirSync(profilePath, { recursive: true });
mkdirSync(reviewPath, { recursive: true });

const chrome = spawn(chromePath, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  `--remote-debugging-port=${port}`,
  "--remote-allow-origins=*",
  `--user-data-dir=${profilePath}`,
  "about:blank",
], { stdio: "ignore", windowsHide: true });

async function waitForDebugger() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/new?http://localhost:3000`, { method: "PUT" });
      if (response.ok) return response.json();
    } catch {}
    await new Promise((resolveWait) => setTimeout(resolveWait, 100));
  }
  throw new Error("Chrome DevTools endpoint did not become available.");
}

function createClient(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl);
  let commandId = 0;
  const pending = new Map();

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (!message.id) return;
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    if (message.error) request.reject(new Error(message.error.message));
    else request.resolve(message.result);
  });

  const opened = new Promise((resolveOpen, rejectOpen) => {
    socket.addEventListener("open", resolveOpen, { once: true });
    socket.addEventListener("error", rejectOpen, { once: true });
  });

  async function send(method, params = {}) {
    await opened;
    commandId += 1;
    const id = commandId;
    const result = new Promise((resolveCommand, rejectCommand) => {
      pending.set(id, { resolve: resolveCommand, reject: rejectCommand });
    });
    socket.send(JSON.stringify({ id, method, params }));
    return result;
  }

  return { socket, send };
}

async function capture(client, { width, height, mobile, filename, viewportFilename }) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
    screenWidth: width,
    screenHeight: height,
  });
  await client.send("Page.enable");
  await client.send("Page.navigate", { url: "http://localhost:3000" });
  await new Promise((resolveWait) => setTimeout(resolveWait, 1200));
  await client.send("Runtime.evaluate", {
    expression: "(async () => { await document.fonts.ready; const pageHeight = document.documentElement.scrollHeight; for (let y = 0; y < pageHeight; y += Math.max(480, innerHeight * 0.8)) { window.scrollTo(0, y); await new Promise((resolve) => setTimeout(resolve, 90)); } window.scrollTo(0, 0); const heroImage = document.querySelector('.portrait-frame img'); if (heroImage) { await Promise.race([heroImage.decode().catch(() => {}), new Promise((resolve) => setTimeout(resolve, 1800))]); } await new Promise((resolve) => setTimeout(resolve, 900)); return true; })()",
    awaitPromise: true,
  });

  if (viewportFilename) {
    const viewportScreenshot = await client.send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: false,
      fromSurface: true,
    });
    writeFileSync(resolve(reviewPath, viewportFilename), Buffer.from(viewportScreenshot.data, "base64"));
  }

  const metrics = await client.send("Page.getLayoutMetrics");
  const content = metrics.cssContentSize;
  const screenshot = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: true,
    fromSurface: true,
    clip: { x: 0, y: 0, width: content.width, height: content.height, scale: 1 },
  });

  const output = resolve(reviewPath, filename);
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, Buffer.from(screenshot.data, "base64"));
}

async function captureResume(client, { width, height, mobile, filename }) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
    screenWidth: width,
    screenHeight: height,
  });
  await client.send("Page.enable");
  await client.send("Page.navigate", { url: "http://localhost:3000" });
  await new Promise((resolveWait) => setTimeout(resolveWait, 1200));
  await client.send("Runtime.evaluate", {
    expression: "(async () => { await document.fonts.ready; document.querySelector('.nav-cta')?.click(); await new Promise((resolve) => setTimeout(resolve, 700)); return true; })()",
    awaitPromise: true,
  });

  const screenshot = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
    fromSurface: true,
  });
  writeFileSync(resolve(reviewPath, filename), Buffer.from(screenshot.data, "base64"));
}

try {
  const target = await waitForDebugger();
  const client = createClient(target.webSocketDebuggerUrl);
  await capture(client, { width: 1440, height: 900, mobile: false, filename: "desktop.png", viewportFilename: "desktop-viewport.png" });
  await capture(client, { width: 375, height: 812, mobile: true, filename: "mobile.png", viewportFilename: "mobile-viewport.png" });
  await capture(client, { width: 844, height: 390, mobile: true, filename: "landscape.png" });
  await captureResume(client, { width: 1440, height: 900, mobile: false, filename: "resume-desktop.png" });
  await captureResume(client, { width: 375, height: 812, mobile: true, filename: "resume-mobile.png" });
  client.socket.close();
} finally {
  chrome.kill();
  await new Promise((resolveExit) => {
    if (chrome.exitCode !== null) {
      resolveExit();
      return;
    }
    const timeout = setTimeout(resolveExit, 1500);
    chrome.once("exit", () => {
      clearTimeout(timeout);
      resolveExit();
    });
  });
  try {
    rmSync(profilePath, { recursive: true, force: true, maxRetries: 5, retryDelay: 150 });
  } catch {
    // Windows can briefly retain Chrome profile handles after process exit.
  }
}

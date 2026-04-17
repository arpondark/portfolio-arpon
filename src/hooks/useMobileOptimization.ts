import { useEffect, useState } from "react";

export function useMobileOptimization() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    // Check if touch device
    const checkTouch = () => {
      const touch = () =>
        true &&
        ("ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          (navigator as any).msMaxTouchPoints > 0);
      setIsTouchDevice(touch());
    };

    checkMobile();
    checkTouch();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return {
    isMobile,
    isTouchDevice,
    shouldReduceAnimations: isMobile || isTouchDevice,
  };
}

/**
 * Disable scroll animations on mobile for better performance
 */
export function shouldDisableScrollAnimation(isMobile: boolean): boolean {
  return isMobile;
}

/**
 * Disable blur effects on mobile devices
 */
export function getBlurValue(isMobile: boolean, desktopValue: number): number {
  if (isMobile) {
    return Math.max(3, Math.floor(desktopValue / 3));
  }
  return desktopValue;
}

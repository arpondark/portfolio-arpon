import type { Metadata, Viewport } from "next";
import { Inter, Funnel_Display } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import StructuredData from "@/components/StructuredData";
import { generateOGMetadata } from "@/lib/og-metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: '--font-funnel',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#10b981',
}

// Generate OG metadata dynamically
const ogMetadata = generateOGMetadata();

export const metadata: Metadata = {
  metadataBase: new URL('https://shazan.site'),
  ...ogMetadata,
  keywords: [
    "MD SHAZAN MAHMUD ARPON",
    "Full Stack Developer",
    "Web Developer",
    "Laravel Developer",
    "PHP Developer",
    "Spring Boot Developer",
    "Java Developer",
    "React Developer",
    "Next.js Developer",
    "IoT Developer",
    "MERN Stack Developer",
    "Bangladesh",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Laravel",
    "PHP",
    "Spring Boot",
    "Java",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "MD SHAZAN MAHMUD ARPON", url: "https://shazan.site" }],
  creator: "MD SHAZAN MAHMUD ARPON",
  publisher: "MD SHAZAN MAHMUD ARPON",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/logo.png',
        type: 'image/png',
      }
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
  manifest: '/manifest.json',
  other: {
    'linkedin:card': 'summary_large_image',
    'linkedin:title': 'MD SHAZAN MAHMUD ARPON - Full Stack Developer Portfolio',
    'linkedin:description': 'Full Stack Developer specializing in Spring Boot, Laravel, React, and Next.js. Expert in PHP, Java, TypeScript, IoT systems, and AI applications.',
    'linkedin:image': 'https://shazan.site/og-image.png',
    'linkedin:profile': 'https://www.linkedin.com/in/md-shazan-mahmud-arpon/',
    'linkedin:author': 'https://www.linkedin.com/in/md-shazan-mahmud-arpon/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'pEKet2CZDqwJIZaPi402jgemA81QDg4CbmErc0o8CFI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth dark ${inter.variable} ${funnelDisplay.variable}`} suppressHydrationWarning>
      <head>
        {/* Prevent flash: set dark mode before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else if (!theme) {
                    var hour = new Date().getHours();
                    if (hour >= 6 && hour < 18) {
                      document.documentElement.classList.remove('dark');
                    }
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <StructuredData />
      </head>
      <body className={`${funnelDisplay.className} min-h-screen antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#8b5cf6',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://arpon007.me'),
  title: "MD SHAZAN MAHMUD ARPON - Full Stack Developer Portfolio",
  description: "Full Stack Developer specializing in Spring Boot, Laravel, React, and Next.js. Expert in PHP, Java, TypeScript, IoT systems, and AI applications. Building innovative web solutions with modern technologies.",
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
  authors: [{ name: "MD SHAZAN MAHMUD ARPON", url: "https://arpon007.me" }],
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
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://arpon007.me',
    siteName: "MD SHAZAN MAHMUD ARPON - Portfolio",
    title: "MD SHAZAN MAHMUD ARPON - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in Spring Boot, Laravel, React, and Next.js. Expert in PHP, Java, TypeScript, IoT systems, and AI applications.",
    images: [
      {
        url: 'https://arpon007.me/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MD SHAZAN MAHMUD ARPON - Portfolio Preview',
      }
    ],
  },
  alternates: {
    canonical: 'https://arpon007.me',
  },
  other: {
    'linkedin:card': 'summary_large_image',
    'linkedin:title': 'MD SHAZAN MAHMUD ARPON - Full Stack Developer Portfolio',
    'linkedin:description': 'Full Stack Developer specializing in Spring Boot, Laravel, React, and Next.js. Expert in PHP, Java, TypeScript, IoT systems, and AI applications.',
    'linkedin:image': 'https://arpon007.me/og-image.png',
    'linkedin:profile': 'https://www.linkedin.com/in/md-shazan-mahmud-arpon/',
    'linkedin:author': 'https://www.linkedin.com/in/md-shazan-mahmud-arpon/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MD SHAZAN MAHMUD ARPON - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in Spring Boot, Laravel, React, and Next.js. Expert in PHP, Java, TypeScript, IoT systems, and AI applications.",
    images: ['https://arpon007.me/og-image.png'],
    creator: '@mdshazanmahmudarpon',
    site: '@mdshazanmahmudarpon',
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
    <html lang="en" className={`scroll-smooth dark ${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
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
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <StructuredData />
      </head>
      <body className={`${outfit.className} min-h-screen antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

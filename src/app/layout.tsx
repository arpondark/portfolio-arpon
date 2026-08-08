import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import StructuredData from "@/components/StructuredData";
import { generateOGMetadata } from "@/lib/og-metadata";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  weight: ['300', '400', '500', '600'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

// Generate OG metadata dynamically
const ogMetadata = generateOGMetadata();

export const metadata: Metadata = {
  metadataBase: new URL('https://shazan.site'),
  ...ogMetadata,
  keywords: [
    "MD SHAZAN MAHMUD ARPON",
    "Spring Boot Backend Developer",
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
    'linkedin:title': 'MD SHAZAN MAHMUD ARPON - Spring Boot Backend Developer Portfolio',
    'linkedin:description': 'Spring Boot Backend Developer specializing in scalable APIs, microservices, Java architecture, and AI-integrated IoT solutions.',
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
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${spaceGrotesk.className} min-h-screen antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

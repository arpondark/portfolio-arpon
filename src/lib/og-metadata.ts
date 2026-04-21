import { Metadata } from "next";

export interface OGMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "profile" | "article";
  siteName?: string;
  locale?: string;
}

const DEFAULT_OG_CONFIG = {
  siteName: "MD SHAZAN MAHMUD ARPON - Portfolio",
  url: "https://shazan.site",
  title: "MD SHAZAN MAHMUD ARPON - Spring Boot Backend Developer Portfolio",
  description:
    "Spring Boot Backend Developer specializing in scalable APIs, microservices, Java architecture, and AI-integrated IoT solutions.",
  image: "https://shazan.site/og-image.png",
  type: "profile" as const,
  locale: "en_US",
  twitterHandle: "@mdshazanmahmudarpon",
  linkedInUrl: "https://www.linkedin.com/in/md-shazan-mahmud-arpon/",
  width: 1200,
  height: 630,
};

/**
 * Generate Open Graph metadata for pages
 */
export function generateOGMetadata(options: OGMetadataOptions = {}): Metadata {
  const {
    title = DEFAULT_OG_CONFIG.title,
    description = DEFAULT_OG_CONFIG.description,
    image = DEFAULT_OG_CONFIG.image,
    url = DEFAULT_OG_CONFIG.url,
    type = DEFAULT_OG_CONFIG.type,
    siteName = DEFAULT_OG_CONFIG.siteName,
    locale = DEFAULT_OG_CONFIG.locale,
  } = options;

  const imageObject = {
    url: image,
    width: DEFAULT_OG_CONFIG.width,
    height: DEFAULT_OG_CONFIG.height,
    alt: title,
    type: "image/png" as const,
  };

  return {
    title,
    description,
    openGraph: {
      type,
      locale,
      url,
      siteName,
      title,
      description,
      images: [imageObject],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: DEFAULT_OG_CONFIG.twitterHandle,
      site: DEFAULT_OG_CONFIG.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate project-specific OG metadata
 */
export function generateProjectOGMetadata(projectData: {
  title: string;
  description: string;
  slug?: string;
  image?: string;
}) {
  const {
    title,
    description,
    slug = "project",
    image = DEFAULT_OG_CONFIG.image,
  } = projectData;

  const projectUrl = `${DEFAULT_OG_CONFIG.url}/projects/${slug}`;

  return generateOGMetadata({
    title: `${title} - Portfolio Project`,
    description,
    image,
    url: projectUrl,
    type: "article",
    siteName: DEFAULT_OG_CONFIG.siteName,
  });
}

/**
 * Generate structured data for SEO
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "MD SHAZAN MAHMUD ARPON",
    url: DEFAULT_OG_CONFIG.url,
    image: DEFAULT_OG_CONFIG.image,
    description: DEFAULT_OG_CONFIG.description,
    sameAs: [
      DEFAULT_OG_CONFIG.linkedInUrl,
      "https://github.com/arpondark",
      "https://twitter.com/mdshazanmahmudarpon",
    ],
    jobTitle: "Spring Boot Developer",
    knowsAbout: [
      "Spring Boot",
      "Laravel",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PHP",
      "Java",
      "IoT Systems",
      "Microservices",
      "Docker",
      "Kubernetes",
    ],
  };
}

/**
 * Generate website schema for rich snippets
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: DEFAULT_OG_CONFIG.url,
    name: DEFAULT_OG_CONFIG.siteName,
    description: DEFAULT_OG_CONFIG.description,
    image: DEFAULT_OG_CONFIG.image,
    creator: {
      "@type": "Person",
      name: "MD SHAZAN MAHMUD ARPON",
    },
  };
}

/**
 * Create meta tags string for non-Next.js usage
 */
export function createMetaTagsString(options: OGMetadataOptions = {}): string {
  const {
    title = DEFAULT_OG_CONFIG.title,
    description = DEFAULT_OG_CONFIG.description,
    image = DEFAULT_OG_CONFIG.image,
    url = DEFAULT_OG_CONFIG.url,
  } = options;

  return `
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="${DEFAULT_OG_CONFIG.width}" />
    <meta property="og:image:height" content="${DEFAULT_OG_CONFIG.height}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${url}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:creator" content="${DEFAULT_OG_CONFIG.twitterHandle}" />
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${url}" />
  `.trim();
}

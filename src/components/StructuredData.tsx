export default function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "MD SHAZAN MAHMUD ARPON",
    "url": "https://shazan.site",
    "image": "https://shazan.site/profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/md-shazan-mahmud-arpon/",
      "https://github.com/arpondark"
    ],
    "jobTitle": "Backend Engineer and Open-Source Contributor",
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Developer"
    },
    "description": "Backend engineer and open-source contributor building scalable services, full-stack products, and software for robotics and connected systems. Member of Team UIU UAV, World Rank #4 at SUAS 2026.",
    "award": "SUAS 2026 — World Rank #4 with Team UIU UAV",
    "knowsAbout": [
      "Web Development",
      "IoT Development",
      "Artificial Intelligence",
      "React",
      "Next.js",
      "Three.js",
      "TypeScript",
      "Node.js"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "United International University",
      "sameAs": "https://www.uiu.ac.bd/"
    },
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Bangladesh"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  );
} 

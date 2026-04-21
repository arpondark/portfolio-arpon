export default function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "MD SHAZAN MAHMUD ARPON",
    "url": "https://shazan.site",
    "image": "https://shazan.site/profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/md-shazan-mahmud-arpon/",
      "https://github.com/mdshazanmahmudarpon"
    ],
    "jobTitle": "Spring Boot Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Developer"
    },
    "description": "Spring Boot Developer focused on Backend Engineering, scalable APIs, and AI-integrated solutions",
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

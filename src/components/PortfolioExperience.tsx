"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  SiApachekafka,
  SiApachemaven,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiGradle,
  SiGraphql,
  SiJavascript,
  SiJunit5,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSpringsecurity,
  SiTypescript,
} from "react-icons/si";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Server,
  Radio,
  Wifi,
  Workflow,
  X,
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  github?: string;
  link?: string;
  tech: string[];
  category: "Backend" | "Platform" | "Web" | "Product";
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 19,
    title: "Uber DOMA Architecture",
    description: "An open-source contribution to an enterprise ride-sharing blueprint that organizes 40 Spring Boot services into six bounded domains with tiered gateways, gRPC, Kafka, and isolated persistence.",
    github: "https://github.com/arpondark/uber-doma-architecture",
    tech: ["Spring Boot", "gRPC", "Kafka", "PostgreSQL"],
    category: "Backend",
    featured: true,
  },
  {
    id: 1,
    title: "Microservice LMS System",
    description: "A modular learning platform designed around independently deployable Spring Boot services and containerized infrastructure.",
    github: "https://github.com/arpondark/microservice-lms-system-springboot",
    tech: ["Spring Boot", "Microservices", "Docker", "MySQL"],
    category: "Backend",
    featured: true,
  },
  {
    id: 2,
    title: "Full-Stack Authentication System",
    description: "An end-to-end identity layer with JWT, OAuth2, role-based access control, and a React client.",
    github: "https://github.com/arpondark/FullStackAuth-system-springboot",
    tech: ["Spring Security", "OAuth2", "JWT", "React"],
    category: "Platform",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Microservices",
    description: "An event-driven commerce architecture separating product, order, payment, and inventory responsibilities.",
    github: "https://github.com/arpondark/ecommerce-spring-boot-micro-service",
    tech: ["Spring Boot", "Kafka", "Docker", "Microservices"],
    category: "Backend",
    featured: true,
  },
  {
    id: 4,
    title: "UIU Robotics Club",
    description: "The official digital home for UIU Robotics Club, bringing its projects, people, activities, and achievements into one clear experience.",
    link: "https://robotics.uiu.ac.bd/",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    category: "Web",
    featured: true,
  },
  {
    id: 5,
    title: "Ride-Hailing Backend",
    description: "A Spring Boot backend for rider and driver management, trip matching, fare calculation, and booking workflows.",
    github: "https://github.com/arpondark/ubar-clone-backend-springboot",
    tech: ["Spring Boot", "REST API", "MySQL", "JPA"],
    category: "Backend",
    featured: true,
  },
  {
    id: 6,
    title: "E-Commerce Monolith",
    description: "A complete commerce application with product catalog, shopping cart, checkout, and server-rendered views.",
    github: "https://github.com/arpondark/EcommerceMono",
    tech: ["Spring Boot", "Thymeleaf", "MySQL", "REST API"],
    category: "Backend",
  },
  {
    id: 7,
    title: "Streaming Platform Backend",
    description: "A Netflix-inspired service architecture with discovery, gateway routing, and independently managed backend domains.",
    github: "https://github.com/arpondark/netflix-clone-microservice-spring-boot",
    tech: ["Spring Boot", "Eureka", "API Gateway", "Microservices"],
    category: "Backend",
  },
  {
    id: 8,
    title: "Blog Application Backend",
    description: "A REST API for publishing workflows, user authentication, comments, and content management.",
    github: "https://github.com/arpondark/blogapp-spring-boot-backend",
    tech: ["Spring Boot", "JPA", "MySQL", "REST API"],
    category: "Backend",
  },
  {
    id: 9,
    title: "LMS with MinIO Storage",
    description: "A learning-system backend that pairs Spring Boot workflows with MinIO object storage for course files.",
    github: "https://github.com/arpondark/lmsbackend-springboot-minio",
    tech: ["Spring Boot", "MinIO", "PostgreSQL", "Docker"],
    category: "Platform",
  },
  {
    id: 10,
    title: "OAuth2 Integration Demo",
    description: "A focused security implementation covering social sign-in, OAuth2 providers, and token-based authorization.",
    github: "https://github.com/arpondark/oauth2-demo",
    tech: ["Spring Security", "OAuth2", "JWT", "Spring Boot"],
    category: "Platform",
  },
  {
    id: 11,
    title: "Restaurant Review System",
    description: "A review and discovery platform with ratings, restaurant data, and a React-backed user experience.",
    github: "https://github.com/arpondark/restrudent-review-system-spring-boot",
    tech: ["Spring Boot", "MongoDB", "REST API", "React"],
    category: "Product",
  },
  {
    id: 12,
    title: "Learning Management System",
    description: "A course-management application for enrollment, content delivery, and student progress tracking.",
    github: "https://github.com/arpondark/lms-springboot",
    tech: ["Spring Boot", "JPA", "MySQL", "Thymeleaf"],
    category: "Backend",
  },
  {
    id: 13,
    title: "Love Proposal Platform",
    description: "An interactive publishing experience for creating and sharing personalized proposals with real-time content.",
    link: "https://www.lovepropose.fun/",
    github: "https://github.com/mdshazanmahmudarpon/love-propose",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    category: "Product",
  },
  {
    id: 14,
    title: "Pita as a Service",
    description: "A food ordering platform designed around a simple discovery, selection, and service journey.",
    link: "https://pitasaservice.com/",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "Product",
  },
  {
    id: 15,
    title: "Barta Test",
    description: "A modern news portal prototype with live content presentation and an editorial dashboard structure.",
    link: "https://bartatest.netlify.app/",
    github: "https://github.com/mdshazanmahmudarpon/barta-test",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web",
  },
  {
    id: 16,
    title: "Task Management App",
    description: "A typed productivity interface with drag-and-drop organization, categories, and focused task management.",
    link: "https://sage-tapioca-7c648d.netlify.app/",
    github: "https://github.com/mdshazanmahmudarpon/todo-app",
    tech: ["React", "TypeScript", "Tailwind CSS", "DnD Kit"],
    category: "Product",
  },
  {
    id: 17,
    title: "Social Blog Platform",
    description: "A publishing product with rich-text authoring, social interactions, and Firebase-backed content.",
    link: "https://blog-arpon007.netlify.app/",
    github: "https://github.com/mdshazanmahmudarpon/blog-platform",
    tech: ["React", "Firebase", "Material UI", "Redux"],
    category: "Web",
  },
  {
    id: 18,
    title: "Love Me Fun",
    description: "A social matching prototype with real-time chat and a full-stack JavaScript architecture.",
    link: "https://love-mefun.netlify.app/",
    github: "https://github.com/mdshazanmahmudarpon/love-me",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "Product",
  },
];

const navLinks = [
  { href: "#achievement", label: "Achievement" },
  { href: "#work", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
];

const primaryGitHubUrl = "https://github.com/arpondark";

const capabilities = [
  {
    title: "Backend systems",
    icon: Server,
    copy: "Spring Boot services, secure REST APIs, data modeling, microservice boundaries, and event-driven workflows.",
    tools: ["Java", "Spring Boot", "Kafka", "Event-Driven Architecture (EDA)", "PostgreSQL", "Docker"],
  },
  {
    title: "Full-stack products",
    icon: Code2,
    copy: "Accessible web interfaces connected to practical APIs, authentication, content, and real-time product behavior.",
    tools: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    title: "Robotics & IoT",
    icon: Award,
    copy: "Software for sensor-rich systems, connected devices, UAV operations, and real-world engineering teams.",
    tools: ["Python", "OpenCV", "ESP32", "Raspberry Pi", "Sensors"],
  },
];

const skillGroups = [
  {
    title: "Languages & web",
    description: "Core languages, frameworks, and web interface technologies.",
    items: [
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "React.js",
      "Next.js",
    ],
  },
  {
    title: "Backend architecture",
    description: "API development, security, and distributed systems.",
    items: [
      "Spring Boot",
      "Spring Security",
      "Laravel",
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "gRPC",
      "GraphQL",
      "Microservices",
      "Event-Driven Architecture",
      "WebSocket",
    ],
  },
  {
    title: "Messaging & data",
    description: "Asynchronous communication, caching, and persistence.",
    items: [
      "Kafka",
      "RabbitMQ",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "Delivery & testing",
    description: "Build, test, containerization, and development tools.",
    items: [
      "Docker",
      "Kubernetes",
      "Git",
      "Maven",
      "Gradle",
      "JUnit",
      "Linux",
      "Postman",
    ],
  },
];

const skillIcons: Record<string, IconType> = {
  Java: SiOpenjdk,
  "C++": SiCplusplus,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  PHP: SiPhp,
  Laravel: SiLaravel,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  NestJS: SiNestjs,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Spring Boot": SiSpringboot,
  "Spring Security": SiSpringsecurity,
  GraphQL: SiGraphql,
  Kafka: SiApachekafka,
  RabbitMQ: SiRabbitmq,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Git: SiGit,
  Maven: SiApachemaven,
  Gradle: SiGradle,
  JUnit: SiJunit5,
  Linux: SiLinux,
  Postman: SiPostman,
};

const skillColors: Record<string, string> = {
  Java: "#e76f00",
  "C++": "#00599c",
  JavaScript: "#aa8b00",
  TypeScript: "#3178c6",
  Python: "#3776ab",
  PHP: "#777bb4",
  Laravel: "#f04438",
  "React.js": "#149eca",
  "Next.js": "#111827",
  "Spring Boot": "#63a744",
  "Spring Security": "#5a9e3d",
  gRPC: "#2f7f93",
  GraphQL: "#d936a6",
  Kafka: "#1d2430",
  RabbitMQ: "#e86b17",
  PostgreSQL: "#336791",
  MySQL: "#2d7693",
  MongoDB: "#3f9b55",
  Redis: "#c83d35",
  Docker: "#178bd0",
  Kubernetes: "#326ce5",
  Git: "#e4512d",
  Maven: "#b44b65",
  Gradle: "#2f6e72",
  JUnit: "#2f8560",
  Linux: "#29354a",
  Postman: "#f2683f",
};

function SkillMark({ name }: { name: string }) {
  const BrandIcon = skillIcons[name];
  if (BrandIcon) {
    return (
      <span className="skill-mark" style={{ color: skillColors[name] }} aria-hidden="true">
        <BrandIcon />
      </span>
    );
  }

  const ConceptIcon = name === "Microservices" || name === "gRPC" ? Workflow : name === "Event-Driven Architecture" ? Radio : name === "WebSocket" ? Wifi : Server;
  return (
    <span className="skill-mark skill-mark-concept" style={{ color: skillColors[name] }} aria-hidden="true">
      <ConceptIcon />
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const githubUrl = project.github ?? primaryGitHubUrl;

  return (
    <div className="project-links">
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live site`}>
          Live site <ExternalLink aria-hidden="true" />
        </a>
      )}
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={project.github ? `Open ${project.title} source code on GitHub` : "Visit Arpon's GitHub profile"}
      >
        {project.github ? "GitHub" : "GitHub profile"} <Github aria-hidden="true" />
      </a>
    </div>
  );
}

export default function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [filter, setFilter] = useState<"All" | Project["category"]>("All");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const resumeDialogRef = useRef<HTMLDivElement>(null);
  const resumeTriggerRef = useRef<HTMLElement | null>(null);
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);
  const featured = projects.filter((project) => project.featured).slice(0, 5);

  const openResume = () => {
    resumeTriggerRef.current = document.activeElement as HTMLElement;
    setMenuOpen(false);
    setResumeOpen(true);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (!resumeOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    resumeDialogRef.current?.focus();

    const handleDialogKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setResumeOpen(false);
        return;
      }

      if (event.key !== "Tab" || !resumeDialogRef.current) return;
      const focusable = Array.from(
        resumeDialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleDialogKeydown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleDialogKeydown);
      resumeTriggerRef.current?.focus();
    };
  }, [resumeOpen]);

  return (
    <div className="site-shell">
      <div className="ambient-field" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-orb ambient-orb-three" />
      </div>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header">
        <div className="header-inner">
          <Link href="#top" className="brand" aria-label="Arpon — back to top">
            <span className="brand-monogram" aria-hidden="true">AM</span>
            <span><strong>Shazan Arpon</strong><small>Backend engineer · Systems builder</small></span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>

          <button className="nav-cta" type="button" onClick={openResume}>
            View résumé <ExternalLink aria-hidden="true" />
          </button>

          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
            ))}
            <button type="button" onClick={openResume}>View résumé</button>
          </nav>
        )}
      </header>

      {resumeOpen && (
        <div
          className="resume-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setResumeOpen(false);
          }}
        >
          <div
            ref={resumeDialogRef}
            className="resume-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-dialog-title"
            tabIndex={-1}
          >
            <div className="resume-dialog-header">
              <div className="resume-dialog-title">
                <span>Professional résumé</span>
                <h2 id="resume-dialog-title">MD Shazan Mahmud Arpon</h2>
              </div>
              <div className="resume-dialog-actions">
                <a
                  className="resume-open-tab"
                  href="/cv/MD._SHAZAN_MAHMUD_ARPON_.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in new tab <ExternalLink aria-hidden="true" />
                </a>
                <a
                  className="resume-download"
                  href="/cv/MD._SHAZAN_MAHMUD_ARPON_.pdf"
                  download="MD_SHAZAN_MAHMUD_ARPON_CV.pdf"
                >
                  Download PDF <Download aria-hidden="true" />
                </a>
                <button className="resume-close" type="button" onClick={() => setResumeOpen(false)} aria-label="Close résumé viewer">
                  <X aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="resume-preview">
              <div className="resume-preview-document">
                <Image
                  src="/cv/resume-preview.png"
                  alt="Preview of MD Shazan Mahmud Arpon's résumé"
                  width={952}
                  height={1347}
                  sizes="(max-width: 860px) 96vw, 780px"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <main id="main-content">
        <section className="hero-section" id="top">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="mobile-identity">
                <Image src="/profile.jpg" alt="" width={56} height={56} aria-hidden="true" />
                <div><strong>MD Shazan Mahmud Arpon</strong><span>Backend engineer · Bangladesh</span></div>
              </div>
              <h1>Backend engineer building <span>scalable, secure software.</span></h1>
              <p className="hero-intro">
                I&apos;m MD Shazan Mahmud Arpon, a backend engineer and open-source contributor building
                Java and Spring Boot systems, secure APIs, and production-ready services.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">View selected work <ArrowRight aria-hidden="true" /></a>
                <a className="button button-secondary" href="mailto:shazanarpon@shazan.site">Email me <Mail aria-hidden="true" /></a>
              </div>
              <div className="hero-signal-row">
                <p className="availability"><span aria-hidden="true" /> Available for backend and software engineering roles</p>
                <a className="hero-proof" href="#achievement"><Award aria-hidden="true" /> SUAS 2026 · World Rank #4</a>
              </div>
              <dl className="hero-details">
                <div><dt>Based in</dt><dd>Bangladesh</dd></div>
                <div><dt>Primary stack</dt><dd>Java · Spring Boot · React</dd></div>
              </dl>
            </div>

            <figure className="hero-portrait">
              <div className="portrait-frame">
                <Image src="/profile.jpg" alt="MD Shazan Mahmud Arpon" fill priority sizes="(max-width: 860px) 92vw, 38vw" />
                <span className="portrait-sheen" aria-hidden="true" />
                <div className="portrait-badge">
                  <span>Current focus</span>
                  <strong>Distributed backend systems</strong>
                </div>
              </div>
              <figcaption>
                <span>MD Shazan Mahmud Arpon</span>
                <span>Backend Engineer · Open-Source Contributor</span>
              </figcaption>
            </figure>
          </div>

          <div className="proof-strip" aria-label="Portfolio highlights">
            <div><strong>#4</strong><span>World rank at SUAS 2026<br />with Team UIU UAV</span></div>
            <div><strong>{projects.length}</strong><span>Public projects across<br />backend and full-stack</span></div>
            <div><strong>03</strong><span>Core disciplines: backend,<br />web, and robotics</span></div>
          </div>
        </section>

        <section className="achievement-section" id="achievement">
          <div className="section-shell achievement-inner">
            <div className="achievement-copy">
              <h2>World Rank #4 at SUAS 2026</h2>
              <p>
                As a software team member of UIU Aerial Robotics Team, I helped represent UIU at the
                2026 Student Unmanned Aerial Systems competition in Tulsa, Oklahoma.
              </p>
              <p className="achievement-note"><Award aria-hidden="true" /> Student Unmanned Aerial Systems competition · 2026</p>
            </div>

            <div className="achievement-gallery">
              <figure className="achievement-main">
                <div className="gallery-image"><Image src="/price/1.jpg" alt="UIU UAV team member receiving the SUAS 2026 World Rank 4 award" fill sizes="(max-width: 800px) 92vw, 48vw" /></div>
                <figcaption>Award ceremony</figcaption>
              </figure>
              <div className="achievement-pair">
                <figure>
                  <div className="gallery-image"><Image src="/price/2.jpg" alt="UIU UAV team celebrating its World Rank 4 result" fill sizes="(max-width: 800px) 44vw, 24vw" /></div>
                  <figcaption>The team</figcaption>
                </figure>
                <figure>
                  <div className="gallery-image"><Image src="/price/3.jpg" alt="UIU UAV team with awards and World's Top 4 banner" fill sizes="(max-width: 800px) 44vw, 24vw" /></div>
                  <figcaption>Homecoming</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="section-heading">
            <div>
              <h2>Selected projects</h2>
              <p>Backend systems and web products built with Java, Spring Boot, React, and modern infrastructure.</p>
            </div>
          </div>

          <div className="featured-work">
            {featured.map((project, index) => (
              <article className="featured-project" key={project.id}>
                <div className="project-order">0{index + 1}</div>
                <div className="project-summary">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-meta">
                  <div className="project-stack">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <ProjectLinks project={project} />
                </div>
              </article>
            ))}
          </div>

          <details className="project-archive">
            <summary><span>Browse full project archive</span><span>{projects.length} projects</span></summary>
            <div className="archive-body">
              <div className="project-filters" role="group" aria-label="Filter projects">
                {(["All", "Backend", "Platform", "Web", "Product"] as const).map((option) => (
                  <button key={option} type="button" className={filter === option ? "active" : ""} aria-pressed={filter === option} onClick={() => setFilter(option)}>{option}</button>
                ))}
              </div>
              <div className="index-table" aria-live="polite">
                {filteredProjects.map((project) => (
                  <article key={project.id} className="index-row">
                    <span className="index-id">{String(project.id).padStart(2, "0")}</span>
                    <div><h3>{project.title}</h3><span>{project.category}</span></div>
                    <div className="index-tech">{project.tech.slice(0, 3).join(" · ")}</div>
                    <ProjectLinks project={project} />
                  </article>
                ))}
              </div>
            </div>
          </details>
        </section>

        <section className="expertise-section section-shell" id="expertise">
          <div className="section-heading">
            <div>
              <h2>Areas of expertise</h2>
              <p>Backend development is my main focus, supported by full-stack and robotics experience.</p>
            </div>
          </div>
          <div className="capability-list">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title}>
                  <div className="capability-top"><Icon aria-hidden="true" /></div>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                  <div className="capability-tools">{capability.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <h2>Technical skills</h2>
                <p>Languages, frameworks, databases, messaging systems, and engineering tools listed in my current résumé.</p>
              </div>
            </div>

            <div className="skill-groups">
              {skillGroups.map((group, groupIndex) => (
                <article className="skill-group" key={group.title}>
                  <div className="skill-group-heading">
                    <span>0{groupIndex + 1}</span>
                    <div><h3>{group.title}</h3><p>{group.description}</p></div>
                  </div>
                  <ul className="skill-list">
                    {group.items.map((skill) => (
                      <li key={skill}>
                        <SkillMark name={skill} />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="skills-note">Skills are synchronized with the current résumé.</p>
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="section-heading">
            <div>
              <h2>About me</h2>
              <p>Backend engineer focused on microservices, asynchronous systems, and Event-Driven Architecture.</p>
            </div>
          </div>
          <div className="about-grid">
            <p className="about-lead">I design <strong>microservices</strong> and <strong>event-driven architectures</strong> for reliable, high-performance platforms.</p>
            <div className="about-copy">
              <p>I focus on clear service boundaries, dependable APIs, and asynchronous communication that keeps complex systems scalable and understandable as they grow.</p>
              <div className="about-focus" aria-label="Primary backend specialties">
                <div>
                  <Workflow aria-hidden="true" />
                  <span><strong>Microservices</strong><small>Independent services with clear domain boundaries and deployment paths.</small></span>
                </div>
                <div>
                  <Radio aria-hidden="true" />
                  <span><strong>Event-Driven Architecture (EDA)</strong><small>Asynchronous workflows built around Kafka, messaging, and resilient events.</small></span>
                </div>
              </div>
              <div className="about-facts">
                <div><MapPin aria-hidden="true" /><span>Bangladesh</span></div>
                <div><Award aria-hidden="true" /><span>SUAS 2026 · World #4</span></div>
                <div><Github aria-hidden="true" /><span>Open-source contributor</span></div>
                <div><Code2 aria-hidden="true" /><span>Backend · Full-stack · Robotics</span></div>
              </div>
              <button className="text-link resume-text-button" type="button" onClick={openResume}>View my résumé <ArrowUpRight aria-hidden="true" /></button>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner">
            <h2>Available for backend engineering roles.</h2>
            <p>I&apos;m open to software engineering opportunities involving Java, Spring Boot, distributed systems, and platform development.</p>
            <a className="contact-mail" href="mailto:shazanarpon@shazan.site">
              <span>shazanarpon@shazan.site</span><ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-github-wrap">
          <a className="footer-github" href={primaryGitHubUrl} target="_blank" rel="noreferrer">
            <span className="footer-github-icon" aria-hidden="true"><Github /></span>
            <span className="footer-github-copy">
              <strong>Explore my open-source work.</strong>
              <span>github.com/arpondark · repositories, contributions, and experiments</span>
            </span>
            <span className="footer-github-cta">Visit GitHub <ArrowUpRight aria-hidden="true" /></span>
          </a>
        </div>

        <div className="footer-main">
          <div className="footer-intro">
            <Link href="#top" className="footer-brand" aria-label="Shazan Arpon — back to top">
              <span className="footer-mark" aria-hidden="true">AM</span>
              <span>MD Shazan Mahmud Arpon</span>
            </Link>
            <h2>Engineering systems. Sharing the work.</h2>
            <p>Building Java and Spring Boot systems, secure APIs, and scalable software from Dhaka, Bangladesh.</p>
            <div className="footer-actions">
              <button className="footer-resume" type="button" onClick={openResume}>
                View résumé <ExternalLink aria-hidden="true" />
              </button>
              <a className="footer-email" href="mailto:shazanarpon@shazan.site">Email me <Mail aria-hidden="true" /></a>
            </div>
          </div>

          <nav className="footer-column" aria-label="Footer navigation">
            <span>Explore</span>
            {navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            <Link href="#contact">Contact</Link>
          </nav>

          <div className="footer-column footer-connect">
            <span>Connect</span>
            <a href={primaryGitHubUrl} target="_blank" rel="noreferrer">GitHub <Github aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/md-shazan-mahmud-arpon" target="_blank" rel="noreferrer">LinkedIn <Linkedin aria-hidden="true" /></a>
            <a href="mailto:shazanarpon@shazan.site">Email <Mail aria-hidden="true" /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MD Shazan Mahmud Arpon</p>
          <p>Dhaka, Bangladesh · UTC+6</p>
          <Link href="#top">Back to top <ArrowUp aria-hidden="true" /></Link>
        </div>
      </footer>
    </div>
  );
}

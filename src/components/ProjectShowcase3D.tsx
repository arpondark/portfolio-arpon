"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, Zap, ChevronLeft, ChevronRight, Filter, Server, Globe, Layers } from "lucide-react";

const projects = [
  {
    id: 101,
    title: "Microservice LMS System",
    description: "A Learning Management System built with Spring Boot microservices architecture for scalable education platform.",
    github: "https://github.com/arpondark/microservice-lms-system-springboot",
    link: "",
    tech: ["Spring Boot", "Microservices", "Docker", "MySQL"],
    highlights: ["Microservices", "LMS", "Scalable"],
    category: "Spring Boot",
    featured: true
  },
  {
    id: 102,
    title: "Full Stack Auth System",
    description: "Complete authentication and authorization system with Spring Boot backend, supporting JWT, OAuth2, and role-based access control.",
    github: "https://github.com/arpondark/FullStackAuth-system-springboot",
    link: "",
    tech: ["Spring Boot", "Spring Security", "JWT", "React"],
    highlights: ["Authentication", "JWT", "RBAC"],
    category: "Spring Boot",
    featured: true
  },
  {
    id: 103,
    title: "E-Commerce Microservice",
    description: "Enterprise-grade e-commerce platform built with Spring Boot microservices — product, order, payment, and inventory services.",
    github: "https://github.com/arpondark/ecommerce-spring-boot-micro-service",
    link: "",
    tech: ["Spring Boot", "Microservices", "Kafka", "Docker"],
    highlights: ["E-Commerce", "Microservices", "Event-Driven"],
    category: "Spring Boot",
    featured: true
  },
  {
    id: 104,
    title: "E-Commerce Monolith",
    description: "Full-featured e-commerce application built as a monolithic Spring Boot app with product catalog, cart, and checkout.",
    github: "https://github.com/arpondark/EcommerceMono",
    link: "",
    tech: ["Spring Boot", "Thymeleaf", "MySQL", "REST API"],
    highlights: ["E-Commerce", "Monolith", "Full Stack"],
    category: "Spring Boot",
    featured: true
  },
  {
    id: 105,
    title: "Netflix Clone Microservice",
    description: "Netflix-inspired streaming platform backend built with Spring Boot microservices architecture.",
    github: "https://github.com/arpondark/netflix-clone-microservice-spring-boot",
    link: "",
    tech: ["Spring Boot", "Microservices", "Eureka", "API Gateway"],
    highlights: ["Netflix Clone", "Microservices", "Streaming"],
    category: "Spring Boot",
    featured: true
  },
  {
    id: 106,
    title: "Blog App Backend",
    description: "RESTful blog application backend with Spring Boot, featuring CRUD operations, user authentication, and comment system.",
    github: "https://github.com/arpondark/blogapp-spring-boot-backend",
    link: "",
    tech: ["Spring Boot", "JPA", "MySQL", "REST API"],
    highlights: ["Blog", "REST API", "CRUD"],
    category: "Spring Boot",
    featured: false
  },
  {
    id: 107,
    title: "LMS Backend with MinIO",
    description: "Learning Management System backend with Spring Boot and MinIO object storage for file management.",
    github: "https://github.com/arpondark/lmsbackend-springboot-minio",
    link: "",
    tech: ["Spring Boot", "MinIO", "PostgreSQL", "Docker"],
    highlights: ["LMS", "Object Storage", "MinIO"],
    category: "Spring Boot",
    featured: false
  },
  {
    id: 108,
    title: "OAuth2 Demo",
    description: "Spring Boot OAuth2 implementation demonstrating social login with Google, GitHub, and custom OAuth2 provider.",
    github: "https://github.com/arpondark/oauth2-demo",
    link: "",
    tech: ["Spring Boot", "OAuth2", "Spring Security", "JWT"],
    highlights: ["OAuth2", "Social Login", "Security"],
    category: "Spring Boot",
    featured: false
  },
  {
    id: 109,
    title: "Restaurant Review System",
    description: "Restaurant review and rating system built with Spring Boot, enabling users to review and discover restaurants.",
    github: "https://github.com/arpondark/restrudent-review-system-spring-boot",
    link: "",
    tech: ["Spring Boot", "MongoDB", "REST API", "React"],
    highlights: ["Reviews", "Ratings", "REST API"],
    category: "Spring Boot",
    featured: false
  },
  {
    id: 110,
    title: "LMS Spring Boot",
    description: "Learning Management System with course management, student enrollment, and progress tracking features.",
    github: "https://github.com/arpondark/lms-springboot",
    link: "",
    tech: ["Spring Boot", "JPA", "MySQL", "Thymeleaf"],
    highlights: ["LMS", "Education", "Course Management"],
    category: "Spring Boot",
    featured: false
  },
  {
    id: 111,
    title: "Ubar Clone Backend",
    description: "Ride-hailing platform backend (Uber clone) built with Spring Boot — driver/rider management, trip matching, real-time fare calculation, and booking workflows.",
    github: "https://github.com/arpondark/ubar-clone-backend-springboot",
    link: "",
    tech: ["Spring Boot", "REST API", "MySQL", "JPA"],
    highlights: ["Ride-Hailing", "Booking System", "Real-time"],
    category: "Spring Boot",
    featured: true
  },
  {
    id: 1,
    title: "UIU Robotics Lab",
    description: "Official website for United International University Robotics Lab — showcasing research, projects, and achievements.",
    link: "https://robotics.uiu.ac.bd/",
    github: "",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    highlights: ["Institutional", "Research"],
    category: "Web Application",
    featured: true
  },
  {
    id: 2,
    title: "Love Proposal Platform",
    description: "A beautiful platform for creating and sharing marriage proposals with interactive cards and animations.",
    link: "https://www.lovepropose.fun/",
    github: "https://github.com/mdshazanmahmudarpon/love-propose",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    highlights: ["Interactive", "Real-time"],
    category: "Web Application",
    featured: true
  },
  {
    id: 3,
    title: "Pita as a Service",
    description: "A modern food delivery and service platform with seamless ordering experience and real-time tracking.",
    link: "https://pitasaservice.com/",
    github: "",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    highlights: ["Food Ordering", "Tracking"],
    category: "E-Commerce",
    featured: true
  },
  {
    id: 4,
    title: "Barta Test",
    description: "A news portal application with real-time updates and interactive features.",
    link: "https://bartatest.netlify.app/",
    github: "https://github.com/mdshazanmahmudarpon/barta-test",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    highlights: ["Real-time", "Dashboard"],
    category: "News Portal",
    featured: false
  },
  {
    id: 8,
    title: "Todo Application",
    description: "A feature-rich todo application with drag-and-drop functionality and task management.",
    link: "https://sage-tapioca-7c648d.netlify.app/",
    github: "https://github.com/mdshazanmahmudarpon/todo-app",
    tech: ["React", "TypeScript", "Tailwind CSS", "DnD Kit"],
    highlights: ["Drag & Drop", "Categories"],
    category: "Productivity",
    featured: false
  },
  {
    id: 9,
    title: "Blog Platform",
    description: "A modern blog platform with rich text editing and social features.",
    link: "https://blog-arpon007.netlify.app/",
    github: "https://github.com/mdshazanmahmudarpon/blog-platform",
    tech: ["React", "Firebase", "Material UI", "Redux"],
    highlights: ["Rich Text", "Social"],
    category: "Blog Platform",
    featured: false
  },
  {
    id: 10,
    title: "Love Me Fun",
    description: "An interactive dating platform with modern UI and real-time chat features.",
    link: "https://love-mefun.netlify.app/",
    github: "https://github.com/mdshazanmahmudarpon/love-me",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    highlights: ["Real-time Chat", "Matching"],
    category: "Social Platform",
    featured: false
  }
];

type FilterType = 'all' | 'featured' | 'spring-boot' | 'web' | 'backend';

export default function ProjectShowcase3D() {
  const [filter, setFilter] = useState<FilterType>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const projectsWithGraphQL = projects.map((project) => ({
    ...project,
    tech: project.tech.includes('GraphQL') ? project.tech : [...project.tech, 'GraphQL']
  }));

  const filteredProjects = projectsWithGraphQL.filter(project => {
    switch (filter) {
      case 'featured': return project.featured;
      case 'spring-boot': return project.category === 'Spring Boot';
      case 'web': return project.tech.some(t => ['React', 'Next.js', 'Vue'].includes(t));
      case 'backend': return project.tech.some(t => ['Spring Boot', 'Node.js', 'Express', 'Laravel'].includes(t));
      default: return true;
    }
  });

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  return (
    <section
      id="projects"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute top-1/4 -right-48 w-96 h-96 rounded-full opacity-25 animate-drift"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.4), transparent 60%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full opacity-25 animate-drift-2"
        style={{ background: 'radial-gradient(circle, rgba(255,43,214,0.4), transparent 60%)', filter: 'blur(80px)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="hud-label">
              <Layers className="w-3 h-3" />
              03 // PROJECTS
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--text-primary)] mb-6">
            My <span className="gradient-text">Creative Work</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto font-mono">
            <span className="text-[var(--neon-cyan)]">{'> '}</span>
            Deploying solutions that perform at scale
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <div className="flex items-center gap-2 mr-2 font-mono text-[10px] text-[var(--text-muted)] tracking-widest">
            <Filter className="w-3 h-3 text-[var(--neon-cyan)]" />
            <span>FILTER:</span>
          </div>
          {[
            { key: 'all', label: 'ALL' },
            { key: 'spring-boot', label: '🍃 SPRING' },
            { key: 'featured', label: 'FEATURED' },
            { key: 'web', label: 'FRONTEND' },
            { key: 'backend', label: 'BACKEND' }
          ].map(({ key, label }) => {
            const isActive = filter === key;
            return (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(key as FilterType)}
                className={`px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 ${isActive
                  ? 'text-[var(--bg-void)]'
                  : 'border border-[var(--glass-border)] bg-[var(--bg-panel)] text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]'
                  }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                  background: isActive ? 'var(--neon-cyan)' : undefined,
                  boxShadow: isActive ? '0 0 16px var(--neon-cyan)' : undefined,
                }}
              >
                {label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Mobile: Scroll */}
        <div className="md:hidden relative">
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-[var(--neon-cyan)]/40 bg-[var(--bg-panel)] flex items-center justify-center text-[var(--neon-cyan)]">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-[var(--neon-cyan)]/40 bg-[var(--bg-panel)] flex items-center justify-center text-[var(--neon-cyan)]">
            <ChevronRight className="w-5 h-5" />
          </button>
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 px-8 mobile-scroll">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.03 }}
                  className="w-[300px] flex-shrink-0"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:block">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block mb-4">
            <span className="font-mono text-xs text-[var(--text-muted)] tracking-widest">
              <span className="text-[var(--neon-cyan)]">{'> '}</span>END_OF_LIST.exe
            </span>
          </div>
          <p className="text-[var(--text-secondary)] mb-6 font-mono text-sm">
            // Want to see more or discuss a project?
          </p>
          <motion.a
            href="https://github.com/arpondark"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-3"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const isSpringBoot = project.category === 'Spring Boot';
  const accent = isSpringBoot ? 'var(--neon-lime)' : 'var(--neon-cyan)';

  return (
    <div className="group relative h-full">
      <div
        className="relative overflow-hidden bg-[var(--bg-panel)] h-full transition-all duration-300 hover:-translate-y-1 p-6 border border-[var(--glass-border)] hover:border-[var(--neon-cyan)]"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(180deg, ${accent}10, transparent 60%)`,
          }}
        />

        {/* Top corner indicator */}
        <div
          className="absolute top-0 right-0 w-3 h-3"
          style={{
            background: accent,
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }}
        />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4 relative z-10">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div
              className="w-10 h-10 flex items-center justify-center flex-shrink-0 border"
              style={{
                borderColor: accent,
                color: accent,
                background: `${accent}10`,
                boxShadow: `0 0 12px ${accent}40`,
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
              }}
            >
              {isSpringBoot ? <Server className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-display font-bold text-[var(--text-primary)] truncate group-hover:text-[var(--neon-cyan)] transition-colors tracking-wider">
                {project.title}
              </h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Code2 className="w-3 h-3" style={{ color: accent }} />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: accent }}>
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          {project.featured && (
            <span
              className="font-mono text-[9px] font-semibold px-2 py-1 tracking-widest flex-shrink-0 text-[var(--bg-void)]"
              style={{
                background: 'var(--neon-magenta)',
                boxShadow: '0 0 12px var(--neon-magenta)',
                clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
              }}
            >
              ★ FEATURED
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm mb-5 leading-relaxed relative z-10 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-3 relative z-10">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border"
              style={{
                borderColor: 'var(--glass-border)',
                color: 'var(--text-secondary)',
                background: 'var(--bg-elevated)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
          {project.highlights.map((h) => (
            <span
              key={h}
              className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5"
              style={{
                color: accent,
                background: `${accent}10`,
                border: `1px solid ${accent}30`,
              }}
            >
              #{h}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto relative z-10">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 font-mono text-[11px] uppercase tracking-widest text-[var(--bg-void)] transition-all hover:shadow-[0_0_16px_var(--neon-cyan)]"
              style={{
                background: 'var(--neon-cyan)',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
              }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-2.5 border border-[var(--glass-border)] bg-[var(--bg-elevated)] hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)] font-mono text-[11px] uppercase tracking-widest transition-all ${project.link ? 'flex-1' : 'flex-1'}`}
              style={{
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
              }}
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
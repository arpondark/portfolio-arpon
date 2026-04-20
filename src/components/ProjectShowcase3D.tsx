"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, Zap, ChevronLeft, ChevronRight, Filter, Server, Globe } from "lucide-react";

const projects = [
  // === Spring Boot Projects (from GitHub, at top) ===
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
  // === Other Projects ===
  {
    id: 1,
    title: "UIU Robotics Lab",
    description: "Official website for United International University Robotics Lab — showcasing research, projects, and achievements.",
    link: "https://robotics.uiu.ac.bd/",
    github: "",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    highlights: ["Institutional Website", "Research Showcase"],
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
    highlights: ["Interactive Cards", "Real-time Updates"],
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
    highlights: ["Food Ordering", "Real-time Tracking"],
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
    highlights: ["Real-time News", "Admin Dashboard"],
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
    highlights: ["Drag & Drop", "Task Categories"],
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
    highlights: ["Rich Text Editor", "Social Sharing"],
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
    highlights: ["Real-time Chat", "User Matching"],
    category: "Social Platform",
    featured: false
  }
];

type FilterType = 'all' | 'featured' | 'spring-boot' | 'web' | 'backend';

export default function ProjectShowcase3D() {
  const [filter, setFilter] = useState<FilterType>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(project => {
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
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-tertiary)]/50 to-[var(--bg-primary)]" />
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15" />

      <div
        className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent blur-3xl"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 mb-6"
          >
            <Zap className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-sm text-[var(--accent-primary)]">Featured Projects</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4">
            My <span className="gradient-text">Creative Work</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Explore my portfolio of innovative projects built with modern technologies
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2 mr-2">
            <Filter className="w-4 h-4 text-[var(--text-muted)]" />
            <span className="text-sm text-[var(--text-muted)]">Filter:</span>
          </div>
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'spring-boot', label: '🍃 Spring Boot' },
            { key: 'featured', label: 'Featured' },
            { key: 'web', label: 'Frontend' },
            { key: 'backend', label: 'Backend' }
          ].map(({ key, label }) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(key as FilterType)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === key
                ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-lg'
                : 'glass-card text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile: Scroll */}
        <div className="md:hidden relative">
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 glass-card !rounded-full flex items-center justify-center text-[var(--text-primary)]">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 glass-card !rounded-full flex items-center justify-center text-[var(--text-primary)]">
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
                  transition={{ delay: index * 0.02 }}
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
          <p className="text-[var(--text-secondary)] mb-6">
            Want to see more or discuss a project?
          </p>
          <motion.a
            href="https://github.com/arpondark"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-[var(--glow-green)] transition-shadow"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================
   Project Card — No Image
   ============================ */
function ProjectCard({ project }: { project: typeof projects[0] }) {
  const isSpringBoot = project.category === 'Spring Boot';

  return (
    <div className="group relative h-full">
      <div className="relative overflow-hidden glass-card h-full transition-all duration-300 hover:!border-[var(--accent-primary)]/30 hover:shadow-lg p-5 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {/* Icon */}
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${isSpringBoot
              ? 'bg-green-500/15 text-green-600 dark:text-green-400'
              : 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
              }`}>
              {isSpringBoot ? <Server className="w-4.5 h-4.5" /> : <Globe className="w-4.5 h-4.5" />}
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-[var(--text-primary)] truncate group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3 h-3 text-[var(--accent-primary)]" />
                <span className="text-xs text-[var(--accent-primary)] font-medium">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <span className="px-2 py-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white text-[10px] font-semibold rounded-full flex-shrink-0">
              Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-xs bg-[var(--glass-bg)] text-[var(--text-muted)] rounded-full border border-[var(--glass-border)]">
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.highlights.map((h) => (
            <span key={h} className="px-2 py-0.5 text-xs bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] rounded-full border border-[var(--accent-primary)]/20">
              {h}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white rounded-xl text-sm font-medium hover:shadow-lg transition-shadow"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-2.5 glass-card !rounded-xl text-[var(--text-primary)] text-sm font-medium transition-colors ${project.link ? 'flex-1' : 'flex-1'}`}
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

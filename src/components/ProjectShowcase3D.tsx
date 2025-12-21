"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Eye, Code2, Zap, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import Image from "next/image";

// Project data
const projects = [
  {
    id: 1,
    title: "UIU Robotics Lab",
    description: "Official website for United International University Robotics Lab - showcasing research, projects, and achievements in robotics and automation.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    link: "https://robotics.uiu.ac.bd/",
    github: "#",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    highlights: ["Institutional Website", "Research Showcase", "Modern Design"],
    category: "Institutional",
    featured: true
  },
  {
    id: 2,
    title: "Love Proposal Platform",
    description: "A beautiful platform for creating and sharing marriage proposals with interactive cards and animations.",
    image: "/love-propose.png",
    link: "https://www.lovepropose.fun/",
    github: "https://github.com/mdshazanmahmudarpon/love-propose",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    highlights: ["Interactive Cards", "Real-time Updates", "Custom Animations"],
    category: "Web Application",
    featured: true
  },
  {
    id: 3,
    title: "Pita as a Service",
    description: "A modern food delivery and service platform with seamless ordering experience and real-time tracking.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    link: "https://pitasaservice.com/",
    github: "#",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    highlights: ["Food Ordering", "Real-time Tracking", "Payment Integration"],
    category: "E-Commerce",
    featured: true
  },
  {
    id: 4,
    title: "Barta Test",
    description: "A news portal application with real-time updates and interactive features.",
    image: "/barta-test.png",
    link: "https://bartatest.netlify.app/",
    github: "https://github.com/mdshazanmahmudarpon/barta-test",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    highlights: ["Real-time News", "User Authentication", "Admin Dashboard"],
    category: "News Portal",
    featured: true
  },
  {
    id: 5,
    title: "Fitness Tracker Platform",
    description: "A comprehensive fitness tracking platform built with microservices architecture for scalability.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    link: "#",
    github: "https://github.com/arpondark/Microservice-spring-boot-fitness",
    tech: ["Spring Boot", "React", "Docker", "MongoDB"],
    highlights: ["Microservices", "Real-time Analytics", "Scalable Backend"],
    category: "Microservices",
    featured: true
  },
  {
    id: 6,
    title: "URL Shortener",
    description: "A high-performance URL shortening service with analytics and custom short URLs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
    github: "https://github.com/arpondark/shortner-spring-boot",
    tech: ["Spring Boot", "React", "Redis", "MySQL"],
    highlights: ["Click Analytics", "QR Code", "API Integration"],
    category: "Web Service",
    featured: true
  },
  {
    id: 7,
    title: "Real-Time Chat App",
    description: "A modern real-time chat application with WebSocket support and rich messaging features.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
    link: "#",
    github: "https://github.com/arpondark/chat-app-spring-boot",
    tech: ["Spring Boot", "React", "WebSocket", "MongoDB"],
    highlights: ["Real-time Messaging", "Group Chats", "File Sharing"],
    category: "Chat Application",
    featured: false
  },
  {
    id: 8,
    title: "Todo Application",
    description: "A feature-rich todo application with drag-and-drop functionality and task management.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    link: "https://sage-tapioca-7c648d.netlify.app/",
    github: "https://github.com/mdshazanmahmudarpon/todo-app",
    tech: ["React", "TypeScript", "Tailwind CSS", "DnD Kit"],
    highlights: ["Drag & Drop", "Task Categories", "Dark Mode"],
    category: "Productivity",
    featured: false
  },
  {
    id: 9,
    title: "Blog Platform",
    description: "A modern blog platform with rich text editing and social features.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    link: "https://blog-arpon007.netlify.app/",
    github: "https://github.com/mdshazanmahmudarpon/blog-platform",
    tech: ["React", "Firebase", "Material UI", "Redux"],
    highlights: ["Rich Text Editor", "Social Sharing", "Comments"],
    category: "Blog Platform",
    featured: false
  },
  {
    id: 10,
    title: "Love Me Fun",
    description: "An interactive dating platform with modern UI and real-time chat features.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    link: "https://love-mefun.netlify.app/",
    github: "https://github.com/mdshazanmahmudarpon/love-me",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    highlights: ["Real-time Chat", "User Matching", "Location Search"],
    category: "Social Platform",
    featured: false
  }
];

type FilterType = 'all' | 'featured' | 'web' | 'backend';

export default function ProjectShowcase3D() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const filteredProjects = projects.filter(project => {
    switch (filter) {
      case 'featured':
        return project.featured;
      case 'web':
        return project.tech.some(t => ['React', 'Next.js', 'Vue'].includes(t));
      case 'backend':
        return project.tech.some(t => ['Spring Boot', 'Node.js', 'Express', 'Laravel'].includes(t));
      default:
        return true;
    }
  });

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Floating orbs */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-pink-500/15 to-transparent blur-3xl"
      />

      {/* Mouse follow effect */}
      <DynamicBackground />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Featured Projects</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="gradient-text">Creative Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
          <div className="flex items-center gap-2 mr-4">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">Filter:</span>
          </div>
          {[
            { key: 'all', label: 'All Projects' },
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
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                : 'glass-card text-gray-300 hover:text-white hover:!bg-white/10'
                }`}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile: Horizontal scroll with arrows */}
        <div className="md:hidden relative">
          {/* Scroll buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 glass-card !rounded-full flex items-center justify-center text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 glass-card !rounded-full flex items-center justify-center text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 px-8 mobile-scroll"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-[300px] flex-shrink-0"
                >
                  <ProjectCard
                    project={project}
                    isHovered={hoveredId === project.id}
                    onHover={() => setHoveredId(project.id)}
                    onLeave={() => setHoveredId(null)}
                    isMobile
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  layout
                >
                  <ProjectCard
                    project={project}
                    isHovered={hoveredId === project.id}
                    onHover={() => setHoveredId(project.id)}
                    onLeave={() => setHoveredId(null)}
                  />
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
          <p className="text-gray-400 mb-6">
            Want to see more or discuss a project?
          </p>
          <motion.a
            href="https://github.com/arpondark"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Dynamic background component
function DynamicBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const backgroundGradient = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.08), transparent 60%)`;

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{ background: backgroundGradient }}
    />
  );
}

// Project card component
function ProjectCard({
  project,
  isHovered,
  onHover,
  onLeave,
  isMobile = false
}: {
  project: typeof projects[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  isMobile?: boolean;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative h-full"
    >
      <div className={`relative overflow-hidden rounded-2xl glass-card h-full transition-all duration-500 ${isHovered ? '!border-purple-500/30 shadow-xl shadow-purple-500/10' : ''
        }`}>
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageError ? 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop' : project.image}
            alt={project.title}
            fill
            sizes={isMobile ? "300px" : "(max-width: 768px) 50vw, 33vw"}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImageError(true)}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Featured badge */}
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-3 left-3"
            >
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-lg">
                Featured
              </span>
            </motion.div>
          )}

          {/* Hover action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute top-3 right-3 flex gap-2"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass-card !rounded-xl hover:!bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass-card !rounded-xl hover:!bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-white" />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs text-purple-400 font-medium">{project.category}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all line-clamp-1">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-2 py-0.5 text-xs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-white/5 text-gray-400 rounded-full border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-shadow"
            >
              <Eye className="w-4 h-4" />
              Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 glass-card !rounded-xl text-white text-sm font-medium hover:!bg-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

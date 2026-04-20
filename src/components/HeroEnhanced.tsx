'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, Code2, Sparkles, Download } from 'lucide-react'

const roles = [
  'Spring Boot Developer',
  'Java Developer',
  'Full Stack Developer',
  'MERN Stack Developer',
  'IoT & Embedded Developer',
  'Game Developer'
]

function TypeWriter({ words }: { words: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      {words[currentIndex]}
    </motion.span>
  )
}

export default function HeroEnhanced() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />

      {/* Decorative gradient blobs - CSS-only for performance */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30 dark:opacity-20 animate-blob-drift-1"
        style={{
          background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-30 dark:opacity-20 animate-blob-drift-2"
        style={{
          background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        style={{ opacity }}
      >
        {/* Desktop Layout: Two columns */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-[var(--accent-primary)]">Available for new opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--text-primary)] mb-4 leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text-glow block sm:inline">
                ARPON
              </span>
            </motion.h1>

            {/* Role Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-[var(--accent-primary)] mb-6 min-h-[40px]"
            >
              <TypeWriter words={roles} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-[var(--text-secondary)] max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Passionate about building robust backend systems and exceptional digital experiences.
              Specializing in <span className="text-[var(--accent-primary)] font-medium">Spring Boot & Java</span>,
              <span className="text-[var(--accent-secondary)] font-medium"> Full Stack Development</span>, and
              <span className="text-[var(--accent-tertiary)] font-medium"> IoT & AI Solutions</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <Link
                href="#projects"
                className="group px-7 py-3.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-[var(--glow-green)] flex items-center gap-3"
              >
                <span>Explore My Work</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>

              <Link
                href="#contact"
                className="px-7 py-3.5 glass-card !rounded-full font-semibold text-base text-[var(--text-primary)] hover:!bg-[var(--glass-bg-hover)] transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              <SocialLink href="https://github.com/arpondark" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/md-shazan-mahmud-arpon" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="mailto:shazanarpon@shazan.site" icon={<Mail className="w-5 h-5" />} label="Email" />
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)] opacity-30 blur-3xl scale-110" />

              {/* Profile ring */}
              <div className="relative profile-ring w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="profile-ring-inner w-full h-full">
                  <Image
                    src="/profile.jpg"
                    alt="MD SHAZAN MAHMUD ARPON"
                    fill
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card !rounded-xl px-3 py-2 flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-[var(--accent-primary)]" />
                <span className="text-xs font-medium text-[var(--text-primary)]">2+ Years</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card !rounded-xl px-3 py-2 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[var(--accent-secondary)]" />
                <span className="text-xs font-medium text-[var(--text-primary)]">Full Stack</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[var(--text-muted)]"
        >
          <span className="text-sm hidden md:block">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-[var(--text-muted)]/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label?: string }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="group relative p-3 glass-card !rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300"
    >
      {icon}
      {label && (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {label}
        </span>
      )}
    </motion.a>
  )
}

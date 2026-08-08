'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, Code2, Sparkles, ArrowDown } from 'lucide-react'

const roles = [
  'Spring Boot Engineer',
  'Backend Architect',
  'Java Developer',
  'Full-Stack Builder',
  'Microservices Designer',
  'IoT Systems Engineer',
  'API Craftsman',
]

function TypeWriter({ words }: { words: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentIndex]
    const speed = deleting ? 40 : 90

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, displayed.length + 1)
        setDisplayed(next)
        if (next === word) {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        const next = word.slice(0, displayed.length - 1)
        setDisplayed(next)
        if (next.length === 0) {
          setDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayed, deleting, currentIndex, words])

  return (
    <span className="font-mono">
      <span className="gradient-text-static">{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
        className="inline-block w-[10px] h-[1.1em] bg-[var(--neon-cyan)] ml-1 align-middle shadow-[0_0_12px_var(--neon-cyan)]"
      />
    </span>
  )
}

export default function HeroEnhanced() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -60])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,240,255,0.03)_2px,rgba(0,240,255,0.03)_4px)]" />
      </div>

      {/* Decorative HUD frame */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-8 font-mono text-[10px] text-[var(--neon-cyan)] opacity-50 tracking-widest">
          <div>SYS://PORTFOLIO.INIT</div>
          <div className="mt-1">LAT 23.81° N</div>
          <div>LON 90.41° E</div>
        </div>
        <div className="absolute top-32 right-8 font-mono text-[10px] text-[var(--neon-magenta)] opacity-50 tracking-widest text-right">
          <div>STATUS: ONLINE</div>
          <div className="mt-1">SIGNAL: 100%</div>
          <div>VOLTAGE: ⚡⚡⚡</div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20"
        style={{ opacity, y }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* HUD Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="hud-label">
                <span className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full animate-pulse-cyan" />
                Available for work
              </span>
              <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest hidden sm:inline">
                //2026
              </span>
            </motion.div>

            {/* Pre-title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-mono text-sm text-[var(--neon-cyan)] mb-3 tracking-widest"
            >
              <span className="opacity-60">{'> '}</span>HELLO_WORLD.exe
            </motion.div>

            {/* Name - massive */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-bold text-[var(--text-primary)] mb-6 tracking-tight"
            >
              <span className="block">I&apos;m</span>
              <span className="block gradient-text" data-text="ARPON">
                ARPON
              </span>
            </motion.h1>

            {/* Role Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-xl sm:text-2xl lg:text-3xl mb-8 min-h-[44px] flex items-center justify-center lg:justify-start"
            >
              <TypeWriter words={roles} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Architecting <span className="text-[var(--neon-cyan)] font-medium">scalable APIs</span>, engineering
              <span className="text-[var(--neon-magenta)] font-medium"> microservice ecosystems</span>, and building
              <span className="text-[var(--neon-lime)] font-medium"> AI-integrated IoT systems</span> that perform at scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10"
            >
              <a
                href="#projects"
                className="btn-primary group flex items-center gap-3"
              >
                <span>View Projects</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>

              <a
                href="#contact"
                className="btn-primary btn-primary-magenta flex items-center gap-3"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="flex gap-3 justify-center lg:justify-start items-center"
            >
              <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest hidden sm:inline">
                // CONNECT
              </span>
              <SocialLink href="https://github.com/arpondark" icon={<Github className="w-4 h-4" />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/md-shazan-mahmud-arpon" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <SocialLink href="mailto:shazanarpon@shazan.site" icon={<Mail className="w-4 h-4" />} label="Email" />
            </motion.div>
          </div>

          {/* Right: Profile Image - HUD frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className="flex-shrink-0 relative"
          >
            <div className="relative">
              {/* Profile image — clean rectangle, no ring */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem]">
                <Image
                  src="/profile.jpg"
                  alt="MD SHAZAN MAHMUD ARPON"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 352px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* HUD Corners */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[var(--neon-cyan)] shadow-[0_0_12px_var(--neon-cyan)]" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-[var(--neon-magenta)] shadow-[0_0_12px_var(--neon-magenta)]" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-[var(--neon-magenta)] shadow-[0_0_12px_var(--neon-magenta)]" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[var(--neon-cyan)] shadow-[0_0_12px_var(--neon-cyan)]" />
              </div>

              {/* Floating badges - HUD style */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-2 sm:-right-6 hud-corners bg-[var(--bg-panel)] border border-[var(--neon-cyan)]/30 px-3 py-2 backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[var(--neon-cyan)]" />
                  <span className="font-mono text-xs text-[var(--text-primary)]">2+ YRS</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-2 sm:-left-6 hud-corners bg-[var(--bg-panel)] border border-[var(--neon-magenta)]/30 px-3 py-2 backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--neon-magenta)]" />
                  <span className="font-mono text-xs text-[var(--text-primary)]">FULL_STACK</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/3 -right-8 hidden lg:block"
              >
                <div className="font-mono text-[10px] text-[var(--neon-lime)] tracking-widest animate-pulse-cyan">
                  ◢ SPRING.BOOT
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-1/3 -left-12 hidden lg:block"
              >
                <div className="font-mono text-[10px] text-[var(--neon-magenta)] tracking-widest">
                  ◣ JAVA.JVM
                </div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors"
        >
          <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
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
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="group relative p-3 border border-[var(--glass-border)] bg-[var(--bg-panel)] text-[var(--text-muted)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)] hover:shadow-[0_0_16px_rgba(0,240,255,0.4)] transition-all duration-300 clip-path-corner"
      aria-label={label}
    >
      {icon}
    </motion.a>
  )
}
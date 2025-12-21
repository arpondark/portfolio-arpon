'use client'

import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react'

const roles = [
  'Full Stack Developer',
  'Java & Spring Boot Developer',
  'Laravel & PHP Developer',
  'MERN Stack Developer',
  'IoT & Embedded Developer',
  'Game Developer'
]

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: (i * 7) % 100,
    y: (i * 11) % 100,
    size: 2 + (i % 4),
    duration: 15 + (i % 20),
    delay: (i * 0.5) % 10
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(236, 72, 153, 0.3) 100%)`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Animated orbs background
function AnimatedOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large purple orb */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Pink orb */}
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Cyan accent */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

// Typing animation component
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
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const backgroundGradient = useMotionTemplate`radial-gradient(800px at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.12), transparent 60%)`

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Animated orbs */}
      <AnimatedOrbs />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Mouse follow gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: backgroundGradient }}
      />

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: parallaxY, opacity }}
      >
        {/* Mobile Layout */}
        <div className="md:hidden text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-card-neon p-8 mx-4"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Available for hire</span>
            </motion.div>

            <h1 className="text-4xl font-bold text-white mb-4">
              Hi, I&apos;m{' '}
              <span className="gradient-text block mt-2">ARPON</span>
            </h1>

            <div className="text-xl text-gray-300 mb-6 min-h-[32px]">
              <TypeWriter words={roles} />
            </div>

            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              Crafting exceptional digital experiences with cutting-edge technologies
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="#projects"
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-semibold text-white shadow-lg shadow-purple-500/25"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="w-full py-4 glass-card !rounded-2xl font-medium text-white"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-8">
              <SocialLink href="https://github.com/arpondark" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="https://linkedin.com/in/md-shazan-mahmud-arpon" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="mailto:arponarpon007@gmail.com" icon={<Mail className="w-5 h-5" />} />
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300">Available for new opportunities</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl lg:text-8xl font-bold text-white mb-6"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text-glow">
              MD SHAZAN MAHMUD ARPON
            </span>
          </motion.h1>

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {roles.map((role, index) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 glass-card !rounded-full text-sm md:text-base font-medium text-gray-300 hover:text-white hover:!border-purple-500/30 transition-all cursor-default"
              >
                <Code2 className="w-4 h-4 inline mr-2 text-purple-400" />
                {role}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about crafting exceptional digital experiences with cutting-edge technologies.
            Specializing in <span className="text-purple-400">Full Stack Development</span>,
            <span className="text-pink-400"> IoT</span>, and
            <span className="text-cyan-400"> AI Solutions</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3"
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
              className="px-8 py-4 glass-card !rounded-full font-semibold text-lg text-white hover:!bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4 justify-center"
          >
            <SocialLink
              href="https://github.com/arpondark"
              icon={<Github className="w-6 h-6" />}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/md-shazan-mahmud-arpon"
              icon={<Linkedin className="w-6 h-6" />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:arponarpon007@gmail.com"
              icon={<Mail className="w-6 h-6" />}
              label="Email"
            />
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
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm hidden md:block">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-gradient-to-b from-purple-400 to-pink-500"
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
      className="group relative p-3 glass-card !rounded-full text-gray-400 hover:text-white hover:!border-purple-500/30 transition-all duration-300"
    >
      {icon}
      {label && (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {label}
        </span>
      )}
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-purple-500/0 group-hover:bg-purple-500/20 blur-xl transition-all duration-300" />
    </motion.a>
  )
}

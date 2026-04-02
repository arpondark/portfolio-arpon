"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { User, MapPin, Briefcase, GraduationCap, Heart, Code2 } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const infoItems = [
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Bangladesh" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Experience", value: "3+ Years" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Education", value: "BSc in CSE" },
    { icon: <Code2 className="w-5 h-5" />, label: "Focus", value: "Full Stack & IoT" },
  ];

  const interests = [
    "Web Development",
    "Mobile Apps",
    "IoT Systems",
    "AI/ML",
    "Game Dev",
    "Open Source"
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-tertiary)]/50 to-[var(--bg-primary)]" />
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15" />

      {/* Decorative orb */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 -right-32 w-80 h-80 rounded-full opacity-20"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] blur-3xl" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
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
              <User className="w-4 h-4 text-[var(--accent-primary)]" />
              <span className="text-sm text-[var(--accent-primary)]">About Me</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4">
              Passionate{' '}
              <span className="gradient-text">Developer</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Turning ideas into reality through code and creativity
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card-neon p-8 md:p-10 h-full">
                <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-6">
                  I&apos;m a passionate <span className="text-[var(--accent-primary)] font-medium">Full Stack Developer</span> with a keen interest in building innovative solutions.
                  My journey in tech has led me to master various domains including
                  <span className="text-[var(--accent-secondary)] font-medium"> Web Development</span>,
                  <span className="text-[var(--accent-tertiary)] font-medium"> IoT Systems</span>, and
                  <span className="text-green-600 dark:text-green-400 font-medium"> AI Applications</span>.
                </p>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  I specialize in crafting exceptional digital experiences using cutting-edge technologies.
                  For backend, I work with <span className="text-green-600 dark:text-green-400">Spring Boot</span>, <span className="text-yellow-600 dark:text-yellow-400">Express.js</span>, <span className="text-red-600 dark:text-red-400">NestJS</span>, and <span className="text-orange-600 dark:text-orange-400">Laravel</span>.
                  For frontend, I create beautiful interfaces with <span className="text-blue-600 dark:text-blue-400">React</span> and <span className="text-[var(--text-primary)] font-medium">Next.js</span>.
                </p>

                <p className="text-[var(--text-secondary)] leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with the developer community.
                </p>

                {/* Info grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[var(--glass-border)]">
                  {infoItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] mb-2">
                        {item.icon}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">{item.label}</div>
                      <div className="text-sm font-medium text-[var(--text-primary)]">{item.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Interests card */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-[var(--accent-secondary)]" />
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-full text-sm bg-[var(--glass-bg)] text-[var(--text-secondary)] border border-[var(--glass-border)] hover:border-[var(--accent-primary)]/30 hover:text-[var(--text-primary)] transition-all cursor-default"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Stats card */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <StatBar label="Problem Solving" value={95} color="from-[var(--accent-primary)] to-[var(--accent-secondary)]" />
                  <StatBar label="Team Collaboration" value={90} color="from-blue-500 to-cyan-500" />
                  <StatBar label="Fast Learning" value={92} color="from-green-500 to-emerald-500" />
                  <StatBar label="Code Quality" value={88} color="from-orange-500 to-yellow-500" />
                </div>
              </div>

              {/* CTA card */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block glass-card p-6 group hover:!border-[var(--accent-primary)]/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Let&apos;s Connect!</h3>
                    <p className="text-sm text-[var(--text-muted)]">Interested in working together?</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white">→</span>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-[var(--text-secondary)]">{label}</span>
        <span className="text-[var(--text-primary)] font-medium">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--glass-bg)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

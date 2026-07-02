"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { User, MapPin, Briefcase, GraduationCap, Code2, Heart, Terminal } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const infoItems = [
    { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Bangladesh", code: "GEO" },
    { icon: <Briefcase className="w-4 h-4" />, label: "Experience", value: "2+ Years", code: "EXP" },
    { icon: <GraduationCap className="w-4 h-4" />, label: "Education", value: "BSc in CSE", code: "EDU" },
    { icon: <Code2 className="w-4 h-4" />, label: "Focus", value: "Spring + GraphQL", code: "STACK" },
  ];

  const interests = [
    "Web Development",
    "Microservices",
    "IoT Systems",
    "AI / ML",
    "Game Dev",
    "Open Source",
    "Cloud Native",
    "System Design",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative section-padding overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="absolute top-1/3 -right-48 w-96 h-96 rounded-full opacity-30 animate-drift"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.4), transparent 60%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full opacity-30 animate-drift-2"
        style={{ background: 'radial-gradient(circle, rgba(255,43,214,0.4), transparent 60%)', filter: 'blur(80px)' }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="hud-label">
                <User className="w-3 h-3" />
                01 // ABOUT_ME
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--text-primary)] mb-6">
              <span className="block">Passionate</span>
              <span className="gradient-text">Developer</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto font-mono">
              <span className="text-[var(--neon-cyan)]">{'> '}</span>
              Turning ideas into reality through code and creativity
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Left column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="neon-panel p-8 md:p-10 h-full bg-[var(--bg-panel)]">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[var(--glass-border)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--neon-magenta)] shadow-[0_0_8px_var(--neon-magenta)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--neon-amber)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--neon-lime)] shadow-[0_0_8px_var(--neon-lime)]" />
                  <span className="ml-3 font-mono text-xs text-[var(--text-muted)] tracking-wider">
                    ~/about/bio.md
                  </span>
                  <Terminal className="w-3.5 h-3.5 text-[var(--neon-cyan)] ml-auto" />
                </div>

                <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                  I&apos;m a passionate <span className="text-[var(--neon-cyan)] font-medium">Spring Boot & Java Developer</span> with deep expertise in building scalable, enterprise-grade applications.
                </p>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  My main focus is <span className="text-[var(--neon-cyan)] font-medium">Spring Boot Backend Development</span>, while also working across
                  <span className="text-[var(--neon-lime)] font-medium"> IoT Systems</span> and
                  <span className="text-[var(--neon-magenta)] font-medium"> AI Applications</span>.
                  I specialize in robust backend systems with <span className="text-[var(--neon-cyan)] font-medium">Spring Boot</span> and <span className="text-[var(--neon-amber)] font-medium">Java</span>,
                  designing microservices architectures, and implementing RESTful +
                  <span className="text-[var(--neon-magenta)] font-medium"> GraphQL</span> APIs.
                </p>

                <p className="text-[var(--text-secondary)] leading-relaxed">
                  When I&apos;m not coding, I&apos;m exploring new technologies,
                  contributing to open-source, or sharing knowledge with the dev community.
                </p>

                {/* Info grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-8 border-t border-[var(--glass-border)]">
                  {infoItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="group relative border border-[var(--glass-border)] bg-[var(--bg-elevated)] p-3 hover:border-[var(--neon-cyan)] transition-all duration-300"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-[var(--neon-cyan)] group-hover:scale-110 transition-transform">{item.icon}</div>
                        <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-widest">{item.code}</span>
                      </div>
                      <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-xs font-display font-bold text-[var(--text-primary)]">{item.value}</div>
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
              className="lg:col-span-2 space-y-4"
            >
              {/* Interests card */}
              <div className="neon-panel p-6 bg-[var(--bg-panel)]">
                <div className="flex items-center gap-2 mb-5">
                  <Heart className="w-4 h-4 text-[var(--neon-magenta)]" />
                  <h3 className="text-sm font-display font-bold text-[var(--text-primary)] tracking-wider">INTERESTS</h3>
                  <span className="ml-auto font-mono text-[10px] text-[var(--text-muted)]">[08]</span>
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
                      className="neon-chip cursor-default"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Stats card */}
              <div className="neon-panel p-6 bg-[var(--bg-panel)]">
                <h3 className="text-sm font-display font-bold text-[var(--text-primary)] tracking-wider mb-5">PERFORMANCE_METRICS</h3>
                <div className="space-y-4">
                  <StatBar label="Problem Solving" value={95} />
                  <StatBar label="Team Collaboration" value={90} />
                  <StatBar label="Fast Learning" value={92} />
                  <StatBar label="Code Quality" value={88} />
                </div>
              </div>

              {/* CTA card */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block neon-panel p-6 bg-[var(--bg-panel)] group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-display font-bold text-[var(--text-primary)] tracking-wider mb-1">LET'S CONNECT</h3>
                    <p className="font-mono text-xs text-[var(--text-muted)]">Open to opportunities →</p>
                  </div>
                  <div className="w-10 h-10 border border-[var(--neon-cyan)] flex items-center justify-center text-[var(--neon-cyan)] group-hover:bg-[var(--neon-cyan)] group-hover:text-[var(--bg-void)] transition-all">
                    →
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

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5 font-mono">
        <span className="text-[var(--text-secondary)] uppercase tracking-wider">{label}</span>
        <span className="text-[var(--neon-cyan)] font-bold">{value}%</span>
      </div>
      <div className="h-1 bg-[var(--bg-elevated)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-magenta)] to-[var(--neon-lime)]"
          style={{ boxShadow: '0 0 8px var(--neon-cyan)' }}
        />
      </div>
    </div>
  );
}
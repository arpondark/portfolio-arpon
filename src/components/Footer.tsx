"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Send, MapPin, Terminal, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: "About", code: "01" },
    { href: "#skills", label: "Skills", code: "02" },
    { href: "#projects", label: "Projects", code: "03" },
    { href: "#contact", label: "Contact", code: "04" },
  ];

  const socialLinks = [
    { href: "https://github.com/arpondark", icon: <FaGithub />, label: "GitHub", accent: "var(--neon-cyan)" },
    { href: "https://www.linkedin.com/in/md-shazan-mahmud-arpon", icon: <FaLinkedin />, label: "LinkedIn", accent: "var(--neon-magenta)" },
    { href: "https://www.facebook.com/shazan.arpon007", icon: <FaFacebook />, label: "Facebook", accent: "var(--neon-lime)" },
    { href: "mailto:shazanarpon@shazan.site", icon: <FaEnvelope />, label: "Email", accent: "var(--neon-cyan)" },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-void)] via-[var(--bg-deep)] to-[var(--bg-void)]" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-30 animate-pulse-cyan"
        style={{ background: 'radial-gradient(ellipse, rgba(0,240,255,0.4), transparent 60%)', filter: 'blur(80px)' }}
      />

      <div className="container-custom relative z-10">
        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="py-20 md:py-28 text-center relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="hud-label">
              <Terminal className="w-3 h-3" />
              04 // CONTACT
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-[var(--text-primary)] mb-8 leading-[0.95]">
            <span className="block">Let&apos;s Work</span>
            <span className="gradient-text">Together</span>
          </h2>

          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 font-mono">
            <span className="text-[var(--neon-cyan)]">{'> '}</span>
            Have a project in mind or want to discuss opportunities?
            <br />
            <span className="text-[var(--neon-lime)]">{'> '}</span>
            I&apos;d love to hear from you.
          </p>

          <motion.a
            href="mailto:shazanarpon@shazan.site"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-3"
          >
            <FaEnvelope className="w-4 h-4" />
            <span>INITIATE_CONTACT</span>
            <Send className="w-3.5 h-3.5" />
          </motion.a>

          <div className="mt-6 font-mono text-xs text-[var(--text-muted)]">
            <span className="text-[var(--neon-cyan)]">$</span> reply-time: {'< 24h'}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="neon-divider mb-12" />

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <motion.div className="relative w-12 h-12" whileHover={{ scale: 1.1, rotate: -8 }}>
                <Image src="/logo.png" alt="AR Portfolio" fill sizes="48px" className="object-contain" />
              </motion.div>
              <div>
                <span className="block text-base font-display font-bold text-[var(--text-primary)] tracking-wider">
                  ARPON<span className="text-[var(--neon-cyan)]">.</span>
                </span>
                <span className="block text-[10px] text-[var(--text-muted)] font-mono tracking-widest">
                  FULL_STACK.exe
                </span>
              </div>
            </Link>

            <p className="text-[var(--text-secondary)] leading-relaxed max-w-md text-sm">
              <span className="text-[var(--neon-cyan)] font-mono">{'> '}</span>
              Building innovative solutions with modern technologies.
              Passionate about web development, IoT systems, and AI applications.
              <span className="text-[var(--neon-lime)] font-mono"> Let&apos;s create something amazing.</span>
            </p>

            {/* Social Links */}
            <div>
              <div className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest mb-3">
                // SOCIAL_NETWORKS
              </div>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="group relative w-11 h-11 border border-[var(--glass-border)] bg-[var(--bg-panel)] flex items-center justify-center text-[var(--text-muted)] transition-all duration-300"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = link.accent;
                      e.currentTarget.style.color = link.accent;
                      e.currentTarget.style.boxShadow = `0 0 16px ${link.accent}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.color = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                    aria-label={link.label}
                  >
                    <span className="text-base">{link.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-[var(--text-primary)] mb-5 text-sm tracking-widest flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
              QUICK_LINKS
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 py-2 px-3 -mx-3 border border-transparent hover:border-[var(--neon-cyan)]/30 hover:bg-[var(--bg-panel)] transition-all"
                  >
                    <span className="font-mono text-[10px] text-[var(--neon-cyan)] tracking-widest">{link.code}</span>
                    <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--neon-cyan)] transition-colors font-mono uppercase tracking-wider">
                      {link.label}
                    </span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 text-[var(--neon-cyan)] transition-opacity">→</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="font-display font-bold text-[var(--text-primary)] mb-5 text-sm tracking-widest flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[var(--neon-magenta)]" />
              CONTACT_INFO
            </h3>
            <div className="space-y-3">
              <motion.a
                href="mailto:shazanarpon@shazan.site"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex items-start gap-3 p-3 border border-[var(--glass-border)] bg-[var(--bg-panel)] hover:border-[var(--neon-cyan)] transition-all"
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
              >
                <div className="w-9 h-9 border border-[var(--neon-cyan)]/30 bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--neon-cyan)] flex-shrink-0">
                  <FaEnvelope className="text-sm" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase">EMAIL</div>
                  <div className="text-sm text-[var(--text-primary)] truncate group-hover:text-[var(--neon-cyan)] transition-colors">shazanarpon@shazan.site</div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+8801867813388"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="group flex items-start gap-3 p-3 border border-[var(--glass-border)] bg-[var(--bg-panel)] hover:border-[var(--neon-magenta)] transition-all"
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
              >
                <div className="w-9 h-9 border border-[var(--neon-magenta)]/30 bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--neon-magenta)] flex-shrink-0">
                  <FaPhone className="text-sm" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase">PHONE</div>
                  <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--neon-magenta)] transition-colors">+880 1867 813388</div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
                className="group flex items-start gap-3 p-3 border border-[var(--glass-border)] bg-[var(--bg-panel)] hover:border-[var(--neon-lime)] transition-all"
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
              >
                <div className="w-9 h-9 border border-[var(--neon-lime)]/30 bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--neon-lime)] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase">LOCATION</div>
                  <div className="text-sm text-[var(--text-primary)]">Bangladesh 🇧🇩</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--glass-border)] py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
            <span className="text-[var(--neon-cyan)]">©</span> {currentYear} ARPON<span className="text-[var(--neon-cyan)]">.</span>
            <span className="text-[var(--neon-magenta)] mx-1">all_rights_reserved</span>
            <span className="text-[var(--text-muted)]">.exe</span>
          </p>
          <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest">
            <span className="text-[var(--neon-lime)]">{'> '}</span>built_with_next.js & neon_pixels
          </p>
        </div>
      </div>
    </footer>
  );
}
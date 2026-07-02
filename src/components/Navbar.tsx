"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import { Download, X, Menu } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Track active section
      const sections = ["about", "skills", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: "About", code: "01" },
    { href: "#skills", label: "Skills", code: "02" },
    { href: "#projects", label: "Projects", code: "03" },
    { href: "#contact", label: "Contact", code: "04" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${isScrolled
          ? 'bg-[var(--bg-void)]/85 backdrop-blur-xl border-b border-[var(--neon-cyan)]/15 shadow-[0_4px_30px_rgba(0,240,255,0.06)]'
          : 'bg-transparent'
          }`}
      />

      {/* Bottom scanline */}
      {isScrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent shadow-[0_0_8px_var(--neon-cyan)] origin-left"
        />
      )}

      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative w-11 h-11"
              whileHover={{ scale: 1.1, rotate: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/logo.png"
                alt="AR Portfolio"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-[var(--neon-cyan)]/0 group-hover:bg-[var(--neon-cyan)]/10 blur-xl transition-colors rounded-full" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="block text-base font-bold text-[var(--text-primary)] tracking-tight font-display glitch-hover">
                ARPON
                <span className="text-[var(--neon-cyan)]">.</span>
              </span>
              <span className="block text-[10px] text-[var(--text-muted)] -mt-0.5 font-mono tracking-widest">
                FULL_STACK.exe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 border border-[var(--glass-border)] bg-[var(--bg-panel)]/50 backdrop-blur-md px-1 py-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <NavLink key={link.href} href={link.href} isActive={isActive}>
                    <span className="font-mono text-[10px] text-[var(--neon-cyan)] mr-1.5 opacity-70">{link.code}</span>
                    {link.label}
                  </NavLink>
                );
              })}
            </div>

            {/* Download CV */}
            <motion.a
              href="/cv/MD._SHAZAN_MAHMUD_ARPON_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="MD_SHAZAN_MAHMUD_ARPON_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 px-4 py-2 border border-[var(--glass-border)] bg-[var(--bg-panel)] text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)] font-mono text-xs tracking-wider transition-all duration-300 flex items-center gap-2"
              style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
            >
              <Download className="w-3.5 h-3.5" />
              CV
            </motion.a>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 btn-primary"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative z-50 p-2.5 border border-[var(--neon-cyan)]/40 bg-[var(--bg-panel)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-[var(--neon-cyan)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-[var(--neon-cyan)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-[var(--bg-void)] z-40 overflow-y-auto"
          >
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute top-1/4 left-0 w-72 h-72 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.4), transparent 70%)' }}
              />
              <div
                className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(255,43,214,0.4), transparent 70%)' }}
              />
            </div>

            <div className="container mx-auto px-5 pt-28 pb-12 relative z-10 min-h-full flex flex-col">
              <div className="flex flex-col space-y-3 flex-grow">
                {navLinks.map((link, index) => (
                  <MobileNavLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    index={index}
                    code={link.code}
                  >
                    {link.label}
                  </MobileNavLink>
                ))}

                <motion.a
                  href="/cv/MD._SHAZAN_MAHMUD_ARPON_.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="MD_SHAZAN_MAHMUD_ARPON_CV.pdf"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 w-full py-4 border border-[var(--neon-cyan)]/30 bg-[var(--bg-panel)] text-center font-mono text-sm tracking-widest text-[var(--text-primary)] flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[var(--neon-cyan)]" />
                  DOWNLOAD_CV.pdf
                </motion.a>

                <motion.a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full btn-primary text-center"
                >
                  Hire Me →
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 pt-6 border-t border-[var(--glass-border)]"
              >
                <div className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest mb-4">
                  // CONNECT
                </div>
                <div className="flex gap-3">
                  <SocialIcon href="https://github.com/arpondark" icon="github" />
                  <SocialIcon href="https://linkedin.com/in/md-shazan-mahmud-arpon" icon="linkedin" />
                  <SocialIcon href="mailto:shazanarpon@shazan.site" icon="email" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
  isActive
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-sm transition-all duration-300 flex items-center group ${isActive
        ? 'text-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10'
        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
    >
      <span className="relative z-10 flex items-center">{children}</span>
      {isActive && (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-0 bg-[var(--neon-cyan)]/5 border border-[var(--neon-cyan)]/30"
        />
      )}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
  index,
  code
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  index: number;
  code: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="block group relative border border-[var(--glass-border)] bg-[var(--bg-panel)]/50 backdrop-blur-md p-5 hover:border-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/5 transition-all duration-300"
        style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[var(--neon-cyan)] tracking-widest">{code}</span>
            <span className="text-2xl font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors">
              {children}
            </span>
          </div>
          <div className="w-10 h-10 border border-[var(--neon-cyan)]/30 flex items-center justify-center text-[var(--neon-cyan)] group-hover:bg-[var(--neon-cyan)] group-hover:text-[var(--bg-void)] transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  const icons = {
    github: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    email: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };

  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="w-11 h-11 border border-[var(--glass-border)] bg-[var(--bg-panel)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)] transition-all duration-300"
      style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
    >
      {icons[icon as keyof typeof icons]}
    </motion.a>
  );
}
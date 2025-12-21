"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaHeart, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/arpondark", icon: <FaGithub />, label: "GitHub", color: "hover:text-white" },
    { href: "https://www.linkedin.com/in/md-shazan-mahmud-arpon", icon: <FaLinkedin />, label: "LinkedIn", color: "hover:text-blue-400" },
    { href: "https://www.facebook.com/shazan.arpon007", icon: <FaFacebook />, label: "Facebook", color: "hover:text-blue-500" },
    { href: "mailto:arponarpon007@gmail.com", icon: <FaEnvelope />, label: "Email", color: "hover:text-purple-400" },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-black to-black" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Gradient orb */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-t from-purple-500/20 to-transparent blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Contact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <FaEnvelope className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Have a project in mind or want to discuss opportunities?
            I&apos;d love to hear from you.
          </p>

          <motion.a
            href="mailto:arponarpon007@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
          >
            <FaEnvelope className="w-5 h-5" />
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Main footer content */}
        <div className="glass-card !rounded-t-3xl !rounded-b-none border-b-0 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand Section */}
            <div className="md:col-span-5 space-y-6">
              <Link href="/" className="inline-flex items-center space-x-3 group">
                <motion.div
                  className="relative w-12 h-12"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Image
                    src="/logo.png"
                    alt="AR Portfolio"
                    fill
                    sizes="48px"
                    className="object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                  />
                </motion.div>
                <div>
                  <span className="text-xl font-bold gradient-text block">MD. SHAZAN MAHMUD ARPON</span>
                  <span className="text-sm text-gray-500">Full Stack Developer</span>
                </div>
              </Link>

              <p className="text-gray-400 leading-relaxed max-w-md">
                Building innovative solutions with modern technologies.
                Passionate about web development, IoT systems, and AI applications.
                Let&apos;s create something amazing together.
              </p>

              {/* Social Links */}
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
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`w-11 h-11 glass-card !rounded-xl flex items-center justify-center text-gray-400 ${link.color} transition-all duration-300 hover:!border-purple-500/30`}
                    aria-label={link.label}
                  >
                    <span className="text-lg">{link.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4">
              <h3 className="text-lg font-semibold text-white mb-5">Contact Info</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:arponarpon007@gmail.com"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 glass-card !rounded-lg flex items-center justify-center text-purple-400 group-hover:!bg-purple-500/20 transition-colors flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-sm">arponarpon007@gmail.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+8801867813388"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 glass-card !rounded-lg flex items-center justify-center text-purple-400 group-hover:!bg-purple-500/20 transition-colors flex-shrink-0">
                    <FaPhone />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="text-sm">+880 1867 813388</div>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-3 text-gray-400"
                >
                  <div className="w-10 h-10 glass-card !rounded-lg flex items-center justify-center text-purple-400 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="text-sm">Bangladesh</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="glass-card !rounded-none !border-t-0 py-6 px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} MD SHAZAN MAHMUD ARPON. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Made with <FaHeart className="text-pink-500 animate-pulse" /> using Next.js & React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

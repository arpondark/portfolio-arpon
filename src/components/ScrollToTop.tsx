"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-12 h-12 border border-[var(--neon-cyan)] bg-[var(--bg-panel)] text-[var(--neon-cyan)] flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--neon-cyan)] hover:text-[var(--bg-void)]"
                    style={{
                        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                        boxShadow: '0 0 16px rgba(0,240,255,0.3)',
                    }}
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
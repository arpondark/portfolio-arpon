"use client";

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

interface SkillLogoProps {
  skill: {
    name: string;
    icon: string;
    fallback: string;
    level: number;
    color?: string;
  };
  category?: {
    gradient: string;
    bgGradient?: string;
  };
  priority?: boolean;
}

export default function SkillLogo({ skill, category, priority = false }: SkillLogoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse movement for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse movement to rotation
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // Smooth spring animation
  const springConfig = { damping: 15, stiffness: 150 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    
    x.set(0);
    y.set(0);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <motion.div
      className="relative w-full aspect-square group cursor-pointer"
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.08, y: -5 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className={`w-full h-full rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-xl relative overflow-hidden backdrop-blur-sm border border-white/10
          ${category?.bgGradient ? `bg-gradient-to-br ${category.bgGradient}` : 'bg-gray-800/50'}
          hover:shadow-2xl hover:border-white/20 transition-all duration-300`}
        style={{
          rotateX: isMobile ? 0 : springRotateX,
          rotateY: isMobile ? 0 : springRotateY,
          transformStyle: "preserve-3d",
          background: skill.color ? `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)` : undefined,
        }}
      >
        {/* Animated background glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl blur-xl"
          style={{
            background: skill.color ? `radial-gradient(circle, ${skill.color}40, transparent 70%)` : 
                       category?.gradient ? `linear-gradient(45deg, ${category.gradient.replace(/from-|via-|to-/g, '').split(' ').map(c => c + '40').join(', ')})` :
                       'radial-gradient(circle, #8B5CF6, transparent 70%)'
          }}
        />
        
        {/* Icon container with color accent */}
        <div className="relative z-10">
          <div className={`relative w-16 h-16 flex items-center justify-center p-2 rounded-xl 
            ${skill.color ? `bg-gradient-to-br from-white/10 to-white/5 border border-white/20` : 'bg-gray-700/50'}
            group-hover:scale-110 transition-all duration-300`}>
            {!hasError ? (
              <>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  priority={priority}
                  className={`transition-all duration-500 filter drop-shadow-lg ${
                    isLoading ? 'opacity-0 scale-50' : 'opacity-100 scale-100 group-hover:scale-110'
                  }`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
                      style={{ borderColor: skill.color || '#8B5CF6' }}
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="text-3xl animate-bounce">{skill.fallback}</div>
            )}
          </div>
        </div>
        
        {/* Skill name with gradient */}
        <h3 className={`text-sm font-semibold text-center leading-tight z-10 ${
          skill.color || category?.gradient ? 
            `bg-gradient-to-r ${category?.gradient || `from-white to-gray-300`} bg-clip-text text-transparent` : 
            'text-white'
        }`}>
          {skill.name}
        </h3>
        
        {/* Enhanced progress bar */}
        <div className="w-full relative z-10">
          <div className="w-full h-2 bg-gray-700/50 rounded-full backdrop-blur-sm">
            <motion.div
              className={`h-full rounded-full relative overflow-hidden ${
                skill.color ? '' : `bg-gradient-to-r ${category?.gradient || 'from-purple-500 to-pink-500'}`
              }`}
              style={{
                background: skill.color ? 
                  `linear-gradient(90deg, ${skill.color}80, ${skill.color})` : 
                  undefined
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                animate-pulse opacity-50" />
            </motion.div>
          </div>
          
          {/* Skill level badge */}
          <motion.div
            className={`absolute -top-8 right-0 px-2 py-1 text-xs font-bold rounded-full 
              ${skill.color ? 'text-white' : 'text-gray-300'}
              ${skill.color ? '' : `bg-gradient-to-r ${category?.gradient || 'from-purple-500/20 to-pink-500/20'}`}`}
            style={{
              background: skill.color ? `${skill.color}20` : undefined,
              border: skill.color ? `1px solid ${skill.color}40` : undefined
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {skill.level}%
          </motion.div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60"
              style={{
                background: skill.color || '#8B5CF6',
                left: `${20 + i * 30}%`,
                top: `${20 + i * 20}%`,
              }}
              animate={{
                y: [-5, -15, -5],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
} 

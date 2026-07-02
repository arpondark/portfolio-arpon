"use client";

import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Sparkles, Code2, Cpu, Brain, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const skills = {
  web: {
    title: "Web Stack",
    icon: <Code2 className="w-5 h-5" />,
    accent: "var(--neon-cyan)",
    items: [
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", level: 90, color: "#6DB33F" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", level: 85, color: "#FF2D20" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90, color: "#61DAFB" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 85, color: "#FFFFFF" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 85, color: "#339933" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 80, color: "#FFFFFF" },
      { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", level: 85, color: "#E10098" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95, color: "#E34F26" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90, color: "#1572B6" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: 90, color: "#06B6D4" },
    ]
  },
  languages: {
    title: "Languages",
    icon: <Cpu className="w-5 h-5" />,
    accent: "var(--neon-magenta)",
    items: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 90, color: "#ED8B00" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: 85, color: "#777BB4" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 90, color: "#F7DF1E" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 85, color: "#3178C6" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 80, color: "#3776AB" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", level: 85, color: "#A8B9CC" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: 80, color: "#00599C" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", level: 75, color: "#239120" },
    ]
  },
  iot: {
    title: "IoT & AI",
    icon: <Brain className="w-5 h-5" />,
    accent: "var(--neon-lime)",
    items: [
      { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", level: 90, color: "#00979D" },
      { name: "ESP32", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", level: 85, color: "#E7352C" },
      { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", level: 80, color: "#C51A4A" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", level: 75, color: "#5C3EE8" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", level: 70, color: "#EE4C2C" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", level: 70, color: "#FF6F00" },
      { name: "ROS2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg", level: 75, color: "#22314E" },
    ]
  },
  tools: {
    title: "Tools",
    icon: <Sparkles className="w-5 h-5" />,
    accent: "var(--neon-violet)",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 90, color: "#F05032" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 80, color: "#2496ED" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 85, color: "#47A248" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 90, color: "#4479A1" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 80, color: "#4169E1" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", level: 75, color: "#DC382D" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", level: 85, color: "#FCC624" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 95, color: "#007ACC" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", level: 75, color: "#FF9900" },
    ]
  }
};

type CategoryKey = keyof typeof skills;

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('web');
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const categories = Object.entries(skills) as [CategoryKey, typeof skills[CategoryKey]][];
  const categoryKeys = Object.keys(skills) as CategoryKey[];
  const currentIndex = categoryKeys.indexOf(activeCategory);

  const handleSwipe = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      const nextIndex = (currentIndex + 1) % categoryKeys.length;
      setSwipeDirection('left');
      setActiveCategory(categoryKeys[nextIndex]);
    } else if (info.offset.x > swipeThreshold) {
      const prevIndex = (currentIndex - 1 + categoryKeys.length) % categoryKeys.length;
      setSwipeDirection('right');
      setActiveCategory(categoryKeys[prevIndex]);
    }
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + categoryKeys.length) % categoryKeys.length;
    setSwipeDirection('right');
    setActiveCategory(categoryKeys[prevIndex]);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % categoryKeys.length;
    setSwipeDirection('left');
    setActiveCategory(categoryKeys[nextIndex]);
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative section-padding overflow-hidden"
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full opacity-25 animate-drift"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.4), transparent 60%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full opacity-25 animate-drift-2"
        style={{ background: 'radial-gradient(circle, rgba(198,255,61,0.3), transparent 60%)', filter: 'blur(80px)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="hud-label">
              <Zap className="w-3 h-3" />
              02 // TECH_STACK
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--text-primary)] mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto font-mono">
            <span className="text-[var(--neon-cyan)]">{'> '}</span>
            The tools I use to forge digital realities
          </p>
        </motion.div>

        {/* Category Tabs - Desktop */}
        <div className="hidden md:flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map(([key, category], index) => {
            const isActive = activeCategory === key;
            return (
              <motion.button
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setActiveCategory(key)}
                className={`relative flex items-center gap-2.5 px-5 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-300 ${isActive
                  ? 'text-[var(--bg-void)]'
                  : 'text-[var(--text-secondary)] border border-[var(--glass-border)] bg-[var(--bg-panel)]/50 hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]'
                  }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                  background: isActive ? category.accent : undefined,
                  boxShadow: isActive ? `0 0 24px ${category.accent}` : undefined,
                }}
              >
                {category.icon}
                {category.title}
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--neon-lime)] rounded-full shadow-[0_0_8px_var(--neon-lime)]" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Mobile: Category Nav */}
        <div className="md:hidden mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.button whileTap={{ scale: 0.9 }} onClick={goToPrev} className="w-10 h-10 border border-[var(--neon-cyan)]/30 bg-[var(--bg-panel)] flex items-center justify-center text-[var(--neon-cyan)]">
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div
              className="flex items-center gap-2 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[var(--bg-void)]"
              style={{
                background: skills[activeCategory].accent,
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              }}
            >
              {skills[activeCategory].icon}
              {skills[activeCategory].title}
            </div>
            <motion.button whileTap={{ scale: 0.9 }} onClick={goToNext} className="w-10 h-10 border border-[var(--neon-cyan)]/30 bg-[var(--bg-panel)] flex items-center justify-center text-[var(--neon-cyan)]">
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
          <div className="flex justify-center gap-2">
            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => {
                  setSwipeDirection(categoryKeys.indexOf(key) > currentIndex ? 'left' : 'right');
                  setActiveCategory(key);
                }}
                className="h-1 transition-all duration-300"
                style={{
                  width: activeCategory === key ? 28 : 8,
                  background: activeCategory === key ? skills[activeCategory].accent : 'rgba(255,255,255,0.2)',
                  boxShadow: activeCategory === key ? `0 0 8px ${skills[activeCategory].accent}` : undefined,
                }}
              />
            ))}
          </div>
        </div>

        {/* Skills Grid - Desktop */}
        <div className="hidden md:block">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="neon-panel p-8 md:p-10 bg-[var(--bg-panel)]"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[var(--glass-border)]">
              <div
                className="p-3 flex items-center justify-center"
                style={{
                  background: skills[activeCategory].accent,
                  boxShadow: `0 0 24px ${skills[activeCategory].accent}`,
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                }}
              >
                {skills[activeCategory].icon}
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] tracking-wider">
                  {skills[activeCategory].title}
                </h3>
                <p className="font-mono text-xs text-[var(--text-muted)] mt-1">
                  <span className="text-[var(--neon-cyan)]">{'> '}</span>
                  {skills[activeCategory].items.length} technologies loaded
                </p>
              </div>
              <div className="ml-auto font-mono text-[10px] text-[var(--text-muted)] tracking-widest">
                [ {skills[activeCategory].items.length} ]
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {skills[activeCategory].items.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} accent={skills[activeCategory].accent} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid - Mobile with Swipe */}
        <div className="md:hidden">
          <AnimatePresence mode="wait" custom={swipeDirection}>
            <motion.div
              key={activeCategory}
              custom={swipeDirection}
              initial={{ opacity: 0, x: swipeDirection === 'left' ? 100 : swipeDirection === 'right' ? -100 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: swipeDirection === 'left' ? -100 : 100 }}
              transition={{ duration: 0.3 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleSwipe}
              className="neon-panel p-5 bg-[var(--bg-panel)] cursor-grab active:cursor-grabbing"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-2 flex items-center justify-center"
                  style={{ background: skills[activeCategory].accent }}
                >
                  {skills[activeCategory].icon}
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-[var(--text-primary)]">{skills[activeCategory].title}</h3>
                  <p className="font-mono text-[10px] text-[var(--text-muted)]">
                    {skills[activeCategory].items.length} technologies
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {skills[activeCategory].items.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} accent={skills[activeCategory].accent} compact />
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--glass-border)] text-center">
                <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest">← SWIPE TO SWITCH →</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  index,
  accent,
  compact = false
}: {
  skill: { name: string; icon: string; level: number; color: string };
  index: number;
  accent: string;
  compact?: boolean;
}) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className="relative border border-[var(--glass-border)] bg-[var(--bg-elevated)] p-4 transition-all duration-300 hover:border-[var(--neon-cyan)] hover:-translate-y-1 overflow-hidden"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
          boxShadow: isHovered ? `0 0 24px ${accent}40` : undefined,
        }}
      >
        {/* Hover scanline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(180deg, transparent, ${accent}10, transparent)`,
            backgroundSize: '100% 200%',
            animation: isHovered ? 'gradient-shift 2s ease infinite' : undefined,
          }}
        />

        {/* Icon */}
        <div className={`relative ${compact ? 'w-10 h-10' : 'w-14 h-14'} mx-auto mb-3`}>
          <motion.div
            animate={{ rotateY: isHovered ? 360 : 0, scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            {!imageError ? (
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                sizes="56px"
                className="object-contain drop-shadow-lg"
                onError={() => setImageError(true)}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-2xl font-bold font-display"
                style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
              >
                {skill.name.charAt(0)}
              </div>
            )}
          </motion.div>
          <motion.div
            animate={{ opacity: isHovered ? 0.4 : 0 }}
            className="absolute inset-0 blur-xl"
            style={{ backgroundColor: skill.color }}
          />
        </div>

        <h4 className={`text-center font-mono ${compact ? 'text-[10px]' : 'text-xs'} font-medium text-[var(--text-primary)] mb-2 truncate uppercase tracking-wider`}>
          {skill.name}
        </h4>

        {/* Progress bar */}
        <div className="h-1 bg-[var(--bg-panel)] overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.04 }}
            className="h-full absolute top-0 left-0"
            style={{
              background: `linear-gradient(90deg, ${skill.color}, ${accent})`,
              boxShadow: `0 0 6px ${skill.color}`,
            }}
          />
        </div>

        {/* Level */}
        <div className="mt-2 flex justify-between items-center font-mono text-[9px]">
          <span className="text-[var(--text-muted)] tracking-widest">LVL</span>
          <span className="text-[var(--neon-cyan)] font-bold">{skill.level}</span>
        </div>

        {/* Hover corner glow */}
        {isHovered && (
          <div className="absolute top-0 right-0 w-3 h-3 bg-[var(--neon-cyan)]" style={{ boxShadow: '0 0 8px var(--neon-cyan)' }} />
        )}
      </div>
    </motion.div>
  );
}
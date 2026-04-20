"use client";

import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Sparkles, Code2, Cpu, Brain, ChevronLeft, ChevronRight } from 'lucide-react';

const skills = {
  web: {
    title: "Web Development",
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-blue-500 to-emerald-600",
    items: [
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", level: 90, color: "#6DB33F" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", level: 85, color: "#FF2D20" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90, color: "#61DAFB" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 85, color: "#000000" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 85, color: "#339933" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 80, color: "#000000" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95, color: "#E34F26" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90, color: "#1572B6" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: 90, color: "#06B6D4" },
    ]
  },
  languages: {
    title: "Programming Languages",
    icon: <Cpu className="w-6 h-6" />,
    gradient: "from-emerald-500 to-red-600",
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
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-cyan-500 to-teal-600",
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
    title: "Tools & Platforms",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-600",
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

  const handleSwipe = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
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

  const cardVariants = {
    enter: (direction: 'left' | 'right' | null) => ({
      x: direction === 'left' ? 300 : direction === 'right' ? -300 : 0,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, type: "spring" as const, stiffness: 300, damping: 30 }
    },
    exit: (direction: 'left' | 'right' | null) => ({
      x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    })
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15" />

      {/* Decorative orbs */}
      <div
        className="absolute top-1/3 -left-48 w-80 h-80 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent blur-3xl"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
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
            <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-sm text-[var(--accent-primary)]">My Expertise</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs - Desktop */}
        <div className="hidden md:flex justify-center gap-4 mb-12">
          {categories.map(([key, category], index) => (
            <motion.button
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${activeCategory === key
                ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                : 'glass-card text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
            >
              {category.icon}
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Mobile: Category Nav */}
        <div className="md:hidden mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.button whileTap={{ scale: 0.9 }} onClick={goToPrev} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-primary)]">
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${skills[activeCategory].gradient} text-white`}>
              {skills[activeCategory].icon}
              <span className="font-medium">{skills[activeCategory].title}</span>
            </div>
            <motion.button whileTap={{ scale: 0.9 }} onClick={goToNext} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-primary)]">
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
          <div className="flex justify-center gap-2">
            {categoryKeys.map((key, index) => (
              <button
                key={key}
                onClick={() => {
                  setSwipeDirection(index > currentIndex ? 'left' : 'right');
                  setActiveCategory(key);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeCategory === key
                  ? 'w-6 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]'
                  : 'bg-[var(--text-muted)]/30'
                  }`}
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
            className="glass-card-neon p-6 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${skills[activeCategory].gradient} text-white`}>
                {skills[activeCategory].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">{skills[activeCategory].title}</h3>
                <p className="text-[var(--text-muted)] text-sm">{skills[activeCategory].items.length} technologies</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills[activeCategory].items.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
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
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleSwipe}
              className="glass-card-neon p-5 cursor-grab active:cursor-grabbing"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl bg-gradient-to-r ${skills[activeCategory].gradient} text-white`}>
                  {skills[activeCategory].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{skills[activeCategory].title}</h3>
                  <p className="text-[var(--text-muted)] text-xs">{skills[activeCategory].items.length} technologies</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {skills[activeCategory].items.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--glass-border)] text-center">
                <p className="text-xs text-[var(--text-muted)]">← Swipe to change category →</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: { name: string; icon: string; level: number; color: string }; index: number }) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="glass-card p-4 text-center hover:!border-[var(--glass-border-hover)] transition-all duration-300 hover:-translate-y-2">
        {/* Icon */}
        <div className="relative w-14 h-14 mx-auto mb-3">
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
                className="w-full h-full rounded-xl flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
              >
                {skill.name.charAt(0)}
              </div>
            )}
          </motion.div>
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"
            style={{ backgroundColor: skill.color }}
          />
        </div>

        <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2 truncate">{skill.name}</h4>

        {/* Progress bar */}
        <div className="h-1.5 rounded-full bg-[var(--glass-bg)] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.05 }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
          />
        </div>

        {/* Level tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[var(--bg-tertiary)] text-xs text-[var(--text-primary)] whitespace-nowrap border border-[var(--glass-border)]"
        >
          {skill.level}% Proficiency
        </motion.div>
      </div>
    </motion.div>
  );
}

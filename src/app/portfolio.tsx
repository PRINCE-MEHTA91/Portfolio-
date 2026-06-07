"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, Code, Database, Smartphone, Terminal, Calendar } from 'lucide-react';
import Resume from '../components/sections/resume';
import ProjectsSection from '../components/sections/projects';
import Contact from '../components/sections/contact';

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {

      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
   
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

// Navigation Component
const Navigation = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 w-full backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/50 dark:border-slate-800/50 z-50"
  >
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <motion.h1
        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
      >
        <span>P</span>
      </motion.h1>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-6">
          {['About', 'Skills', 'Projects', 'Experience', 'Resume', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <Sun className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Moon className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  </motion.nav>
);

// Hero Component
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div className="mb-8 flex justify-center" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, type: 'spring' }}>
            <div className="relative group">
              <motion.div
                className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img src="/me.jpg" alt="Profile" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
          <motion.h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Hello, I'm
          </motion.h2>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
          >
            Prince Kumar
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            Crafting elegant solutions with modern technologies. Specialized in full-stack web development and Android applications.
          </motion.p>
          <motion.div className="flex gap-4 justify-center flex-wrap" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <motion.a href="#projects" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/50" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              View Projects
            </motion.a>
            <motion.a href="#contact" className="px-8 py-4 backdrop-blur-lg bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-full font-semibold" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// About Component
const About = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={variants}>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200/50 dark:border-slate-800/50 shadow-2xl">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              I'm a passionate Software Developer with expertise in building modern web applications and Android solutions. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              My journey in software development has led me to master technologies like Node.js, Express.js, and Android development, always staying current with industry best practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  const skills = [
    { name: 'HTML & CSS', icon: Code, level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', icon: Code, level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'Tailwind CSS', icon: Code, level: 88, color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', icon: Terminal, level: 82, color: 'from-green-500 to-emerald-500' },
    { name: 'Express.js', icon: Terminal, level: 80, color: 'from-gray-500 to-slate-500' },
    { name: 'MySQL', icon: Database, level: 75, color: 'from-blue-500 to-indigo-500' },
    { name: 'Android (Java)', icon: Smartphone, level: 78, color: 'from-green-600 to-green-500' },
    { name: 'Git & GitHub', icon: Github, level: 85, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/50 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-lg">{skill.name}</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Projects component is now imported from sections/projects.tsx

// Experience Component
const Experience = () => {
  const experience = [
    { year: '2023 - 2027', title: 'B.Tech Computer Science & Engineering', company: 'University', description: 'Currently pursuing Bachelor of Technology in Computer Science and Engineering with focus on full-stack development, Android applications, and database management.' },
     { year: '2025', title: 'Academic Projects', company: 'Personal & University Projects', description: 'Built multiple full-stack web applications and Android apps using Node.js, Express.js, MySQL, and Java to strengthen practical development skills.' },
    { year: '2026', title: 'Looking for Opportunities', company: 'Open to Internships & Jobs', description: 'Actively seeking internship and full-time opportunities in software development, web development, and Android development roles to apply my technical skills.' },

  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
        </motion.h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              <motion.div
                className="absolute left-6 w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-950"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
              />
              <motion.div className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/50 shadow-xl" whileHover={{ x: 10, scale: 1.02 }}>
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-3">{item.company}</p>
                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Footer Component
const Footer = () => (
  <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="py-12 px-6 border-t border-slate-200/50 dark:border-slate-800/50">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            <span>P</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Building the future, one line at a time.
          </p>
        </div>
        <div className="flex gap-4">
                    {[            { icon: Github, href: 'https://github.com/PRINCE-MEHTA91' },   
                                  { icon: Linkedin, href: 'https://www.linkedin.com/in/prince-kumar001?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },  
                                  { icon: Mail, href: 'mailto:princekumar01zc@gmail.com' },         
                                       ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 text-center">
        <p className="text-slate-600 dark:text-slate-400">
          © 2026 Prince Kumar. All rights reserved.
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Portfolio;

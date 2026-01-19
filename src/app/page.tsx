"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, Moon, Sun, Code, Database, Smartphone, Terminal, Calendar, Award } from 'lucide-react';

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
      <Hero profileImage={profileImage} handleImageUpload={handleImageUpload} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

// Navigation Component
const Navigation = ({ theme, toggleTheme }) => (
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
        <span>Dev</span>
      </motion.h1>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-6">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
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
const Hero = ({ profileImage, handleImageUpload }) => {
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
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-white text-6xl font-bold">SD</div>
                )}
              </motion.div>
              <label className="absolute inset-0 cursor-pointer">
                <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs">Upload Photo</span>
                  </div>
                </div>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
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
            Software Developer
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

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: 'Skillswap',
      description: 'Full-stack educational platform with presonal chat and meeting, admin dashboard, and real-time inventory management.',
      tech: ['html', 'css', 'javascript','firebase'],
      github: 'https://github.com/parvvvv-v/SkillSwap',
      demo: 'http://skillswap-web.netlify.app',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Pustakguru App',
      description: 'PustakGuru is a smart Android application designed to make book discovery simple, fast, and user-friendly. It allows users to search books, view details, save favorites, and access PDFs all in one place.',
      tech: ['Android', 'Java', 'RESFULLAPI', 'Firebase'],
      github: 'https://github.com/PRINCE-MEHTA91/Pustakguru',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'ECOPICK',
      description: 'Content management system for portfolios with drag-and-drop builder and SEO optimization.',
      tech: ['Node.js', 'Express.js', 'RESTFULL API', 'Html Css','Tailwind Css','JavaScript'],
      github: '#',
      demo: '#',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts and interactive data visualizations.',
      tech: ['JavaScript', 'Tailwind CSS', 'API Integration'],
      github: '#',
      demo: '#',
      gradient: 'from-teal-500 to-green-500'
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 shadow-2xl"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <motion.div className="absolute inset-0 bg-black/20" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.a href={project.github} className="p-3 bg-white/90 dark:bg-slate-900/90 rounded-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a href={project.demo} className="p-3 bg-white/90 dark:bg-slate-900/90 rounded-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <ExternalLink className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-purple-500/20 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const experience = [
    { year: '2023 - 2027', title: 'B.Tech Computer Science & Engineering', company: 'University', description: 'Currently pursuing Bachelor of Technology in Computer Science and Engineering with focus on full-stack development, Android applications, and database management.' },
    { year: '2024', title: 'Looking for Opportunities', company: 'Open to Internships & Jobs', description: 'Actively seeking internship and full-time opportunities in software development, web development, and Android development roles to apply my technical skills.' },
    { year: '2023', title: 'Academic Projects', company: 'Personal & University Projects', description: 'Built multiple full-stack web applications and Android apps using Node.js, Express.js, MySQL, and Java to strengthen practical development skills.' },
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

// Resume Component
const Resume = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-blue-500/20 dark:border-purple-500/20">
        <Award className="w-16 h-16 mx-auto mb-6 text-blue-600" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to know more?</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Download my resume to see my complete professional background and achievements.
        </p>
        <motion.button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/50" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
          <Download className="w-5 h-5" />
          Download Resume
        </motion.button>
      </motion.div>
    </div>
  </section>
);

// Contact Component
const Contact = () => (
  <section id="contact" className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com', gradient: 'from-blue-600 to-purple-600' },
              { icon: Github, label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com', gradient: 'from-gray-700 to-gray-900' },
              { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: 'https://linkedin.com', gradient: 'from-blue-600 to-blue-700' },
            ].map(({ icon: Icon, label, value, href, gradient }) => (
              <motion.a key={label} href={href} className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-500/10 transition-colors group" whileHover={{ x: 10 }}>
                <div className={`p-3 bg-gradient-to-r ${gradient} rounded-xl`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">{label}</p>
                  <p className="text-slate-600 dark:text-slate-400">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-xl space-y-4">
          {[
            { label: 'Name', type: 'text', placeholder: 'Your name' },
            { label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
          ].map(({ label, type, placeholder }) => (
            <div key={label}>
              <label className="block text-sm font-medium mb-2">{label}</label>
              <input type={type} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder={placeholder} />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none" placeholder="Your message..." />
          </div>
          <motion.button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/50" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="py-12 px-6 border-t border-slate-200/50 dark:border-slate-800/50">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            <span>Dev</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Building the future, one line at a time.
          </p>
        </div>
        <div className="flex gap-4">
          {[
            { icon: Github, href: 'https://github.com' },
            { icon: Linkedin, href: 'https://linkedin.com' },
            { icon: Mail, href: 'mailto:your.email@example.com' },
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
          © 2024 Software Developer. All rights reserved.
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Portfolio;
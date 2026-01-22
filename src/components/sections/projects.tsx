"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Skillswap',
            description: 'Full-stack educational platform with presonal chat and meeting, admin dashboard, and real-time inventory management.',
            tech: ['html', 'css', 'javascript', 'firebase'],
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
            tech: ['Node.js', 'Express.js', 'RESTFULL API', 'Html Css', 'Tailwind Css', 'JavaScript'],
            github: '#',
            demo: '#',
            gradient: 'from-orange-500 to-red-500'
        },
        {
            title: 'Portfolio',
            description: 'A personal portfolio website to showcase my skills and projects.',
            tech: ['JavaScript', 'react', 'next.js', 'Tailwind CSS'],
            github: 'https://github.com/PRINCE-MEHTA91/Portfolio-',
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

export default Projects;
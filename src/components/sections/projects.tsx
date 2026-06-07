"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Layers, Shield, Zap, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        title: 'TailorHub_Web',
        subtitle: 'Smart Tailoring & Custom Clothing Management Platform',
        description: 'A full-stack web application that modernizes tailoring businesses with real-time order tracking, digital measurements, JWT-secured role-based access for Customers, Tailors & Admins, and Socket.io-powered live chat.',
        tech: ['React.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'JWT', 'Prisma ORM', 'Tailwind CSS'],
        github: 'https://github.com/PRINCE-MEHTA91/TailorHub_Web',
        demo: 'https://tailor-hub-web-client.vercel.app',
        detailPage: '/projects/tailorhub',
        gradient: 'from-violet-600 via-indigo-600 to-cyan-600',
        glowColor: 'violet',
        image: '/tailorhub.png',
        cardImage: '/tailorhub.png',
        featured: true,
        badges: ['Full Stack', 'Real-Time', 'Multi-Role'],
        icons: [Shield, Zap, Database, Layers],
    },
    {
        title: 'Skillswap',
        subtitle: 'Educational Collaboration Platform',
        description: 'Full-stack educational platform with personal chat and video meetings, admin dashboard, and real-time collaboration features.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        github: 'https://github.com/parvvvv-v/SkillSwap',
        demo: 'http://skillswap-web.netlify.app',
        detailPage: null,
        gradient: 'from-blue-500 to-cyan-500',
        featured: false,
    },
    {
        title: 'Pustakguru App',
        subtitle: 'Smart Book Discovery Application',
        description: 'An Android application designed to make book discovery simple and user-friendly — search books, view details, save favorites, and access PDFs in one place.',
        tech: ['Android', 'Java', 'RESTful API', 'Firebase'],
        github: 'https://github.com/PRINCE-MEHTA91/Pustakguru',
        demo: '#',
        detailPage: null,
        gradient: 'from-purple-500 to-pink-500',
        featured: false,
    },
    {
        title: 'ECOPICK',
        subtitle: 'Eco Product Management System',
        description: 'A RESTful API-driven content management system with drag-and-drop interface and SEO optimization built on Node.js and Express.',
        tech: ['Node.js', 'Express.js', 'RESTful API', 'Tailwind CSS'],
        github: '#',
        demo: '#',
        detailPage: null,
        gradient: 'from-orange-500 to-red-500',
        featured: false,
    },
    {
        title: 'Portfolio',
        subtitle: 'Personal Developer Portfolio',
        description: 'This personal portfolio website — a modern, animated showcase of skills and projects built with the latest Next.js and Tailwind.',
        tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/PRINCE-MEHTA91/Portfolio-',
        demo: 'https://prince-mehta91.github.io/Portfolio-/',
        detailPage: null,
        gradient: 'from-teal-500 to-green-500',
        featured: false,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    {/* Section heading */}
                    <motion.div variants={fadeUp} className="text-center mb-16">
                        <motion.h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Featured{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </motion.h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                            A selection of projects that demonstrate my full-stack engineering capabilities.
                        </p>
                    </motion.div>

                    {/* ── ALL PROJECTS GRID ── */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                variants={fadeUp}
                                custom={i}
                                whileHover={{ y: -8, scale: 1.015 }}
                                className="group rounded-2xl overflow-hidden shadow-xl"
                                style={{ background: 'linear-gradient(145deg, #1a1f35 0%, #141827 100%)', border: '1px solid rgba(255,255,255,0.07)' }}
                            >
                                {/* Banner: project image or gradient dot-grid */}
                                <div className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        /* Dot grid overlay for non-image projects */
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
                                                backgroundSize: '22px 22px',
                                            }}
                                        />
                                    )}

                                    {/* Badges (for featured project) */}
                                    {project.badges && (
                                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                                            {project.badges.map(b => (
                                                <span key={b} className="px-2.5 py-1 rounded-full bg-black/50 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm">
                                                    {b}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Featured badge */}
                                    {project.featured && (
                                        <div className="absolute top-3 right-3">
                                            <span className="px-2.5 py-1 rounded-full bg-violet-500/80 border border-violet-400/40 text-white text-xs font-bold backdrop-blur-sm">
                                                ✦ Featured
                                            </span>
                                        </div>
                                    )}

                                    {/* Hover dark overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

                                    {/* Hover action links */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.detailPage && (
                                            <Link href={project.detailPage}>
                                                <motion.span
                                                    className="p-3 rounded-full shadow-lg cursor-pointer"
                                                    style={{ background: 'rgba(20,24,39,0.92)' }}
                                                    whileHover={{ scale: 1.15 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    title="View Case Study"
                                                >
                                                    <ArrowRight className="w-5 h-5 text-white" />
                                                </motion.span>
                                            </Link>
                                        )}
                                        {project.github && project.github !== '#' && (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-full shadow-lg"
                                                style={{ background: 'rgba(20,24,39,0.92)' }}
                                                whileHover={{ scale: 1.15 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Github className="w-5 h-5 text-white" />
                                            </motion.a>
                                        )}
                                        {project.demo && project.demo !== '#' && (
                                            <motion.a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-full shadow-lg"
                                                style={{ background: 'rgba(20,24,39,0.92)' }}
                                                whileHover={{ scale: 1.15 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ExternalLink className="w-5 h-5 text-white" />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1 text-white">{project.title}</h3>
                                    <p className="text-xs font-bold mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{project.subtitle}</p>
                                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map(tech => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                                                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)' }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Detail page link for projects that have one */}
                                    {project.detailPage && (
                                        <Link href={project.detailPage}>
                                            <motion.span
                                                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${project.gradient} text-white font-semibold text-xs shadow-lg cursor-pointer`}
                                                whileHover={{ scale: 1.05, y: -1 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                View Case Study <ArrowRight className="w-3.5 h-3.5" />
                                            </motion.span>
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
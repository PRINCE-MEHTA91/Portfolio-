"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

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

export default Experience;
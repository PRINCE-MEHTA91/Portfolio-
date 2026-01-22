"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Terminal, Github } from 'lucide-react';

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

export default Skills;
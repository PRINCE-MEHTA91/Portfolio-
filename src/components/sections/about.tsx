"use client";
import React from 'react';
import { motion } from 'framer-motion';

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

export default About;
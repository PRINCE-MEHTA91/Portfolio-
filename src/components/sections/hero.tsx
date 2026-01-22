"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

export default Hero;
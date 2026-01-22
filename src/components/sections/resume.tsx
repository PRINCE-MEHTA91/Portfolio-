
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Download } from 'lucide-react';

const Resume = () => (
    <section id="resume" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-blue-500/20 dark:border-purple-500/20">
                <Award className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to know more?</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                    Download my resume to see my complete professional background and achievements.
                </p>
                <a href="/resume.pdf" download>
                    <motion.button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/50" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                        <Download className="w-5 h-5" />
                        Download Resume
                    </motion.button>
                </a>
            </motion.div>
        </div>
    </section>
);

export default Resume;

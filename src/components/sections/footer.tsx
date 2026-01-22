"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

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
                    {[
                        { icon: Github, href: 'https://github.com/PRINCE-MEHTA91' },
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
                    © 2024 Prince Kumar. All rights reserved.
                </p>
            </div>
        </div>
    </motion.footer>
);

export default Footer;
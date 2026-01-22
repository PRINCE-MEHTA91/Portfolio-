"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Smartphone, Github, Linkedin } from 'lucide-react';

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
                            { icon: Mail, label: 'Email', value: 'princekumar01zc@gmail.com', href: 'mailto:princekumar01zc@gmail.com', gradient: 'from-blue-600 to-purple-600' },
                            { icon: Smartphone, label: 'Phone', value: '+91 9142066384', href: 'tel:+919142066384', gradient: 'from-green-500 to-emerald-500' },
                            { icon: Github, label: 'GitHub', value: 'github.com/PRINCE-MEHTA91', href: 'https://github.com/PRINCE-MEHTA91', gradient: 'from-gray-700 to-gray-900' },
                            { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: 'https://www.linkedin.com/in/prince-kumar001?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', gradient: 'from-blue-600 to-blue-700' },
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

export default Contact;
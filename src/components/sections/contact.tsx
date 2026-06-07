"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Smartphone, Github, Linkedin, Send, CheckCircle, XCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = "service_3bi9afp";
const EMAILJS_TEMPLATE_ID = "template_viy8e3x";
const EMAILJS_PUBLIC_KEY  = "BuSHmnH74FuxCgCz3";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
    const [status, setStatus] = useState<Status>("idle");
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const sendEmail = async () => {
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
        if (status === "sending") return;

        setStatus("sending");
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                >
                    Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* ── Contact info ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-xl"
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                        <div className="space-y-4">
                            {[
                                { icon: Mail,       label: "Email",    value: "princekumar01zc@gmail.com",        href: "mailto:princekumar01zc@gmail.com",        gradient: "from-blue-600 to-purple-600" },
                                { icon: Smartphone, label: "Phone",    value: "+91 9142066384",                    href: "tel:+919142066384",                       gradient: "from-green-500 to-emerald-500" },
                                { icon: Github,     label: "GitHub",   value: "github.com/PRINCE-MEHTA91",        href: "https://github.com/PRINCE-MEHTA91",       gradient: "from-gray-700 to-gray-900" },
                                { icon: Linkedin,   label: "LinkedIn", value: "linkedin.com/in/prince-kumar001", href: "https://www.linkedin.com/in/prince-kumar001?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", gradient: "from-blue-600 to-blue-700" },
                            ].map(({ icon: Icon, label, value, href, gradient }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-500/10 transition-colors group"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className={`p-3 bg-gradient-to-r ${gradient} rounded-xl`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{label}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Contact form ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-xl space-y-4"
                    >
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                placeholder="Your name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        {/* Submit button — plain button for reliable click */}
                        <button
                            type="button"
                            onClick={sendEmail}
                            disabled={status === "sending"}
                            style={{ cursor: status === "sending" ? "not-allowed" : "pointer" }}
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70 hover:opacity-90 active:scale-95 transition-all"
                        >
                            {status === "sending" ? (
                                <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                            ) : (
                                <><Send className="w-5 h-5" /> Send Message</>
                            )}
                        </button>

                        {/* Feedback messages */}
                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium"
                                >
                                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                                    Message sent! I'll get back to you soon. 🎉
                                </motion.div>
                            )}
                            {status === "error" && (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-sm font-medium"
                                >
                                    <XCircle className="w-4 h-4 flex-shrink-0" />
                                    Something went wrong. Please try again or email me directly.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
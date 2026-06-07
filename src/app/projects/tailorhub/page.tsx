"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  Code2,
  Database,
  Zap,
  Shield,
  Users,
  ShoppingBag,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Server,
  Layers,
  Globe,
  Star,
  TrendingUp,
  Clock,
  Award,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────── data ─────────────────────────── */

const techStack = {
  Frontend: [
    { name: "React.js", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", color: "from-slate-400 to-slate-600" },
    { name: "TypeScript", color: "from-blue-400 to-blue-600" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-teal-500" },
    { name: "ShadCN UI", color: "from-violet-400 to-purple-600" },
    { name: "React Hook Form", color: "from-pink-400 to-rose-500" },
    { name: "Axios", color: "from-indigo-400 to-violet-500" },
  ],
  Backend: [
    { name: "Node.js", color: "from-green-400 to-emerald-600" },

    { name: "Express.js", color: "from-gray-400 to-slate-600" },
    { name: "REST APIs", color: "from-orange-400 to-amber-500" },
    { name: "JWT Auth", color: "from-yellow-400 to-orange-500" },
    { name: "bcrypt.js", color: "from-lime-400 to-green-500" },
  ],
  Database: [
    { name: "PostgreSQL", color: "from-blue-400 to-indigo-600" },
    { name: "Prisma ORM", color: "from-teal-400 to-cyan-600" },
    { name: "TypeORM", color: "from-orange-400 to-red-500" },
  ],
  "Real-Time": [
    { name: "Socket.io", color: "from-gray-300 to-gray-500" },
    { name: "WebSockets", color: "from-violet-400 to-purple-600" },
  ],
  "Cloud & DevOps": [
    { name: "Vercel", color: "from-slate-400 to-slate-700" },
    { name: "Render", color: "from-purple-400 to-indigo-600" },
    { name: "GitHub", color: "from-gray-500 to-gray-800" },
    { name: "PostgreSQL Cloud", color: "from-sky-400 to-blue-600" },
  ],
};

const features = [
  {
    icon: Shield,
    title: "Auth & Security",
    gradient: "from-amber-500 to-orange-600",
    items: [
      "JWT Authentication & Refresh Tokens",
      "bcrypt Password Hashing",
      "Role-Based Access Control",
      "Protected API Routes",
      "Session Management",
    ],
  },
  {
    icon: Users,
    title: "Customer Module",
    gradient: "from-violet-500 to-purple-700",
    items: [
      "Customer Dashboard & Profile",
      "Digital Measurement Upload",
      "Custom Order Placement",
      "Real-Time Order Tracking",
      "Appointment Booking",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Tailor Module",
    gradient: "from-emerald-500 to-teal-700",
    items: [
      "Order Management Dashboard",
      "Measurement Records System",
      "Appointment Scheduling",
      "Production Status Updates",
      "Customer Communication Hub",
    ],
  },
  {
    icon: BarChart3,
    title: "Admin Module",
    gradient: "from-rose-500 to-pink-700",
    items: [
      "User & Tailor Management",
      "Analytics Dashboard",
      "Platform Monitoring",
      "Report Generation",
      "Tailor Verification System",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication",
    gradient: "from-sky-500 to-blue-700",
    items: [
      "Real-Time Chat (Socket.io)",
      "Order Status Notifications",
      "Appointment Reminders",
      "Push Alerts System",
      "In-App Messaging",
    ],
  },
  {
    icon: Zap,
    title: "UX & Performance",
    gradient: "from-yellow-400 to-amber-600",
    items: [
      "Responsive Mobile-First UI",
      "Smooth Animations & Transitions",
      "Search & Filter System",
      "Toast Notifications",
      "Form Validation & Error Handling",
    ],
  },
];

const architectureSteps = [
  { label: "React / Next.js", sublabel: "Frontend Layer", icon: Globe, color: "from-cyan-400 to-blue-500" },
  { label: "REST API Layer", sublabel: "HTTP Endpoints", icon: Code2, color: "from-indigo-400 to-violet-500" },
  { label: "Node.js Backend", sublabel: "Business Logic", icon: Server, color: "from-rose-400 to-pink-600" },
  { label: "JWT Auth", sublabel: "Security Guards", icon: Shield, color: "from-amber-400 to-orange-500" },
  { label: "PostgreSQL DB", sublabel: "Data Persistence", icon: Database, color: "from-emerald-400 to-teal-600" },
  { label: "Socket.io", sublabel: "Real-Time Events", icon: Zap, color: "from-purple-400 to-violet-600" },
];

const challenges = [
  { challenge: "Secure JWT authentication flow", solution: "Implemented JWT Guards + Role Guards in Node.js with refresh token rotation" },
  { challenge: "Real-time communication at scale", solution: "Architected Socket.io event system with room-based namespacing" },
  { challenge: "Complex database relationships", solution: "Optimized PostgreSQL relational schema with Prisma ORM migrations" },
  { challenge: "CORS in multi-service deployment", solution: "Environment-based config with whitelist-based CORS validation" },
  { challenge: "Role-based route protection", solution: "Custom decorators and guards for Admin, Tailor & Customer roles" },
  { challenge: "Responsive cross-device UI", solution: "Mobile-first Tailwind design with adaptive component library" },
];

const impactMetrics = [
  { icon: TrendingUp, value: "60%", label: "Reduction in manual effort", color: "from-emerald-400 to-teal-500" },
  { icon: Clock, value: "3x", label: "Faster order processing", color: "from-violet-400 to-purple-600" },
  { icon: Users, value: "3", label: "User roles managed", color: "from-amber-400 to-orange-500" },
  { icon: Star, value: "100%", label: "Digital workflow coverage", color: "from-rose-400 to-pink-600" },
];

const resumeBullets = [
  "Developed a full-stack tailoring management platform using React, Next.js, Node.js, PostgreSQL, and Socket.io",
  "Implemented JWT-based authentication and role-based authorization for Admin, Tailor, and Customer modules",
  "Built RESTful APIs and integrated PostgreSQL database for order, customer, and measurement management",
  "Developed real-time chat and notification features using Socket.io",
  "Designed responsive and user-friendly interfaces with modern UI frameworks",
  "Deployed scalable frontend and backend services on cloud platforms with secure production configurations",
];

const tags = [
  "Full Stack", "React.js", "Next.js", "Node.js", "PostgreSQL",
  "JWT Auth", "Socket.io", "REST APIs", "Tailwind CSS", "Database Design", "Cloud Deployment",
];

/* ─────────────────────────── helpers ─────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─────────────────────────── page ─────────────────────────── */

export default function TailorHubPage() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.95]);

  // Progress bar
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-[#060b18] text-white overflow-x-hidden">
      {/* scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Back nav */}
      <nav className="fixed top-4 left-4 z-50">
        <Link href="/">
          <motion.span
            className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-sm font-medium text-white/80 hover:text-white hover:bg-white/15 transition-all"
            whileHover={{ x: -4 }}
          >
            <ChevronLeft className="w-4 h-4" /> Back to Portfolio
          </motion.span>
        </Link>
      </nav>

      {/* ── HERO ── */}
      <motion.section
        style={{ opacity: headerOpacity, scale: headerScale }}
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-12 overflow-hidden"
      >
        {/* Radial glow bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-violet-600/15 blur-[120px]" />
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-indigo-500/10 blur-[80px] animate-pulse" />
          <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[80px] animate-pulse" style={{ animationDelay: "1.5s" }} />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)", backgroundSize: "64px 64px" }}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 text-sm font-semibold backdrop-blur-sm">
              <Layers className="w-4 h-4" /> Full-Stack Web Application
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none"
          >
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              TailorHub
            </span>
            <span className="text-white/20">_Web</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-slate-400 mb-4 font-medium"
          >
            Smart Tailoring & Custom Clothing Management Platform
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A full-stack web application that modernizes tailoring businesses by digitizing customer
            management, order tracking, appointment scheduling, and real-time communication — all in
            one unified platform.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mb-14">
            <motion.a
              href="https://github.com/PRINCE-MEHTA91"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github className="w-5 h-5" /> View on GitHub
            </motion.a>
            <motion.a
              href="#features"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Features <ChevronDown className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Tags */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white/60 hover:text-white/90 hover:bg-white/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </motion.section>

      {/* ── DASHBOARD IMAGE ── */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-transparent to-transparent z-10 pointer-events-none" />
            <Image
              src="/tailorhub.png"
              alt="TailorHub_Web Dashboard"
              width={1400}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
            {/* floating badge */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold backdrop-blur-sm">
                ● LIVE DEMO
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── IMPACT METRICS ── */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {impactMetrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.label}
                  variants={fadeUp}
                  custom={i}
                  className="relative group rounded-2xl p-6 border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden text-center hover:border-white/20 transition-all"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${m.color} transition-opacity`} />
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${m.color} mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className={`text-4xl font-black mb-1 bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
                    {m.value}
                  </p>
                  <p className="text-sm text-slate-400">{m.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM & SOLUTION ── */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Problem */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-3xl p-8 border border-rose-500/20 bg-rose-500/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-2xl font-bold text-rose-400 mb-4 flex items-center gap-2">
                <span className="text-3xl">⚠️</span> The Problem
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Traditional tailoring businesses rely on <strong className="text-white">manual record-keeping</strong>, phone-based communication,
                and paper measurements — leading to inefficiencies, lost records, communication gaps,
                and a fundamentally poor customer experience.
              </p>
              <ul className="mt-4 space-y-2">
                {["Manual order tracking", "Paper measurement records", "No appointment system", "Communication gaps"].map(p => (
                  <li key={p} className="flex items-center gap-2 text-sm text-rose-300/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-3xl p-8 border border-emerald-500/20 bg-emerald-500/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <span className="text-3xl">✅</span> The Solution
              </h2>
              <p className="text-slate-300 leading-relaxed">
                TailorHub_Web <strong className="text-white">digitizes the entire tailoring workflow</strong> by providing a
                unified platform for customers, tailors, and admins — with real-time communication,
                digital measurements, and automated order management.
              </p>
              <ul className="mt-4 space-y-2">
                {["Online order & tracking system", "Digital measurement management", "Real-time chat & notifications", "Multi-role admin dashboard"].map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm text-emerald-300/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-400 text-sm font-semibold mb-4">
                Core Features
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Everything a Tailoring Business{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Needs</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Six powerful modules covering the entire tailoring lifecycle from measurement to delivery.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    variants={fadeUp}
                    custom={i}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative rounded-3xl p-7 border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden cursor-default transition-all hover:border-white/20"
                  >
                    {/* hover glow */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${f.gradient} transition-opacity duration-500`} />
                    <div className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${f.gradient} shadow-lg mb-5`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
                    <ul className="space-y-2.5">
                      {f.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                          <ArrowRight className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-sm font-semibold mb-4">
                Technology Stack
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Built With{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Modern Tools</span>
              </h2>
            </motion.div>

            {/* Tab selector */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center mb-10">
              {Object.keys(techStack).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30"
                      : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            {/* Tech pills */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-3 justify-center"
              >
                {techStack[activeTab as keyof typeof techStack].map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-5 py-2.5 rounded-full font-semibold text-white text-sm bg-gradient-to-r ${tech.color} shadow-lg`}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── ARCHITECTURE ── */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-4">
                System Architecture
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                How It All{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Connects</span>
              </h2>
            </motion.div>

            <div className="flex flex-col items-center gap-0">
              {architectureSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={step.label}>
                    <motion.div
                      variants={fadeUp}
                      custom={i}
                      className="group relative w-full max-w-md"
                    >
                      <div className={`relative flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-white/25 transition-all overflow-hidden`}>
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-8 bg-gradient-to-r ${step.color} transition-opacity`} />
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} shadow-lg flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-white">{step.label}</p>
                          <p className="text-sm text-slate-400">{step.sublabel}</p>
                        </div>
                        <div className="ml-auto">
                          <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${step.color} animate-pulse`} />
                        </div>
                      </div>
                    </motion.div>
                    {i < architectureSteps.length - 1 && (
                      <motion.div
                        variants={fadeUp}
                        custom={i + 0.5}
                        className="flex flex-col items-center my-1"
                      >
                        <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
                        <ChevronDown className="w-4 h-4 text-white/25" />
                        <div className="w-px h-1 bg-gradient-to-b from-white/10 to-transparent" />
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CHALLENGES & SOLUTIONS ── */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-4">
                Engineering Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Challenges &{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {challenges.map((c, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="rounded-2xl p-6 border border-white/8 bg-white/[0.03] hover:border-white/20 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-rose-400 text-lg mt-0.5">⚡</span>
                    <p className="font-semibold text-white/80 text-sm">{c.challenge}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-400 leading-relaxed">{c.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RESUME BULLETS ── */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-400 text-sm font-semibold mb-4">
                Resume Highlights
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Key{" "}
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Achievements</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative rounded-3xl p-8 border border-violet-500/20 bg-violet-500/5"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-7">
                <Award className="w-6 h-6 text-violet-400" />
                <span className="font-bold text-violet-300 text-lg">TailorHub_Web — Bullet Points</span>
              </div>
              <ul className="space-y-4">
                {resumeBullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl p-12 text-center overflow-hidden border border-white/10"
          >
            {/* gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-indigo-900/30 to-cyan-900/20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white mb-4">
                Want to Know More?
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Check out the source code on GitHub or reach out to discuss the architecture and implementation details.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="https://github.com/PRINCE-MEHTA91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg shadow-violet-500/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Github className="w-5 h-5" /> GitHub Profile
                </motion.a>
                <Link href="/#contact">
                  <motion.span
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15 transition-all cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <MessageSquare className="w-5 h-5" /> Get in Touch
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* bottom glow */}
      <div className="h-24 bg-gradient-to-t from-[#060b18] to-transparent" />
    </div>
  );
}

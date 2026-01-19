"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function Resume() {
  return (
    <motion.section
      id="resume"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Resume</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Download my resume to know more about my qualifications and achievements.
      </p>
      <div className="mt-10">
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/resume.pdf"
          download
        >
          Download Resume{" "}
          <Download className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </div>
    </motion.section>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a passionate software developer, I specialize in{" "}
        <span className="font-medium">full-stack and Android development</span>,
        creating beautiful and functional applications. I am proficient in a range of
        modern technologies and always eager to learn more.
      </p>
      <p>
        When I'm not coding, I enjoy playing video games, watching movies, and
        spending time with my family. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}

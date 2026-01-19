"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <div className="mt-8 relative">
        <div className="border-l-2 border-gray-200 dark:border-gray-700 absolute h-full top-0 left-1/2 -translate-x-1/2"></div>
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-8 flex justify-between items-center w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
            </div>
            <div className="z-10 flex items-center bg-gray-200 dark:bg-gray-700 w-4 h-4 rounded-full"></div>
            <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

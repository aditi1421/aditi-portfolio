"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-4 md:mx-8 mt-4 md:mt-8 border border-border bg-surface px-8 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header row matching the reference style */}
        <motion.div
          className="mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-12 gap-4 pb-4 border-b border-border">
            <div className="col-span-3">
              <span className="font-mono text-[14px] md:text-[16px] tracking-[0.1em] text-fg uppercase font-medium">
                Project
              </span>
            </div>
            <div className="col-span-6">
              <span className="font-mono text-[14px] md:text-[16px] tracking-[0.1em] text-fg uppercase font-medium">
                Description
              </span>
            </div>
            <div className="col-span-3" />
          </div>
        </motion.div>

        <div className="group/list">
          {projects.map((project) => (
            <div
              key={project.id}
              className="transition-opacity duration-200 lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
            >
              <ProjectCard project={project} />
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}

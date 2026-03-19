"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      className="border-t border-border cursor-pointer group"
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4 }}
    >
      {/* Row */}
      <div className="py-5 md:py-6 grid grid-cols-12 gap-4 items-baseline group-hover:bg-accent-soft/40 transition-colors px-1 -mx-1">
        {/* Title */}
        <div className="col-span-12 md:col-span-3">
          <h3
            className="text-[16px] md:text-[17px] text-fg"
            style={{ fontFamily: "var(--font-instrument), serif" }}
          >
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <div className="col-span-12 md:col-span-6">
          <p className="font-mono text-[12px] text-muted leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Expand */}
        <div className="col-span-12 md:col-span-3 text-right">
          <motion.span
            className="inline-block font-mono text-muted text-sm"
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.15 }}
          >
            +
          </motion.span>
        </div>
      </div>

      {/* Expanded detail */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 grid grid-cols-12 gap-4 bg-accent/10 p-6 -mx-1 border-l-4 border-accent">
              {/* Left — full description */}
              <div className="col-span-12 md:col-span-6">
                <p className="font-mono text-[12px] text-fg/70 leading-[1.9]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] uppercase border border-fg/20 text-fg/60 bg-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — highlights + link */}
              <div className="col-span-12 md:col-span-6">
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="font-mono text-[12px] text-fg/60 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent-hover shrink-0 mt-0.5 font-bold">
                        &bull;
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 mt-6 font-mono text-[12px] text-fg font-medium underline underline-offset-2 hover:text-accent-hover transition-colors"
                >
                  View on GitHub &#x2197;
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

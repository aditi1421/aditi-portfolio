"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      className="border-t border-border cursor-pointer group/card"
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4 }}
    >
      {/* Row */}
      <div className="py-5 md:py-6 grid grid-cols-12 gap-4 items-baseline group-hover/card:bg-accent-soft/40 transition-colors px-1 -mx-1">
        {/* Title */}
        <div className="col-span-12 md:col-span-3">
          <h3
            className="text-[16px] md:text-[17px] text-fg"
            style={{ fontFamily: "var(--font-instrument), serif" }}
          >
            {project.title}
          </h3>
        </div>

        {/* Tagline */}
        <div className="col-span-10 md:col-span-6">
          <p className="font-mono text-[12px] text-fg/80 font-medium leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Metric badge or expand icon */}
        <div className="col-span-2 md:col-span-3 text-right flex items-center justify-end gap-3">
          {project.metric && (
            <span className="hidden md:inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-accent-hover bg-accent/15 px-2.5 py-1 border border-accent/30">
              {project.metric.value}
            </span>
          )}
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
            <div className="pb-8 bg-accent/10 p-6 -mx-1 border-l-4 border-accent">
              <div className="grid grid-cols-12 gap-4">
                {/* Left — full description */}
                <div className="col-span-12 md:col-span-6">
                  <p className="font-mono text-[12px] text-fg font-medium leading-[1.9]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] uppercase border border-fg/30 text-fg/80 font-medium bg-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — highlights + links */}
                <div className="col-span-12 md:col-span-6">
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="font-mono text-[12px] text-fg/90 font-medium leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-accent-hover shrink-0 mt-0.5 font-bold">
                          &bull;
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4 mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 font-mono text-[12px] text-fg font-medium underline underline-offset-2 hover:text-accent-hover transition-colors"
                    >
                      GitHub &#x2197;
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 font-mono text-[12px] text-white font-medium bg-fg px-3 py-1.5 hover:bg-accent-hover hover:text-fg transition-colors"
                      >
                        Live Demo &#x2197;
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

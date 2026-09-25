"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article>
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        className="w-full text-left py-8 flex items-baseline justify-between gap-6 group cursor-pointer"
      >
        <div>
          <h2
            className="text-[18px] md:text-[20px] font-medium leading-[1.3] underline decoration-transparent group-hover:decoration-black underline-offset-[6px] transition-colors"
          >
            {project.title}
          </h2>
          <p className="font-mono text-[12.5px] leading-[1.8] text-black/60 mt-2 max-w-3xl">
            {project.tagline}
          </p>
        </div>
        <span className="font-mono text-[18px] text-black/50 shrink-0">
          {isExpanded ? "−" : "+"}
        </span>
      </button>

      {isExpanded && (
        <div className="pb-10 pl-4 border-l-2 border-black grid gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <p className="font-mono text-[12.5px] leading-[1.9] text-black/80">
              {project.description}
            </p>

            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-black/45 mt-5">
              {project.techTags.join(" · ")}
            </p>
          </div>

          <div>
            <ul className="space-y-2 list-disc pl-5">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="font-mono text-[12.5px] leading-[1.8] text-black/70"
                >
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-5 mt-5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] underline underline-offset-2 hover:opacity-60 transition-opacity"
              >
                GitHub &#x2197;
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] underline underline-offset-2 hover:opacity-60 transition-opacity"
                >
                  Live &#x2197;
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

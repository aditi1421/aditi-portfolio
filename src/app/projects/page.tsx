import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Aditi Kumar",
  description: "Things I have built.",
};

export default function ProjectsPage() {
  return (
    <main className="blog-view min-h-screen bg-white text-black">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12 py-10 md:py-14">
        <SiteNav active="projects" />

        <header className="mt-16 md:mt-24 pb-8 border-b border-black/15">
          <h1
            className="text-[32px] md:text-[40px] font-semibold tracking-tight leading-[1.1]"
          >
            Projects
          </h1>
        </header>

        <ul>
          {projects.map((project) => (
            <li key={project.id} className="border-b border-black/15">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <footer className="mt-20 pt-6 border-t border-black/15">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-black/50 hover:text-black transition-colors"
          >
            &larr; Back to about
          </Link>
        </footer>
      </div>
    </main>
  );
}

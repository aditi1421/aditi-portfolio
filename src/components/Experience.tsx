"use client";

import { motion } from "framer-motion";

const ROLES = [
  {
    title: "Software Engineer",
    company: "Nyayanidhi",
    period: "Dec 2024 – Mar 2025",
    description:
      "Built multi-agent AI drafting pipelines and a document intelligence system for large-scale legal PDFs with confidence-scored categorization. Created a multilingual English/Kannada translation portal used by advocates and court staff.",
  },
  {
    title: "Software Research Engineer",
    company: "Illinois Institute of Technology",
    period: "Jan 2024 – Jun 2025",
    description:
      "Led qualitative research with stroke survivors on interpersonal factors in mobility aid design. Conducted IRB-approved semi-structured interviews globally. First author of a paper submitted to ACM CSCW '25, collaborating with three professors and Shirley Ryan Ability Lab.",
  },
  {
    title: "Autonomous Systems Engineer",
    company: "EcoCAR EV Challenge",
    period: "Aug 2023 – May 2024",
    description:
      "Engineered adaptive cruise control, lane centering, and CAN-based communication systems for a 2023 Cadillac LYRIQ using sensor fusion and V2X data, as part of the DOE-sponsored national collegiate competition.",
  },
  {
    title: "Systems Engineering Intern",
    company: "Illinois Institute of Technology",
    period: "Aug 2023 – Dec 2023",
    description:
      "Optimized Linux-based network packet filtering by 20%, refactored legacy C++ backend modules reducing CPU usage by 15%, and migrated legacy networking scripts to modern C++ standards.",
  },
  {
    title: "Software Developer Intern",
    company: "MapMyIndia",
    period: "Jan 2023 – Aug 2023",
    description:
      "Built scalable image recognition pipelines with TensorFlow and OpenCV (30% throughput improvement), implemented RESTful APIs with secure authentication, and refactored a monolithic backend into modular microservices using Python and Flask.",
  },
  {
    title: "Data Analytics Intern",
    company: "National University of Singapore",
    period: "Jun 2022 – Jul 2022",
    description:
      "Designed an assistive prototype for visually impaired users combining real-time object detection (CNNs) with spatialized audio feedback for safer navigation.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-4 md:mx-8 mt-4 md:mt-8 border border-border bg-surface px-8 md:px-12 py-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="grid grid-cols-12 gap-4 pb-4 border-b border-border mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="col-span-3">
            <span className="font-mono text-[14px] md:text-[16px] tracking-[0.1em] text-fg uppercase font-medium">
              Role
            </span>
          </div>
          <div className="col-span-6">
            <span className="font-mono text-[14px] md:text-[16px] tracking-[0.1em] text-fg uppercase font-medium">
              Description
            </span>
          </div>
          <div className="col-span-3 text-right">
            <span className="font-mono text-[14px] md:text-[16px] tracking-[0.1em] text-fg uppercase font-medium">
              Period
            </span>
          </div>
        </motion.div>

        {/* Roles */}
        {ROLES.map((role, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-12 gap-4 py-5 md:py-6 border-t border-border first:border-t-0 group hover:bg-accent/5 transition-colors"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            {/* Role + Company */}
            <div className="col-span-12 md:col-span-3">
              <h3
                className="text-[15px] md:text-[16px] text-fg"
                style={{ fontFamily: "var(--font-instrument), serif" }}
              >
                {role.title}
              </h3>
              <p className="font-mono text-[11px] text-muted mt-0.5">
                {role.company}
              </p>
            </div>

            {/* Description */}
            <div className="col-span-12 md:col-span-6">
              <p className="font-mono text-[12px] text-fg/60 leading-[1.8]">
                {role.description}
              </p>
            </div>

            {/* Period */}
            <div className="col-span-12 md:col-span-3 text-right">
              <span className="font-mono text-[11px] text-muted">
                {role.period}
              </span>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}

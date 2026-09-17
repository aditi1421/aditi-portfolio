"use client";

import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-4 md:mx-8 my-4 md:my-8 border border-border bg-surface px-8 md:px-12 py-12"
    >
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <p
            className="text-2xl md:text-3xl text-fg leading-snug"
            style={{ fontFamily: "var(--font-instrument), serif" }}
          >
            Let&apos;s connect.
          </p>
          <p className="font-mono text-[12px] text-muted mt-2">
            Open to opportunities and collaborations.
          </p>
        </div>

        <SocialLinks />
      </motion.div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border flex justify-between">
        <span className="font-mono text-[10px] text-muted/50 uppercase tracking-[0.1em]">
          Aditi Kumar &mdash; 2026
        </span>
        <span />
      </div>
    </section>
  );
}

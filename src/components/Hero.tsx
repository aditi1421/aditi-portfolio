"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col border border-border mx-4 md:mx-8 mt-4 md:mt-8 bg-surface">
      {/* Top nav row */}
      <div className="px-8 md:px-12 pt-8 md:pt-10">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[16px] md:text-[18px] tracking-[0.1em] text-fg uppercase font-medium">
            Aditi Kumar
          </span>
          <a
            href="#contact"
            className="font-mono text-[16px] md:text-[18px] text-fg hover:text-fg/60 transition-colors underline underline-offset-4 mt-1 sm:mt-0"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Main content — text + photo side by side */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-center px-8 md:px-12 py-12 md:py-0 gap-10 md:gap-16 max-w-5xl mx-auto w-full">
        {/* Left — description */}
        <motion.div
          className="flex-1 flex flex-col justify-center max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p
            className="text-[22px] md:text-[26px] leading-[1.6] text-fg/80"
            style={{ fontFamily: "var(--font-instrument), serif" }}
          >
            AI and machine learning applied to domains that matter. I build
            autonomous systems that learn, reason, and optimize — from
            training LLMs to automating legal research.
          </p>
          <p
            className="text-[20px] md:text-[23px] leading-[1.6] text-muted mt-6 max-w-xl"
            style={{ fontFamily: "var(--font-instrument), serif" }}
          >
            Prev. at a legal tech startup in Bangalore and built
            rehabilitation technology for stroke survivors.
            <br /><br />
            CS from Illinois Institute of Technology, Chicago.
          </p>

          <a
            href="#projects"
            className="inline-block mt-8 bg-accent text-fg px-8 py-3.5 font-mono text-[12px] tracking-[0.1em] uppercase hover:bg-accent-hover transition-colors font-medium w-fit"
          >
            See projects &rarr;
          </a>
        </motion.div>

        {/* Right — photo, pinned to right edge */}
        <motion.div
          className="shrink-0 flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="w-60 h-[320px] md:w-72 md:h-[380px] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="/aditi.jpg"
              alt="Aditi Kumar"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Category row */}
      <motion.div
        className="border-t border-border px-8 md:px-12 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Machine Learning", dot: true },
            { label: "Healthcare" },
            { label: "Legal Tech" },
            { label: "Autonomous Systems" },
          ].map((item) => (
            <span
              key={item.label}
              className="text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] text-fg flex items-center gap-2"
              style={{ fontFamily: "var(--font-instrument), serif" }}
            >
              {item.dot && (
                <span className="w-3 h-3 rounded-full bg-accent inline-block shrink-0" />
              )}
              {item.label}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

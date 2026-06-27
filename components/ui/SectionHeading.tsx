"use client";

import { motion } from "motion/react";

const anim = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  heading,
  subheading,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      {...anim}
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-16`}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tighter leading-none ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed max-w-[65ch] ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-text-muted"}`}
        >
          {subheading}
        </p>
      )}
    </motion.div>
  );
}

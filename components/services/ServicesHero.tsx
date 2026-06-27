"use client";

import { motion } from "motion/react";

export function ServicesHero() {
  return (
    <section className="relative min-h-[40dvh] sm:min-h-[50dvh] bg-primary flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,163,74,0.12),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-none text-white"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto"
        >
          Comprehensive occupational health and wellness services, delivered at
          your workplace.
        </motion.p>
      </div>
    </section>
  );
}

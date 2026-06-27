"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "motion/react";
import { stats } from "@/lib/constants";

function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const isNumeric = /^\d+/.test(value);
  const numMatch = value.match(/^(\d+)(.*)$/);
  const targetNum = numMatch ? parseInt(numMatch[1]) : 0;
  const suffix = numMatch ? numMatch[2] : "";
  const [count, setCount] = useState(0);
  const [labelVisible, setLabelVisible] = useState(false);

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    const controls = animate(0, targetNum, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setLabelVisible(true),
    });
    return controls.stop;
  }, [isInView, isNumeric, targetNum]);

  useEffect(() => {
    if (isInView && !isNumeric) setLabelVisible(true);
  }, [isInView, isNumeric]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight">
        {isNumeric ? count : value}
        {isNumeric && suffix}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={labelVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        className="mt-1.5 text-base text-text-muted font-medium"
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

export function StatsBar() {
  return (
    <section className="relative bg-accent-light overflow-hidden">
      <div
        className="absolute inset-0 bg-accent-light"
        style={{
          clipPath: "polygon(0 0, 100% 40px, 100% 100%, 0 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

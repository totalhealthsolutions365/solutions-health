"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { PiCalendarCheck, PiTruck, PiHeartbeat } from "react-icons/pi";
import { howItWorks } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  CalendarCheck: PiCalendarCheck,
  Truck: PiTruck,
  Heartbeat: PiHeartbeat,
};

function StepCard({ step, icon, title, description, index }: {
  step: string; icon: string; title: string; description: string; index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const Icon = iconMap[icon as keyof typeof iconMap] || PiCalendarCheck;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-14 h-14 rounded-full bg-accent-light dark:bg-primary/20 flex items-center justify-center mb-6"
      >
        <Icon size={26} className="text-primary" />
      </motion.div>
      <span className="text-xs font-mono font-medium text-accent tracking-widest mb-2">
        {step}
      </span>
      <h3 className="text-lg font-display font-semibold text-text-primary tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-base text-text-muted leading-relaxed max-w-xs">
        {description}
      </p>
    </motion.div>
  );
}

export function HowItWorks() {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: false, margin: "-80px" });

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            heading="Simple to Set Up. Powerful for Your Team."
            subheading="From booking to results - we make workplace wellness effortless."
          />
        </FadeIn>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-8">
          <motion.div
            ref={lineRef}
            initial={{ scaleX: 0 }}
            animate={lineInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute top-16 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-accent/40 via-accent to-accent/40 origin-left"
          />

          {howItWorks.map((step, i) => (
            <StepCard
              key={step.title}
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

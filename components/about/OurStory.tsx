"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export function OurStory() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn y={24} className="order-2 lg:order-1">
            <span className="text-xs font-mono font-medium text-accent tracking-widest uppercase">
              Who We Are
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tighter leading-none text-text-primary">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-base text-text-muted leading-relaxed">
              <p>
                Total Health was founded with a single belief: that
                a healthy employee is a company&apos;s most valuable asset. We saw too
                many workers going without basic health screenings not because
                they didn&apos;t care, but because access was limited and time was
                short.
              </p>
              <p>
                Today, we operate as a network of specialist health practitioners
                who visit companies across South Africa, delivering comprehensive
                wellness programs directly to the workplace. From blood tests and
                biometric screenings to dieticians, dentists, and psychologists
                we bring the clinic to your team, completely free of charge.
              </p>
            </div>
          </FadeIn>

          <FadeIn y={24} delay={0.15} className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Our Story (About).jpg"
                alt="Healthcare professionals at work"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

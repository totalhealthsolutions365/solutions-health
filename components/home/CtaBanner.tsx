"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function CtaBanner() {
  return (
    <section className="relative bg-primary overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-animate-gradient"
        style={{
          backgroundImage: "radial-gradient(ellipse_at_center,rgba(22,163,74,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(22,163,74,0.08),transparent_50%)",
        }}
      />

      <FadeIn y={24} className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tighter leading-none text-white">
          Ready to Invest in Your Team?
        </h2>
        <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed max-w-lg mx-auto">
          Transform your workforce health with Total Health. Workplace
          wellness that puts your team first.
        </p>
        <div className="mt-8 hover-glow rounded-full">
          <Button href="/contact" className="w-full sm:w-auto">Book a Wellness Day</Button>
        </div>
      </FadeIn>
    </section>
  );
}

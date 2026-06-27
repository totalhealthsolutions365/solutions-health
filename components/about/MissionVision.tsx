"use client";

import { PiTarget, PiEye } from "react-icons/pi";
import { FadeInStagger, FadeInItem, FadeIn } from "@/components/ui/FadeIn";

export function MissionVision() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeInStagger stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeInItem>
              <div className="bg-surface rounded-2xl p-5 sm:p-8 md:p-10 border border-zinc-100 dark:border-zinc-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(22,163,74,0.06)]">
              <div className="w-12 h-12 rounded-xl bg-accent-light dark:bg-primary/20 flex items-center justify-center mb-5">
                <PiTarget size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold tracking-tight text-text-primary">
                Our Mission
              </h3>
              <p className="mt-3 text-base text-text-muted leading-relaxed">
                To empower South African employees with access to comprehensive,
                high-quality health screenings delivered conveniently at the
                workplace, at no cost to them.
              </p>
            </div>
          </FadeInItem>

          <FadeInItem>
            <div className="bg-surface rounded-2xl p-5 sm:p-8 md:p-10 border border-zinc-100 dark:border-zinc-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(22,163,74,0.06)]">
              <div className="w-12 h-12 rounded-xl bg-accent-light dark:bg-primary/20 flex items-center justify-center mb-5">
                <PiEye size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold tracking-tight text-text-primary">
                Our Vision
              </h3>
              <p className="mt-3 text-base text-text-muted leading-relaxed">
                A South Africa where every working person has the knowledge and
                tools to take control of their health, leading to more productive,
                fulfilled, and sustainable workforces.
              </p>
            </div>
          </FadeInItem>
        </FadeInStagger>
      </div>
    </section>
  );
}

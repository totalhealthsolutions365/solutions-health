"use client";

import { PiShieldCheck, PiStar, PiUsersThree } from "react-icons/pi";
import { values } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, FadeInItem, FadeIn } from "@/components/ui/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck: PiShieldCheck,
  Star: PiStar,
  UsersThree: PiUsersThree,
};

export function Values() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            heading="What Guides Us"
            subheading="Our values shape every interaction, every screening, and every partnership."
          />
        </FadeIn>

        <FadeInStagger stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => {
            const Icon = iconMap[v.icon as keyof typeof iconMap] || PiShieldCheck;
            return (
              <FadeInItem key={v.title}>
                <div className="bg-surface rounded-2xl p-5 sm:p-8 md:p-10 border border-zinc-100 dark:border-zinc-800 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(22,163,74,0.06)] hover:border-accent/20">
                  <div className="w-14 h-14 rounded-full bg-accent-light dark:bg-primary/20 flex items-center justify-center mx-auto mb-5 transition-all duration-200 group-hover:animate-pulse-subtle">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-text-primary tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-base text-text-muted leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}

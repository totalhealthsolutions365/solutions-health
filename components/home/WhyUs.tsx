"use client";

import { PiCoin, PiCertificate, PiGear } from "react-icons/pi";
import { whyUs } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, FadeInItem, FadeIn } from "@/components/ui/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  Coin: PiCoin,
  Certificate: PiCertificate,
  Gear: PiGear,
};

export function WhyUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            heading="Why Companies Choose Total Health"
            subheading="Three reasons South African businesses trust us with their teams' health."
          />
        </FadeIn>

        <FadeInStagger stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUs.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || PiCertificate;
            return (
              <FadeInItem key={item.title}>
                <div className="group relative bg-surface rounded-2xl p-5 sm:p-8 md:p-10 border border-zinc-100 dark:border-zinc-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(22,163,74,0.08)] hover:border-accent/20">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 transition-all duration-200 group-hover:animate-pulse-subtle">
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-text-primary tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base text-text-muted leading-relaxed">
                    {item.description}
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

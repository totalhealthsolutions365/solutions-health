"use client";

import {
  PiHeartbeat,
  PiAppleLogo,
  PiTooth,
  PiEye,
  PiEar,
  PiBrain,
} from "react-icons/pi";
import { services } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  Heartbeat: PiHeartbeat,
  AppleLogo: PiAppleLogo,
  Tooth: PiTooth,
  Eye: PiEye,
  Ear: PiEar,
  Brain: PiBrain,
};

export function ServicesPreview() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          heading="Comprehensive Care, Delivered to Your Door"
          subheading="Our team of specialists covers all the key health areas your employees need - brought directly to your workplace."
        />

        <FadeInStagger stagger={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || PiHeartbeat;
            return (
              <FadeInItem key={service.title}>
                <div className="group relative bg-surface rounded-2xl p-4 sm:p-6 md:p-8 border border-zinc-100 dark:border-zinc-800 transition-all duration-250 ease hover:-translate-y-1.5 hover:shadow-[0_12px_48px_rgba(22,163,74,0.1)] hover:border-accent/30">
                  <div className="w-12 h-12 rounded-xl bg-accent-light dark:bg-primary/20 flex items-center justify-center mb-5 transition-all duration-250 ease group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-text-primary tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>

        <FadeInStagger className="mt-12 text-center">
            <FadeInItem>
            <Button href="/services" className="w-full sm:w-auto">View All Services</Button>
          </FadeInItem>
        </FadeInStagger>
      </div>
    </section>
  );
}

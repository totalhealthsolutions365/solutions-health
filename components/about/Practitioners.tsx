"use client";

import {
  PiUser,
  PiAppleLogo,
  PiTooth,
  PiEye,
  PiEar,
  PiWheelchair,
  PiBrain,
  PiBarbell,
} from "react-icons/pi";
import { practitioners } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, FadeInItem, FadeIn } from "@/components/ui/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  User: PiUser,
  AppleLogo: PiAppleLogo,
  Tooth: PiTooth,
  Eye: PiEye,
  Ear: PiEar,
  Wheelchair: PiWheelchair,
  Brain: PiBrain,
  Barbell: PiBarbell,
};

export function Practitioners() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            heading="A Team of Registered Specialists"
            subheading="Every practitioner on our team is registered with the Health Professions Council of South Africa (HPCSA)."
          />
        </FadeIn>

        <FadeInStagger stagger={0.04} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {practitioners.map((p) => {
            const Icon = iconMap[p.icon] || PiUser;
            return (
              <FadeInItem key={p.title}>
                <div className="group bg-background rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-accent-light dark:hover:bg-primary/10 hover:shadow-[0_4px_16px_rgba(22,163,74,0.08)]">
                  <div className="w-10 h-10 rounded-lg bg-accent-light dark:bg-primary/20 flex items-center justify-center mx-auto mb-3 transition-all duration-200 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <p className="text-base font-medium text-text-primary leading-snug">
                    {p.title}
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

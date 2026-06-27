"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  PiHeartbeat,
  PiDrop,
  PiAppleLogo,
  PiTooth,
  PiEye,
  PiEar,
  PiWheelchair,
  PiBrain,
  PiBarbell,
} from "react-icons/pi";

const iconMap: Record<string, React.ElementType> = {
  Heartbeat: PiHeartbeat,
  Drop: PiDrop,
  AppleLogo: PiAppleLogo,
  Tooth: PiTooth,
  Eye: PiEye,
  Ear: PiEar,
  Wheelchair: PiWheelchair,
  Brain: PiBrain,
  Barbell: PiBarbell,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const imageMap: Record<string, string> = {
  "Health Risk Assessments": "/images/Health Risk Assessments.jpg",
  "Blood Tests & Biometric Screening": "/images/Blood Tests.jpg",
  "Dietetics & Nutrition": "/images/Dietetics & Nutrition.jpg",
  "Dental Health Screening": "/images/Dental Health.jpg",
  "Vision & Optometry": "/images/Vision & Optometry.jpg",
  "Hearing & Audiology": "/images/Hearing & Audiology.jpg",
  "Physiotherapy": "/images/Physiotherapy.jpg",
  "Psychology & Mental Health": "/images/Psychology & Mental Health.jpg",
  "Biokinetics": "/images/Biokinetics.jpg",
};

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  const Icon = iconMap[icon] || PiHeartbeat;
  const imageSrc = imageMap[title];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8 sm:py-12 md:py-16 transition-all duration-200 ${
        index > 0 ? "border-t border-zinc-100 dark:border-zinc-800" : ""
      }`}
    >
      <div className={`${isEven ? "lg:order-1" : "lg:order-2"} transition-all duration-200 group-hover:translate-y-[-2px]`}>
        <div className="w-14 h-14 rounded-2xl bg-accent-light dark:bg-primary/20 flex items-center justify-center mb-5 transition-all duration-200 group-hover:scale-110 group-hover:rotate-3">
          <Icon size={28} className="text-primary" />
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-tight text-text-primary transition-colors duration-200 group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-4 text-sm sm:text-base text-text-muted leading-relaxed max-w-lg">
          {description}
        </p>
      </div>

      <div className={`${isEven ? "lg:order-2" : "lg:order-1"} transition-all duration-200 group-hover:scale-[1.02]`}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-200 group-hover:shadow-[0_8px_32px_rgba(22,163,74,0.12)]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </motion.div>
  );
}

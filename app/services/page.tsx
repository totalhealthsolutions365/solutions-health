import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesCta } from "@/components/services/ServicesCta";
import { allServices } from "@/lib/constants";
import { ServiceCard } from "@/components/services/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function Services() {
  return (
    <>
      <ServicesHero />
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          {allServices.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={i}
            />
          ))}
        </div>
      </section>
      <ServicesCta />
    </>
  );
}

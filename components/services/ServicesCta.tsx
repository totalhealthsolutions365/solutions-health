"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

export function ServicesCta() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto px-4 sm:px-6 text-center"
      >
        <p className="text-lg text-text-muted leading-relaxed">
          Not sure which services are right for your company? Let&apos;s talk.
        </p>
        <div className="mt-6">
          <Button href="/contact">Book a Consultation</Button>
        </div>
      </motion.div>
    </section>
  );
}

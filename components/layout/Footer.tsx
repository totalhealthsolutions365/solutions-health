"use client";

import Image from "next/image";
import Link from "next/link";
import { PiPhone, PiEnvelope, PiWhatsappLogo } from "react-icons/pi";
import { siteConfig, navLinks } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <FadeIn y={24} className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Total Health"
                width={120}
                height={38}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-base leading-relaxed max-w-xs">
              Bringing specialist health screenings directly to your workplace at
              no cost to your employees.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-4 text-white/60">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors duration-200 block py-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-4 text-white/60">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-white/80 text-sm">
                <PiPhone size={14} className="text-accent-light shrink-0" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/80 text-sm">
                <PiEnvelope size={14} className="text-accent-light shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/80 text-sm">
                <PiWhatsappLogo size={14} className="text-accent-light shrink-0" />
                <span>{siteConfig.whatsapp}</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/50">{siteConfig.hours}</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/50 leading-relaxed max-w-3xl mx-auto">
            {siteConfig.hpcsa}
          </p>
          <p className="text-xs text-white/40 mt-3">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}

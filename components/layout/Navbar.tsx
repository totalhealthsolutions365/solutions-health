"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { PiList, PiX } from "react-icons/pi";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    setMounted(true);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={mounted ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 pt-6 pointer-events-none transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl"
          : ""
      } lg:bg-transparent lg:backdrop-blur-none`}
    >
      {/* Logo - top left, no background */}
      <Link
        href="/"
        className="pointer-events-auto absolute left-4 sm:left-6 top-4 sm:top-5 flex items-center gap-2 sm:gap-3 z-10"
      >
        <Image
          src="/logo.png"
          alt="Total Health"
          width={200}
          height={60}
          className="h-12 sm:h-14 md:h-16 w-auto object-contain"
        />
        <span className={`font-display font-bold text-xl sm:text-2xl md:text-3xl tracking-tight transition-colors duration-300 drop-shadow-lg ${
          scrolled ? "text-primary" : "text-white"
        }`}>
          Total Health
        </span>
      </Link>

      {/* Desktop centered pill nav */}
      <div className="hidden lg:flex justify-center">
        <div
          className={`pointer-events-auto transition-all duration-300 ease ${
            scrolled
              ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
              : "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl"
          } rounded-full border border-white/20 dark:border-white/10 px-6 h-14 flex items-center gap-6`}
        >
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-3 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-text-muted dark:text-zinc-400 hover:text-text-primary dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-accent-light dark:bg-primary/20 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <Button href="/contact">Book a Wellness Day</Button>
        </div>
      </div>

      {/* Mobile hamburger button - top right corner */}
      <button
        onClick={() => setOpen(!open)}
        className="pointer-events-auto absolute right-4 sm:right-6 top-4 sm:top-5 lg:hidden w-10 h-10 rounded-full bg-white/90 dark:bg-zinc-800/90 backdrop-blur border border-zinc-200 dark:border-zinc-700 shadow-sm flex items-center justify-center text-text-primary dark:text-white transition-colors duration-200 hover:bg-white dark:hover:bg-zinc-800"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PiX size={18} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PiList size={18} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile dropdown menu - top right corner card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto absolute top-20 right-4 sm:right-6 w-72 bg-white dark:bg-zinc-900 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-zinc-100 dark:border-zinc-800 p-4 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-accent-light dark:bg-primary/20 text-primary"
                        : "text-text-muted dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-text-primary dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <Button href="/contact" className="w-full">Book a Wellness Day</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

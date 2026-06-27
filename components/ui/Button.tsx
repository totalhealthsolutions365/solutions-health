"use client";

import { PiArrowRight } from "react-icons/pi";
import Link from "next/link";
import { motion } from "motion/react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 active:scale-[0.97]";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-light hover:shadow-[0_4px_20px_rgba(11,77,46,0.3)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]",
    secondary:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-accent",
    ghost: "text-primary hover:bg-primary/5",
  };

  const content = (
    <>
      <span>{children}</span>
      <span className="w-8 h-8 rounded-full bg-white/10 dark:bg-white/10 flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105">
        <PiArrowRight size={14} className="text-white" />
      </span>
    </>
  );

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.span
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link href={href} className={cls}>
          {content}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${cls} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {content}
    </motion.button>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const slideIn: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0, 0, 0.2, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

interface RevealProps {
  children: ReactNode;
  variant?: "slide" | "fade";
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
}

export function Reveal({
  children,
  variant = "slide",
  delay = 0,
  className,
}: RevealProps) {
  const v = variant === "slide" ? slideIn : fadeInUp;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
      variants={v}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const slideInVariant = slideIn;
export const fadeInUpVariant = fadeInUp;
export const staggerVariant = stagger;

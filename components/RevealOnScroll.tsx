"use client";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef } from "react";

const exhale = [0.25, 0.46, 0.45, 0.94] as const;

const allVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: exhale } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.0, ease: exhale } },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: exhale } },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: exhale } },
  },
  scaleReveal: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: exhale } },
  },
};

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: keyof typeof allVariants;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className,
  variant = "fadeUp",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? "visible" : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={allVariants[variant]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

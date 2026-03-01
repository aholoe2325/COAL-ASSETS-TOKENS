"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-8 py-3 rounded-lg font-semibold transition-smooth hover-glow text-center cursor-pointer";

  const variants = {
    primary: `${baseStyles} bg-amber-600 text-white dark:bg-cat-gold dark:text-cat-dark hover:bg-amber-700 dark:hover:bg-cat-gold/90`,
    secondary: `${baseStyles} border-2 border-amber-600 text-amber-600 dark:border-cat-gold dark:text-cat-gold hover:bg-amber-50 dark:hover:bg-cat-gold/10`,
  };

  return (
    <motion.button
      className={`${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";

export function LandingHeader() {
  const { isDark, toggleTheme } = useTheme();
  const router = useRouter();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-cat-dark/30 backdrop-blur-md border-b border-white/20 dark:border-cat-gold/10 px-4 md:px-8 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
          <Image 
            src="https://image2url.com/r2/default/images/1772276387701-ffac521d-c23e-4f60-8a5a-37e9a00a9964.png" 
            alt="CAT Logo" 
            width={45} 
            height={45} 
            className="rounded-lg"
            priority
          />
          <div className="hidden md:flex flex-col">
            <span className="font-bold text-base text-gray-900 dark:text-cat-text">CAT</span>
            <span className="text-xs text-gray-600 dark:text-gray-400">Coal Assets Token</span>
          </div>
        </Link>

        {/* Right section */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-amber-600 dark:text-cat-gold hover:text-amber-700 dark:hover:text-cat-gold/80 transition-smooth rounded-lg bg-white/30 dark:bg-cat-charcoal/50 hover:bg-white/50 dark:hover:bg-cat-charcoal/70 shadow-sm"
            title={isDark ? "Light mode" : "Dark mode"}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Create Account Button */}
          <motion.button
            onClick={() => router.push("/auth/signup")}
            className="px-4 md:px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 dark:from-cat-gold dark:to-cat-gold/80 dark:hover:from-cat-gold/90 dark:hover:to-cat-gold/70 text-white dark:text-gray-900 font-semibold rounded-lg transition-smooth shadow-lg hover:shadow-xl text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Create Account
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

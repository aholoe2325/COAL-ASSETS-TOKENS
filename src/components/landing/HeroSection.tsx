"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCachedMediaUrl } from "@/utils/mediaCache";

export function HeroSection() {
  const router = useRouter();
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    getCachedMediaUrl("https://image2url.com/r2/default/videos/1772281224772-ad822feb-a7cc-4c7e-85da-97cce89f4226.mp4").then(setVideoUrl);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-amber-50 to-gray-100 dark:bg-gradient-to-br dark:from-cat-dark dark:via-cat-charcoal/80 dark:to-cat-charcoal">
      {/* Background video */}
      {videoUrl && (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-30"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Animated background gradient overlay - more visible */}
      <div className="absolute inset-0 opacity-60 dark:opacity-80 animate-pulse">
        <div className="absolute inset-0 bg-gradient-conic from-amber-300/40 via-transparent to-emerald-300/40 dark:from-cat-gold/50 dark:via-cat-charcoal dark:to-cat-emerald/50" />
      </div>
      
      {/* Radial gradient from logo - brighter and larger */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-gradient-radial from-cat-gold/30 via-cat-gold/10 to-transparent dark:from-cat-gold/40 dark:via-cat-gold/15 dark:to-transparent rounded-full blur-2xl opacity-70 animate-pulse" />

      {/* Background texture */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-emerald-500/10 dark:from-cat-gold/15 dark:via-transparent dark:to-cat-emerald/15" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Card - Modern gradient */}
        <motion.div
          className="mb-10 flex flex-col items-center p-10 rounded-3xl bg-gradient-to-br from-white via-amber-50/50 to-emerald-50/30 dark:bg-gradient-to-br dark:from-cat-charcoal/95 dark:via-cat-gold/10 dark:to-cat-emerald/10 shadow-2xl border-2 border-amber-200 dark:border-cat-gold/40 relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          {/* Gradient background overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/5 via-transparent to-emerald-300/5 dark:from-cat-gold/15 dark:via-transparent dark:to-cat-emerald/15 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <Image 
              src="https://image2url.com/r2/default/images/1772276387701-ffac521d-c23e-4f60-8a5a-37e9a00a9964.png" 
              alt="CAT Logo" 
              width={140} 
              height={140} 
              className="rounded-xl shadow-xl mb-4 border-2 border-amber-200 dark:border-cat-gold/40"
              priority
            />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-emerald-600 dark:from-cat-gold dark:to-cat-emerald bg-clip-text text-transparent mb-1">CAT</h2>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Coal Assets Token</p>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-cat-text"
          variants={itemVariants}
        >
          Tokenizing Real-World Coal Assets —{" "}
          <span className="bg-gradient-to-r from-amber-600 to-emerald-600 dark:from-cat-gold dark:to-cat-emerald bg-clip-text text-transparent">The Sharia-Compliant Way</span>
        </motion.h1>

        <motion.div
          className="p-6 mb-8 rounded-xl bg-gradient-to-r from-white via-gray-50 to-white dark:from-cat-charcoal/70 dark:via-cat-charcoal/50 dark:to-cat-charcoal/70 border border-amber-100 dark:border-cat-gold/20 shadow-lg"
          variants={itemVariants}
        >
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            ✓ Transparent. ✓ Asset-backed. ✓ Ethical. ✓ Powered by blockchain.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Button variant="primary" onClick={() => router.push("/auth/signup")}>
            Get Started
          </Button>
          <Button variant="secondary">View Whitepaper</Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-amber-600 dark:border-cat-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-amber-600 dark:bg-cat-gold rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}

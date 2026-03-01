"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function StatusBanner() {

  return (
    <motion.div
      className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://image2url.com/r2/default/videos/1772287448943-3c6f34b9-36c3-4529-9c99-38c79ca3ad9f.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay - Always dark for consistent brand look */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          {/* Online Status Dot */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/70"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(16, 185, 129, 0.7)",
                  "0 0 0 8px rgba(16, 185, 129, 0.3)",
                  "0 0 0 0 rgba(16, 185, 129, 0.7)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Text */}
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-cat-gold tracking-wider">
                  SIDRACHAIN-BLOCKCHAIN
                </h2>
                <Image
                  src="https://image2url.com/r2/default/images/1772288434807-f6ee6c1e-ae55-4647-8dc2-032b697c4bf9.png"
                  alt="Sidrachain Logo"
                  width={24}
                  height={24}
                  className="drop-shadow-lg"
                />
              </div>
              <p className="text-sm text-emerald-400 font-medium">ON LIGNE</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side Stats */}
        <motion.div
          className="text-right hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl font-bold text-cat-gold mb-2">Live Trading</p>
          <p className="text-sm text-gray-300">24/7 Market Active</p>
        </motion.div>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cat-gold via-cat-emerald to-transparent" />
    </motion.div>
  );
}

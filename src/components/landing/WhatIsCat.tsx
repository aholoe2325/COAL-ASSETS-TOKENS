"use client";

import { motion } from "framer-motion";
import { Globe, Lock, Leaf, CoinsIcon } from "lucide-react";

const features = [
  {
    icon: CoinsIcon,
    title: "Tokenized Coal Reserves",
    description: "Real-world coal assets verified and tokenized on blockchain",
  },
  {
    icon: Globe,
    title: "Fractional Ownership",
    description: "Access institutional-grade investments with lower barriers",
  },
  {
    icon: Lock,
    title: "Blockchain-Secured",
    description: "Immutable, transparent, and cryptographically secured",
  },
  {
    icon: Leaf,
    title: "Ethical & Compliant",
    description: "Sharia-compliant, environmentally conscious framework",
  },
];

export function WhatIsCat() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-cat-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-cat-text">
            What is <span className="gradient-text dark:gradient-text text-amber-600">CAT?</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A revolutionary platform bridging traditional energy assets with modern blockchain infrastructure
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 shadow-sm p-6 rounded-xl hover:shadow-md dark:hover-glow transition-smooth group border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 text-amber-600 dark:text-cat-gold group-hover:text-emerald-600 dark:group-hover:text-cat-emerald transition-smooth">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-cat-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

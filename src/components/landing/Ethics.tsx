"use client";

import { motion } from "framer-motion";
import { Leaf, Eye, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Responsible Investment",
    description: "Energy infrastructure that supports sustainable development",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description: "Every transaction auditable and verifiable on-chain",
  },
  {
    icon: Leaf,
    title: "Carbon-Credit Ready",
    description: "Future integration with global carbon markets",
  },
];

export function Ethics() {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-cat-charcoal/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-cat-text">
            🌱 Ethics & Sustainability
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Building a financial system that respects people, principles, and our planet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 shadow-sm p-8 rounded-xl hover:shadow-md dark:hover-glow transition-smooth border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-emerald-600 dark:text-cat-emerald mb-4">
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-cat-text mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

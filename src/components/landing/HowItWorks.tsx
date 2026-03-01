"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Coal Assets Verified",
    description: "Real-world reserves audited and authenticated",
  },
  {
    number: "02",
    title: "Tokenization",
    description: "Assets converted to blockchain tokens",
  },
  {
    number: "03",
    title: "Blockchain Issuance",
    description: "Tokens deployed on SidraChain",
  },
  {
    number: "04",
    title: "Investor Participation",
    description: "Fractional ownership access begins",
  },
  {
    number: "05",
    title: "Profit Distribution",
    description: "Smart contract automated returns",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-cat-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-cat-text">
            How It Works
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-lg">Simple, transparent, five-step process</p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-6">
                {/* Step indicator */}
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:to-cat-charcoal/70 shadow-sm border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40 flex items-center justify-center">
                  <span className="text-3xl font-bold gradient-text dark:gradient-text text-amber-600">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 shadow-sm p-6 rounded-xl hover:shadow-md dark:hover-glow transition-smooth border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-cat-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400">{step.description}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight
                      className="text-amber-600/30 dark:text-cat-gold/50"
                      size={32}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

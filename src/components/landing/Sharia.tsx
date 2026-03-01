"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const principles = [
  "Real asset backing - No fractional reserves",
  "No Riba (interest) - Ethical profit sharing only",
  "No Gharar (uncertainty) - Full transparency",
  "Scholar oversight - Sharia board verification",
  "Community governance - Democratic participation",
];

export function Sharia() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-cat-charcoal/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left side - Text */}
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-cat-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              🕌 Sharia Compliance
              <span className="block gradient-text dark:gradient-text text-amber-600 mt-2">Built from the Ground Up</span>
            </motion.h2>

            <motion.p
              className="text-gray-700 dark:text-gray-400 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              CAT is designed with Islamic finance principles at its core. Every
              mechanism, from tokenization to profit distribution, respects
              Sharia law and ethical standards.
            </motion.p>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <CheckCircle className="text-emerald-600 dark:text-cat-emerald mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-900 dark:text-cat-text">{principle}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Visual */}
          <motion.div
            className="relative h-96 bg-gradient-to-br from-emerald-500/10 to-amber-500/10 dark:from-cat-emerald/10 dark:to-cat-gold/10 rounded-xl bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40 p-8 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-cat-text mb-2">
                Verified & Certified
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                Ongoing oversight by Islamic finance scholars
              </p>
              <div className="mt-6 flex gap-2 justify-center flex-wrap">
                {["AAOIFI", "Deloitte", "Scholar Board"].map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-cat-emerald/20 dark:text-cat-emerald rounded-full text-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { TrendingUp, Calendar } from "lucide-react";

export function ProfitDistribution() {
  const distributions = [
    {
      date: "2026-02-27",
      amount: "250 CAT",
      status: "paid",
    },
    {
      date: "2026-01-27",
      amount: "225 CAT",
      status: "paid",
    },
    {
      date: "2025-12-27",
      amount: "210 CAT",
      status: "paid",
    },
  ];

  return (
    <motion.div
      className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 shadow-sm border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40 rounded-xl p-6 dark:hover-glow hover:shadow-md transition-smooth"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="text-emerald-600 dark:text-cat-emerald" size={24} />
        <h3 className="text-xl font-bold text-gray-900 dark:text-cat-text">🔁 Profit Distribution</h3>
      </div>

      <div className="space-y-4">
        {distributions.map((dist, idx) => (
          <motion.div
            key={idx}
            className="flex items-center justify-between p-3 bg-gray-100 dark:bg-cat-charcoal/30 rounded-lg hover:bg-gray-200 dark:hover:bg-cat-charcoal/50 transition-smooth"
            whileHover={{ x: 5 }}
          >
            <div className="flex items-center gap-3">
              <Calendar size={18} className="dark:text-cat-gold/50 text-amber-600/50" />
              <div>
                <p className="dark:text-cat-text text-gray-900 font-semibold text-sm">
                  Monthly Distribution
                </p>
                <p className="dark:text-gray-400 text-gray-600 text-xs">{dist.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="dark:text-cat-gold text-amber-600 font-bold">{dist.amount}</p>
              <p className="dark:text-cat-emerald text-emerald-600 text-xs font-medium">✓ {dist.status}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6 p-4 dark:bg-cat-emerald/10 bg-emerald-50 rounded-lg dark:border-cat-emerald/20 border-emerald-200 border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="dark:text-cat-emerald text-emerald-700 text-sm font-semibold">
          Total Earned: 685 CAT
        </p>
        <p className="dark:text-gray-400 text-gray-600 text-xs mt-2">
          Smart contracts handle automated distribution
        </p>
      </motion.div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Coins, TrendingUp, CheckCircle, Wallet } from "lucide-react";

const metrics = [
  {
    icon: Coins,
    label: "Total Token Supply",
    value: "1,000,000 CAT",
    change: "+2.5%",
  },
  {
    icon: Wallet,
    label: "Your Holdings",
    value: "5,250 CAT",
    changeColor: "text-cat-emerald",
    change: "+125 CAT",
  },
  {
    icon: TrendingUp,
    label: "Asset Backing Value",
    value: "$52.5M",
    change: "+2.5%",
  },
  {
    icon: CheckCircle,
    label: "Compliance Status",
    value: "✓ Verified",
    change: "100% Compliant",
  },
];

export function DashboardOverview() {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1, delayChildren: 0 }}
    >
      {metrics.map((metric, idx) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={idx}
            className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 shadow-sm border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40 p-4 rounded-xl dark:hover-glow hover:shadow-md transition-smooth"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start justify-between mb-3">
              <Icon className="text-amber-600 dark:text-cat-gold" size={24} />
              <span className="text-emerald-600 dark:text-cat-emerald text-sm font-medium">
                {metric.change}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">{metric.label}</p>
            <p className="text-lg font-bold text-gray-900 dark:text-cat-text">{metric.value}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

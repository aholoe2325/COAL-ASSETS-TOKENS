"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  DollarSign,
  Zap,
  Clock,
  TrendingUp,
  Users,
} from "lucide-react";

export function AdvancedMetrics() {
  const metrics = [
    {
      icon: DollarSign,
      label: "Platform Revenue",
      value: "$125,450",
      change: "+12.5%",
      color: "from-cat-gold/20 to-amber-500/20",
      textColor: "text-cat-gold",
      positive: true,
    },
    {
      icon: Zap,
      label: "Transaction Volume",
      value: "2,450",
      change: "+8.2%",
      color: "from-blue-400/20 to-blue-600/20",
      textColor: "text-blue-500",
      positive: true,
    },
    {
      icon: Clock,
      label: "Avg. Session Time",
      value: "12m 34s",
      change: "+3.1%",
      color: "from-purple-400/20 to-purple-600/20",
      textColor: "text-purple-500",
      positive: true,
    },
    {
      icon: TrendingUp,
      label: "User Retention",
      value: "87.3%",
      change: "+2.1%",
      color: "from-cat-emerald/20 to-green-600/20",
      textColor: "text-cat-emerald",
      positive: true,
    },
    {
      icon: Users,
      label: "Daily Active Users",
      value: "1,245",
      change: "+5.8%",
      color: "from-pink-400/20 to-pink-600/20",
      textColor: "text-pink-500",
      positive: true,
    },
    {
      icon: BarChart3,
      label: "System Uptime",
      value: "99.99%",
      change: "↑ Stable",
      color: "from-cyan-400/20 to-cyan-600/20",
      textColor: "text-cyan-500",
      positive: true,
    },
  ];

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-cat-text mb-6">
        📊 Advanced Metrics
      </h2>

      <motion.div
        className="grid grid-cols-2 lg:grid-cols-3 gap-4"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={idx}
              className={`bg-gradient-to-br ${metric.color} dark:${metric.color} rounded-lg p-4 border border-gray-200 dark:border-cat-gold/10`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    {metric.label}
                  </p>
                  <p className={`text-xl font-bold ${metric.textColor}`}>
                    {metric.value}
                  </p>
                </div>
                <Icon
                  className={`${metric.textColor} flex-shrink-0`}
                  size={20}
                />
              </div>
              <p className="text-xs text-cat-emerald font-semibold mt-2">
                {metric.change}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

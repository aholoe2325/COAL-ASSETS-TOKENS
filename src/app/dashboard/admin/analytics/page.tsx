"use client";

import { motion } from "framer-motion";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 size={32} className="text-cat-gold" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-cat-text">Analytics Dashboard</h1>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {[
            { icon: Users, label: "Total Users", value: "2,845", change: "+12.5%" },
            { icon: DollarSign, label: "Total Assets", value: "$1.2M", change: "+23.8%" },
            { icon: TrendingUp, label: "Avg Portfolio", value: "$4,250", change: "+8.3%" },
            { icon: ArrowUpRight, label: "Growth Rate", value: "18.5%", change: "+4.2%" },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white dark:bg-cat-charcoal/50 rounded-xl p-6 border border-gray-200 dark:border-cat-gold/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-cat-text">{stat.value}</p>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">{stat.change}</p>
                  </div>
                  <Icon size={32} className="text-cat-gold/20" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Analytics Coming Soon */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-cat-gold/10 to-cat-emerald/10 dark:from-cat-gold/5 dark:to-cat-emerald/5 rounded-xl p-8 border border-cat-gold/20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-900 dark:text-cat-text font-semibold mb-2">Advanced Analytics Coming Soon</p>
          <p className="text-gray-600 dark:text-gray-400">Charts, trends, and detailed reports will be available in the next update.</p>
        </motion.div>
      </motion.div>
    </AdminLayout>
  );
}

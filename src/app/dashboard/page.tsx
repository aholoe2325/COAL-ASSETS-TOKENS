"use client";

import { motion } from "framer-motion";
import { StatusBanner } from "@/components/dashboard/StatusBanner";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { ChartsSection } from "@/components/dashboard/ChartsSection";
import { MyAssets } from "@/components/dashboard/MyAssets";
import { ProfitDistribution } from "@/components/dashboard/ProfitDistribution";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <StatusBanner />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <DashboardOverview />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ChartsSection />
      </motion.div>

      <motion.div
        className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <MyAssets />
        <ProfitDistribution />
      </motion.div>
    </div>
  );
}

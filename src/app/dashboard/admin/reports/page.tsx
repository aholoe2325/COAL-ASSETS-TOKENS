"use client";

import { motion } from "framer-motion";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { FileText, Download, Calendar } from "lucide-react";

export default function ReportsPage() {
  const reports = [
    { name: "Monthly Report - February 2026", date: "2026-02-28", users: 2845, transactions: 15420 },
    { name: "Monthly Report - January 2026", date: "2026-01-31", users: 2534, transactions: 12100 },
    { name: "Monthly Report - December 2025", date: "2025-12-31", users: 2105, transactions: 9850 },
  ];

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <FileText size={32} className="text-cat-gold" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-cat-text">Reports</h1>
        </div>

        {/* Reports List */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {reports.map((report, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-cat-charcoal/50 rounded-xl p-6 border border-gray-200 dark:border-cat-gold/10 flex items-center justify-between"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-cat-text mb-2">{report.name}</h3>
                <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {report.date}
                  </div>
                  <div>{report.users.toLocaleString()} users</div>
                  <div>{report.transactions.toLocaleString()} transactions</div>
                </div>
              </div>
              <motion.button
                className="p-3 rounded-lg bg-cat-gold/10 hover:bg-cat-gold/20 dark:bg-cat-gold/5 dark:hover:bg-cat-gold/10 text-cat-gold transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Generate Report */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-cat-gold/10 to-cat-emerald/10 dark:from-cat-gold/5 dark:to-cat-emerald/5 rounded-xl p-8 border border-cat-gold/20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-900 dark:text-cat-text font-semibold mb-4">Generate New Report</p>
          <motion.button
            className="px-6 py-2 rounded-lg bg-cat-gold hover:bg-cat-gold/90 text-white font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Generate Monthly Report
          </motion.button>
        </motion.div>
      </motion.div>
    </AdminLayout>
  );
}

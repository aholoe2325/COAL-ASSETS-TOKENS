"use client";

import { motion } from "framer-motion";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Shield } from "lucide-react";
import Link from "next/link";
import { AdminStats } from "@/components/admin/AdminStats";
import { AdminUsersChart } from "@/components/admin/AdminUsersChart";
import { AdminCountriesChart } from "@/components/admin/AdminCountriesChart";
import { AdminUsersTable } from "@/components/admin/AdminUsersTable";
import { AdminActions } from "@/components/admin/AdminActions";
import { AdvancedMetrics } from "@/components/admin/AdvancedMetrics";

function AdminPageContent() {
  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-12 h-12 rounded-lg bg-gradient-to-br from-cat-gold to-cat-emerald flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(212, 175, 55, 0.4)",
                  "0 0 0 12px rgba(212, 175, 55, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Shield className="text-white" size={24} />
            </motion.div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-cat-text">
                Dashboard Overview
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Real-time Platform Statistics & Management
              </p>
            </div>
          </div>

          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-cat-charcoal hover:bg-gray-100 dark:hover:bg-cat-charcoal/80 border-2 border-gray-200 dark:border-cat-gold/20 text-gray-900 dark:text-cat-text font-bold transition-all hover:shadow-lg"
          >
            <span>← Back to Platform</span>
          </Link>
        </div>

        {/* Status Bar */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3">
            <p className="text-green-700 dark:text-green-400 font-bold">
              ✓ System Status: Online
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-3">
            <p className="text-blue-700 dark:text-blue-400 font-bold">
              📡 Last Update: 2 min ago
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-3">
            <p className="text-amber-700 dark:text-amber-400 font-bold">
              ⚠️ Alerts: 0 Active
            </p>
          </div>
          <div className="bg-cat-gold/10 dark:bg-cat-gold/5 border border-cat-gold/30 rounded-lg p-3">
            <p className="text-cat-gold font-bold">
              🔒 Encrypted Connection
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Stats */}
      <AdminStats
        totalUsers={2845}
        activeUsers={1245}
        newUsersThisMonth={685}
        countries={145}
      />

      {/* Admin Actions */}
      <AdminActions />

      {/* Advanced Metrics */}
      <AdvancedMetrics />

      {/* Charts */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <AdminUsersChart />
        <AdminCountriesChart />
      </motion.div>

      {/* Users Table */}
      <AdminUsersTable />

      {/* Footer */}
      <motion.div
        className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>🔐 Admin Dashboard - Secure Area</p>
        <p className="mt-2 text-xs">
          All changes are logged and encrypted. Last activity: 2026-02-28 14:32:15 UTC
        </p>
      </motion.div>
    </>
  );
}

export default function AdminPage() {
  return (
    <AdminLayout>
      <AdminPageContent />
    </AdminLayout>
  );
}

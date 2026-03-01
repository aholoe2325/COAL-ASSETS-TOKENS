"use client";

import { motion } from "framer-motion";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Settings, Shield, Bell, Database } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    twoFactorRequired: true,
    emailNotifications: true,
    autoBackup: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Settings size={32} className="text-cat-gold" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-cat-text">Settings</h1>
        </div>

        {/* Settings Sections */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Security Section */}
          <motion.div
            className="bg-white dark:bg-cat-charcoal/50 rounded-xl p-6 border border-gray-200 dark:border-cat-gold/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield size={24} className="text-cat-gold" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-cat-text">Security Settings</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-cat-charcoal/70">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-cat-text">Require 2FA for Admin Access</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Enhance security by requiring two-factor authentication</p>
                </div>
                <button
                  onClick={() => toggleSetting("twoFactorRequired")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    settings.twoFactorRequired
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "bg-gray-300 hover:bg-gray-400 text-gray-900"
                  }`}
                >
                  {settings.twoFactorRequired ? "ENABLED" : "DISABLED"}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-cat-charcoal/70">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-cat-text">Maintenance Mode</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Put the platform in maintenance mode</p>
                </div>
                <button
                  onClick={() => toggleSetting("maintenanceMode")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    settings.maintenanceMode
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-gray-300 hover:bg-gray-400 text-gray-900"
                  }`}
                >
                  {settings.maintenanceMode ? "ENABLED" : "DISABLED"}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Notifications Section */}
          <motion.div
            className="bg-white dark:bg-cat-charcoal/50 rounded-xl p-6 border border-gray-200 dark:border-cat-gold/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Bell size={24} className="text-cat-gold" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-cat-text">Notifications</h2>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-cat-charcoal/70">
              <div>
                <p className="font-semibold text-gray-900 dark:text-cat-text">Email Notifications</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Receive email alerts for important events</p>
              </div>
              <button
                onClick={() => toggleSetting("emailNotifications")}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  settings.emailNotifications
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                    : "bg-gray-300 hover:bg-gray-400 text-gray-900"
                }`}
              >
                {settings.emailNotifications ? "ENABLED" : "DISABLED"}
              </button>
            </div>
          </motion.div>

          {/* Backup Section */}
          <motion.div
            className="bg-white dark:bg-cat-charcoal/50 rounded-xl p-6 border border-gray-200 dark:border-cat-gold/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Database size={24} className="text-cat-gold" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-cat-text">Backup & Data</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-cat-charcoal/70">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-cat-text">Automatic Backups</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Daily automatic database backups</p>
                </div>
                <button
                  onClick={() => toggleSetting("autoBackup")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    settings.autoBackup
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "bg-gray-300 hover:bg-gray-400 text-gray-900"
                  }`}
                >
                  {settings.autoBackup ? "ENABLED" : "DISABLED"}
                </button>
              </div>

              <motion.button
                className="w-full p-4 rounded-lg bg-cat-gold/10 hover:bg-cat-gold/20 dark:bg-cat-gold/5 dark:hover:bg-cat-gold/10 text-cat-gold font-semibold transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Database size={18} />
                Backup Now
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Save Settings */}
        <motion.div
          className="mt-8 flex gap-4 justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="px-6 py-3 rounded-lg border border-gray-300 dark:border-cat-gold/20 text-gray-900 dark:text-cat-text font-semibold hover:bg-gray-50 dark:hover:bg-cat-charcoal/70 transition-colors">
            Cancel
          </button>
          <motion.button
            className="px-6 py-3 rounded-lg bg-cat-gold hover:bg-cat-gold/90 text-white font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Save Settings
          </motion.button>
        </motion.div>
      </motion.div>
    </AdminLayout>
  );
}

"use client";

import { motion } from "framer-motion";
import { Lock, Wallet, Bell, Palette, Globe } from "lucide-react";

export default function SettingsPage() {
  const settingsSections = [
    {
      icon: Wallet,
      title: "Wallet Management",
      description: "Connect, disconnect, and manage your wallet",
    },
    {
      icon: Lock,
      title: "Security",
      description: "Two-factor authentication, security keys",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Email and in-app notification preferences",
    },
    {
      icon: Palette,
      title: "Appearance",
      description: "Theme, language, and display preferences",
    },
    {
      icon: Globe,
      title: "Privacy",
      description: "Data sharing and privacy settings",
    },
  ];

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-cat-text mb-6">Settings</h1>

        <div className="space-y-4">
          {settingsSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 shadow-sm p-6 rounded-xl hover:shadow-md dark:hover-glow transition-smooth cursor-pointer group border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40"
                whileHover={{ y: -2, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="text-amber-600 dark:text-cat-gold group-hover:text-emerald-600 dark:group-hover:text-cat-emerald transition-smooth">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-cat-text">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <button className="text-amber-600/50 dark:text-cat-gold/50 group-hover:text-amber-600 dark:group-hover:text-cat-gold transition-smooth">
                    →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Danger Zone */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200 dark:border-cat-gold/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-xl font-bold text-red-500 dark:text-red-400 mb-4">Danger Zone</h2>
          <button className="px-6 py-3 border-2 border-red-500 dark:border-red-400 text-red-500 dark:text-red-400 rounded-lg font-semibold dark:hover:bg-red-400/10 hover:bg-red-50 transition-smooth">
            Delete Account
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Download,
  Settings,
  Shield,
  Send,
  Lock,
  BarChart3,
} from "lucide-react";

export function AdminActions() {
  const actions = [
    {
      icon: Download,
      label: "Export Data",
      description: "Download user data as CSV",
      color: "from-blue-400 to-blue-600",
      action: () => alert("Exporting data..."),
    },
    {
      icon: Send,
      label: "Send Newsletter",
      description: "Send email to all users",
      color: "from-cat-gold to-amber-600",
      action: () => alert("Newsletter sent to 2,845 users"),
    },
    {
      icon: Shield,
      label: "Security Check",
      description: "Run security audit",
      color: "from-cat-emerald to-green-600",
      action: () => alert("Security check completed - All systems secure"),
    },
    {
      icon: Settings,
      label: "System Settings",
      description: "Configure global settings",
      color: "from-purple-400 to-purple-600",
      action: () => alert("Opening system settings..."),
    },
    {
      icon: Lock,
      label: "Backup Database",
      description: "Create system backup",
      color: "from-red-400 to-red-600",
      action: () => alert("Database backup created"),
    },
    {
      icon: BarChart3,
      label: "Advanced Analytics",
      description: "View detailed analytics",
      color: "from-cyan-400 to-cyan-600",
      action: () => alert("Loading advanced analytics..."),
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
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
      {actions.map((action, idx) => {
        const Icon = action.icon;
        return (
          <motion.button
            key={idx}
            onClick={action.action}
            className="group text-left p-4 rounded-lg bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:from-cat-charcoal/80 dark:via-cat-charcoal/60 dark:to-cat-charcoal/80 border-2 border-gray-200 dark:border-cat-gold/20 hover:border-cat-gold dark:hover:border-cat-gold/60 transition-all hover:shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
            >
              <Icon className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-cat-text mb-1">
              {action.label}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {action.description}
            </p>
          </motion.button>
        );
      })}
    </motion.div>
  );
}

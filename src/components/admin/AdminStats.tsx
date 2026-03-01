"use client";

import { motion } from "framer-motion";
import { Users, Globe, UserPlus, Activity } from "lucide-react";

interface AdminStatsProps {
  totalUsers: number;
  activeUsers: number;
  newUsersThisMonth: number;
  countries: number;
}

export function AdminStats({
  totalUsers,
  activeUsers,
  newUsersThisMonth,
  countries,
}: AdminStatsProps) {
  const stats = [
    {
      label: "Total Users",
      value: totalUsers.toLocaleString(),
      icon: Users,
      color: "from-cat-gold to-amber-600",
      bg: "from-cat-gold/10 to-amber-600/10",
    },
    {
      label: "Active Users (24h)",
      value: activeUsers.toLocaleString(),
      icon: Activity,
      color: "from-cat-emerald to-green-600",
      bg: "from-cat-emerald/10 to-green-600/10",
    },
    {
      label: "New Users (30d)",
      value: newUsersThisMonth.toLocaleString(),
      icon: UserPlus,
      color: "from-blue-400 to-blue-600",
      bg: "from-blue-400/10 to-blue-600/10",
    },
    {
      label: "Countries",
      value: countries.toLocaleString(),
      icon: Globe,
      color: "from-purple-400 to-purple-600",
      bg: "from-purple-400/10 to-purple-600/10",
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
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
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={idx}
            className={`bg-gradient-to-br ${stat.bg} dark:${stat.bg} rounded-2xl p-4 md:p-6 border-2 border-gray-200 dark:border-cat-gold/20 shadow-lg`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}
              >
                <Icon className="text-white" size={20} />
              </div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-cat-text">
              {stat.value}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

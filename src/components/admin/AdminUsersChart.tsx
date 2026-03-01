"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const USER_GROWTH_DATA = [
  { date: "Jan 1", users: 120, verified: 95 },
  { date: "Jan 8", users: 285, verified: 220 },
  { date: "Jan 15", users: 450, verified: 380 },
  { date: "Jan 22", users: 680, verified: 580 },
  { date: "Jan 29", users: 920, verified: 750 },
  { date: "Feb 5", users: 1250, verified: 980 },
  { date: "Feb 12", users: 1680, verified: 1350 },
  { date: "Feb 19", users: 2150, verified: 1750 },
  { date: "Feb 28", users: 2845, verified: 2320 },
];

export function AdminUsersChart() {
  return (
    <motion.div
      className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 rounded-2xl p-6 border-2 border-gray-200 dark:border-cat-gold/30 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -5 }}
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-cat-text mb-2">
          📈 User Growth
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Total registered users and verified accounts
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={USER_GROWTH_DATA} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d4af37" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#d4af37" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="verifiedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />
          <XAxis dataKey="date" stroke="#888" style={{ fontSize: "12px" }} />
          <YAxis stroke="#888" style={{ fontSize: "12px" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1a1a1a",
              border: "2px solid #d4af37",
              borderRadius: "8px",
              color: "#fff",
            }}
            labelStyle={{ color: "#d4af37", fontWeight: "bold" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#d4af37"
            strokeWidth={3}
            dot={{ fill: "#d4af37", r: 5 }}
            activeDot={{ r: 8 }}
            name="Total Users"
            animationDuration={1000}
          />
          <Line
            type="monotone"
            dataKey="verified"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ fill: "#10b981", r: 5 }}
            activeDot={{ r: 8 }}
            name="Verified Users"
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

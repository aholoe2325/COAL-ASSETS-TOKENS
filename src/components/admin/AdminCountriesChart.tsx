"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COUNTRY_DATA = [
  { name: "United States", value: 680, percentage: 24 },
  { name: "United Kingdom", value: 420, percentage: 15 },
  { name: "Canada", value: 340, percentage: 12 },
  { name: "Australia", value: 285, percentage: 10 },
  { name: "Germany", value: 235, percentage: 8 },
  { name: "France", value: 200, percentage: 7 },
  { name: "Singapore", value: 180, percentage: 6 },
  { name: "India", value: 155, percentage: 5 },
  { name: "Others", value: 370, percentage: 13 },
];

const COLORS = [
  "#d4af37",
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#06b6d4",
  "#14b8a6",
  "#64748b",
];

export function AdminCountriesChart() {
  return (
    <motion.div
      className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 rounded-2xl p-6 border-2 border-gray-200 dark:border-cat-gold/30 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ y: -5 }}
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-cat-text mb-2">
          🌍 Users by Country
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Distribution of registered users across countries
        </p>
      </div>

      {/* Chart Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="lg:col-span-1">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={COUNTRY_DATA}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name} ${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                animationDuration={800}
              >
                {COUNTRY_DATA.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a1a1a",
                  border: "2px solid #d4af37",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                formatter={(value) => value.toLocaleString()}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Country List */}
        <div className="lg:col-span-2 space-y-2 max-h-96 overflow-y-auto">
          {COUNTRY_DATA.map((country, idx) => (
            <motion.div
              key={idx}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-cat-charcoal/50 hover:bg-gray-100 dark:hover:bg-cat-charcoal/70 transition-smooth"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="flex items-center gap-3 flex-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                />
                <span className="text-sm font-medium text-gray-900 dark:text-cat-text">
                  {country.name}
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Progress Bar */}
                <div className="hidden sm:block w-32 h-2 rounded-full bg-gray-200 dark:bg-cat-charcoal/70 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cat-gold to-cat-emerald"
                    initial={{ width: 0 }}
                    animate={{ width: `${country.percentage}%` }}
                    transition={{ delay: idx * 0.05 + 0.3, duration: 0.8 }}
                  />
                </div>

                {/* Stats */}
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900 dark:text-cat-text">
                    {country.value}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {country.percentage}%
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Bar } from "recharts";
import { useState, useMemo } from "react";
import Image from "next/image";

const CAT_PRICE_DATA_FULL = [
  { date: "Jan 1", price: 0.75, change: 0 },
  { date: "Jan 5", price: 0.78, change: 4 },
  { date: "Jan 10", price: 0.82, change: 9 },
  { date: "Jan 15", price: 0.79, change: 5 },
  { date: "Jan 20", price: 0.95, change: 27 },
  { date: "Jan 25", price: 1.12, change: 49 },
  { date: "Feb 1", price: 1.38, change: 84 },
  { date: "Feb 5", price: 1.32, change: 76 },
  { date: "Feb 10", price: 1.55, change: 107 },
  { date: "Feb 15", price: 1.42, change: 89 },
  { date: "Feb 20", price: 1.68, change: 124 },
  { date: "Feb 25", price: 1.92, change: 156 },
  { date: "Feb 28", price: 2.15, change: 186 },
];

// 24H data (last day)
const CAT_PRICE_DATA_24H = [
  { date: "00:00", price: 2.08, change: 177 },
  { date: "04:00", price: 2.11, change: 181 },
  { date: "08:00", price: 2.09, change: 179 },
  { date: "12:00", price: 2.12, change: 183 },
  { date: "16:00", price: 2.13, change: 184 },
  { date: "20:00", price: 2.15, change: 186 },
];

// 1Y data (key months)
const CAT_PRICE_DATA_1Y = [
  { date: "Feb 2025", price: 0.75, change: 0 },
  { date: "Apr 2025", price: 0.88, change: 17 },
  { date: "Jun 2025", price: 1.05, change: 40 },
  { date: "Aug 2025", price: 1.32, change: 76 },
  { date: "Oct 2025", price: 1.68, change: 124 },
  { date: "Dec 2025", price: 1.92, change: 156 },
  { date: "Feb 2026", price: 2.15, change: 186 },
];

const HOLDINGS_DATA_FULL = [
  { period: "Jan", holdings: 1500, cumulative: 280 },
  { period: "Feb 1", holdings: 1600, cumulative: 730 },
  { period: "Feb 8", holdings: 1700, cumulative: 1410 },
  { period: "Feb 15", holdings: 1850, cumulative: 2360 },
  { period: "Feb 22", holdings: 1950, cumulative: 3640 },
  { period: "Feb 28", holdings: 2000, cumulative: 4280 },
];

// 24H holdings data
const HOLDINGS_DATA_24H = [
  { period: "00:00", holdings: 1985, cumulative: 4150 },
  { period: "06:00", holdings: 1990, cumulative: 4195 },
  { period: "12:00", holdings: 1998, cumulative: 4240 },
  { period: "18:00", holdings: 2000, cumulative: 4280 },
];

// 1Y holdings data
const HOLDINGS_DATA_1Y = [
  { period: "Feb 25", holdings: 1200, cumulative: 150 },
  { period: "May 25", holdings: 1400, cumulative: 680 },
  { period: "Aug 25", holdings: 1650, cumulative: 1650 },
  { period: "Nov 25", holdings: 1850, cumulative: 3200 },
  { period: "Feb 26", holdings: 2000, cumulative: 4280 },
];

type TimeRange = "day" | "month" | "year";

export function ChartsSection() {
  const [timeRange, setTimeRange] = useState<TimeRange>("month");

  const priceData = useMemo(() => {
    switch (timeRange) {
      case "day":
        return CAT_PRICE_DATA_24H;
      case "year":
        return CAT_PRICE_DATA_1Y;
      default:
        return CAT_PRICE_DATA_FULL;
    }
  }, [timeRange]);

  const holdingsData = useMemo(() => {
    switch (timeRange) {
      case "day":
        return HOLDINGS_DATA_24H;
      case "year":
        return HOLDINGS_DATA_1Y;
      default:
        return HOLDINGS_DATA_FULL;
    }
  }, [timeRange]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* CAT Price Chart */}
      <motion.div
        className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 shadow-xl border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40 rounded-2xl p-6 relative overflow-hidden"
        variants={itemVariants}
        whileHover={{ y: -5 }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/5 via-transparent to-emerald-300/5 dark:from-cat-gold/10 dark:via-transparent dark:to-cat-emerald/10 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <Image
                  src="https://image2url.com/r2/default/images/1772276387701-ffac521d-c23e-4f60-8a5a-37e9a00a9964.png"
                  alt="CAT Logo"
                  width={28}
                  height={28}
                  className="rounded-md"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-cat-text">CAT Price</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Real-time market price</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-amber-600 dark:text-cat-gold">$2.15</p>
              <p className="text-sm text-emerald-600 dark:text-cat-emerald font-semibold">+186% YTD</p>
            </div>
          </div>

          {/* Time Range Selector */}
          <div className="flex gap-2 mb-6">
            {(["day", "month", "year"] as TimeRange[]).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  timeRange === range
                    ? "bg-gradient-to-r from-amber-600 to-emerald-600 dark:from-cat-gold dark:to-cat-emerald text-white dark:text-gray-900 shadow-lg"
                    : "bg-gray-200 dark:bg-cat-charcoal/50 text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-cat-charcoal/70"
                }`}
              >
                {range === "day" ? "24H" : range === "month" ? "30D" : "1Y"}
              </button>
            ))}
          </div>

          {/* Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="catGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d4af37" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#d4af37" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />
              <XAxis dataKey="date" stroke="#888" style={{ fontSize: "12px" }} />
              <YAxis stroke="#888" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #d4af37",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                labelStyle={{ color: "#d4af37", fontWeight: "bold" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#d4af37"
                strokeWidth={3}
                dot={{ fill: "#d4af37", r: 5 }}
                activeDot={{ r: 8 }}
                name="Price (USD)"
                animationDuration={1000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Holdings & Gains Chart */}
      <motion.div
        className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 shadow-xl border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40 rounded-2xl p-6 relative overflow-hidden"
        variants={itemVariants}
        whileHover={{ y: -5 }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/5 via-transparent to-emerald-300/5 dark:from-cat-gold/10 dark:via-transparent dark:to-cat-emerald/10 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-cat-text mb-1">💰 Your Holdings & Gains</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Cumulative earnings over time</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-emerald-600 dark:text-cat-emerald">+$4,280</p>
              <p className="text-sm text-amber-600 dark:text-cat-gold font-semibold">2,000 CAT holding</p>
            </div>
          </div>

          {/* Time Range Selector */}
          <div className="flex gap-2 mb-6">
            {(["day", "month", "year"] as TimeRange[]).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  timeRange === range
                    ? "bg-gradient-to-r from-amber-600 to-emerald-600 dark:from-cat-gold dark:to-cat-emerald text-white dark:text-gray-900 shadow-lg"
                    : "bg-gray-200 dark:bg-cat-charcoal/50 text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-cat-charcoal/70"
                }`}
              >
                {range === "day" ? "24H" : range === "month" ? "30D" : "1Y"}
              </button>
            ))}
          </div>

          {/* Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={holdingsData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="gainsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />
              <XAxis dataKey="period" stroke="#888" style={{ fontSize: "12px" }} />
              <YAxis stroke="#888" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #10b981",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                labelStyle={{ color: "#10b981", fontWeight: "bold" }}
              />
              <Legend />
              <Bar dataKey="holdings" fill="#d4af37" name="Holdings" radius={[8, 8, 0, 0]} />
              <Area
                type="monotone"
                dataKey="cumulative"
                fill="url(#gainsGradient)"
                stroke="#10b981"
                strokeWidth={3}
                name="Cumulative Gains ($)"
                animationDuration={1000}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </motion.div>
  );
}

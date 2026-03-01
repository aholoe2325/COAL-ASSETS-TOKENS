"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

export function MyAssets() {
  const assets = [
    {
      name: "CAT Coal Reserve #1",
      allocation: "35%",
      value: "1,837.50 CAT",
      location: "Australia",
    },
    {
      name: "CAT Coal Reserve #2",
      allocation: "40%",
      value: "2,100 CAT",
      location: "Indonesia",
    },
    {
      name: "CAT Coal Reserve #3",
      allocation: "25%",
      value: "1,312.50 CAT",
      location: "South Africa",
    },
  ];

  return (
    <motion.div
      className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 shadow-sm border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40 rounded-xl p-6 dark:hover-glow hover:shadow-md transition-smooth"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-cat-text">🪙 My Assets</h3>
        <button className="text-amber-600 dark:text-cat-gold dark:hover:text-cat-emerald hover:text-emerald-600 transition-smooth">
          <Download size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {assets.map((asset, idx) => (
          <motion.div
            key={idx}
            className="flex items-between justify-between p-3 bg-gray-100 dark:bg-cat-charcoal/30 rounded-lg hover:bg-gray-200 dark:hover:bg-cat-charcoal/50 transition-smooth"
            whileHover={{ x: 5 }}
          >
            <div>
              <h4 className="text-gray-900 dark:text-cat-text font-semibold text-sm">
                {asset.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                📍 {asset.location}
              </p>
            </div>
            <div className="text-right">
              <p className="text-amber-600 dark:text-cat-gold font-semibold">{asset.allocation}</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs">{asset.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-6 px-4 py-2 border border-gray-300 dark:border-cat-gold/20 text-amber-600 dark:text-cat-gold rounded-lg hover:bg-amber-50 dark:hover:bg-cat-gold/10 transition-smooth flex items-center justify-center gap-2">
        <Eye size={18} />
        View Full Portfolio
      </button>
    </motion.div>
  );
}

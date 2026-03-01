"use client";

import { motion } from "framer-motion";
import { TrendingUp, CreditCard, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface PortfolioOverviewProps {
  balance: number;
  holdings: number;
}

export function PortfolioOverview({
  balance,
  holdings,
}: PortfolioOverviewProps) {
  const catPrice = 2.15;
  const holdingsValue = holdings * catPrice;

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {/* Total Balance */}
      <motion.div
        className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 rounded-2xl p-4 md:p-6 border-2 border-amber-100 dark:border-cat-gold/30 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-gradient-to-br from-cat-gold to-amber-600 flex items-center justify-center flex-shrink-0">
            <CreditCard className="text-white" size={18} />
          </div>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
            Wallet Balance
          </p>
        </div>
        <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-cat-text mb-1">
          ${balance.toFixed(2)}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500">
          Available for deposit
        </p>
      </motion.div>

      {/* CAT Holdings */}
      <motion.div
        className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 rounded-2xl p-4 md:p-6 border-2 border-emerald-100 dark:border-cat-emerald/30 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <Image
            src="https://image2url.com/r2/default/images/1772276387701-ffac521d-c23e-4f60-8a5a-37e9a00a9964.png"
            alt="CAT"
            width={32}
            height={32}
            className="rounded-lg md:w-10 md:h-10 w-8 h-8"
          />
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
            CAT Holdings
          </p>
        </div>
        <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-cat-text mb-1">
          {holdings.toFixed(2)} CAT
        </p>
        <p className="text-xs text-cat-emerald font-semibold">
          ≈ ${holdingsValue.toFixed(2)}
        </p>
      </motion.div>

      {/* Net Worth */}
      <motion.div
        className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 rounded-2xl p-4 md:p-6 border-2 border-blue-100 dark:border-blue-400/30 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="text-white" size={18} />
          </div>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
            Net Worth
          </p>
        </div>
        <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-cat-text mb-1">
          ${(balance + holdingsValue).toFixed(2)}
        </p>
        <p className="text-xs text-green-600 dark:text-cat-emerald font-semibold">
          <span className="inline-flex items-center gap-1">
            <ArrowUpRight size={14} /> +{((holdingsValue / (balance + holdingsValue)) * 100).toFixed(1)}%
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, Shield, Download, Upload } from "lucide-react";
import Image from "next/image";

interface Asset {
  id: number;
  name: string;
  location: string;
  quantity: string;
  value: string;
  backing: string;
  price: number;
  change: number;
  verified: boolean;
  image: string;
}

interface AssetsDisplayProps {
  assets: Asset[];
  onDeposit: (assetId: number) => void;
  onWithdraw: (assetId: number) => void;
}

export function AssetsDisplay({
  assets,
  onDeposit,
  onWithdraw,
}: AssetsDisplayProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-cat-text mb-6">
        Real-World Assets
      </h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={containerVariants}
      >
        {assets.map((asset) => (
          <motion.div
            key={asset.id}
            className="group bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 rounded-2xl overflow-hidden shadow-xl border-2 border-amber-100 dark:border-cat-gold/30 hover:shadow-2xl transition-all"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            {/* Header with image */}
            <div className="relative h-48 bg-gradient-to-br from-cat-gold/10 to-cat-emerald/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={asset.image}
                  alt={asset.name}
                  width={120}
                  height={120}
                  className="opacity-80 rounded-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              {/* Title and Verification */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-cat-text">
                    {asset.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <MapPin size={16} className="text-cat-gold" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {asset.location}
                    </span>
                  </div>
                </div>
                {asset.verified && (
                  <Shield className="text-cat-emerald" size={24} />
                )}
              </div>

              {/* Price and Change */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-cat-gold/10">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Price
                  </p>
                  <p className="text-xl font-bold text-cat-gold">
                    ${asset.price.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Change (24h)
                  </p>
                  <p
                    className={`text-xl font-bold ${
                      asset.change >= 0
                        ? "text-cat-emerald"
                        : "text-red-500"
                    }`}
                  >
                    {asset.change >= 0 ? "+" : ""}{asset.change.toFixed(2)}%
                  </p>
                </div>
              </div>

              {/* Asset Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Total Value
                  </span>
                  <span className="text-lg font-bold text-gray-900 dark:text-cat-text">
                    {asset.value}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Quantity
                  </span>
                  <span className="text-lg font-bold text-gray-900 dark:text-cat-text">
                    {asset.quantity}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Backing
                  </span>
                  <span className="text-lg font-bold text-cat-emerald">
                    {asset.backing}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  onClick={() => onDeposit(asset.id)}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cat-gold to-amber-600 hover:from-cat-gold/90 hover:to-amber-600/90 text-gray-900 font-bold transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Upload size={16} />
                  Deposit
                </motion.button>

                <motion.button
                  onClick={() => onWithdraw(asset.id)}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-cat-emerald hover:bg-cat-emerald/10 dark:hover:bg-cat-emerald/5 text-cat-emerald font-bold transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} />
                  Withdraw
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

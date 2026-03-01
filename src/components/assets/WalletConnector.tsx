"use client";

import { motion } from "framer-motion";
import { Wallet, LogOut } from "lucide-react";
import { useState } from "react";

interface WalletConnectorProps {
  onConnect: (walletType: "sidra" | "external", address: string) => void;
  connected: boolean;
  walletAddress: string | null;
  walletType: "sidra" | "external" | null;
  onDisconnect: () => void;
}

export function WalletConnector({
  onConnect,
  connected,
  walletAddress,
  walletType,
  onDisconnect,
}: WalletConnectorProps) {
  const [showModal, setShowModal] = useState(false);

  const handleSidraConnect = () => {
    // Simulation de connexion Sidra
    const mockAddress = "0xSIDRA" + Math.random().toString(36).substr(2, 9).toUpperCase();
    onConnect("sidra", mockAddress);
    setShowModal(false);
  };

  const handleExternalConnect = () => {
    // Simulation de connexion externe (MetaMask, etc.)
    const mockAddress = "0x" + Math.random().toString(16).substr(2, 40);
    onConnect("external", mockAddress);
    setShowModal(false);
  };

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-6)}`;
  };

  if (connected && walletAddress) {
    return (
      <motion.div
        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-cat-gold/20 to-cat-emerald/20 dark:from-cat-gold/10 dark:to-cat-emerald/10 border-2 border-cat-gold/40 dark:border-cat-gold/30"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="w-3 h-3 rounded-full bg-emerald-500"
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 0 0 rgba(16, 185, 129, 0.7)",
              "0 0 0 8px rgba(16, 185, 129, 0.3)",
              "0 0 0 0 rgba(16, 185, 129, 0.7)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {walletType === "sidra" ? "Sidra Wallet" : "External Wallet"}
          </p>
          <p className="font-mono font-bold text-gray-900 dark:text-cat-gold">
            {truncateAddress(walletAddress)}
          </p>
        </div>

        <button
          onClick={onDisconnect}
          className="ml-auto p-2 hover:bg-red-500/20 rounded-lg transition-smooth text-red-600 dark:text-red-400"
          title="Disconnect Wallet"
        >
          <LogOut size={18} />
        </button>
      </motion.div>
    );
  }

  return (
    <>
      <motion.button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cat-gold to-cat-emerald hover:from-cat-gold/90 hover:to-cat-emerald/90 text-gray-900 font-bold transition-all hover:shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Wallet size={20} />
        Connect Wallet
      </motion.button>

      {/* Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="w-full max-w-md bg-white dark:bg-cat-charcoal rounded-2xl shadow-2xl p-6 border-2 border-cat-gold/20"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-cat-text mb-6">
              Connect Your Wallet
            </h2>

            <div className="space-y-3">
              {/* Sidra Wallet */}
              <motion.button
                onClick={handleSidraConnect}
                className="w-full p-4 rounded-xl border-2 border-cat-gold/30 hover:border-cat-gold hover:bg-cat-gold/5 dark:hover:bg-cat-gold/10 transition-all text-left group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cat-gold to-cat-emerald flex items-center justify-center">
                    <Wallet className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-cat-text">
                      Sidra Wallet
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Native blockchain wallet
                    </p>
                  </div>
                </div>
              </motion.button>

              {/* External Wallets */}
              <motion.button
                onClick={handleExternalConnect}
                className="w-full p-4 rounded-xl border-2 border-blue-400/30 hover:border-blue-400 hover:bg-blue-400/5 dark:hover:bg-blue-400/10 transition-all text-left group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Wallet className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-cat-text">
                      MetaMask / Web3
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Connect external wallet
                    </p>
                  </div>
                </div>
              </motion.button>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-6 p-3 rounded-xl bg-gray-200 dark:bg-cat-charcoal/50 text-gray-900 dark:text-cat-text font-medium hover:bg-gray-300 dark:hover:bg-cat-charcoal/70 transition-smooth"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

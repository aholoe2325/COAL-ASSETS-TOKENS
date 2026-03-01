"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useState } from "react";

interface DepositWithdrawModalProps {
  isOpen: boolean;
  isDeposit: boolean;
  assetId: number;
  assetName: string;
  price: number;
  onClose: () => void;
  onConfirm: (amount: number, type: "deposit" | "withdraw") => void;
}

export function DepositWithdrawModal({
  isOpen,
  isDeposit,
  assetName,
  price,
  onClose,
  onConfirm,
}: DepositWithdrawModalProps) {
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState<"form" | "confirm" | "success">("form");
  const [loading, setLoading] = useState(false);

  const amountUSD = amount ? (parseFloat(amount) * price).toFixed(2) : "0.00";

  const handleSubmit = async () => {
    if (!amount) return;

    setLoading(true);
    // Simulate blockchain transaction
    setTimeout(() => {
      setLoading(false);
      setStep("confirm");
    }, 1000);
  };

  const handleConfirm = async () => {
    setLoading(true);
    // Simulate confirmation
    setTimeout(() => {
      setLoading(false);
      setStep("success");
      onConfirm(parseFloat(amount), isDeposit ? "deposit" : "withdraw");
    }, 2000);
  };

  const handleClose = () => {
    setStep("form");
    setAmount("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="w-full max-w-md bg-white dark:bg-cat-charcoal rounded-2xl shadow-2xl overflow-hidden border-2 border-cat-gold/20"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className={`p-6 bg-gradient-to-r ${
                isDeposit
                  ? "from-cat-gold/10 to-amber-500/10"
                  : "from-cat-emerald/10 to-green-500/10"
              } border-b border-cat-gold/10`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-cat-text">
                  {step === "success" ? "Success!" : isDeposit ? "Deposit" : "Withdraw"}
                </h2>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-cat-charcoal/50 rounded-lg transition-smooth"
                >
                  <X size={20} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {assetName}
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              {step === "form" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Amount ({assetName})
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-cat-gold/20 bg-white dark:bg-cat-charcoal/50 text-gray-900 dark:text-cat-text focus:border-cat-gold focus:outline-none transition-all"
                    />
                  </div>

                  <div className="bg-gray-50 dark:bg-cat-charcoal/50 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Price per {assetName}
                      </span>
                      <span className="font-bold text-gray-900 dark:text-cat-text">
                        ${price.toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-cat-gold/10 pt-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900 dark:text-cat-text">
                          Total USD
                        </span>
                        <span className="text-xl font-bold text-cat-gold">
                          ${amountUSD}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Fee Info */}
                  <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-lg p-3">
                    <p className="text-xs text-amber-700 dark:text-amber-300">
                      ⚠️ Transaction fee: 0.5% applied during confirmation
                    </p>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!amount || loading}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-cat-gold to-amber-600 hover:from-cat-gold/90 hover:to-amber-600/90 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 font-bold transition-all"
                  >
                    {loading ? "Processing..." : isDeposit ? "Review Deposit" : "Review Withdrawal"}
                  </button>
                </motion.div>
              )}

              {step === "confirm" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="bg-gray-50 dark:bg-cat-charcoal/50 rounded-lg p-6 text-center mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {isDeposit ? "Deposit Amount" : "Withdrawal Amount"}
                    </p>
                    <p className="text-4xl font-bold text-cat-gold mb-2">
                      {amount} {assetName}
                    </p>
                    <p className="text-sm text-cat-emerald font-semibold">
                      ≈ ${amountUSD}
                    </p>
                  </div>

                  {/* Transaction Details */}
                  <div className="space-y-3 bg-gray-50 dark:bg-cat-charcoal/50 rounded-lg p-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Gas Fee</span>
                      <span className="font-semibold text-gray-900 dark:text-cat-text">
                        $2.50
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Transaction Fee (0.5%)
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-cat-text">
                        ${(parseFloat(amountUSD) * 0.005).toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-cat-gold/10 pt-3 flex justify-between">
                      <span className="font-bold text-gray-900 dark:text-cat-text">
                        Total Cost
                      </span>
                      <span className="font-bold text-lg text-cat-gold">
                        ${(parseFloat(amountUSD) + 2.50 + parseFloat(amountUSD) * 0.005).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep("form")}
                      className="flex-1 py-3 rounded-lg border-2 border-gray-200 dark:border-cat-gold/20 text-gray-900 dark:text-cat-text font-bold hover:bg-gray-50 dark:hover:bg-cat-charcoal/50 transition-all"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleConfirm}
                      disabled={loading}
                      className="flex-1 py-3 rounded-lg bg-gradient-to-r from-cat-emerald to-green-600 hover:from-cat-emerald/90 hover:to-green-600/90 disabled:opacity-50 text-white font-bold transition-all"
                    >
                      {loading ? "Confirming..." : "Confirm " + (isDeposit ? "Deposit" : "Withdrawal")}
                    </button>
                  </div>
                </motion.div>
              )}

              {step === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cat-emerald to-green-600 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <Check className="text-white" size={32} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-cat-text mb-2">
                    {isDeposit ? "Deposit" : "Withdrawal"} Successful!
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {isDeposit ? "Funds deposited" : "Funds withdrawn"}:{" "}
                    <span className="font-bold text-cat-gold">
                      {amount} {assetName}
                    </span>
                  </p>

                  <div className="bg-gray-50 dark:bg-cat-charcoal/50 rounded-lg p-4 mb-6 text-left text-sm">
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Transaction ID
                    </p>
                    <p className="font-mono text-gray-900 dark:text-cat-text break-all">
                      0x{Math.random().toString(16).substr(2, 64)}
                    </p>
                  </div>

                  <button
                    onClick={handleClose}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-cat-gold to-amber-600 text-gray-900 font-bold transition-all"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

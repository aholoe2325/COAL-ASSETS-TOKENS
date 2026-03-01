"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { WalletConnector } from "@/components/assets/WalletConnector";
import { PortfolioOverview } from "@/components/assets/PortfolioOverview";
import { AssetsDisplay } from "@/components/assets/AssetsDisplay";
import { DepositWithdrawModal } from "@/components/assets/DepositWithdrawModal";

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

export default function AssetsPage() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<"sidra" | "external" | null>(null);
  const [balance, setBalance] = useState(50000);
  const [holdings, setHoldings] = useState(2000);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"deposit" | "withdraw">("deposit");
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const assets: Asset[] = [
    {
      id: 1,
      name: "Coal Reserve Cluster A",
      location: "New South Wales, Australia",
      quantity: "2,500,000 tonnes",
      value: "$125,000,000",
      backing: "95% backed",
      price: 2.15,
      change: 3.45,
      verified: true,
      image: "https://image2url.com/r2/default/images/1772276387701-ffac521d-c23e-4f60-8a5a-37e9a00a9964.png",
    },
    {
      id: 2,
      name: "Coal Reserve Cluster B",
      location: "East Kalimantan, Indonesia",
      quantity: "1,800,000 tonnes",
      value: "$72,000,000",
      backing: "92% backed",
      price: 2.08,
      change: 2.15,
      verified: true,
      image: "https://image2url.com/r2/default/images/1772276387701-ffac521d-c23e-4f60-8a5a-37e9a00a9964.png",
    },
    {
      id: 3,
      name: "Coal Reserve Cluster C",
      location: "South Africa",
      quantity: "1,200,000 tonnes",
      value: "$48,000,000",
      backing: "88% backed",
      price: 1.95,
      change: 1.82,
      verified: true,
      image: "https://image2url.com/r2/default/images/1772276387701-ffac521d-c23e-4f60-8a5a-37e9a00a9964.png",
    },
  ];

  const handleConnect = (type: "sidra" | "external", address: string) => {
    setConnected(true);
    setWalletType(type);
    setWalletAddress(address);
  };

  const handleDisconnect = () => {
    setConnected(false);
    setWalletAddress(null);
    setWalletType(null);
  };

  const handleDeposit = (assetId: number) => {
    const asset = assets.find((a) => a.id === assetId);
    if (asset) {
      setSelectedAsset(asset);
      setModalMode("deposit");
      setModalOpen(true);
    }
  };

  const handleWithdraw = (assetId: number) => {
    const asset = assets.find((a) => a.id === assetId);
    if (asset) {
      setSelectedAsset(asset);
      setModalMode("withdraw");
      setModalOpen(true);
    }
  };

  const handleConfirmTransaction = (amount: number, type: "deposit" | "withdraw") => {
    if (type === "deposit") {
      setBalance((prev) => Math.max(0, prev - amount * (selectedAsset?.price || 0)));
      setHoldings((prev) => prev + amount);
    } else {
      setBalance((prev) => prev + amount * (selectedAsset?.price || 0));
      setHoldings((prev) => Math.max(0, prev - amount));
    }
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-cat-text mb-2">
            Assets & Holdings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your portfolio with secure blockchain-backed assets
          </p>
        </div>

        {/* Wallet Connector */}
        <div className="flex justify-end">
          <WalletConnector
            onConnect={handleConnect}
            connected={connected}
            walletAddress={walletAddress}
            walletType={walletType}
            onDisconnect={handleDisconnect}
          />
        </div>
      </motion.div>

      {/* Portfolio Overview - Only show when connected */}
      {connected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <PortfolioOverview
            balance={balance}
            holdings={holdings}
          />
        </motion.div>
      )}

      {/* Assets Display */}
      {connected && selectedAsset && (
        <DepositWithdrawModal
          isOpen={modalOpen}
          isDeposit={modalMode === "deposit"}
          assetId={selectedAsset.id}
          assetName={selectedAsset.name}
          price={selectedAsset.price}
          onClose={() => setModalOpen(false)}
          onConfirm={handleConfirmTransaction}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: connected ? 0.2 : 0.1 }}
      >
        {connected ? (
          <AssetsDisplay
            assets={assets}
            onDeposit={handleDeposit}
            onWithdraw={handleWithdraw}
          />
        ) : (
          <div className="text-center py-16">
            <motion.div
              className="inline-block mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cat-gold/20 to-cat-emerald/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-cat-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-cat-text mb-3">
              Connect Your Wallet
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Connect your wallet to view assets, check balances, and manage deposits & withdrawals
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

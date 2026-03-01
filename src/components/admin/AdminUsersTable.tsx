"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, CheckCircle, AlertCircle } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  country: string;
  joinDate: string;
  verified: boolean;
  walletType: string;
  balance: number;
}

const RECENT_USERS: User[] = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    country: "United States",
    joinDate: "2026-02-28",
    verified: true,
    walletType: "Sidra",
    balance: 5250,
  },
  {
    id: 2,
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    country: "United Kingdom",
    joinDate: "2026-02-27",
    verified: true,
    walletType: "MetaMask",
    balance: 3780,
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    country: "Singapore",
    joinDate: "2026-02-26",
    verified: false,
    walletType: "Sidra",
    balance: 0,
  },
  {
    id: 4,
    name: "Sarah O'Brien",
    email: "sarah.obrien@email.com",
    country: "Canada",
    joinDate: "2026-02-25",
    verified: true,
    walletType: "MetaMask",
    balance: 8920,
  },
  {
    id: 5,
    name: "James Mueller",
    email: "james.mueller@email.com",
    country: "Germany",
    joinDate: "2026-02-24",
    verified: true,
    walletType: "Sidra",
    balance: 12450,
  },
];

export function AdminUsersTable() {
  return (
    <motion.div
      className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 rounded-2xl p-6 border-2 border-gray-200 dark:border-cat-gold/30 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      whileHover={{ y: -5 }}
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-cat-text mb-2">
            👥 Recent Users
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Latest registered users and their activity
          </p>
        </div>
        <motion.button
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-cat-gold to-amber-600 hover:from-cat-gold/90 hover:to-amber-600/90 text-gray-900 font-bold text-sm transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Users
        </motion.button>
      </div>

      {/* Table - Desktop */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200 dark:border-cat-gold/20">
              <th className="text-left py-4 px-4 text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">
                User
              </th>
              <th className="text-left py-4 px-4 text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">
                Country
              </th>
              <th className="text-left py-4 px-4 text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">
                Join Date
              </th>
              <th className="text-left py-4 px-4 text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">
                Wallet
              </th>
              <th className="text-left py-4 px-4 text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">
                Balance
              </th>
              <th className="text-left py-4 px-4 text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {RECENT_USERS.map((user, idx) => (
              <motion.tr
                key={user.id}
                className="border-b border-gray-200 dark:border-cat-gold/10 hover:bg-gray-50 dark:hover:bg-cat-charcoal/50 transition-smooth"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <td className="py-4 px-4">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-cat-text">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1 mt-1">
                      <Mail size={12} />
                      {user.email}
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2 text-gray-900 dark:text-cat-text">
                    <MapPin size={16} className="text-cat-gold" />
                    {user.country}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2 text-gray-900 dark:text-cat-text">
                    <Calendar size={16} className="text-cat-gold" />
                    {user.joinDate}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      user.walletType === "Sidra"
                        ? "bg-cat-gold/20 text-cat-gold dark:bg-cat-gold/10"
                        : "bg-blue-200/50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-400"
                    }`}
                  >
                    {user.walletType}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <p className="font-semibold text-cat-gold">
                    ${user.balance.toLocaleString()}
                  </p>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {user.verified ? (
                      <>
                        <CheckCircle size={18} className="text-cat-emerald" />
                        <span className="text-xs font-bold text-cat-emerald">Verified</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle size={18} className="text-amber-600" />
                        <span className="text-xs font-bold text-amber-600">Pending</span>
                      </>
                    )}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {RECENT_USERS.map((user, idx) => (
          <motion.div
            key={user.id}
            className="p-4 rounded-lg bg-gray-50 dark:bg-cat-charcoal/50 border border-gray-200 dark:border-cat-gold/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-bold text-gray-900 dark:text-cat-text">{user.name}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {user.email}
                </p>
              </div>
              {user.verified ? (
                <CheckCircle size={20} className="text-cat-emerald flex-shrink-0" />
              ) : (
                <AlertCircle size={20} className="text-amber-600 flex-shrink-0" />
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Country</p>
                <p className="font-semibold text-gray-900 dark:text-cat-text">
                  {user.country}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Wallet</p>
                <p className="font-semibold text-cat-gold">{user.walletType}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Join Date</p>
                <p className="font-semibold text-gray-900 dark:text-cat-text">
                  {user.joinDate}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Balance</p>
                <p className="font-semibold text-cat-gold">
                  ${user.balance.toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

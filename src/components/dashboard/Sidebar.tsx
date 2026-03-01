"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Wallet,
  History,
  Vote,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: Wallet, label: "Assets", href: "/dashboard/assets" },
  { icon: History, label: "History", href: "/dashboard/transactions" },
  { icon: Vote, label: "Governance", href: "/dashboard/governance" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        className="hidden lg:flex w-64 bg-white dark:bg-cat-charcoal/50 p-6 flex-col h-screen overflow-y-auto border-r border-gray-200 dark:border-cat-gold/10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <Link href="/dashboard" className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:gradient-text">CAT</h1>
          <p className="text-xs text-gray-600 dark:text-gray-400">Coal Assets Token</p>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth ${
                  isActive
                    ? "bg-gray-100 text-gray-900 dark:bg-cat-gold/20 dark:text-cat-gold"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-cat-text hover:bg-gray-100 dark:hover:bg-cat-gold/10"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </motion.div>

      {/* Mobile Bottom Navigation */}
      <motion.div
        className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-gray-200 dark:bg-cat-charcoal/95 dark:border-cat-gold/10 border-t backdrop-blur z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex justify-between items-stretch">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex-1 flex flex-col items-center justify-center py-3 px-1 transition-smooth ${
                  isActive
                    ? "text-amber-600 border-t-2 border-amber-600 dark:text-cat-gold dark:border-cat-gold"
                    : "text-gray-500 border-t-2 border-gray-200 dark:text-gray-400 dark:border-transparent"
                }`}
              >
                <Icon size={24} />
                <span className="text-xs mt-0.5 text-center leading-tight">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </motion.div>
    </>
  );
}

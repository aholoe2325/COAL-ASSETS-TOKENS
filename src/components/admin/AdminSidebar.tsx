"use client";

import { motion } from "framer-motion";
import { Home, Users, BarChart3, FileText, Lock, Menu, X, Moon, Sun, LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();
  const handleNavigation = (href: string) => {
    setIsOpen(false);
    setTimeout(() => router.push(href), 200);
  };

  const menuItems = [
    {
      icon: Home,
      label: "Dashboard",
      href: "/admin",
      badge: "Live",
    },
    {
      icon: Users,
      label: "User Management",
      href: "/admin/users",
      badge: "2,845",
    },
    {
      icon: BarChart3,
      label: "Analytics",
      href: "/admin/analytics",
      badge: "New",
    },
    {
      icon: FileText,
      label: "Reports",
      href: "/admin/reports",
      badge: null,
    },
    {
      icon: Lock,
      label: "Settings",
      href: "/admin/settings",
      badge: null,
    },
  ];

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-cat-charcoal border border-gray-300 dark:border-cat-gold/30 text-gray-900 dark:text-cat-gold"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.aside
        className={`fixed left-0 top-0 h-screen w-64 ${
          isDark
            ? "bg-gradient-to-b from-cat-charcoal to-cat-dark"
            : "bg-white"
        } border-r ${
          isDark ? "border-cat-gold/20" : "border-gray-300"
        } z-40 flex flex-col overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <div className={`p-4 border-b sticky top-0 z-40 ${
          isDark ? "border-cat-gold/20" : "border-gray-300"
        }`}>
          <motion.div
            className="flex items-center gap-3 flex-row"
            animate={{
              boxShadow: ["0 0 0 0 rgba(212, 175, 55, 0.4)", "0 0 0 8px rgba(212, 175, 55, 0)"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cat-gold to-cat-emerald flex items-center justify-center">
              <Lock className="text-white" size={20} />
            </div>
            <div className="flex items-center gap-2">
              <h1 className={`text-lg font-bold ${
                isDark ? "text-cat-gold" : "text-amber-600"
              }`}>ADMIN</h1>
              <p className={`text-xs hidden sm:block ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>Control Panel</p>
            </div>
          </motion.div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg border border-transparent transition-all group ${
                    isDark
                      ? "hover:bg-cat-gold/10 hover:border-cat-gold/30"
                      : "hover:bg-amber-50 hover:border-amber-600/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`${
                      isDark
                        ? "text-cat-gold group-hover:text-cat-gold/80"
                        : "text-amber-600 group-hover:text-amber-700"
                    } transition-colors`} size={20} />
                    <span className={`${
                      isDark
                        ? "text-gray-300 group-hover:text-cat-gold"
                        : "text-gray-700 group-hover:text-amber-600"
                    } transition-colors font-medium`}>
                      {item.label}
                    </span>
                  </div>
                  {item.badge && (
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      isDark
                        ? "bg-cat-gold/20 text-cat-gold"
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className={`p-4 space-y-2 border-t ${
          isDark ? "border-cat-gold/20" : "border-gray-300"
        }`}>
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border border-transparent transition-all ${
              isDark
                ? "hover:bg-cat-gold/10 hover:border-cat-gold/30"
                : "hover:bg-amber-50 hover:border-amber-600/30"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              {isDark ? (
                <Sun className="text-cat-gold" size={20} />
              ) : (
                <Moon className="text-amber-600" size={20} />
              )}
              <span className={`font-medium ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}>
                {isDark ? "Light Mode" : "Dark Mode"}
              </span>
            </div>
          </motion.button>

          {/* Logout */}
          <motion.button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut className="text-red-500" size={20} />
            <span className="text-red-500 font-bold">Exit Admin</span>
          </motion.button>
        </div>

        {/* Footer */}
        <div className={`p-4 text-center border-t ${
          isDark ? "border-cat-gold/20" : "border-gray-300"
        }`}>
          <p className={`text-xs ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}>Admin Panel v1.0</p>
          <p className={`text-xs ${
            isDark ? "text-gray-600" : "text-gray-500"
          } mt-1`}>🔒 Encrypted & Secured</p>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden pointer-events-auto cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

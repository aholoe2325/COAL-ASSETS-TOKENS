"use client";

import { motion } from "framer-motion";
import { Bell, User, LogOut, Settings, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

export function Header() {
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, message: "Your profit distribution is ready", time: "2 hours ago" },
    { id: 2, message: "New governance proposal available", time: "5 hours ago" },
    { id: 3, message: "Asset verification completed", time: "1 day ago" },
  ];

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <motion.header
      className="border-b border-gray-200 dark:border-cat-gold/10 bg-cover bg-center relative px-4 md:px-6 py-3 md:py-4 sticky top-0 z-40"
      style={{
        backgroundImage: `url('https://image2url.com/r2/default/images/1772277544953-6b4db3f0-b2bc-4387-a0c8-498e4e6a1739.jpg')`,
        backgroundAttachment: 'fixed',
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Overlay for better readability - 30% opacity */}
      <div className="absolute inset-0 bg-white/30 dark:bg-cat-dark/30 pointer-events-none" />
      
      <div className="relative z-10 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/app/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-smooth">
          <Image 
            src="https://image2url.com/r2/default/images/1772276387701-ffac521d-c23e-4f60-8a5a-37e9a00a9964.png" 
            alt="CAT Logo" 
            width={60} 
            height={60} 
            className="rounded-lg shadow-md"
            priority
          />
          <div className="hidden md:flex flex-col">
            <span className="font-bold text-lg text-gray-900 dark:text-cat-text">CAT</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Coal Assets Token</span>
          </div>
        </Link>
        
        {/* Right section */}
        <div className="flex items-center gap-2 md:gap-4">          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-amber-600 dark:text-cat-gold hover:text-amber-700 dark:hover:text-cat-gold/80 transition-smooth rounded-lg bg-white/40 dark:bg-cat-charcoal/60 hover:bg-white/60 dark:hover:bg-cat-charcoal/80 shadow-sm"
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-amber-600 dark:text-cat-gold hover:text-amber-700 dark:hover:text-cat-gold/80 transition-smooth rounded-lg bg-white/40 dark:bg-cat-charcoal/60 hover:bg-white/60 dark:hover:bg-cat-charcoal/80 shadow-sm"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cat-gold rounded-full" />
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <motion.div
                className={`absolute right-0 mt-2 w-80 rounded-lg shadow-xl z-50 border ${
                  isDark
                    ? "bg-cat-charcoal/95 border-cat-gold/20"
                    : "bg-white border-gray-300"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={`p-4 flex justify-between items-center border-b ${
                  isDark ? "border-cat-gold/10" : "border-gray-300"
                }`}>
                  <h3 className={`font-semibold ${isDark ? "text-cat-text" : "text-gray-900"}`}>Notifications</h3>
                  <button 
                    onClick={() => setShowNotifications(false)}
                    className={isDark ? "text-gray-400 hover:text-cat-text" : "text-gray-600 hover:text-gray-900"}
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div 
                      key={notif.id}
                      className={`px-4 py-3 hover:transition-smooth cursor-pointer border-b ${
                        isDark
                          ? "border-cat-gold/5 hover:bg-cat-gold/5"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <p className={`text-sm ${isDark ? "text-cat-text" : "text-gray-900"}`}>{notif.message}</p>
                      <p className={`text-xs mt-1 ${isDark ? "text-gray-500" : "text-gray-500"}`}>{notif.time}</p>
                    </div>
                  ))}
                </div>

                <div className={`p-3 border-t ${isDark ? "border-cat-gold/10" : "border-gray-300"}`}>
                  <button className={`w-full text-center text-sm transition-smooth py-2 ${
                    isDark
                      ? "text-cat-gold hover:text-cat-emerald"
                      : "text-amber-600 hover:text-emerald-600"
                  }`}>
                    View All Notifications
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Profile - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block relative">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/40 dark:bg-cat-charcoal/60 hover:bg-white/60 dark:hover:bg-cat-charcoal/80 transition-smooth shadow-sm border border-white/20 dark:border-cat-gold/10"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cat-gold to-cat-emerald flex items-center justify-center">
                <User size={18} className="text-white" />
              </div>
              <span className="text-gray-900 dark:text-cat-text font-medium text-sm">Account</span>
            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <motion.div
                className={`absolute right-0 mt-2 w-48 rounded-lg shadow-xl z-50 border ${
                  isDark
                    ? "bg-cat-charcoal/95 border-cat-gold/20"
                    : "bg-white border-gray-300"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={`p-4 border-b ${isDark ? "border-cat-gold/10" : "border-gray-300"}`}>
                  <p className={`font-semibold text-sm ${isDark ? "text-cat-text" : "text-gray-900"}`}>User Account</p>
                  <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>user@example.com</p>
                </div>

                <Link
                  href="/dashboard/settings"
                  onClick={() => setShowProfile(false)}
                  className={`flex items-center gap-3 px-4 py-3 transition-smooth border-b ${
                    isDark
                      ? "text-gray-400 hover:text-cat-gold hover:bg-cat-gold/10 border-cat-gold/10"
                      : "text-gray-700 hover:text-amber-600 hover:bg-amber-50 border-gray-300"
                  }`}
                >
                  <Settings size={18} />
                  <span className="text-sm">Settings</span>
                </Link>

                <button
                  onClick={() => {
                    setShowProfile(false);
                    handleLogout();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-600 hover:bg-red-50/50 dark:hover:bg-red-400/10 transition-smooth"
                >
                  <LogOut size={18} />
                  <span className="text-sm">Logout</span>
                </button>
              </motion.div>
            )}
          </div>

          {/* Mobile profile icon only */}
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="md:hidden p-2 text-gray-400 hover:text-cat-text transition-smooth relative"
          >
            <User size={20} />

            {/* Mobile Profile Dropdown */}
            {showProfile && (
              <motion.div
                className={`absolute right-0 mt-2 w-48 rounded-lg shadow-xl z-50 border ${
                  isDark
                    ? "bg-cat-charcoal/95 border-cat-gold/20"
                    : "bg-white border-gray-300"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link
                  href="/dashboard/settings"
                  onClick={() => setShowProfile(false)}
                  className={`flex items-center gap-3 px-4 py-3 transition-smooth border-b ${
                    isDark
                      ? "text-gray-400 hover:text-cat-gold hover:bg-cat-gold/10 border-cat-gold/10"
                      : "text-gray-700 hover:text-amber-600 hover:bg-amber-50 border-gray-300"
                  }`}
                >
                  <Settings size={18} />
                  <span className="text-sm">Settings</span>
                </Link>

                <button
                  onClick={() => {
                    setShowProfile(false);
                    handleLogout();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-600 hover:bg-red-50/50 dark:hover:bg-red-400/10 transition-smooth"
                >
                  <LogOut size={18} />
                  <span className="text-sm">Logout</span>
                </button>
              </motion.div>
            )}
          </button>
        </div>
      </div>

      {/* Backdrop to close dropdowns */}
      {(showProfile || showNotifications) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowProfile(false);
            setShowNotifications(false);
          }}
        />
      )}
    </motion.header>
  );
}

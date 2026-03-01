"use client";

import { motion } from "framer-motion";
import { Bell, Search, Shield, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export function AdminHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const { isDark } = useTheme();

  useEffect(() => {
    // Set initial time
    setCurrentTime(new Date().toLocaleTimeString());
    
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const notifications = [
    { id: 1, message: "New user registration alert", time: "5 min ago", critical: false },
    { id: 2, message: "Suspicious login attempt detected", time: "15 min ago", critical: true },
    { id: 3, message: "System backup completed", time: "1 hour ago", critical: false },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 lg:right-64 h-20 ${
        isDark
          ? "bg-gradient-to-r from-cat-charcoal to-cat-dark"
          : "bg-white"
      } border-b ${
        isDark ? "border-cat-gold/20" : "border-gray-300"
      } flex items-center justify-between px-6 z-20`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <motion.div
          className="hidden lg:flex items-center gap-2"
          animate={{
            boxShadow: ["0 0 0 0 rgba(16, 185, 129, 0.4)", "0 0 0 8px rgba(16, 185, 129, 0)"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 rounded-full bg-cat-emerald" />
          <span className={`text-sm font-bold ${isDark ? "text-cat-emerald" : "text-emerald-600"}`}>
            System Online
          </span>
        </motion.div>

        {/* Search */}
        <motion.div className="hidden md:flex items-center">
          {searchOpen ? (
            <input
              type="text"
              placeholder="Search users, reports..."
              className={`px-4 py-2 rounded-lg border text-sm focus:outline-none transition-colors ${
                isDark
                  ? "bg-cat-gold/10 border-cat-gold/30 text-cat-text focus:border-cat-gold"
                  : "bg-amber-50 border-amber-600/30 text-gray-900 focus:border-amber-600"
              }`}
              autoFocus
            />
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 rounded-lg transition-smooth ${
                isDark
                  ? "hover:bg-cat-gold/10"
                  : "hover:bg-amber-50"
              }`}
            >
              <Search className={isDark ? "text-cat-gold" : "text-amber-600"} size={20} />
            </button>
          )}
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* System Time */}
        <div className={`hidden sm:flex items-center gap-2 text-xs ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}>
          <Clock size={16} className={isDark ? "text-cat-gold" : "text-amber-600"} />
          <span>{currentTime}</span>
        </div>

        {/* Notifications */}
        <div className="relative">
          <motion.button
            onClick={() => setShowNotifications(!showNotifications)}
            className={`relative p-2 rounded-lg transition-smooth ${
              isDark
                ? "hover:bg-cat-gold/10"
                : "hover:bg-amber-50"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className={isDark ? "text-cat-gold" : "text-amber-600"} size={20} />
            <motion.span
              className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <motion.div
              className={`absolute right-0 mt-2 w-80 rounded-lg shadow-2xl z-50 border-2 ${
                isDark
                  ? "bg-cat-charcoal/95 border-cat-gold/30"
                  : "bg-white border-gray-300"
              }`}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`p-4 flex justify-between items-center border-b ${
                isDark ? "border-cat-gold/20" : "border-gray-300"
              }`}>
                <h3 className={`font-bold ${isDark ? "text-cat-gold" : "text-amber-600"}`}>
                  Notifications
                </h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  isDark
                    ? "bg-red-500/20 text-red-400"
                    : "bg-red-100 text-red-700"
                }`}>
                  {notifications.length} alerts
                </span>
              </div>

              <div className="max-h-72 overflow-y-auto">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-4 border-b transition-smooth ${
                      isDark
                        ? `border-cat-gold/10 hover:bg-cat-gold/5 ${
                            notif.critical ? "bg-red-500/10" : ""
                          }`
                        : `border-gray-300 hover:bg-gray-50 ${
                            notif.critical ? "bg-red-50" : ""
                          }`
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {notif.critical && (
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${
                          isDark ? "text-cat-text" : "text-gray-900"
                        }`}>
                          {notif.message}
                        </p>
                        <p className={`text-xs mt-1 ${
                          isDark ? "text-gray-500" : "text-gray-500"
                        }`}>
                          {notif.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`p-3 border-t ${isDark ? "border-cat-gold/20" : "border-gray-300"}`}>
                <button className={`w-full text-center text-sm font-medium py-2 transition-colors ${
                  isDark
                    ? "text-cat-gold hover:text-cat-emerald"
                    : "text-amber-600 hover:text-emerald-600"
                }`}>
                  View All Alerts
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Admin Badge */}
        <motion.div
          className={`flex items-center gap-2 px-3 py-1 rounded-lg border ${
            isDark
              ? "bg-gradient-to-r from-cat-gold/20 to-cat-emerald/20 border-cat-gold/30"
              : "bg-gradient-to-r from-amber-100 to-emerald-100 border-amber-600/30"
          }`}
          animate={{
            boxShadow: isDark
              ? ["0 0 0 0 rgba(212, 175, 55, 0.2)", "0 0 0 6px rgba(212, 175, 55, 0)"]
              : ["0 0 0 0 rgba(180, 83, 9, 0.2)", "0 0 0 6px rgba(180, 83, 9, 0)"]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Shield className={isDark ? "text-cat-gold" : "text-amber-700"} size={16} />
          <span className={`text-xs font-bold ${isDark ? "text-cat-gold" : "text-amber-700"}`}>
            Admin Access
          </span>
        </motion.div>
      </div>
    </motion.header>
  );
}

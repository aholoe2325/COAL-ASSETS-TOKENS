"use client";

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-cat-dark" : "bg-white"}`}>
      {/* Admin Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <motion.main
        className="lg:ml-64 p-6 min-h-screen"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </div>
  );
}

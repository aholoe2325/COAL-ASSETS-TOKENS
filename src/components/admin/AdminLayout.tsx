"use client";

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-cat-dark" : "bg-white"}`}>
      {/* Admin Header */}
      <AdminHeader />

      {/* Admin Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <motion.main
        className="lg:mr-64 p-6 min-h-screen pt-24 lg:pt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </div>
  );
}

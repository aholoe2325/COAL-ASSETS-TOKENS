"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-cat-dark lg:flex-row">
      {/* Sidebar - Desktop only */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:border-r lg:border-gray-200 lg:dark:border-cat-gold/10">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Main content with padding for mobile bottom nav */}
        <main className="flex-1 overflow-y-auto pb-24 lg:pb-0 px-3 md:px-6 py-4 md:py-6 bg-gray-50 dark:bg-cat-dark">
          {children}
        </main>
      </div>

      {/* Bottom navigation - Mobile only */}
      <div className="lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
}

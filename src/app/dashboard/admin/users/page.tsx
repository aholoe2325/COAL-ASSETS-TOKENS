"use client";

import { motion } from "framer-motion";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Users, Search, Filter, Trash2, Ban, CheckCircle, Mail } from "lucide-react";
import { useState, useMemo } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  status: "active" | "pending" | "banned";
  joinDate: string;
  country: string;
  kyc: "verified" | "pending" | "rejected";
  assets: number;
}

const USERS_DATA: User[] = [
  { id: 1, name: "Ahmed Hassan", email: "ahmed@example.com", status: "active", joinDate: "2025-02-15", country: "UAE", kyc: "verified", assets: 5000 },
  { id: 2, name: "Fatima Al-Mansoori", email: "fatima@example.com", status: "active", joinDate: "2025-02-10", country: "UAE", kyc: "verified", assets: 12500 },
  { id: 3, name: "Mohammed Ali", email: "mohammad@example.com", status: "pending", joinDate: "2025-02-25", country: "Saudi Arabia", kyc: "pending", assets: 0 },
  { id: 4, name: "Leila Rashid", email: "leila@example.com", status: "banned", joinDate: "2025-01-20", country: "Qatar", kyc: "rejected", assets: 3200 },
  { id: 5, name: "Karim Ibrahim", email: "karim@example.com", status: "active", joinDate: "2025-02-05", country: "Egypt", kyc: "verified", assets: 8900 },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "pending" | "banned">("all");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [action, setAction] = useState<"delete" | "ban" | "approve" | null>(null);

  const filteredUsers = useMemo(() => {
    return USERS_DATA.filter((user) => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "all" || user.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const handleAction = (user: User, actionType: "delete" | "ban" | "approve") => {
    setSelectedUser(user);
    setAction(actionType);
  };

  const confirmAction = () => {
    if (selectedUser && action) {
      console.log(`Action "${action}" on user:`, selectedUser);
      // Ici vous pouvez ajouter l'appel API
      setSelectedUser(null);
      setAction(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "banned":
        return "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getKYCColor = (kyc: string) => {
    switch (kyc) {
      case "verified":
        return "text-emerald-600 dark:text-emerald-400";
      case "pending":
        return "text-yellow-600 dark:text-yellow-400";
      case "rejected":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-gray-600";
    }
  };

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-cat-text flex items-center gap-3">
              <Users size={32} className="text-cat-gold" />
              User Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Total Users: {USERS_DATA.length} • Active: {USERS_DATA.filter(u => u.status === "active").length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <motion.div
          className="bg-white dark:bg-cat-charcoal/50 rounded-xl p-4 mb-6 border border-gray-200 dark:border-cat-gold/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-cat-gold/20 bg-white dark:bg-cat-charcoal/30 text-gray-900 dark:text-cat-text focus:outline-none focus:border-cat-gold"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-cat-gold/20 bg-white dark:bg-cat-charcoal/30 text-gray-900 dark:text-cat-text focus:outline-none focus:border-cat-gold"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="banned">Banned</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Users Table */}
        <motion.div
          className="bg-white dark:bg-cat-charcoal/50 rounded-xl overflow-hidden border border-gray-200 dark:border-cat-gold/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-cat-gold/10 bg-gray-50 dark:bg-cat-charcoal/70">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-cat-text">User</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-cat-text">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-cat-text">KYC</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-cat-text">Assets</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-cat-text">Joined</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 dark:text-cat-text">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, idx) => (
                  <motion.tr
                    key={user.id}
                    className="border-b border-gray-200 dark:border-cat-gold/10 hover:bg-gray-50 dark:hover:bg-cat-charcoal/70 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-cat-text">{user.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                          <Mail size={14} />
                          {user.email}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(user.status)}`}>
                        {user.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-semibold ${getKYCColor(user.kyc)}`}>
                        {user.kyc.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900 dark:text-cat-text">${user.assets.toLocaleString()}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{user.joinDate}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        {user.status === "pending" && (
                          <motion.button
                            onClick={() => handleAction(user, "approve")}
                            className="p-2 rounded-lg bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            title="Approve User"
                          >
                            <CheckCircle size={18} />
                          </motion.button>
                        )}
                        {user.status !== "banned" && (
                          <motion.button
                            onClick={() => handleAction(user, "ban")}
                            className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            title="Ban User"
                          >
                            <Ban size={18} />
                          </motion.button>
                        )}
                        <motion.button
                          onClick={() => handleAction(user, "delete")}
                          className="p-2 rounded-lg bg-red-100 hover:bg-red-200 dark:bg-red-900/20 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          title="Delete User"
                        >
                          <Trash2 size={18} />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Action Modal */}
        {selectedUser && action && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAction(null)}
          >
            <motion.div
              className="bg-white dark:bg-cat-charcoal rounded-xl p-6 max-w-md border border-gray-300 dark:border-cat-gold/30"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-cat-text mb-4">
                Confirm {action.toUpperCase()}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Are you sure you want to {action} <strong>{selectedUser.name}</strong>?
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setAction(null)}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-cat-gold/20 text-gray-900 dark:text-cat-text font-semibold hover:bg-gray-50 dark:hover:bg-cat-charcoal/70 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmAction}
                  className="flex-1 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors"
                >
                  {action.toUpperCase()}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </AdminLayout>
  );
}
 

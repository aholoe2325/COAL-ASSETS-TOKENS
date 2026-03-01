"use client";

import { motion } from "framer-motion";

export default function TransactionsPage() {
  const transactions = [
    {
      id: 1,
      type: "Transfer",
      amount: "100 CAT",
      status: "completed",
      date: "2026-02-27",
      hash: "0x1234...5678",
    },
    {
      id: 2,
      type: "Profit Distribution",
      amount: "+25 CAT",
      status: "completed",
      date: "2026-02-26",
      hash: "0x2345...6789",
    },
  ];

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold dark:text-cat-text text-gray-900 mb-6">Transactions</h1>

        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 shadow-sm border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="dark:bg-cat-charcoal/50 bg-gray-50 dark:border-cat-gold/10 border-gray-200 border-b">
                <tr>
                  <th className="px-6 py-4 text-left dark:text-cat-text text-gray-900 font-semibold">Type</th>
                  <th className="px-6 py-4 text-left dark:text-cat-text text-gray-900 font-semibold">Amount</th>
                  <th className="px-6 py-4 text-left dark:text-cat-text text-gray-900 font-semibold">Status</th>
                  <th className="px-6 py-4 text-left dark:text-cat-text text-gray-900 font-semibold">Date</th>
                  <th className="px-6 py-4 text-left dark:text-cat-text text-gray-900 font-semibold">Hash</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr
                    key={tx.id}
                    className="dark:border-cat-gold/5 border-gray-200 border-b dark:hover:bg-cat-charcoal/30 hover:bg-gray-50 transition-smooth"
                  >
                    <td className="px-6 py-4 dark:text-cat-text text-gray-900">{tx.type}</td>
                    <td className="px-6 py-4 dark:text-cat-gold text-amber-600 font-semibold">{tx.amount}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 dark:bg-cat-emerald/20 dark:text-cat-emerald bg-emerald-100 text-emerald-700 rounded-full text-sm">
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 dark:text-gray-400 text-gray-600">{tx.date}</td>
                    <td className="px-6 py-4 dark:text-cat-gold text-amber-600 cursor-pointer dark:hover:text-cat-emerald hover:text-emerald-600">
                      {tx.hash}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

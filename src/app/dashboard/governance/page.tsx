"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function GovernancePage() {
  const proposals = [
    {
      id: 1,
      title: "Increase CAT token supply for new reserves",
      votesFor: 6500,
      votesAgainst: 1200,
      status: "active",
      endDate: "2026-03-10",
    },
    {
      id: 2,
      title: "Partnership with SidraChain protocol",
      votesFor: 8900,
      votesAgainst: 450,
      status: "passed",
      endDate: "2026-02-25",
    },
  ];

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold dark:text-cat-text text-gray-900">Governance</h1>
          <button className="px-6 py-2 dark:bg-cat-gold dark:text-cat-dark bg-amber-600 text-white rounded-lg font-semibold dark:hover:bg-cat-gold/90 hover:bg-amber-700 transition-smooth">
            Create Proposal
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Your Voting Power", value: "1,250 votes" },
            { label: "Total Participants", value: "12,450" },
            { label: "Active Proposals", value: "3" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 shadow-sm p-6 rounded-xl border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40">
              <p className="dark:text-gray-400 text-gray-600 text-sm mb-2">{stat.label}</p>
              <p className="text-2xl font-bold dark:text-cat-gold text-amber-600">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {proposals.map((proposal) => {
            const total = proposal.votesFor + proposal.votesAgainst;
            const forPercent = (proposal.votesFor / total) * 100;
            return (
              <motion.div
                key={proposal.id}
                className="bg-gradient-to-br from-white via-gray-50 to-gray-50 dark:bg-gradient-to-br dark:from-cat-charcoal/90 dark:via-cat-charcoal/70 dark:to-cat-charcoal/80 shadow-sm p-6 rounded-xl dark:hover-glow hover:shadow-md transition-smooth border border-gray-200 border-b-2 border-b-amber-100 dark:border-cat-gold/10 dark:border-b-cat-gold/40"
                whileHover={{ y: -2 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold dark:text-cat-text text-gray-900">
                    {proposal.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      proposal.status === "active"
                        ? "dark:bg-cat-emerald/20 dark:text-cat-emerald bg-emerald-100 text-emerald-700"
                        : "dark:bg-cat-gold/20 dark:text-cat-gold bg-amber-100 text-amber-700"
                    }`}
                  >
                    {proposal.status === "active" ? "🟢 Active" : "✓ Passed"}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="dark:text-cat-emerald text-emerald-600" size={18} />
                        <span className="dark:text-cat-text text-gray-900">For: {proposal.votesFor.toLocaleString()}</span>
                      </div>
                      <span className="dark:text-cat-gold text-amber-600">{forPercent.toFixed(1)}%</span>
                    </div>
                    <div className="w-full dark:bg-cat-charcoal/50 bg-gray-200 rounded-full h-2">
                      <div
                        className="dark:bg-cat-emerald bg-emerald-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${forPercent}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="dark:text-cat-gold text-amber-600" size={18} />
                        <span className="dark:text-cat-text text-gray-900">Against: {proposal.votesAgainst.toLocaleString()}</span>
                      </div>
                      <span className="dark:text-cat-gold text-amber-600">{(100 - forPercent).toFixed(1)}%</span>
                    </div>
                    <div className="w-full dark:bg-cat-charcoal/50 bg-gray-200 rounded-full h-2">
                      <div
                        className="dark:bg-cat-gold bg-amber-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${100 - forPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                <p className="dark:text-gray-400 text-gray-600 text-sm mt-4">
                  Ends: {proposal.endDate}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

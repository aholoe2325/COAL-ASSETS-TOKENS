"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export function FinalCTA() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 bg-white dark:bg-cat-dark">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-cat-text">
          Join the Future of Ethical Energy Investment
        </h2>

        <p className="text-gray-700 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Become part of a movement transforming energy finance through transparency,
          integrity, and blockchain innovation.
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button variant="primary" onClick={() => router.push("/auth/signup")}>
            Sign Up
          </Button>
          <Button variant="secondary" onClick={() => router.push("/dashboard")}>
            Launch App
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, Lock, User, Eye, EyeOff, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCachedMediaUrl } from "@/utils/mediaCache";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    getCachedMediaUrl("https://image2url.com/r2/default/videos/1772281224772-ad822feb-a7cc-4c7e-85da-97cce89f4226.mp4").then(setVideoUrl);
  }, []);

  const handleSignup = () => {
    // Validation simple
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill out all fields");
      return;
    }
    // Redirection vers login après inscription
    router.push("/auth/login");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  useEffect(() => {
    getCachedMediaUrl("https://image2url.com/r2/default/videos/1772281224772-ad822feb-a7cc-4c7e-85da-97cce89f4226.mp4").then(setVideoUrl);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-gray-100 dark:bg-gradient-to-br dark:from-cat-dark dark:via-cat-charcoal/80 dark:to-cat-charcoal flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background video */}
      {videoUrl && (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 opacity-60 dark:opacity-80 animate-pulse">
        <div className="absolute inset-0 bg-gradient-conic from-amber-300/40 via-transparent to-emerald-300/40 dark:from-cat-gold/50 dark:via-cat-charcoal dark:to-cat-emerald/50" />
      </div>
      
      {/* Radial gradient from center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cat-gold/20 to-transparent dark:from-cat-gold/30 dark:to-transparent rounded-full blur-3xl opacity-60 animate-pulse" />

      <motion.div
        className="w-full max-w-md relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Brand - Modern Card */}
        <motion.div
          className="text-center mb-8 p-8 rounded-3xl bg-gradient-to-br from-white via-amber-50/50 to-emerald-50/30 dark:bg-gradient-to-br dark:from-cat-charcoal/95 dark:via-cat-gold/10 dark:to-cat-emerald/10 shadow-2xl border-2 border-amber-200 dark:border-cat-gold/40 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/5 via-transparent to-emerald-300/5 dark:from-cat-gold/15 dark:via-transparent dark:to-cat-emerald/15 pointer-events-none" />
          <div className="relative z-10">
            <Image src="https://image2url.com/r2/default/images/1772276387701-ffac521d-c23e-4f60-8a5a-37e9a00a9964.png" alt="CAT Logo" width={110} height={110} className="mx-auto mb-4 rounded-xl shadow-lg border-2 border-amber-200 dark:border-cat-gold/40" priority />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-emerald-600 dark:from-cat-gold dark:to-cat-emerald bg-clip-text text-transparent mb-1">CAT</h1>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Coal Assets Token</p>
          </div>
        </motion.div>

        {/* Form Container - Modern */}
        <div className="bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 dark:bg-gradient-to-br dark:from-cat-charcoal/95 dark:via-cat-charcoal/80 dark:to-cat-charcoal/90 shadow-2xl border-2 border-amber-200 dark:border-cat-gold/30 p-8 rounded-2xl backdrop-blur-sm relative z-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-cat-text mb-6">Create Account</h2>

          {/* Name Input */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="block text-gray-900 dark:text-cat-text mb-2 text-sm font-medium">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-amber-600/50 dark:text-cat-gold/50" size={20} />
              <input
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full dark:bg-cat-charcoal/50 bg-gray-50 dark:border-cat-gold/20 border-gray-300 border rounded-lg pl-10 pr-4 py-2.5 dark:text-cat-text text-gray-900 dark:placeholder-gray-500 placeholder-gray-400 focus:outline-none dark:focus:border-cat-gold focus:border-amber-600 transition-smooth"
              />
            </div>
          </motion.div>

          {/* Email Input */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="block text-gray-900 dark:text-cat-text mb-2 text-sm font-medium">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-amber-600/50 dark:text-cat-gold/50" size={20} />
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full dark:bg-cat-charcoal/50 bg-gray-50 dark:border-cat-gold/20 border-gray-300 border rounded-lg pl-10 pr-4 py-2.5 dark:text-cat-text text-gray-900 dark:placeholder-gray-500 placeholder-gray-400 focus:outline-none dark:focus:border-cat-gold focus:border-amber-600 transition-smooth"
              />
            </div>
          </motion.div>

          {/* Password Input */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="block text-gray-900 dark:text-cat-text mb-2 text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-amber-600/50 dark:text-cat-gold/50" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full bg-gray-50 dark:bg-cat-charcoal/50 border border-gray-300 dark:border-cat-gold/20 rounded-lg pl-10 pr-10 py-2.5 text-gray-900 dark:text-cat-text placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-amber-600 dark:focus:border-cat-gold transition-smooth"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-amber-600/50 dark:text-cat-gold/50 hover:text-amber-600 dark:hover:text-cat-gold transition-smooth"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              At least 8 characters with uppercase, lowercase, and numbers
            </p>
          </motion.div>

          {/* Terms */}
          <motion.div
            className="flex items-start mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input
              type="checkbox"
              className="mr-2 mt-1 rounded bg-gray-200 dark:bg-cat-charcoal border border-gray-300 dark:border-cat-gold/20"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I agree to the{" "}
              <a href="#" className="text-amber-600 hover:text-emerald-600 dark:text-cat-gold dark:hover:text-cat-emerald">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-amber-600 hover:text-emerald-600 dark:text-cat-gold dark:hover:text-cat-emerald">
                Privacy Policy
              </a>
            </p>
          </motion.div>

          {/* Signup Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              variant="primary" 
              className="w-full mb-4"
              onClick={handleSignup}
            >
              Create Account
            </Button>
          </motion.div>

          {/* Sign In Link */}
          <motion.p
            className="text-center dark:text-gray-400 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Already have an account?{" "}
            <Link href="/auth/login" className="text-amber-600 hover:text-emerald-600 dark:text-cat-gold dark:hover:text-cat-emerald transition-smooth font-medium">
              Sign in
            </Link>
          </motion.p>
        </div>

        {/* Trust Badges */}
        <motion.div
          className="mt-8 flex justify-center gap-6 text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex items-center gap-1">
            <CheckCircle size={16} className="dark:text-cat-emerald text-emerald-600" />
            <span>Sharia Compliant</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle size={16} className="dark:text-cat-emerald text-emerald-600" />
            <span>Secure</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

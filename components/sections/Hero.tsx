"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0A0F1E] flex items-center justify-center px-6 pt-24 relative overflow-hidden">

      {/* Smoke/Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Big orange glow left */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-orange-500 blur-[120px]"
        />

        {/* Big blue glow right */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600 blur-[120px]"
        />

        {/* Center purple smoke */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-600 blur-[140px]"
        />

        {/* Small floating smoke 1 */}
        <motion.div
          animate={{
            y: [-30, 30, -30],
            x: [-10, 10, -10],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/4 w-[200px] h-[200px] rounded-full bg-orange-400 blur-[80px]"
        />

        {/* Small floating smoke 2 */}
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-[250px] h-[250px] rounded-full bg-blue-400 blur-[90px]"
        />

      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-gray-400 text-sm">Nepal's Modern Tech Partner</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          We Build Digital
          <span className="text-orange-500"> Solutions </span>
          For Nepal
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Bishes Tech helps schools, clinics, and restaurants in Nepal grow online
          with modern websites, SEO, and smart technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-lg transition-colors w-full sm:w-auto text-center"
          >
            Start Your Project
          </motion.a>
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-lg transition-colors w-full sm:w-auto text-center"
          >
            View Our Work
          </motion.a>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm"
        >
          <span>✓ 100% Nepal Focused</span>
          <span>✓ Affordable Pricing</span>
          <span>✓ Fast Delivery</span>
          <span>✓ Ongoing Support</span>
        </motion.div>

      </div>
    </section>
  )
}
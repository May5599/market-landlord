"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PropertyHero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/30 to-[#1c2980]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-16 pb-20 text-left flex flex-col items-start justify-end h-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight"
        >
          Professional{" "}
          <span className="text-[#b9cf36]">Property Management</span> You Can Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl"
        >
          From tenant screening to maintenance and financial reporting , 
          <span className="text-[#b9cf36] font-medium"> MrLandlord.ca </span>
          handles every aspect with transparency, reliability, and care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-[#b9cf36] text-[#1A1F73] px-10 py-4 rounded-md font-semibold hover:bg-[#c8dc56] transition"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

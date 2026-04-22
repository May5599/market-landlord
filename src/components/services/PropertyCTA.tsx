"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PropertyCTA() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-[#1A1F73] text-white flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/30 to-[#1c2980]/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Ready to Maximize Your Property’s Potential?
        </h2>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          Partner with Ontario’s trusted property management experts and discover
          a stress-free way to grow your rental income while keeping your tenants happy.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#b9cf36] text-[#1A1F73] font-semibold text-lg px-10 py-4 rounded-full hover:bg-[#c8dc56] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get in Touch Today
        </Link>
      </motion.div>

      {/* Decorative blur glow */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#b9cf36]/20 rounded-full blur-3xl" />
    </section>
  );
}

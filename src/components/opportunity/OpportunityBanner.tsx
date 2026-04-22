"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function OpportunityBanner() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
        alt="Opportunity Background"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          A Growing Opportunity Awaits
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl text-gray-200 mb-8"
        >
          The rental market is expanding across Canada. Partner with{" "}
          <span className="text-[#b9cf36] font-semibold">MrLandlord.ca</span> to
          unlock growth, stability, and long-term success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#b9cf36] text-[#0a2e73] font-semibold rounded-lg shadow-md hover:bg-white transition"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

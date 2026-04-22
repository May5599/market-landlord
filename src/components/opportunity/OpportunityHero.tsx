"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function OpportunityHero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/30 to-[#1c2980]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-16 pb-16 text-left flex flex-col items-start justify-end h-full">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
          Your <span className="text-[#b9cf36]">Opportunity</span> Starts Here
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
          Own a proven property management business with growing demand across 
          Ontario and beyond. Build your future with the trusted MrLandlord.ca 
          franchise network.
        </p>

        <Link
          href="/opportunity"
          className="inline-block bg-[#b9cf36] text-black px-10 py-4 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          Inquire Today
        </Link>
      </div>
    </section>
  );
}

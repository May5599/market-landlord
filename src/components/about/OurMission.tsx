"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurMission() {
  return (
    <section className="relative py-24 bg-[#f6f8fc] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1c2980] mb-6 leading-snug">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-lg">
            At <strong>MrLandlord.ca</strong>, our mission is to make property 
            management simple, scalable, and rewarding. We empower franchisees 
            with proven systems, trusted branding, and full operational support 
            to help them succeed in Canada’s growing real estate market.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            We believe in combining community values with modern solutions to 
            deliver <em>stress-free property care</em> for landlords and 
            seamless rental experiences for tenants. Together, we’re building a 
            nationwide network of confident and successful property managers.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-96 md:h-[32rem] rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/ourmission.jpg"
            alt="Franchise success with MrLandlord.ca"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Decorative blur accent */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute -bottom-24 -right-24 w-96 h-96"
      />
    </section>
  );
}

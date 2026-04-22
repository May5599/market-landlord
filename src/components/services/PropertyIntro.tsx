"use client";

import { motion } from "framer-motion";

export default function PropertyIntro() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1F73] leading-tight mb-6">
            Reliable Property Management in Ontario
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            MrLandlord.ca is a full-service property management company helping
            homeowners and investors across Ontario. We make it easy to rent
            your property, find great tenants, and handle everyday maintenance
            without stress.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Our local team understands the rental market in Ottawa, Toronto,
            Kingston, and nearby cities. From advertising and tenant screening
            to rent collection and inspections, we manage each step with
            transparency and care.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you’re a first-time landlord or managing multiple homes,
            MrLandlord.ca helps you save time, protect your property, and grow
            your rental income. Our goal is simple , to make property ownership
            easy and rewarding.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80"
            alt="Ontario property managers discussing rental portfolio"
            className="rounded-xl shadow-md w-full max-w-md object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

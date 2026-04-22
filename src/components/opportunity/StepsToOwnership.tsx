"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Inquiry",
    text: "Start by reaching out to our team. We'll answer your questions and guide you through the franchise process.",
  },
  {
    number: "02",
    title: "Discovery & Training",
    text: "Attend a discovery session, learn about our systems, and receive full training to set you up for success.",
  },
  {
    number: "03",
    title: "Launch Your Franchise",
    text: "Open your doors with our proven playbook, brand reputation, and dedicated operational support.",
  },
  {
    number: "04",
    title: "Scale & Grow",
    text: "Expand your portfolio, grow your revenue, and build a long-term business with MrLandlord.ca.",
  },
];

export default function StepsToOwnership() {
  return (
    <section className="bg-gray-50 py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1F73] mb-4">
            Steps to Ownership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Owning a <span className="font-semibold text-[#b9cf36]">MrLandlord.ca</span>{" "}
            franchise is simple. Follow these four clear steps to start your
            journey in Canada's growing property management industry.
          </p>
        </div>

        {/* Two-column: steps left, image right */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Timeline */}
          <div className="relative">
            {/* Vertical line — desktop only */}
            <div className="hidden md:block absolute left-7 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="space-y-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6"
                >
                  {/* Badge */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#b9cf36] text-white font-bold text-lg flex items-center justify-center z-10 shadow-md">
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-1 hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-[#1A1F73] mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:sticky md:top-28 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative h-[480px] md:h-[540px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=900&q=80"
                alt="Building a MrLandlord.ca franchise"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F73]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-[#b9cf36] font-semibold text-sm uppercase tracking-wider mb-2">
                  Your Path to Ownership
                </p>
                <p className="text-xl font-serif font-bold leading-snug">
                  Four simple steps to running your own property management franchise.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

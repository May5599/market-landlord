"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Partner With Confidence",
    text: "Join a trusted Canadian property management brand that equips you with proven systems, training, and ongoing support from day one.",
  },
  {
    number: "02",
    title: "Launch Your Franchise",
    text: "We help you set up quickly with marketing, operations, and technology designed to make your entry into the market smooth and stress-free.",
  },
  {
    number: "03",
    title: "Grow With Us",
    text: "Scale your business across Ontario and beyond with the strength of the MrLandlord network, national recognition, and shared resources.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#1A1F73] mb-6">
          How It Works
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          From onboarding to nationwide growth, our step-by-step process ensures you have the tools, training, and brand strength to succeed in the property management industry.
        </p>

        {/* Vertical line down center */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col items-center md:items-start gap-6 md:gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:justify-end"
                }`}
              >
                {/* Number Badge */}
                <div className="flex-shrink-0 bg-[#b9cf36] text-[#1A1F73] font-bold text-2xl rounded-full w-14 h-14 flex items-center justify-center z-10 shadow-lg">
                  {step.number}
                </div>

                {/* Content Box */}
                <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md w-full md:max-w-md hover:shadow-lg transition text-center md:text-left">
                  <h3 className="text-xl font-bold text-[#1A1F73] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

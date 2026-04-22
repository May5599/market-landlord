"use client";

import { motion } from "framer-motion";
import { Handshake, GraduationCap, Megaphone, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <Handshake className="w-8 h-8 text-[#b9cf36]" />,
    title: "Trusted Brand Power",
    desc: "Leverage MrLandlord.ca’s reputation and proven systems to build client trust quickly.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[#b9cf36]" />,
    title: "Training & Support",
    desc: "From onboarding to daily operations, you’ll have full training and 24/7 support at your side.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-[#b9cf36]" />,
    title: "Marketing Advantage",
    desc: "National campaigns paired with local marketing tools help you scale faster and smarter.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#b9cf36]" />,
    title: "Low Investment, High Return",
    desc: "A franchise designed to be accessible, profitable, and scalable in a growing rental market.",
  },
];

export default function FranchiseBenefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#0a2e73] mb-12 text-center"
        >
          Why Partner with <span className="text-[#b9cf36]">MrLandlord.ca</span>?
        </motion.h2>

        {/* Stacked “message-style” cards */}
        <div className="flex flex-col gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-start gap-4 p-6 rounded-2xl shadow-md bg-white max-w-[80%] ${
                idx % 2 === 0 ? "self-start" : "self-end bg-[#f9fafb]"
              }`}
            >
              <div className="flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

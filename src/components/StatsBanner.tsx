"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Support", "Growth", "Impact", "Markets"];

const statsData: Record<string, { number: string; label: string }[]> = {
  Support: [
    { number: "100%", label: "Franchisee Support" },
    { number: "24/7", label: "Operational Guidance" },
    { number: "50+", label: "Training Modules" },
  ],
  Growth: [
    { number: "Proven", label: "Business Model" },
    { number: "10+", label: "Years of Expertise" },
    { number: "∞", label: "Scalable Growth" },
  ],
  Impact: [
    { number: "1,000+", label: "Units Managed" },
    { number: "<1%", label: "Eviction Rate" },
    { number: "95%", label: "Tenant Satisfaction" },
  ],
  Markets: [
    { number: "Ontario", label: "Strong Regional Presence" },
    { number: "Canada", label: "Nationwide Potential" },
    { number: "Global", label: "Future Opportunities" },
  ],
};

export default function AdvantageTabs() {
  const [active, setActive] = useState("Support");

  return (
    <section className="bg-gray-50 py-20 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0a2e73] mb-4">
          The MrLandlord Advantage
        </h2>
        <p className="text-gray-600 mb-12">
          Discover why investors and franchisees choose us.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 border-b border-gray-200 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`pb-2 text-base md:text-lg font-medium transition relative ${
                active === tab
                  ? "text-[#0a2e73] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#b9cf36]"
                  : "text-gray-500 hover:text-[#0a2e73]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData[active].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-50 rounded-xl p-10 shadow hover:shadow-lg transition"
            >
              <p className="text-4xl md:text-5xl font-extrabold text-[#b9cf36] mb-3">
                {stat.number}
              </p>
              <p className="text-gray-700 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Skyline */}
      <div className="relative -mb-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/skyline.png" alt="Canadian Skyline" className="mx-auto opacity-70" />
      </div>
      </div>
    </section>
  );
}
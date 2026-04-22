"use client";

import { motion } from "framer-motion";
import { BarChart3, Home, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    icon: <Home className="w-10 h-10 text-[#b9cf36]" />,
    number: "4M+",
    label: "Rental Units in Canada",
    desc: "A constantly growing pool of properties needing management.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-[#b9cf36]" />,
    number: "20%",
    label: "Market Growth",
    desc: "Rental demand up over the last 5 years , and rising.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#b9cf36]" />,
    number: "1 in 3",
    label: "Canadians Rent",
    desc: "A major and expanding customer base for property managers.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-[#b9cf36]" />,
    number: "$10B+",
    label: "Industry Value",
    desc: "The Canadian property management market continues to expand.",
  },
];

export default function MarketOpportunity() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#0a2e73] mb-6"
        >
          Why Now Is the Right Time
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          The Canadian rental housing market is booming. With growing demand
          from both tenants and landlords, MrLandlord.ca gives you a proven
          business model to capitalize on this growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center"
            >
              {item.icon}
              <p className="text-3xl font-extrabold text-[#b9cf36] mt-4">
                {item.number}
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mt-2">
                {item.label}
              </h4>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

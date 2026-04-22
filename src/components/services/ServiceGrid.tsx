"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  title: string;
  desc: string;
  position: string;
}

const services: Service[] = [
  {
    title: "Tenant Screening",
    desc: "We carefully select qualified tenants to protect your property and ensure steady income.",
    position: "0% center",
  },
  {
    title: "Legal Compliance",
    desc: "We handle leases, regulations, and disputes to keep your property legally protected.",
    position: "20% center",
  },
  {
    title: "Rent Collection",
    desc: "Online rent payments, reminders, and clear tracking for worry-free management.",
    position: "40% center",
  },
  {
    title: "Maintenance",
    desc: "From urgent repairs to regular upkeep, our trusted team keeps your property in top condition.",
    position: "60% center",
  },
  {
    title: "Inspections",
    desc: "Detailed inspections with photo documentation to ensure accountability and quality.",
    position: "80% center",
  },
  {
    title: "Financial Reports",
    desc: "Transparent monthly and year-end summaries help you track performance with ease.",
    position: "100% center",
  },
];

export default function ServiceGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop: Interactive expand grid */}
        <div className="hidden md:block">
          <motion.div
            className="grid transition-all duration-700"
            style={{
              gap: "6px",
              gridTemplateColumns:
                activeIndex === null
                  ? "repeat(6, 1fr)"
                  : services
                      .map((_, i) => (i === activeIndex ? "2fr" : "1fr"))
                      .join(" "),
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="relative h-[420px] cursor-pointer overflow-hidden rounded-sm"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
                  backgroundSize: "600%",
                  backgroundPosition: service.position,
                  backgroundRepeat: "no-repeat",
                }}
                animate={{
                  opacity: activeIndex === null || activeIndex === index ? 1 : 0.4,
                  transition: { duration: 0.3 },
                }}
              >
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-y-0 right-0 w-full md:w-[65%] bg-[#1A1F73]/80 text-white p-6 flex flex-col justify-center"
                    >
                      <h3 className="text-2xl font-serif font-bold mb-3 text-[#b9cf36]">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 text-base leading-relaxed">{service.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-6 text-center mt-4">
            {services.map((service, index) => (
              <h3
                key={index}
                className={`text-sm font-semibold transition-colors duration-300 ${
                  activeIndex === index ? "text-[#b9cf36]" : "text-[#1A1F73]"
                }`}
              >
                {service.title}
              </h3>
            ))}
          </div>
        </div>

        {/* Mobile: Simple card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            >
              <h3 className="text-lg font-semibold text-[#1A1F73] mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

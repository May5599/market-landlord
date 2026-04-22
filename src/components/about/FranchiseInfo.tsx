"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Users2, ClipboardList, Shield } from "lucide-react";

const infoPoints = [
  {
    icon: <Home className="w-8 h-8 text-[#b9cf36]" />,
    title: "Local Market Expertise",
    desc: "Our team understands the Ontario property market inside and out, ensuring every decision is rooted in real knowledge.",
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-[#b9cf36]" />,
    title: "Comprehensive Management",
    desc: "From leasing and tenant care to compliance and maintenance, we handle every detail with precision.",
  },
  {
    icon: <Users2 className="w-8 h-8 text-[#b9cf36]" />,
    title: "People-First Approach",
    desc: "We value strong relationships with owners and tenants alike, delivering transparency and trust at every step.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#b9cf36]" />,
    title: "Reliable Oversight",
    desc: "Every property we manage is treated as if it were our own, with careful attention and proactive solutions.",
  },
];

export default function AboutHighlights() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-[#b9cf36]">MrLandlord.ca?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Built on dedication and expertise, we combine trusted systems, 
            clear communication, and years of local knowledge to make property 
            ownership simple, stress-free, and rewarding.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#b9cf36] text-[#0a2e73] font-semibold rounded-lg shadow-md hover:bg-[#a2b82f] transition mb-10"
          >
            Contact Us Today
          </Link>
        </motion.div>

        {/* Right Side: Animated Points */}
        <div className="grid gap-8">
          {infoPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4"
            >
              {point.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

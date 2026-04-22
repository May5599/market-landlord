"use client";

import { motion } from "framer-motion";
import { Users, Home, ClipboardCheck } from "lucide-react";

export default function WhoWeAre() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#b9cf36]" />,
      title: "Dedicated Professionals",
      text: "Our team understands the Ontario property market inside and out, ensuring your investment is managed with expertise.",
    },
    {
      icon: <Home className="w-8 h-8 text-[#b9cf36]" />,
      title: "Comprehensive Services",
      text: "From leasing to maintenance and compliance, we provide complete property management solutions under one roof.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-[#b9cf36]" />,
      title: "Trusted Oversight",
      text: "We treat every property as if it were our own, offering transparent communication and reliable tenant care.",
    },
  ];

  return (
    <section className="bg-[#f6f8fc] py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-[#1c2980] mb-6"
        >
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-16"
        >
          At MrLandlord.ca, we bring years of experience in leasing, property maintenance, tenant management, and compliance. 
          Our mission is to provide a seamless, transparent, and supportive property ownership experience for Canadians. 
        </motion.p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#1c2980] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-left">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

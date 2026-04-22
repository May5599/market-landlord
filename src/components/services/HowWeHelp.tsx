"use client";

import { motion } from "framer-motion";

interface HelpItem {
  title: string;
  desc: string;
}

const helps: HelpItem[] = [
  {
    title: "Custom Management Plans",
    desc: "Every property is different. We build flexible plans that match your goals, whether it's a single rental or an entire portfolio.",
  },
  {
    title: "Proactive Property Inspections",
    desc: "Regular inspections help us spot issues early, prevent costly repairs, and keep your tenants satisfied and long-term.",
  },
  {
    title: "Smart Marketing and Tenant Retention",
    desc: "Your property gets premium listings with professional photos, targeted ads, and social exposure , attracting and keeping reliable tenants.",
  },
  {
    title: "Data-Driven Financial Insights",
    desc: "Track income, expenses, and performance through detailed monthly and annual reports that help you make confident decisions.",
  },
];

export default function HowWeHelp() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1F73] mb-4">
            How We Help Landlords Maximize Returns
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A results-focused approach that combines strategy, maintenance, and
            tenant satisfaction to help every property reach its full potential.
          </p>
          <div className="h-1 w-24 bg-[#b9cf36] mx-auto mt-6 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {helps.map((help, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 relative overflow-hidden"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 h-1 w-24 bg-[#b9cf36]" />
              <h3 className="text-2xl font-semibold text-[#1A1F73] mb-4 mt-4">
                {help.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {help.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

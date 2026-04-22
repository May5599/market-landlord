"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(0); // first open by default

  const faqs = [
    {
      q: "What is MrLandlord.ca and how does it help property owners in Ontario?",
      a: "MrLandlord.ca is a full-service property management company based in Ontario that helps landlords maximize rental income while minimizing stress. We handle every aspect of property management , from marketing and tenant screening to rent collection and maintenance , ensuring reliable tenants, consistent cash flow, and long-term property value.",
    },
    {
      q: "Does MrLandlord.ca offer property management in Ottawa and nearby regions?",
      a: "Yes. MrLandlord.ca proudly serves landlords across Ottawa and surrounding areas in Eastern Ontario. Our local property management team understands regional rental markets, tenant expectations, and local bylaws, ensuring every property is managed with expert care and full compliance.",
    },
    {
      q: "Can I franchise with MrLandlord.ca in my city?",
      a: "Absolutely. The MrLandlord.ca franchise program allows entrepreneurs to launch their own property management business with our proven system, training, and support. Whether you’re in Toronto, Ottawa, Kingston, or elsewhere in Ontario, our franchise model provides the tools and brand recognition to grow your portfolio quickly and confidently.",
    },
    {
      q: "What makes MrLandlord.ca different from other property management companies?",
      a: "MrLandlord.ca combines regional expertise with technology-driven management. We use digital rent collection, transparent financial reports, and proactive maintenance to create a seamless experience for landlords and tenants across Ontario.",
    },
    {
      q: "How does MrLandlord.ca handle tenant screening and leasing?",
      a: "Our tenant screening process includes credit checks, employment verification, rental history, and references. We market your property on top platforms, conduct professional showings, and prepare leases compliant with Ontario’s Residential Tenancies Act.",
    },
    {
      q: "What kind of properties does MrLandlord.ca manage?",
      a: "We manage single-family homes, condos, townhouses, and multi-unit buildings. Our services suit both new landlords and seasoned investors across Ontario who need reliable management in Ottawa, Toronto, and nearby regions.",
    },
    {
      q: "Does MrLandlord.ca provide 24/7 maintenance and emergency support?",
      a: "Yes. Our Ontario-based maintenance team provides round-the-clock emergency repairs and routine upkeep through trusted local contractors , giving landlords complete peace of mind.",
    },
    {
      q: "What legal and compliance support does MrLandlord.ca provide?",
      a: "Our experts handle all legal compliance including rent increases, lease renewals, eviction notices, and adherence to Ontario landlord-tenant laws , ensuring full protection for your investment.",
    },
    {
      q: "How does rent collection work with MrLandlord.ca?",
      a: "We offer convenient online rent collection via secure digital platforms. Landlords receive automatic disbursements, monthly statements, and transparent accounting , making ownership easier and more organized.",
    },
    {
      q: "Can I monitor my property’s performance as a landlord?",
      a: "Yes. Landlords get detailed monthly and year-end reports showing income, expenses, and maintenance updates, helping you track performance and improve ROI.",
    },
    {
      q: "Who should consider starting a MrLandlord.ca franchise?",
      a: "Anyone interested in real estate, property management, or entrepreneurship in Ontario can benefit. Our franchise model empowers professionals to build scalable, community-focused businesses that support local landlords and tenants.",
    },
    {
      q: "How do I contact MrLandlord.ca for property management or franchise opportunities?",
      a: "You can reach us through our online contact form or by phone. Whether you’re a landlord in Ottawa seeking management or exploring a franchise, our team will guide you every step of the way.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1F73] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about MrLandlord.ca property management,
            landlord services, and franchise opportunities in Ontario and beyond.
          </p>
          <div className="h-1 w-24 bg-[#b9cf36] mx-auto mt-6 rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <h2 className="text-lg md:text-xl font-semibold text-[#1A1F73]">
                  {item.q}
                </h2>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#b9cf36] text-2xl leading-none"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-6 text-gray-700 text-base md:text-lg leading-relaxed"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

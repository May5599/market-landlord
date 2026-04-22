"use client";

import { Home, ClipboardList, DollarSign, Wrench, FileText, BarChart3 } from "lucide-react";

const services = [
  {
    icon: <ClipboardList className="w-8 h-8 text-[#b9cf36]" />,
    title: "Tenant Screening & Leasing",
    subtitle: "Effective Marketing & Careful Vetting",
    description:
      "MrLandlord.ca markets your properties across trusted platforms and thoroughly screens applicants to ensure reliable, long-term tenants.",
  },
  {
    icon: <FileText className="w-8 h-8 text-[#b9cf36]" />,
    title: "Legal Compliance & Support",
    subtitle: "Risk Management & Expert Guidance",
    description:
      "We handle all aspects of landlord-tenant compliance, including lease agreements and evictions, ensuring your investment stays protected.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-[#b9cf36]" />,
    title: "Rent Collection",
    subtitle: "On-Time, Stress-Free Payments",
    description:
      "Our automated rent collection system ensures timely payments with direct deposits, saving you time and reducing hassle.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#b9cf36]" />,
    title: "24/7 Maintenance",
    subtitle: "Reliable Repairs & Emergency Response",
    description:
      "From routine repairs to urgent emergencies, our dedicated maintenance team provides cost-effective solutions and tenant satisfaction.",
  },
  {
    icon: <Home className="w-8 h-8 text-[#b9cf36]" />,
    title: "Move-In / Move-Out Inspections",
    subtitle: "Complete Documentation",
    description:
      "We conduct detailed inspections with photo records before and after each lease, keeping tenants accountable and your property in top shape.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#b9cf36]" />,
    title: "Financial Reporting",
    subtitle: "Clear, Transparent Financials",
    description:
      "Monthly income and expense statements with year-end summaries give you full visibility into your property’s financial performance.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e73]">
            Achieve More with MrLandlord Franchise Support
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Proven systems and reliable services designed to maximize growth and simplify property management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex gap-4 items-start">
              {/* Icon */}
              <div className="flex-shrink-0">{service.icon}</div>
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-[#0a2e73]">
                  {service.title}
                </h3>
                <p className="italic text-sm text-gray-500">{service.subtitle}</p>
                <p className="mt-2 text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

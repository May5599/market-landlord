"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const inputCls =
  "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b9cf36] transition text-base";

export default function FranchisePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    ownsBusinesss: "",
    experience: "",
    occupation: "",
    franchiseType: "",
    region: "",
    timeline: "",
    motivation: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@mrlandlord.ca", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `Franchise Inquiry: ${form.name} — ${form.region || form.city}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/contcat.jpg"
          alt="Property skyline"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/40 to-[#1c2980]/70" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl px-6 py-20 mt-16"
        >
          <p className="text-[#b9cf36] font-semibold tracking-widest uppercase text-sm mb-4">
            Franchise Opportunity
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-5 leading-tight">
            Start Your <span className="text-[#b9cf36]">MrLandlord.ca</span> Franchise
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            Launch your own property management business with Ontario&apos;s most trusted brand.
            Full training, operational support, and a proven system — built for your success.
          </p>
          <a
            href="#franchise-form"
            className="inline-block bg-[#b9cf36] text-[#1A1F73] px-10 py-4 rounded-full font-semibold hover:bg-[#a8bc2a] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Apply Now
          </a>
        </motion.div>
      </section>

      {/* WHY STRIP */}
      <section className="bg-[#1A1F73] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "Proven", label: "Business Model" },
            { stat: "10+", label: "Years of Expertise" },
            { stat: "1,000+", label: "Units Managed" },
            { stat: "24 / 7", label: "Franchisee Support" },
          ].map((item) => (
            <div key={item.stat}>
              <p className="text-3xl font-extrabold text-[#b9cf36]">{item.stat}</p>
              <p className="text-sm text-gray-300 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section id="franchise-form" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1F73] mb-3">
              Franchise Inquiry
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Fill in your details below. Our Ontario franchise development team reviews every submission
              and will reach out within 2–3 business days — confidentially.
            </p>
          </div>

          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-16 text-center"
            >
              <CheckCircle2 className="w-20 h-20 text-[#b9cf36] mx-auto mb-6" />
              <h3 className="text-3xl font-serif font-bold text-[#1A1F73] mb-3">Application Submitted!</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                Thank you for your interest in the MrLandlord.ca franchise. Our team will
                contact you within 2–3 business days to discuss next steps.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-8 py-3 border border-[#1A1F73] text-[#1A1F73] rounded-full font-medium hover:bg-[#1A1F73] hover:text-white transition"
              >
                Submit Another Inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 space-y-10">
              {/* Personal Info */}
              <div>
                <h3 className="text-xl font-semibold text-[#1A1F73] mb-5 pb-2 border-b border-gray-100">
                  Personal Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Full Name <span className="text-red-400">*</span></label>
                    <input name="name" type="text" required placeholder="Jane Smith" value={form.name} onChange={handleChange} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Email Address <span className="text-red-400">*</span></label>
                    <input name="email" type="email" required placeholder="jane@example.com" value={form.email} onChange={handleChange} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                    <input name="phone" type="tel" placeholder="+1 (613) 000-0000" value={form.phone} onChange={handleChange} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">City / Province</label>
                    <input name="city" type="text" placeholder="Ottawa, ON" value={form.city} onChange={handleChange} className={inputCls} />
                  </div>
                </div>
              </div>

              {/* Background */}
              <div>
                <h3 className="text-xl font-semibold text-[#1A1F73] mb-5 pb-2 border-b border-gray-100">
                  Background & Experience
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Do you currently own a property management business?</label>
                    <select name="ownsBusiness" value={form.ownsBusinesss} onChange={handleChange} className={inputCls}>
                      <option value="">Select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Years of Experience in Real Estate or Management</label>
                    <select name="experience" value={form.experience} onChange={handleChange} className={inputCls}>
                      <option value="">Select</option>
                      <option>None — new to the industry</option>
                      <option>1 – 3 years</option>
                      <option>4 – 9 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-600 mb-1">Current Occupation or Business</label>
                    <input name="occupation" type="text" placeholder="e.g. Real estate agent, entrepreneur, property investor" value={form.occupation} onChange={handleChange} className={inputCls} />
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div>
                <h3 className="text-xl font-semibold text-[#1A1F73] mb-5 pb-2 border-b border-gray-100">
                  Investment & Region
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Desired Franchise Type</label>
                    <select name="franchiseType" value={form.franchiseType} onChange={handleChange} className={inputCls}>
                      <option value="">Select</option>
                      <option>Single City</option>
                      <option>Multi-City / Regional</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Preferred Franchise Region</label>
                    <input name="region" type="text" placeholder="e.g. Ottawa, Toronto, Kingston…" value={form.region} onChange={handleChange} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">How Soon Are You Looking to Start?</label>
                    <select name="timeline" value={form.timeline} onChange={handleChange} className={inputCls}>
                      <option value="">Select</option>
                      <option>Immediately (within 3 months)</option>
                      <option>3 – 6 months</option>
                      <option>6 – 12 months</option>
                      <option>Just exploring for now</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Motivation */}
              <div>
                <h3 className="text-xl font-semibold text-[#1A1F73] mb-5 pb-2 border-b border-gray-100">
                  Additional Information
                </h3>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Why are you interested in a MrLandlord.ca franchise? <span className="text-gray-400">(Optional)</span>
                </label>
                <textarea
                  name="motivation"
                  rows={4}
                  placeholder="Share your goals, background, or anything else you'd like us to know…"
                  value={form.motivation}
                  onChange={handleChange}
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  required
                  checked={form.consent}
                  onChange={handleChange}
                  className="w-5 h-5 mt-0.5 accent-[#b9cf36]"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I confirm that the information provided is accurate and I consent to being contacted by the MrLandlord.ca team regarding this inquiry.
                </label>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again or email us at info@mrlandlord.ca.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#b9cf36] text-[#1A1F73] font-semibold py-4 rounded-xl hover:bg-[#a8bc2a] transition-all duration-300 shadow-sm hover:shadow-md text-lg disabled:opacity-60"
              >
                {status === "sending" ? "Submitting…" : "Submit Franchise Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Closing note */}
      <section className="py-16 text-center bg-gray-50 px-6">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1F73] mb-3">
          We&apos;ll be in touch within 2–3 business days
        </h3>
        <p className="text-gray-500 max-w-xl mx-auto">
          Our Ontario franchise development team will reach out for a confidential conversation
          about available regions, investment requirements, and next steps.
        </p>
      </section>
    </main>
  );
}

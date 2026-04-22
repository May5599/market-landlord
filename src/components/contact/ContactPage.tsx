"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const inputCls =
  "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b9cf36] transition bg-white text-gray-900 placeholder-gray-400";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    properties: "",
    referral: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
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
          _subject: `New Contact: ${form.name} — ${form.role || "General Inquiry"}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", role: "", properties: "", referral: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80"
          alt="Property skyline"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1A1F73]/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Let&apos;s Connect</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a landlord, investor, or franchise prospect — our Ontario team
            is ready to help. Reach out and let&apos;s start the conversation.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6 md:px-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100"
          >
            <h2 className="text-3xl font-serif font-bold text-[#1A1F73] mb-2">Send Us a Message</h2>
            <p className="text-gray-500 mb-8 text-sm">We typically respond within one business day.</p>

            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <CheckCircle2 className="w-16 h-16 text-[#b9cf36]" />
                <h3 className="text-2xl font-bold text-[#1A1F73]">Message Received!</h3>
                <p className="text-gray-600 max-w-sm">
                  Thank you for reaching out. A member of our team will be in touch within one business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2 border border-[#1A1F73] text-[#1A1F73] rounded-full text-sm font-medium hover:bg-[#1A1F73] hover:text-white transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-400">*</span></label>
                    <input name="name" type="text" required placeholder="Jane Smith" value={form.name} onChange={handleChange} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-400">*</span></label>
                    <input name="email" type="email" required placeholder="jane@example.com" value={form.email} onChange={handleChange} className={inputCls} />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input name="phone" type="tel" placeholder="+1 (613) 000-0000" value={form.phone} onChange={handleChange} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">I am a… <span className="text-red-400">*</span></label>
                    <select name="role" required value={form.role} onChange={handleChange} className={inputCls}>
                      <option value="">Select your role</option>
                      <option>Property Owner / Landlord</option>
                      <option>Real Estate Investor</option>
                      <option>Potential Franchisee</option>
                      <option>Tenant</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 — qualifying questions */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Properties Owned or Managed</label>
                    <select name="properties" value={form.properties} onChange={handleChange} className={inputCls}>
                      <option value="">Select a range</option>
                      <option>None yet</option>
                      <option>1 – 5</option>
                      <option>6 – 20</option>
                      <option>21 – 50</option>
                      <option>50+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">How Did You Hear About Us?</label>
                    <select name="referral" value={form.referral} onChange={handleChange} className={inputCls}>
                      <option value="">Select one</option>
                      <option>Google Search</option>
                      <option>Referral / Word of Mouth</option>
                      <option>Social Media</option>
                      <option>Online Ad</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Message <span className="text-red-400">*</span></label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your property, goals, or questions…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly at info@mrlandlord.ca.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#b9cf36] text-[#1A1F73] font-semibold py-3.5 rounded-lg hover:bg-[#a8bc2a] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between bg-[#1A1F73] text-white rounded-2xl p-8 md:p-10 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#b9cf36]/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-2">Ontario Headquarters</h3>
              <p className="text-gray-300 mb-8 text-sm">Our team is here Monday to Friday, ready to help.</p>

              <div className="space-y-5">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                  <Mail className="w-6 h-6 text-[#b9cf36] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-medium">info@mrlandlord.ca</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                  <Phone className="w-6 h-6 text-[#b9cf36] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="font-medium">+1 (613) 699-0400</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl">
                  <MapPin className="w-6 h-6 text-[#b9cf36] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Address</p>
                    <p className="font-medium">Ottawa, Ontario, Canada</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/20 pt-6 text-gray-300 text-sm space-y-1">
                <p>Mon – Fri: 9:00 AM – 6:00 PM EST</p>
                <p>Serving Ottawa, Toronto, Kingston, and surrounding Ontario regions.</p>
              </div>
            </div>

            {/* Service areas */}
            <div className="relative z-10 mt-10 grid grid-cols-2 gap-3">
              {["Ottawa", "Toronto", "Kingston", "Gatineau", "Brockville", "Cornwall"].map((city) => (
                <div key={city} className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-200 text-center">
                  {city}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-b from-[#1A1F73] to-[#141850] text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 px-6"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Ready to Grow with MrLandlord.ca?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Connect with Ontario&apos;s trusted property management and franchise experts.
            Let&apos;s turn your investment into long-term success.
          </p>
          <a
            href="/franchise"
            className="inline-block bg-[#b9cf36] text-[#1A1F73] px-10 py-4 rounded-full font-semibold hover:bg-[#a8bc2a] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore the Franchise Opportunity
          </a>
        </motion.div>
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#b9cf36]/10 blur-3xl rounded-full" />
      </section>
    </main>
  );
}

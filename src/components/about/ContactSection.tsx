"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@mrlandlord.ca", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `Inquiry from ${form.name}` }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const contacts = [
    { icon: <Phone className="w-6 h-6 text-[#b9cf36]" />, label: "Phone", value: "+1 (613) 699-0400" },
    { icon: <Mail className="w-6 h-6 text-[#b9cf36]" />, label: "Email", value: "info@mrlandlord.ca" },
    { icon: <MapPin className="w-6 h-6 text-[#b9cf36]" />, label: "Address", value: "Ottawa, Ontario, Canada" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0a2e73] via-[#2a74ff] to-[#0a2e73] text-white overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#b9cf36]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#b9cf36]/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Get In Touch
          </motion.h2>
          <p className="text-gray-300 max-w-md">
            Have questions about franchising, investing, or property management?
            We're here to help — reach out today.
          </p>

          <div className="space-y-4">
            {contacts.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-white/5 p-4 rounded-xl shadow-md backdrop-blur-md"
              >
                {item.icon}
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-gray-400 border-t border-white/10 pt-6">
            Mon – Fri: 9:00 AM – 6:00 PM EST · Serving Ontario and beyond.
          </p>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-[#0a2e73]">Send Us a Message</h3>

          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
              <CheckCircle2 className="w-14 h-14 text-[#b9cf36]" />
              <p className="text-lg font-semibold text-[#0a2e73]">Message Received!</p>
              <p className="text-gray-500 text-sm max-w-xs">We'll be in touch within one business day.</p>
              <button onClick={() => setStatus("idle")} className="mt-2 text-sm text-[#0a2e73] underline">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" type="text" required placeholder="Full Name" value={form.name} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#b9cf36] focus:outline-none" />
              <input name="email" type="email" required placeholder="Email Address" value={form.email} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#b9cf36] focus:outline-none" />
              <input name="phone" type="tel" placeholder="Phone Number (optional)" value={form.phone} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#b9cf36] focus:outline-none" />
              <textarea name="message" required rows={4} placeholder="Your message…" value={form.message} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#b9cf36] focus:outline-none resize-none" />
              {status === "error" && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}
              <button type="submit" disabled={status === "sending"}
                className="w-full bg-[#b9cf36] hover:bg-[#a8bc2a] text-[#0a2e73] font-semibold py-3 rounded-lg transition shadow-md disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

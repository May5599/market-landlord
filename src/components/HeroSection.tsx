"use client";

import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] flex items-center text-amber-50"
      aria-labelledby="hero-title"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://res.cloudinary.com/duwtym7w7/image/upload/v1757433333/herodroneshot_poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/duwtym7w7/video/upload/f_auto,q_auto:eco/v1757432223/herodroneshot_wdvdzy.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/30 to-[#1c2980]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 md:px-12 h-full flex flex-col justify-end items-start pb-16">
        <h1
          id="hero-title"
          className="text-[clamp(2rem,6vw,4.5rem)] font-serif font-bold mb-6 leading-tight"
        >
          Start Your <span className="text-[#b9cf36]">MrLandlord.ca</span> Franchise
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-10 text-gray-100 max-w-2xl">
          MrLandlord.ca is Ontario’s trusted property management partner. 
          With proven systems, expert support, and strong demand for rental housing, 
          we help entrepreneurs build successful franchise businesses while creating value 
          for property owners and tenants.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-start gap-4">
          <a
            href="/franchise"
            className="flex items-center gap-2 text-base md:text-lg font-medium px-5 py-3 bg-[#b9cf36] text-[#1c2980] hover:bg-white hover:text-[#1c2980] transition-colors rounded"
          >
            Start Your Franchise
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/support"
            className="flex items-center gap-2 text-base md:text-lg font-medium px-5 py-3 bg-transparent text-white hover:bg-[#b9cf36] hover:text-[#1c2980] transition-colors rounded"
          >
            Learn About Our Support
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

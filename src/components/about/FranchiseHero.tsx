"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/4434067-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/30 to-[#1c2980]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-16 pb-16 text-left flex flex-col items-start justify-end h-full">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
          About <span className="text-[#b9cf36]">MrLandlord.ca</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
          Built on years of expertise, MrLandlord.ca empowers investors and 
          franchisees with proven systems, local knowledge, and the support 
          needed to succeed in real estate. 
        </p>

        <Link
          href="/opportunity"
          className="inline-block bg-[#b9cf36] text-black px-10 py-4 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}

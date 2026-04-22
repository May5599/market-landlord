"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a2e73] text-gray-200 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand block */}
        {/* Brand block */}
{/* Brand block */}
<div className="flex items-center justify-center md:justify-start">
  <div className="relative w-56 h-28 md:w-64 md:h-32">
    <Image
      src="/03.jpg"
      alt="MrLandlord.ca Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
</div>


        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/franchise" className="hover:text-[#b9cf36] transition">
                Franchise
              </Link>
            </li>
            <li>
              <Link href="/investors" className="hover:text-[#b9cf36] transition">
                Investors
              </Link>
            </li>
            <li>
              <Link href="/opportunities" className="hover:text-[#b9cf36] transition">
                Opportunities
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#b9cf36] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#b9cf36] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Franchise Info */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Franchise</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/support" className="hover:text-[#b9cf36] transition">
                Support
              </Link>
            </li>
            <li>
              <Link href="/markets" className="hover:text-[#b9cf36] transition">
                Markets
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[#b9cf36] transition">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Connect</h4>
          <p className="text-sm text-gray-300 mb-4">
            Follow us for updates and opportunities.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="p-3 rounded-full bg-white/10 hover:bg-[#b9cf36] hover:text-[#0a2e73] transition"
            >
              <FaFacebookF size={18} />
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-white/10 hover:bg-[#b9cf36] hover:text-[#0a2e73] transition"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full bg-white/10 hover:bg-[#b9cf36] hover:text-[#0a2e73] transition"
            >
              <FaLinkedinIn size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-white/20 mt-12 py-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} <span className="font-semibold">MrLandlord.ca</span> , A Division of Rent In Ottawa. All rights reserved.
      </div>
    </footer>
  );
}

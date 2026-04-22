"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Opportunity", href: "/opportunity" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/drt92o4ye/image/upload/v1758827457/0_rtscxl.png"
            alt="MrLandlord Logo"
            width={240}
            height={72}
            className="h-14 md:h-18 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-[#0a2e73] hover:text-[#0f4fb3] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Login Dropdown */}
          <li className="relative" ref={loginRef}>
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="flex items-center gap-1 border border-[#0a2e73] text-[#0a2e73] px-4 py-2 rounded-full font-semibold hover:bg-[#0a2e73] hover:text-white transition text-sm"
            >
              Login
              <ChevronDown className={`w-4 h-4 transition-transform ${loginOpen ? "rotate-180" : ""}`} />
            </button>
            {loginOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden z-50">
                <a
                  href="https://mrlandlord.ca/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 text-sm text-[#0a2e73] font-medium hover:bg-[#0a2e73] hover:text-white transition"
                  onClick={() => setLoginOpen(false)}
                >
                  Property Manager
                </a>
                <div className="border-t border-gray-100" />
                <a
                  href="https://mrlandlord.ca/tenant/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 text-sm text-[#0a2e73] font-medium hover:bg-[#0a2e73] hover:text-white transition"
                  onClick={() => setLoginOpen(false)}
                >
                  Tenant Portal
                </a>
              </div>
            )}
          </li>

          {/* CTA Button */}
          <li>
            <Link
              href="/franchise"
              className="bg-[#b9cf36] text-[#0a2e73] px-5 py-2 rounded-full font-semibold shadow hover:bg-[#a8bc2a] transition text-sm"
            >
              Start Your Franchise
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#0a2e73]"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white text-[#0a2e73] px-6 py-6 absolute top-full left-0 w-full shadow-lg transition-all duration-300 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 text-base font-medium">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block hover:text-[#0f4fb3] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Mobile Login Options */}
          <li className="border-t border-gray-100 pt-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Login</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://mrlandlord.ca/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[#0a2e73] text-[#0a2e73] px-5 py-3 rounded-full font-semibold text-center hover:bg-[#0a2e73] hover:text-white transition"
                onClick={() => setMobileOpen(false)}
              >
                Property Manager
              </a>
              <a
                href="https://mrlandlord.ca/tenant/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[#0a2e73] text-[#0a2e73] px-5 py-3 rounded-full font-semibold text-center hover:bg-[#0a2e73] hover:text-white transition"
                onClick={() => setMobileOpen(false)}
              >
                Tenant Portal
              </a>
            </div>
          </li>

          <li>
            <Link
              href="/franchise"
              className="block bg-[#b9cf36] text-[#0a2e73] px-6 py-3 rounded-full font-semibold text-center shadow hover:bg-[#a8bc2a] transition"
              onClick={() => setMobileOpen(false)}
            >
              Start Your Franchise
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

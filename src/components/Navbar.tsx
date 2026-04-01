"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Our Team" },
  { href: "/mission", label: "Mission" },
  { href: "/pricing", label: "Pricing" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
  { href: "/location", label: "Location" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">BK</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-secondary">
                BK Pilates
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
                Raleigh
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-secondary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-white border-t border-gray-100 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-medium text-muted hover:text-secondary hover:pl-2 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-sm font-semibold text-center transition-all duration-200"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

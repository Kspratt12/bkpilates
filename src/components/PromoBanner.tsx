"use client";

import { useState } from "react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div id="promo-banner" className="bg-secondary text-white text-center py-2 px-4 text-xs sm:text-sm relative">
      <span className="text-gray-300">New Client Special:</span>{" "}
      <span className="font-semibold">First Class Just $29</span>
      <span className="hidden sm:inline text-gray-400"> - No commitment, no pressure</span>
      <a
        href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 text-primary font-semibold hover:underline"
      >
        Book Now
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
        aria-label="Dismiss"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

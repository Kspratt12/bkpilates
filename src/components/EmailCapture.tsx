"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Open mailto with signup intent
    window.location.href = `mailto:info@bkpilatesrdu.com?subject=${encodeURIComponent("Newsletter Signup")}&body=${encodeURIComponent(`Please add me to the BK Pilates mailing list.\n\nEmail: ${email}`)}`;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 md:p-14 text-center relative">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Stay in the Loop
              </h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                Get studio updates, class tips, and exclusive offers delivered to your inbox.
              </p>

              {submitted ? (
                <div className="bg-white/20 rounded-2xl p-6 max-w-md mx-auto">
                  <p className="text-white font-semibold">You&apos;re in! Check your email client to confirm.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none bg-white/20 text-white placeholder-white/50 border border-white/20 focus:border-white/50 focus:bg-white/25 transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-white text-primary-dark px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all hover:shadow-lg flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <p className="text-white/40 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

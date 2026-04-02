"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "I've never done Pilates. Is that okay?",
    a: "Absolutely! Most clients start as beginners. Our instructors modify every exercise for all levels. Your first class is just $29.",
  },
  {
    q: "What should I wear and bring?",
    a: "Form-fitting activewear and a water bottle. Grip socks are recommended - we sell them at the studio. We provide everything else.",
  },
  {
    q: "How long is a class?",
    a: "Each group reformer class is 50 minutes. Private and duet sessions are also 50 minutes.",
  },
  {
    q: "Is there free parking?",
    a: "Yes! Free 2-hour parking in the adjacent deck at The Row. Check @bkpilatesrdu on Instagram for step-by-step parking directions.",
  },
  {
    q: "Can I do Pilates with an injury?",
    a: "Pilates is great for recovery. Let your instructor know before class and they'll modify exercises. For specific injuries, we recommend starting with a private session ($85).",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Common Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            FAQ
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 px-6">
          {faqs.map((faq, i) => (
            <div key={i} className={`${i > 0 ? "border-t border-gray-100" : ""}`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <p className="font-semibold text-secondary">{faq.q}</p>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-5" : "max-h-0"}`}>
                <p className="text-muted leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
          >
            View all FAQ
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "I've never done Pilates before. Is that okay?",
        a: "Absolutely! Most of our clients started as complete beginners. Our instructors modify every exercise for all levels. Your first class is just $29 - come try it with zero pressure.",
      },
      {
        q: "What should I wear?",
        a: "Form-fitting activewear works best so your instructor can see your alignment. Leggings and a fitted top are ideal. Grip socks are recommended - we sell them at the studio too.",
      },
      {
        q: "What should I bring?",
        a: "Just a water bottle. We provide everything else including the reformer equipment, any props needed, and a welcoming environment.",
      },
      {
        q: "How early should I arrive?",
        a: "Please arrive 10-15 minutes before your first class. This gives you time to check in, get settled, and meet your instructor.",
      },
      {
        q: "How long is a class?",
        a: `Each group reformer class is ${BUSINESS.classDuration}. Private and duet sessions are also ${BUSINESS.classDuration}.`,
      },
    ],
  },
  {
    category: "Health & Safety",
    questions: [
      {
        q: "Can I do Pilates while pregnant?",
        a: "Pilates can be great during pregnancy with proper modifications. We recommend private sessions so your instructor can tailor exercises specifically for you. Always consult your doctor first and let your instructor know.",
      },
      {
        q: "I have a back injury. Is Pilates safe for me?",
        a: "Pilates is actually one of the best exercises for back pain and recovery. Our instructors are trained to modify for injuries. We recommend starting with a private session ($85) so we can assess your needs and create a safe plan.",
      },
      {
        q: "What if I have knee/shoulder/hip issues?",
        a: "Let your instructor know before class starts. The reformer is low-impact and most exercises can be modified. For specific injuries, a private session is the best way to get personalized attention.",
      },
    ],
  },
  {
    category: "Classes & Booking",
    questions: [
      {
        q: "What is a reformer?",
        a: "The reformer is a specialized Pilates machine with a sliding carriage, springs for resistance, and straps. It's incredibly versatile and allows for hundreds of exercises targeting every muscle group. Don't worry if it looks intimidating - your instructor guides you through everything.",
      },
      {
        q: "What's the difference between group, private, and duet sessions?",
        a: "Group Reformer classes have multiple students and follow a structured flow. Private sessions are one-on-one with an instructor, fully customized to your goals. Duet sessions are semi-private for two people - great for friends or couples.",
      },
      {
        q: "How do I book a class?",
        a: "Book through our Mindbody system - click any 'Book Now' button on the site. You can also call us at " + BUSINESS.phone + " or email " + BUSINESS.email + ".",
      },
      {
        q: "What's your cancellation policy?",
        a: "Please cancel at least 12 hours before class to avoid a late cancel fee. Classes fill up fast, so canceling early lets someone else take your spot.",
      },
    ],
  },
  {
    category: "Pricing & Memberships",
    questions: [
      {
        q: "What's the cheapest way to try Pilates?",
        a: "Your first class is just $29 - that's our new client special. If you want to try a few, grab the 3-class pack for $85. For a full immersion, Camp Pilates gives you unlimited classes for a week at $79.",
      },
      {
        q: "Which membership is best for me?",
        a: "If you're coming 2x/week, the 8-class membership at $179/month is our most popular. For 3x/week, the 12-class at $209 is great value. If you're all-in, unlimited at $329 is the way to go.",
      },
      {
        q: "Do class packs expire?",
        a: "Contact us directly for current expiration policies on class packs. Call " + BUSINESS.phone + " or email " + BUSINESS.email + ".",
      },
      {
        q: "Do you offer gift cards?",
        a: "Yes! Gift cards make a great gift. Contact us at " + BUSINESS.email + " or call " + BUSINESS.phone + " to purchase.",
      },
    ],
  },
  {
    category: "Location & Parking",
    questions: [
      {
        q: "Where exactly are you located?",
        a: "We're at " + BUSINESS.address.full + ", inside The Row building. Look for our canopy and BK Pilates signage at the entrance.",
      },
      {
        q: "Is there free parking?",
        a: "Yes! Free 2-hour complimentary retail parking is available in the adjacent parking deck at The Row. Check @bkpilatesrdu on Instagram for step-by-step parking directions in our 'Parking' highlight.",
      },
      {
        q: "Google Maps shows a construction site - is the address correct?",
        a: "Yes, the address is correct. Maps services may show outdated imagery from when The Row was under construction. The building is fully open. Look for The Row sign and BK Pilates signage when you arrive.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <p className="font-semibold text-secondary">{q}</p>
        <svg
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-secondary">
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Questions? We Got You
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">FAQ</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Everything you need to know before your first class.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {faqs.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="text-xl font-bold text-secondary mb-4">{section.category}</h2>
              <div className="bg-white rounded-2xl border border-gray-100 px-6">
                {section.questions.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="bg-primary rounded-2xl p-8 text-center mt-8">
            <h3 className="text-2xl font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-white/70 mb-6">We&apos;re happy to help. Reach out anytime.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${BUSINESS.phone.replace(/\./g, "")}`} className="bg-white text-primary-dark px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Call {BUSINESS.phone}
              </a>
              <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

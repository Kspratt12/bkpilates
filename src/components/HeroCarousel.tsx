"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = ["/1st.png", "/mainhero2.png", "/mainhero3.png"];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
      {/* Background Images */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`BK Pilates Raleigh Studio ${i + 1}`}
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
            Welcome to BK Pilates Raleigh
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
            Move with
            <br />
            <span className="text-primary">intention.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-lg animate-fade-in-up animation-delay-400 leading-relaxed">
            Bringing mind-body connection to the Raleigh community through
            wellness, mindfulness, and stress relief.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <a
              href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-center transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              Book a Class
            </a>
            <Link
              href="/pricing"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white/10 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

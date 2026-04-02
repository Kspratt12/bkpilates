"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: string, duration: number = 2000) {
  const [value, setValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          // Check if target is a number or has special chars
          const numMatch = target.match(/^(\d+)/);
          if (!numMatch) {
            setValue(target);
            return;
          }

          const end = parseInt(numMatch[1]);
          const suffix = target.slice(numMatch[1].length);
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * end);
            setValue(current + suffix);
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}

const stats = [
  { target: "2024", label: "Est. Raleigh" },
  { target: "50 min", label: "Per Class" },
  { target: "30+", label: "Classes Weekly" },
  { target: "7 days", label: "Open Weekly" },
];

function StatItem({ target, label }: { target: string; label: string }) {
  const { ref, value } = useCountUp(target);
  return (
    <div ref={ref}>
      <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{value}</p>
      <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <StatItem key={stat.label} target={stat.target} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

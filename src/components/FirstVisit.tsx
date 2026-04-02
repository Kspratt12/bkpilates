"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Book Online",
    desc: "Reserve your spot through our schedule. First class is just $29.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    num: "02",
    title: "Arrive Early",
    desc: "Come 10-15 min before class. We'll show you around and get you set up.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    num: "03",
    title: "Meet Your Instructor",
    desc: "Tell them about any goals or concerns. They'll modify exercises just for you.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    num: "04",
    title: "Move & Feel Amazing",
    desc: "50 minutes of guided reformer work. You'll walk out feeling taller, stronger, and lighter.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export default function FirstVisit() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Your First Time
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">
              What to Expect
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 150} direction="up">
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <svg className="w-7 h-7 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                  </svg>
                </div>
                <p className="text-primary font-bold text-sm mb-2">{step.num}</p>
                <h3 className="text-lg font-bold text-secondary mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

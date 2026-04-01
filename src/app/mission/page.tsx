import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mission & Values | BK Pilates Raleigh",
  description:
    "Our mission is to empower clients through small, sustainable changes. Body positivity and holistic health at the core.",
};

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-secondary/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1920&q=80')",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            What Drives Us
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Mission & Values
          </h1>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 leading-tight">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-muted leading-relaxed font-light">
            Our mission is to empower clients through small, sustainable
            changes. BK Pilates emphasizes body positivity and holistic health,
            maintaining our focus on enabling individuals to live healthy and
            happy lifestyles.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              What We Believe
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Body Positivity",
                description:
                  "We celebrate every body. Our studio is a judgment-free zone where you are encouraged to honor where you are in your journey.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Community",
                description:
                  "More than a studio - we are a community. We lift each other up and grow together through movement and connection.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                title: "Sustainable Wellness",
                description:
                  "We focus on small, sustainable changes that add up over time. No extreme approaches - just consistent, mindful progress.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Mindfulness",
                description:
                  "Every movement is intentional. We teach you to connect with your body, breath, and the present moment.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
              {
                title: "Accessibility",
                description:
                  "Pilates is for everyone. We welcome all levels, all bodies, and all backgrounds to our studio.",
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
              },
              {
                title: "Joy",
                description:
                  "Movement should feel good. We create a space where wellness is a joyful process, not a punishing routine.",
                icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-background rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={value.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <svg
            className="w-12 h-12 text-primary/50 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-6">
            True self-care isn&apos;t a race for perfection, but a process of
            joy.
          </p>
          <p className="text-primary font-medium">- BK Pilates</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Experience Our Values in Action
          </h2>
          <p className="text-muted text-lg mb-8">
            Join our community and see what mindful movement can do for you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}

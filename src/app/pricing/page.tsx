import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | BK Pilates Raleigh",
  description:
    "Flexible pricing options for group classes, private sessions, and memberships at BK Pilates Raleigh.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-secondary/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80')",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Transparent Pricing
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Pricing
          </h1>
        </div>
      </section>

      {/* New Client Highlight */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            New to BK Pilates?
          </h2>
          <p className="text-white/80 text-lg mb-6">
            Try your first group class for just $29 or grab 3 classes for $85.
          </p>
          <a
            href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-dark px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
          >
            Book Your Intro Class - $29
          </a>
        </div>
      </section>

      {/* Class Packs */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Flexible Options
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Group Class Packs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { classes: "1", price: "$39", perClass: "$39", label: "Single Class" },
              { classes: "5", price: "$170", perClass: "$34", label: "5 Class Pack" },
              {
                classes: "10",
                price: "$330",
                perClass: "$33",
                label: "10 Class Pack",
                popular: true,
              },
              { classes: "20", price: "$600", perClass: "$30", label: "20 Class Pack" },
            ].map((pack) => (
              <div
                key={pack.classes}
                className={`relative rounded-2xl p-8 text-center border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  pack.popular
                    ? "bg-secondary text-white border-secondary shadow-xl scale-105"
                    : "bg-white border-gray-100"
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Best Value
                  </div>
                )}
                <p
                  className={`text-sm font-medium uppercase tracking-wider mb-4 ${
                    pack.popular ? "text-primary" : "text-primary"
                  }`}
                >
                  {pack.label}
                </p>
                <p
                  className={`text-4xl font-bold mb-2 ${
                    pack.popular ? "text-white" : "text-secondary"
                  }`}
                >
                  {pack.price}
                </p>
                <p
                  className={`text-sm mb-6 ${
                    pack.popular ? "text-gray-300" : "text-muted"
                  }`}
                >
                  {pack.perClass} per class
                </p>
                <a
                  href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                    pack.popular
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-background hover:bg-gray-200 text-secondary"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* Camp Pilates */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100 text-center max-w-md mx-auto">
            <p className="text-primary font-medium tracking-widest uppercase text-xs mb-2">
              Limited Time
            </p>
            <h3 className="text-xl font-bold text-secondary mb-2">
              Camp Pilates
            </h3>
            <p className="text-muted text-sm mb-2">
              Unlimited classes for one full week
            </p>
            <p className="text-3xl font-bold text-primary mb-4">$79</p>
            <a
              href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
            >
              Try Camp Pilates
            </a>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Monthly Commitment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Memberships
            </h2>
            <p className="text-muted mt-4 max-w-xl mx-auto">
              Save more with a monthly membership. Consistent practice leads to
              the best results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { classes: "4", price: "$99", perClass: "$24.75" },
              { classes: "8", price: "$179", perClass: "$22.38" },
              { classes: "12", price: "$209", perClass: "$17.42", popular: true },
              { classes: "16", price: "$249", perClass: "$15.56" },
              { classes: "Unlimited", price: "$329", perClass: "Best value" },
            ].map((membership) => (
              <div
                key={membership.classes}
                className={`rounded-2xl p-6 text-center border transition-all duration-300 hover:shadow-lg ${
                  membership.popular
                    ? "bg-secondary text-white border-secondary shadow-lg"
                    : "bg-background border-gray-100"
                }`}
              >
                {membership.popular && (
                  <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                    Most Popular
                  </div>
                )}
                <p
                  className={`text-3xl font-bold mb-1 ${
                    membership.popular ? "text-white" : "text-secondary"
                  }`}
                >
                  {membership.classes}
                </p>
                <p
                  className={`text-xs uppercase tracking-wider mb-4 ${
                    membership.popular ? "text-gray-300" : "text-muted"
                  }`}
                >
                  {membership.classes === "Unlimited"
                    ? "classes"
                    : "classes / month"}
                </p>
                <p
                  className={`text-2xl font-bold mb-1 ${
                    membership.popular ? "text-primary" : "text-primary"
                  }`}
                >
                  {membership.price}
                </p>
                <p
                  className={`text-xs mb-4 ${
                    membership.popular ? "text-gray-400" : "text-muted"
                  }`}
                >
                  {membership.perClass}
                  {membership.classes !== "Unlimited" ? " / class" : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Sessions */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              One-on-One Attention
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Private Sessions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Intro Private",
                price: "$85",
                description:
                  "Perfect for first-timers. Get a personalized assessment and introduction to the Pilates method.",
              },
              {
                title: "Certified Instructor",
                price: "$95",
                description:
                  "Work with our certified instructors for targeted, personalized sessions tailored to your goals.",
              },
              {
                title: "Master Instructor",
                price: "$110",
                description:
                  "Premium sessions with our most experienced instructors for advanced or specialized work.",
              },
            ].map((session) => (
              <div
                key={session.title}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {session.title}
                </h3>
                <p className="text-3xl font-bold text-primary mb-4">
                  {session.price}
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  {session.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              Inquire about private sessions
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

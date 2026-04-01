import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | BK Pilates Raleigh",
  description:
    "Flexible pricing options for group classes, private sessions, and memberships at BK Pilates Raleigh.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-secondary">
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Transparent Pricing
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Pricing
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            From your first class to unlimited - we have an option for every budget.
          </p>
        </div>
      </section>

      {/* New Client Banner */}
      <section className="bg-primary py-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/80 uppercase tracking-widest text-xs font-semibold mb-2">New Client Special</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Your First Class - Just $29
          </h2>
          <p className="text-white/70 mb-6">Or try 3 classes for $85. No commitment, no pressure.</p>
          <a
            href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-dark px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
          >
            Book Your Intro Class
          </a>
        </div>
      </section>

      {/* All Pricing in Clean Sections */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          {/* Class Packs */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Class Packs</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { label: "Single Class", price: "$39", sub: "$39 per class" },
                { label: "5 Class Pack", price: "$170", sub: "$34 per class" },
                { label: "10 Class Pack", price: "$330", sub: "$33 per class", popular: true },
                { label: "20 Class Pack", price: "$600", sub: "$30 per class" },
              ].map((pack) => (
                <div
                  key={pack.label}
                  className={`rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    pack.popular
                      ? "bg-secondary text-white shadow-xl ring-2 ring-primary"
                      : "bg-white border border-gray-100"
                  }`}
                >
                  {pack.popular && (
                    <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Best Value</p>
                  )}
                  <p className={`text-sm font-medium uppercase tracking-wider mb-3 ${pack.popular ? "text-gray-300" : "text-primary"}`}>
                    {pack.label}
                  </p>
                  <p className={`text-4xl font-bold mb-1 ${pack.popular ? "text-white" : "text-secondary"}`}>
                    {pack.price}
                  </p>
                  <p className={`text-sm ${pack.popular ? "text-gray-400" : "text-muted"}`}>{pack.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Memberships */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Monthly Memberships</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                { classes: "4", price: "$99", sub: "$24.75 / class" },
                { classes: "8", price: "$179", sub: "$22.38 / class", popular: true },
                { classes: "12", price: "$209", sub: "$17.42 / class" },
                { classes: "16", price: "$249", sub: "$15.56 / class" },
                { classes: "Unlimited", price: "$329", sub: "Best value" },
              ].map((m) => (
                <div
                  key={m.classes}
                  className={`rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg ${
                    m.popular
                      ? "bg-secondary text-white shadow-lg ring-2 ring-primary"
                      : "bg-white border border-gray-100"
                  }`}
                >
                  {m.popular && <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Most Popular</p>}
                  <p className={`text-3xl font-bold mb-1 ${m.popular ? "text-white" : "text-secondary"}`}>{m.classes}</p>
                  <p className={`text-xs uppercase tracking-wider mb-3 ${m.popular ? "text-gray-300" : "text-muted"}`}>
                    {m.classes === "Unlimited" ? "classes" : "classes / month"}
                  </p>
                  <p className="text-2xl font-bold text-primary mb-1">{m.price}</p>
                  <p className={`text-xs ${m.popular ? "text-gray-400" : "text-muted"}`}>{m.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Private Sessions */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Private Sessions</h2>
            <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {[
                { title: "Intro Private", price: "$85", desc: "Perfect for first-timers. Personalized assessment and introduction.", popular: true },
                { title: "Certified Instructor", price: "$95", desc: "Targeted, personalized sessions tailored to your goals." },
                { title: "Master Instructor", price: "$110", desc: "Premium sessions with our most experienced instructors." },
              ].map((s) => (
                <div
                  key={s.title}
                  className={`rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg ${
                    s.popular
                      ? "bg-secondary text-white ring-2 ring-primary"
                      : "bg-white border border-gray-100"
                  }`}
                >
                  {s.popular && <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Popular</p>}
                  <h3 className={`font-bold mb-2 ${s.popular ? "text-white" : "text-secondary"}`}>{s.title}</h3>
                  <p className="text-3xl font-bold text-primary mb-3">{s.price}</p>
                  <p className={`text-sm leading-relaxed ${s.popular ? "text-gray-300" : "text-muted"}`}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Camp Pilates + CTA */}
          <div className="bg-primary rounded-3xl p-10 text-center max-w-lg mx-auto">
            <p className="text-white/80 uppercase tracking-widest text-xs font-semibold mb-2">Try It All</p>
            <h3 className="text-2xl font-bold text-white mb-1">Camp Pilates</h3>
            <p className="text-white/70 text-sm mb-3">Unlimited classes for one full week</p>
            <p className="text-4xl font-bold text-white mb-6">$79</p>
            <a
              href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-dark px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
            >
              Try Camp Pilates
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

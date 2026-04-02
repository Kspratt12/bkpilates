import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | BK Pilates Raleigh",
  description:
    "Flexible pricing options for group classes, private sessions, and memberships at BK Pilates Raleigh. First class just $29.",
  openGraph: {
    title: "Pricing | BK Pilates Raleigh",
    description: "Group classes from $29, memberships from $99/month, private sessions from $85. Flexible options for every budget.",
  },
};

const BOOK_URL = "https://clients.mindbodyonline.com/classic/ws?studioid=5741803";

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-secondary">
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Simple Pricing
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Pricing
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            No hidden fees. Pick what works for you.
          </p>
        </div>
      </section>

      {/* New Client */}
      <section className="bg-primary py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">First Class - $29</h2>
          <p className="text-white/70 mb-6">Or try 3 classes for $85. No commitment.</p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-primary-dark px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-lg">
            Book Your Intro Class
          </a>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Class Packs - simple table style */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Class Packs</h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {[
                { label: "Single Class", price: "$39", per: "$39/class" },
                { label: "5 Class Pack", price: "$170", per: "$34/class" },
                { label: "10 Class Pack", price: "$330", per: "$33/class", best: true },
                { label: "20 Class Pack", price: "$600", per: "$30/class" },
              ].map((p, i) => (
                <div key={p.label} className={`flex items-center justify-between px-6 py-5 ${i > 0 ? "border-t border-gray-100" : ""} ${p.best ? "bg-primary/5" : ""}`}>
                  <div>
                    <p className="font-semibold text-secondary">{p.label}</p>
                    <p className="text-sm text-muted">{p.per}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {p.best && <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Best Value</span>}
                    <p className="text-2xl font-bold text-secondary w-20 text-right">{p.price}</p>
                    <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-md">
                      Buy
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Memberships */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Monthly Memberships</h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {[
                { label: "4 classes/month", price: "$99", per: "$24.75/class" },
                { label: "8 classes/month", price: "$179", per: "$22.38/class", best: true },
                { label: "12 classes/month", price: "$209", per: "$17.42/class" },
                { label: "16 classes/month", price: "$249", per: "$15.56/class" },
                { label: "Unlimited", price: "$329", per: "Best value" },
              ].map((m, i) => (
                <div key={m.label} className={`flex items-center justify-between px-6 py-5 ${i > 0 ? "border-t border-gray-100" : ""} ${m.best ? "bg-primary/5" : ""}`}>
                  <div>
                    <p className="font-semibold text-secondary">{m.label}</p>
                    <p className="text-sm text-muted">{m.per}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {m.best && <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Popular</span>}
                    <p className="text-2xl font-bold text-secondary w-20 text-right">{m.price}</p>
                    <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-md">
                      Join
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Private Sessions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Private Sessions</h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {[
                { label: "Intro Private", price: "$85", desc: "Perfect for first-timers", best: true },
                { label: "Certified Instructor", price: "$95", desc: "Personalized to your goals" },
                { label: "Master Instructor", price: "$110", desc: "Our most experienced instructors" },
              ].map((s, i) => (
                <div key={s.label} className={`flex items-center justify-between px-6 py-5 ${i > 0 ? "border-t border-gray-100" : ""} ${s.best ? "bg-primary/5" : ""}`}>
                  <div>
                    <p className="font-semibold text-secondary">{s.label}</p>
                    <p className="text-sm text-muted">{s.desc}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-2xl font-bold text-secondary w-20 text-right">{s.price}</p>
                    <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-md">
                      Book
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Camp Pilates */}
          <div className="bg-primary rounded-2xl p-8 text-center">
            <p className="text-white/70 uppercase tracking-widest text-xs font-semibold mb-2">Try It All</p>
            <h3 className="text-2xl font-bold text-white mb-1">Camp Pilates - $79</h3>
            <p className="text-white/70 mb-6">Unlimited classes for one full week</p>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-white text-primary-dark px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-lg">
              Try Camp Pilates
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

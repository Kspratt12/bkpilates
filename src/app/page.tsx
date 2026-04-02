import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import ScheduleCalendar from "@/components/ScheduleCalendar";

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Our Philosophy
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                It&apos;s about how
                <br />
                you <span className="text-primary">feel.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                BK Pilates believes in true self-love without pressure. True
                self-care isn&apos;t a race for perfection, but a process of joy.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                BK Pilates provides a space and community promoting overall
                wellness, mindfulness and stress relief. Find balance between
                strength and harmony with us.
              </p>
              <Link
                href="/mission"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
              >
                Learn about our mission
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero2.png"
                  alt="BK Pilates studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm text-white/80">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">
              Our Classes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Group Reformer",
                description:
                  "Dynamic group classes on state-of-the-art reformer machines. Build strength, flexibility, and body awareness in a supportive environment.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "Private Sessions",
                description:
                  "One-on-one personalized instruction tailored to your goals, injuries, or specific needs. The fastest way to transform your practice.",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
              },
              {
                title: "Duet Sessions",
                description:
                  "Semi-private sessions for two. Share the experience with a friend or partner while still receiving personalized attention and guidance.",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group bg-background rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Vertical Image Gallery - less padding, more photo */}
      <section className="py-12 bg-secondary overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Life at the Studio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Be Kind to Your Body
          </h2>
        </div>
        <div className="relative">
          {/* Row 1 - scrolls left */}
          <div className="flex gap-2 mb-2 animate-marquee-left">
            {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => (
              <div
                key={`row1-${i}`}
                className="flex-shrink-0 w-[220px] h-[300px] rounded-lg overflow-hidden"
              >
                <Image
                  src={`/vertical${num}.png`}
                  alt={`Studio photo ${num}`}
                  width={220}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          {/* Row 2 - scrolls right */}
          <div className="flex gap-2 animate-marquee-right">
            {[9, 10, 11, 12, 13, 14, 15, 9, 10, 11, 12, 13, 14, 15].map((num, i) => (
              <div
                key={`row2-${i}`}
                className="flex-shrink-0 w-[220px] h-[300px] rounded-lg overflow-hidden"
              >
                <Image
                  src={`/vertical${num}.png`}
                  alt={`Studio photo ${num}`}
                  width={220}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section on Homepage */}
      <section className="py-24 bg-background" id="pricing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Transparent Pricing
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Simple, Flexible Pricing
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From your first class to an unlimited membership, we have an option for every budget and schedule.
            </p>
          </div>

          {/* New Client Highlight */}
          <div className="bg-primary rounded-2xl p-8 md:p-10 text-center mb-12">
            <p className="text-white/80 uppercase tracking-widest text-xs font-semibold mb-2">New Client Special</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Your First Class - Just $29</h3>
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

          {/* Class Packs */}
          <h3 className="text-xl font-bold text-secondary mb-6 text-center">Class Packs</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { classes: "1", price: "$39", perClass: "$39", label: "Single Class" },
              { classes: "5", price: "$170", perClass: "$34", label: "5 Class Pack" },
              { classes: "10", price: "$330", perClass: "$33", label: "10 Class Pack", popular: true },
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
                <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">{pack.label}</p>
                <p className={`text-4xl font-bold mb-2 ${pack.popular ? "text-white" : "text-secondary"}`}>{pack.price}</p>
                <p className={`text-sm mb-6 ${pack.popular ? "text-gray-300" : "text-muted"}`}>{pack.perClass} per class</p>
              </div>
            ))}
          </div>

          {/* Memberships */}
          <h3 className="text-xl font-bold text-secondary mb-6 text-center">Monthly Memberships</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {[
              { classes: "4", price: "$99", perClass: "$24.75" },
              { classes: "8", price: "$179", perClass: "$22.38", popular: true },
              { classes: "12", price: "$209", perClass: "$17.42" },
              { classes: "16", price: "$249", perClass: "$15.56" },
              { classes: "Unlimited", price: "$329", perClass: "Best value" },
            ].map((m) => (
              <div
                key={m.classes}
                className={`rounded-2xl p-6 text-center border transition-all duration-300 hover:shadow-lg ${
                  m.popular ? "bg-secondary text-white border-secondary shadow-lg" : "bg-white border-gray-100"
                }`}
              >
                {m.popular && <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Most Popular</div>}
                <p className={`text-3xl font-bold mb-1 ${m.popular ? "text-white" : "text-secondary"}`}>{m.classes}</p>
                <p className={`text-xs uppercase tracking-wider mb-4 ${m.popular ? "text-gray-300" : "text-muted"}`}>
                  {m.classes === "Unlimited" ? "classes" : "classes / month"}
                </p>
                <p className="text-2xl font-bold text-primary mb-1">{m.price}</p>
                <p className={`text-xs ${m.popular ? "text-gray-400" : "text-muted"}`}>
                  {m.perClass}{m.classes !== "Unlimited" ? " / class" : ""}
                </p>
              </div>
            ))}
          </div>

          {/* Private Sessions */}
          <h3 className="text-xl font-bold text-secondary mb-6 text-center">Private Sessions</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
            {[
              { title: "Intro Private", price: "$85", popular: true },
              { title: "Certified Instructor", price: "$95" },
              { title: "Master Instructor", price: "$110" },
            ].map((s) => (
              <div
                key={s.title}
                className={`rounded-2xl p-6 text-center border transition-all duration-300 hover:shadow-lg ${
                  s.popular ? "bg-secondary text-white border-secondary" : "bg-white border-gray-100"
                }`}
              >
                {s.popular && <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Popular</div>}
                <h4 className={`font-bold mb-2 ${s.popular ? "text-white" : "text-secondary"}`}>{s.title}</h4>
                <p className="text-3xl font-bold text-primary">{s.price}</p>
              </div>
            ))}
          </div>

          {/* Camp Pilates */}
          <div className="bg-accent rounded-2xl p-8 text-center max-w-md mx-auto">
            <p className="text-primary-dark font-medium tracking-widest uppercase text-xs mb-2">Try It All</p>
            <h4 className="text-xl font-bold text-secondary mb-1">Camp Pilates</h4>
            <p className="text-muted text-sm mb-2">Unlimited classes for one full week</p>
            <p className="text-3xl font-bold text-primary">$79</p>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* Schedule Calendar Section */}
      <section className="py-24 bg-white" id="schedule">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Find Your Class
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Class Schedule
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Pick a date to see classes. Book your spot directly!
            </p>
          </div>

          <ScheduleCalendar />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2012", label: "Founded" },
              { value: "1000+", label: "Happy Clients" },
              { value: "50+", label: "Classes Weekly" },
              { value: "4.9", label: "Google Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "BK Pilates has completely transformed how I feel in my body. The instructors are amazing and the energy is always positive.",
                name: "Sarah M.",
                detail: "Member since 2023",
              },
              {
                quote: "I came in with back pain and skepticism. Six months later, I'm pain-free and stronger than ever. This studio is special.",
                name: "Jennifer L.",
                detail: "Private Session Client",
              },
              {
                quote: "The community here is unlike any other studio I've been to. It truly feels like a second home. Marina and Julia are incredible.",
                name: "Ashley R.",
                detail: "Unlimited Member",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-secondary">{t.name}</p>
                  <p className="text-sm text-muted">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Images Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Visit Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Studio at The Row
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              1019 S. Saunders Street, Raleigh, NC 27603 - Free 2-hour parking available
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[1, 2, 3].map((num) => (
              <div key={num} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={`/location${num}.png`}
                  alt={`BK Pilates Raleigh studio location ${num}`}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/location"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold text-center transition-all duration-200 hover:shadow-lg"
            >
              Get Directions & Parking Info
            </Link>
            <a
              href="tel:9192139806"
              className="border-2 border-secondary text-secondary px-8 py-3.5 rounded-full font-semibold text-center hover:bg-secondary hover:text-white transition-all duration-200"
            >
              Call 919.213.9806
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

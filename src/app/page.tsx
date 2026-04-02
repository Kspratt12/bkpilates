import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import ScheduleCalendar from "@/components/ScheduleCalendar";
import HomeFAQ from "@/components/HomeFAQ";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedStats from "@/components/AnimatedStats";
import FirstVisit from "@/components/FirstVisit";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
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
            </ScrollReveal>
            <ScrollReveal direction="right">
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* First Visit Walkthrough */}
      <FirstVisit />

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                What We Offer
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                Our Classes
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Group Reformer",
                description:
                  "Dynamic 50-min group classes on state-of-the-art reformer machines. Build strength, flexibility, and body awareness.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                price: "From $29",
              },
              {
                title: "Private Sessions",
                description:
                  "One-on-one personalized instruction tailored to your goals, injuries, or specific needs. The fastest way to transform.",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                price: "From $85",
              },
              {
                title: "Duet Sessions",
                description:
                  "Semi-private sessions for two. Share the experience with a friend or partner while still receiving personalized attention.",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
                price: "By appointment",
              },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 150}>
                <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-muted leading-relaxed mb-4">{service.description}</p>
                  <p className="text-primary font-semibold text-sm">{service.price}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Image Gallery */}
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
          <div className="flex gap-2 mb-2 animate-marquee-left">
            {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => (
              <div key={`row1-${i}`} className="flex-shrink-0 w-[160px] sm:w-[220px] h-[220px] sm:h-[300px] rounded-lg overflow-hidden">
                <Image src={`/vertical${num}.png`} alt={`Studio photo ${num}`} width={220} height={300} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <div className="flex gap-2 animate-marquee-right">
            {[9, 10, 11, 12, 13, 14, 15, 9, 10, 11, 12, 13, 14, 15].map((num, i) => (
              <div key={`row2-${i}`} className="flex-shrink-0 w-[160px] sm:w-[220px] h-[220px] sm:h-[300px] rounded-lg overflow-hidden">
                <Image src={`/vertical${num}.png`} alt={`Studio photo ${num}`} width={220} height={300} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency + Pricing */}
      <section className="py-24 bg-background" id="pricing">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Simple Pricing
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                Flexible Options for Everyone
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-primary rounded-2xl p-8 md:p-10 text-center mb-10 relative overflow-hidden">
              {/* Urgency pulse */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                </span>
                <span className="text-white/80 text-xs font-medium">Spots filling up</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">First Class - Just $29</h3>
              <p className="text-white/70 mb-6">No commitment, no pressure. Just come try it.</p>
              <a
                href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary-dark px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-lg hover:-translate-y-0.5 text-lg"
              >
                Book Your Intro Class
              </a>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              { label: "Class Packs", price: "$30-$39", sub: "per class" },
              { label: "Memberships", price: "$99-$329", sub: "per month", featured: true },
              { label: "Private Sessions", price: "$85-$110", sub: "per session" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className={`rounded-2xl p-6 text-center ${item.featured ? "bg-secondary text-white" : "bg-white border border-gray-100"}`}>
                  <p className={`text-sm mb-2 ${item.featured ? "text-primary font-medium" : "text-muted"}`}>{item.label}</p>
                  <p className={`text-3xl font-bold ${item.featured ? "" : "text-secondary"}`}>{item.price}</p>
                  <p className={`text-xs mt-1 ${item.featured ? "text-gray-400" : "text-muted"}`}>{item.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Link
                href="/pricing"
                className="inline-block bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                View All Pricing Details
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Schedule Calendar */}
      <section className="py-24 bg-white" id="schedule">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
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
          </ScrollReveal>
          <ScheduleCalendar />
        </div>
      </section>

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Testimonials - upgraded */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Real Results
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                What Our Clients Say
              </h2>
              <div className="flex items-center justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-muted text-sm">from Google Reviews</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "BK Pilates has completely transformed how I feel in my body. The instructors are amazing and the energy is always positive. I went from barely touching my toes to feeling stronger than I did in my 20s.",
                name: "Sarah M.",
                detail: "Member since 2024",
                classes: "120+ classes",
              },
              {
                quote: "I came in with back pain and skepticism. Six months later, I'm pain-free and stronger than ever. Marina took the time to understand my injury and modified every exercise. This studio is special.",
                name: "Jennifer L.",
                detail: "Private Session Client",
                classes: "Started with privates",
              },
              {
                quote: "The community here is unlike any other studio. It truly feels like a second home. Marina and Julia have created something magical. I drove 30 min each way and it's worth every minute.",
                name: "Ashley R.",
                detail: "Unlimited Member",
                classes: "3x per week",
              },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 150}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="font-semibold text-secondary">{t.name}</p>
                      <p className="text-xs text-muted">{t.detail}</p>
                    </div>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">{t.classes}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture />

      {/* FAQ Section */}
      <HomeFAQ />

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
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
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[1, 2, 3].map((num, i) => (
              <ScrollReveal key={num} delay={i * 150}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={`/location${num}.png`}
                    alt={`BK Pilates Raleigh studio location ${num}`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

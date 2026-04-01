import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80')",
          }}
        />
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
      </section>

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
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80"
                  alt="Pilates studio"
                  className="w-full h-full object-cover"
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
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Private Sessions",
                description:
                  "One-on-one personalized instruction tailored to your goals, injuries, or specific needs. The fastest way to transform your practice.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "Duet Sessions",
                description:
                  "Semi-private sessions for two. Share the experience with a friend or partner while still receiving personalized attention and guidance.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group bg-background rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              See all pricing options
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
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                quote:
                  "BK Pilates has completely transformed how I feel in my body. The instructors are amazing and the energy is always positive.",
                name: "Sarah M.",
                detail: "Member since 2023",
              },
              {
                quote:
                  "I came in with back pain and skepticism. Six months later, I'm pain-free and stronger than ever. This studio is special.",
                name: "Jennifer L.",
                detail: "Private Session Client",
              },
              {
                quote:
                  "The community here is unlike any other studio I've been to. It truly feels like a second home. Marina and Julia are incredible.",
                name: "Ashley R.",
                detail: "Unlimited Member",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-secondary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted">{testimonial.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Client Offer */}
      <section className="py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary-dark font-medium tracking-widest uppercase text-sm mb-4">
            New to BK Pilates?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Your First Class is Just{" "}
            <span className="text-primary">$29</span>
          </h2>
          <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
            Experience the BK Pilates difference. No pressure, no judgment - just
            a welcoming space to discover what your body can do.
          </p>
          <a
            href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          >
            Claim Your Intro Class
          </a>
        </div>
      </section>
    </>
  );
}

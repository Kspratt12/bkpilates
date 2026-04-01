import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | BK Pilates Raleigh",
  description:
    "Meet the founders and instructors of BK Pilates Raleigh. Led by Marina Kaydanova and Julia Davis.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-secondary/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80')",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            The People Behind BK
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Our Team
          </h1>
        </div>
      </section>

      {/* Founders Story */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary max-w-3xl mx-auto leading-tight">
              From NYC to Raleigh - a friendship built on Pilates
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted text-lg leading-relaxed mb-6">
              Marina and Julia met over a decade ago when Julia took classes at a
              BK Pilates NYC location where Marina was instructing. What started
              as an instructor-student relationship quickly evolved into a deep
              friendship.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              During their time in New York, they often talked about opening a
              studio together. Years later, when Julia relocated to Raleigh, she
              took Marina up on the offer. Together they launched BK Pilates
              Raleigh to bring mind-body connection to the Triangle community.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Marina */}
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80"
                  alt="Marina Kaydanova - Founder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="text-primary font-medium tracking-widest uppercase text-xs mb-2">
                  Founder
                </p>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Marina Kaydanova
                </h3>
                <p className="text-muted leading-relaxed">
                  After falling in love with pilates through classes and
                  workshops, Marina left the corporate world to pursue her
                  passion. She opened the first BK Pilates studio in Brooklyn,
                  NY in 2012 and now teaches full-time, bringing her deep
                  expertise and infectious energy to every session.
                </p>
              </div>
            </div>

            {/* Julia */}
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1609592806596-89c4ea3104ea?w=600&q=80"
                  alt="Julia Davis - Co-Founder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="text-primary font-medium tracking-widest uppercase text-xs mb-2">
                  Co-Founder
                </p>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Julia Davis
                </h3>
                <p className="text-muted leading-relaxed mb-4">
                  Julia, a Raleigh local and entrepreneur, has been a long-time
                  student and teacher of pilates and yoga in addition to her
                  successful career in real estate and hospitality.
                </p>
                <p className="text-muted leading-relaxed">
                  She holds BASI Mat and Balanced Body Mat + Reformer
                  certifications, bringing a well-rounded and knowledgeable
                  approach to every class.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Come Move With Us
          </h2>
          <p className="text-muted text-lg mb-8">
            Experience the BK Pilates difference for yourself.
          </p>
          <a
            href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Your First Class
          </a>
        </div>
      </section>
    </>
  );
}

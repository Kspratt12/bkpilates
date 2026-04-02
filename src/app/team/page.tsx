import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team | BK Pilates Raleigh",
  description:
    "Meet the founders and instructors of BK Pilates Raleigh. Led by Marina Kaydanova and Julia Davis.",
  openGraph: {
    title: "Our Team | BK Pilates Raleigh",
    description: "Meet Marina Kaydanova and Julia Davis, the founders bringing mind-body connection to Raleigh.",
  },
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-secondary/80 z-10" />
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/hero3.png"
            alt="BK Pilates Team"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            The People Behind BK
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Our Team
          </h1>
        </div>
      </section>

      {/* Founders Story - card style */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 text-center">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-10 leading-tight">
              From NYC to Raleigh
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <p className="text-muted leading-relaxed">
                  Julia first met Marina a decade ago while taking classes at a BK
                  Pilates NYC studio. Their instructor-student relationship
                  developed into a friendship.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <p className="text-muted leading-relaxed">
                  During their time in NYC, the two frequently dreamed about
                  &ldquo;when they left NYC...&rdquo; and Marina said
                  &ldquo;when you move back to Raleigh, let&apos;s open a BK Pilates
                  studio!&rdquo;
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <p className="text-muted leading-relaxed">
                  Years later, Julia took Marina up on the offer when she moved
                  back to Raleigh. They are thrilled to bring mind-body connection
                  to Raleigh at their studio in The Row on S. Saunders Street.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members - side by side cards with overlap photo */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Meet the Founders
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Passion Meets Purpose
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Marina */}
            <div className="bg-background rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/Marina.png"
                  alt="Marina Kaydanova - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-primary font-medium tracking-widest uppercase text-xs mb-1">
                  Founder
                </p>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Marina Kaydanova
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  After falling in love with pilates through classes and
                  workshops, Marina left the corporate world.
                </p>
                <p className="text-muted leading-relaxed">
                  She opened the first BK Pilates studio in Brooklyn, NY in
                  2012. Today, she pursues her passion full time,
                  teaching the life-changing practice of pilates.
                </p>
              </div>
            </div>

            {/* Julia */}
            <div className="bg-background rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/julia.png"
                  alt="Julia Davis - Co-Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-primary font-medium tracking-widest uppercase text-xs mb-1">
                  Co-Founder
                </p>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Julia Davis
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  Julia, a Raleigh local and entrepreneur, has been a long-time
                  student and teacher of pilates and yoga in addition to her
                  successful career in real estate and hospitality.
                </p>
                <p className="text-muted leading-relaxed">
                  Julia is BASI Mat and Balanced Body Mat + Reformer certified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Come Move With Us
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Experience the BK Pilates difference for yourself.
          </p>
          <a
            href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-dark px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Your First Class
          </a>
        </div>
      </section>
    </>
  );
}

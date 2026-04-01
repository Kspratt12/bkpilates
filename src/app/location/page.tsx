import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Location & Parking | BK Pilates Raleigh",
  description:
    "Find BK Pilates Raleigh at 1019 S. Saunders Street inside The Row. Free 2-hour parking available.",
};

export default function LocationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-secondary/90 z-10" />
        <div className="absolute inset-0 opacity-30">
          <Image src="/location1.png" alt="BK Pilates Location" fill className="object-cover" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Come Visit Us
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Location & Parking
          </h1>
        </div>
      </section>

      {/* Location Images */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={`/location${num}.png`}
                  alt={`BK Pilates studio ${num}`}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Details */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Find Us at The Row
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                BK Pilates Raleigh is located within The Row apartment building,
                a newly developed property on S. Saunders Street. Look for our
                prominent canopy and blade signage displaying the BK Pilates
                name and logo at the entrance.
              </p>

              {/* Address Card */}
              <div className="bg-background rounded-2xl p-8 border border-gray-100 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-secondary">Studio Address</h3>
                </div>
                <p className="text-muted mb-1">1019 S. Saunders Street</p>
                <p className="text-muted mb-4">Raleigh, NC 27603</p>
                <a
                  href="https://www.google.com/maps/dir//1019+S+Saunders+St,+Raleigh,+NC+27603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Parking Info */}
              <div className="bg-background rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-secondary">Free Parking</h3>
                </div>
                <p className="text-muted leading-relaxed mb-4">
                  Two-hour complimentary retail parking is available in the adjacent parking deck. More than enough time for your class.
                </p>
                <p className="text-sm text-muted">
                  <span className="font-medium text-secondary">Tip:</span>{" "}
                  Check{" "}
                  <a href="https://www.instagram.com/bkpilatesrdu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    @bkpilatesrdu
                  </a>{" "}
                  on Instagram for step-by-step parking instructions in the &quot;Parking&quot; highlight.
                </p>
              </div>
            </div>

            {/* Directions */}
            <div>
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.0!2d-78.64!3d35.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ2JzEyLjAiTiA3OMKwMzgnMjQuMCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BK Pilates Raleigh Location"
                  className="rounded-t-2xl"
                />
              </div>

              {/* Driving Directions */}
              <div className="space-y-6">
                <div className="bg-background rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-lg font-bold text-secondary mb-4">From the South</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Traveling down S. Saunders Street, the parking garage entrance appears on the right before The Row sign. Two deck entries precede the studio location. If you see Willow House Coffee on the left, you&apos;ve passed the turn-off.
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-lg font-bold text-secondary mb-4">From the North</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Heading uphill on S. Saunders, bear left at the traffic light (Lake Wheeler Road and Dix Park entrance are to the right). The Row sign, BK Pilates signage, and parking entrance appear on the left.
                  </p>
                </div>

                <div className="bg-accent rounded-2xl p-6 text-center">
                  <p className="text-sm text-muted">
                    <span className="font-medium text-secondary">Note:</span>{" "}
                    Maps services may display outdated construction site imagery. Look for The Row building and BK Pilates signage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">Ready to Visit?</h2>
          <p className="text-muted mb-8">Book your first class and come experience BK Pilates for yourself.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:shadow-xl"
            >
              Book a Class
            </a>
            <Link
              href="/contact"
              className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:text-white transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

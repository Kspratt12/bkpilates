import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* CTA Banner */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Pilates Journey?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Whether you are new to Pilates or a seasoned practitioner, we have a
            class for you. Take the first step today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://clients.mindbodyonline.com/classic/ws?studioid=5741803"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-dark px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
            >
              Book a Class
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-footer.png"
                alt="BK Pilates Raleigh"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing mind-body connection to the Raleigh community through
              wellness, mindfulness, and stress relief.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/team", label: "Our Team" },
                { href: "/mission", label: "Mission & Values" },
                { href: "/pricing", label: "Pricing" },
                { href: "/schedule", label: "Class Schedule" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>1019 S. Saunders Street</li>
              <li>Raleigh, NC 27603</li>
              <li>
                <a
                  href="tel:9192139806"
                  className="hover:text-white transition-colors"
                >
                  919.213.9806
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bkpilatesrdu.com"
                  className="hover:text-white transition-colors"
                >
                  info@bkpilatesrdu.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Stay Connected
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Follow us on Instagram for updates, tips, and studio vibes.
            </p>
            <a
              href="https://www.instagram.com/bkpilatesrdu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-sm">@bkpilatesrdu</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} BK Pilates Raleigh. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed with care in Raleigh, NC
          </p>
        </div>
      </div>
    </footer>
  );
}

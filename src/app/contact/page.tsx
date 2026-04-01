"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-secondary/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1920&q=80')",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted mb-8">
                Have a question? We&apos;d love to hear from you. Fill out the form
                and we&apos;ll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    We&apos;ve received your message and will get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="(919) 555-0123"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Interested In *
                    </label>
                    <select
                      id="interest"
                      required
                      value={formData.interest}
                      onChange={(e) =>
                        setFormData({ ...formData, interest: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="membership">Membership</option>
                      <option value="classes">Classes</option>
                      <option value="private">Private Session</option>
                      <option value="instructor">Becoming an Instructor</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none"
                      placeholder="Tell us a bit about what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
                <h3 className="text-xl font-bold text-secondary mb-6">
                  Studio Info
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-secondary">Address</p>
                      <p className="text-muted text-sm">
                        1019 S. Saunders Street
                        <br />
                        Raleigh, NC 27603
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-secondary">Phone</p>
                      <a
                        href="tel:9192139806"
                        className="text-muted text-sm hover:text-primary transition-colors"
                      >
                        919.213.9806
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-secondary">Email</p>
                      <a
                        href="mailto:info@bkpilatesrdu.com"
                        className="text-muted text-sm hover:text-primary transition-colors"
                      >
                        info@bkpilatesrdu.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-secondary">Instagram</p>
                      <a
                        href="https://www.instagram.com/bkpilatesrdu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted text-sm hover:text-primary transition-colors"
                      >
                        @bkpilatesrdu
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.0!2d-78.64!3d35.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ2JzEyLjAiTiA3OMKwMzgnMjQuMCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BK Pilates Raleigh Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

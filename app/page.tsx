"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    title: "Roof Replacement",
    description:
      "Complete tear-off and replacement with premium materials. We handle everything from permits to cleanup.",
    icon: "🏠",
  },
  {
    title: "Roof Repair",
    description:
      "Leaks, missing shingles, flashing issues — we diagnose and fix it fast so small problems don't become big ones.",
    icon: "🔧",
  },
  {
    title: "Storm Damage",
    description:
      "Hail, wind, fallen trees — we work directly with your insurance company to restore your roof after a storm.",
    icon: "⛈️",
  },
  {
    title: "Roof Inspections",
    description:
      "Buying, selling, or just want peace of mind? Get a detailed inspection report from our certified team.",
    icon: "🔍",
  },
  {
    title: "Gutter Services",
    description:
      "Installation, repair, and cleaning to keep water flowing away from your foundation — not into it.",
    icon: "🌧️",
  },
  {
    title: "Commercial Roofing",
    description:
      "Flat roofs, TPO, EPDM, metal — we handle commercial projects of all sizes with minimal disruption.",
    icon: "🏢",
  },
];

const REVIEWS = [
  {
    name: "Mike T.",
    rating: 5,
    text: "Summit replaced our entire roof in one day. Crew was professional, cleaned up everything, and the price was fair. Highly recommend.",
  },
  {
    name: "Sarah L.",
    rating: 5,
    text: "Had storm damage and they handled the entire insurance process for us. Made what could have been a nightmare completely stress-free.",
  },
  {
    name: "James R.",
    rating: 5,
    text: "Called on a Monday about a leak, they were out Tuesday morning. Fixed it on the spot. These guys don't mess around.",
  },
  {
    name: "Linda K.",
    rating: 5,
    text: "Got three quotes and Summit was the most thorough by far. They explained everything and didn't try to upsell. Fair price, great work.",
  },
];

const GALLERY_IMAGES = [
  { label: "Shingle Replacement", bg: "bg-slate-300" },
  { label: "Storm Damage Repair", bg: "bg-slate-400" },
  { label: "Full Roof Tear-Off", bg: "bg-slate-500" },
  { label: "Commercial Flat Roof", bg: "bg-slate-600" },
  { label: "Gutter Installation", bg: "bg-slate-700" },
  { label: "Before & After", bg: "bg-slate-800" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-full">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Summit Roofing
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Free Estimate
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-gray-600 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block mt-3 text-center bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Estimate
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-blue-200">
                  Licensed & Insured
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Your Roof.
                <br />
                <span className="text-blue-400">Done Right.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                Professional roofing services you can trust. From repairs to
                full replacements, we protect what matters most — your home and
                family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Get Your Free Estimate
                </a>
                <a
                  href="tel:9195551234"
                  className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Call (919) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-8 mt-10 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span>4.9 Rating</span>
                </div>
                <div>500+ Roofs Completed</div>
                <div>15+ Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-blue-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center text-sm font-medium">
            <div>Free Inspections</div>
            <div>Insurance Claims Accepted</div>
            <div>Financing Available</div>
            <div>Lifetime Warranty</div>
            <div>Same-Week Service</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From a small leak to a complete roof replacement, we handle it all
              with the same level of care and craftsmanship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Homeowners Choose Summit
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We&apos;re not a fly-by-night operation. Summit Roofing is a
                locally owned company built on doing honest work at fair prices.
                When we show up, we treat your home like it&apos;s our own.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Licensed & Fully Insured",
                    desc: "Full liability and workers comp so you're never at risk.",
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "Detailed written estimates. No surprises, no hidden fees.",
                  },
                  {
                    title: "Clean Job Sites",
                    desc: "We leave your property cleaner than we found it. Every time.",
                  },
                  {
                    title: "Warranty Backed",
                    desc: "Manufacturer warranty plus our own workmanship guarantee.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-10 text-white">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "500+", label: "Roofs Completed" },
                  { number: "15+", label: "Years Experience" },
                  { number: "4.9", label: "Star Rating" },
                  { number: "100%", label: "Satisfaction Guarantee" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-1">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg">
              Don&apos;t just take our word for it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
              >
                <StarRating count={review.rating} />
                <p className="text-gray-700 mt-4 mb-6 leading-relaxed text-lg">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-gray-900">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-gray-600 text-lg">
              Real projects. Real results. See the quality for yourself.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img) => (
              <div
                key={img.label}
                className={`${img.bg} rounded-xl aspect-[4/3] flex items-end p-4`}
              >
                <span className="text-white text-sm font-medium bg-black/40 px-3 py-1.5 rounded-lg">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fix Your Roof?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate. We&apos;ll come out, inspect
            your roof, and give you an honest assessment — no pressure, no
            gimmicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Estimate
            </a>
            <a
              href="tel:9195551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call (919) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Your Free Estimate
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Fill out the form and we&apos;ll get back to you within a few
                hours. Or call us directly — we pick up the phone.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <a
                      href="tel:9195551234"
                      className="text-blue-600 hover:underline"
                    >
                      (919) 555-1234
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <span className="text-blue-600">
                      info@summitroofingco.com
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Service Area
                    </div>
                    <span className="text-gray-600">
                      Raleigh, NC & Surrounding Areas
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Hours</div>
                    <span className="text-gray-600">
                      Mon-Fri 7am-6pm | Sat 8am-2pm
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ll be in touch within a few hours to schedule your
                    free estimate.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        placeholder="(919) 555-1234"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        placeholder="john@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                    >
                      <option value="">Select a service...</option>
                      <option value="replacement">Roof Replacement</option>
                      <option value="repair">Roof Repair</option>
                      <option value="storm">Storm Damage</option>
                      <option value="inspection">Roof Inspection</option>
                      <option value="gutters">Gutter Services</option>
                      <option value="commercial">Commercial Roofing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-none"
                      placeholder="Describe what's going on with your roof..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Request Free Estimate
                  </button>
                  <p className="text-center text-sm text-gray-500">
                    No spam. No obligation. Just an honest estimate.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-white">
                  Summit Roofing
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Locally owned and operated. Serving the Raleigh area with
                quality roofing services for over 15 years.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Roof Replacement</li>
                <li>Roof Repair</li>
                <li>Storm Damage</li>
                <li>Inspections</li>
                <li>Gutters</li>
                <li>Commercial</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>(919) 555-1234</li>
                <li>info@summitroofingco.com</li>
                <li>Raleigh, NC & Surrounding Areas</li>
                <li>Mon-Fri 7am-6pm | Sat 8am-2pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-8 text-sm text-center">
            &copy; {new Date().getFullYear()} Summit Roofing Co. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

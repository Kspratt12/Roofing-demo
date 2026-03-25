"use client";

import { useState, useEffect } from "react";
import ChatWidget from "./components/ChatWidget";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
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
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
      </svg>
    ),
  },
  {
    title: "Roof Repair",
    description:
      "Leaks, missing shingles, flashing issues — we diagnose and fix it fast so small problems don't become big ones.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.192-.14 1.743Z" />
      </svg>
    ),
  },
  {
    title: "Storm Damage",
    description:
      "Hail, wind, fallen trees — we work directly with your insurance company to restore your roof after a storm.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m0 0 5.457 5.457M3 3l5.457 5.457" />
      </svg>
    ),
  },
  {
    title: "Roof Inspections",
    description:
      "Buying, selling, or just want peace of mind? Get a detailed inspection report from our certified team.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    title: "Gutter Services",
    description:
      "Installation, repair, and cleaning to keep water flowing away from your foundation — not into it.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Commercial Roofing",
    description:
      "Flat roofs, TPO, EPDM, metal — we handle commercial projects of all sizes with minimal disruption.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free Inspection",
    description: "We come out, inspect your roof top to bottom, and document everything with photos.",
  },
  {
    step: "02",
    title: "Detailed Estimate",
    description: "You get a transparent, written quote with material options, timeline, and total cost. No surprises.",
  },
  {
    step: "03",
    title: "Professional Install",
    description: "Our experienced crew handles the job efficiently while protecting your property and landscaping.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description: "We do a full cleanup and walkthrough with you to make sure everything meets our standards and yours.",
  },
];

const REVIEWS = [
  {
    name: "Mike Thompson",
    location: "Raleigh, NC",
    rating: 5,
    text: "Summit replaced our entire roof in one day. Crew was professional, cleaned up everything, and the price was fair. Highly recommend to anyone in the Triangle area.",
    date: "2 weeks ago",
  },
  {
    name: "Sarah Lancaster",
    location: "Cary, NC",
    rating: 5,
    text: "Had storm damage and they handled the entire insurance process for us. Made what could have been a nightmare completely stress-free. Worth every penny.",
    date: "1 month ago",
  },
  {
    name: "James Rodriguez",
    location: "Durham, NC",
    rating: 5,
    text: "Called on a Monday about a leak, they were out Tuesday morning. Fixed it on the spot for a fair price. These guys don't mess around. Already referred two neighbors.",
    date: "3 weeks ago",
  },
  {
    name: "Linda Kim",
    location: "Wake Forest, NC",
    rating: 5,
    text: "Got three quotes and Summit was the most thorough by far. They explained everything, showed me photos of the damage, and didn't try to upsell. Honest company.",
    date: "1 month ago",
  },
  {
    name: "David Patterson",
    location: "Apex, NC",
    rating: 5,
    text: "Our 20-year-old roof needed replacing. Summit walked us through every option, helped us pick the right shingles, and finished ahead of schedule. Looks incredible.",
    date: "2 months ago",
  },
  {
    name: "Rachel Chen",
    location: "Holly Springs, NC",
    rating: 5,
    text: "Insurance claim after a hail storm. Summit handled all the paperwork and communication with our adjuster. New roof looks better than the original. Five stars isn't enough.",
    date: "3 weeks ago",
  },
];

const GALLERY_IMAGES = [
  {
    label: "Architectural Shingle Install",
    src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&h=450&fit=crop",
  },
  {
    label: "Storm Damage Repair",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop",
  },
  {
    label: "Full Roof Replacement",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop",
  },
  {
    label: "Commercial Flat Roof",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop",
  },
  {
    label: "Gutter Installation",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=450&fit=crop",
  },
  {
    label: "Residential Project",
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=450&fit=crop",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ""));

  useEffect(() => {
    if (hasAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let current = 0;
          const increment = Math.ceil(numericTarget / 40);
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
              setCount(numericTarget);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    const el = document.getElementById(`counter-${target}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, numericTarget, target]);

  const display = target.includes(".")
    ? (count / 10).toFixed(1)
    : count.toString();

  return (
    <span id={`counter-${target}`}>
      {display}{suffix}
    </span>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-full">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
              </div>
              <div>
                <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-gray-900" : "text-white"}`}>
                  Summit Roofing
                </span>
                <span className={`block text-[10px] font-semibold tracking-[0.2em] uppercase ${scrolled ? "text-blue-600" : "text-blue-300"}`}>
                  Co.
                </span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${scrolled ? "text-gray-600 hover:text-blue-600" : "text-white/80 hover:text-white"}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5"
              >
                Free Estimate
              </a>
            </div>

            <button
              className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-gray-900" : "text-white"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pb-6 pt-2 bg-white rounded-2xl mt-2 shadow-2xl border border-gray-100 px-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-50 last:border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block mt-4 text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Estimate
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Licensed, Bonded & Insured
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-white">
              Your Roof.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Done Right.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
              Raleigh&apos;s trusted roofing experts. From emergency repairs to
              full replacements, we protect what matters most — your home and
              family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all text-center shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Get Your Free Estimate
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="tel:9195551234"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all text-center backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                (919) 555-1234
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500"].map((bg, i) => (
                    <div key={i} className={`w-8 h-8 ${bg} rounded-full border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold`}>
                      {["M", "S", "J", "L"][i]}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-400">200+ Happy Customers This Year</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-400">4.9 on Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/5">
            {[
              { icon: "🛡️", text: "Free Inspections" },
              { icon: "📋", text: "Insurance Claims" },
              { icon: "💳", text: "Financing Available" },
              { icon: "✅", text: "Lifetime Warranty" },
              { icon: "⚡", text: "Same-Week Service" },
            ].map((item) => (
              <div key={item.text} className="flex items-center justify-center gap-3 py-5">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
              Roofing Services You Can Count On
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From a small leak to a complete roof replacement, we handle it all
              with the same level of care and craftsmanship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
              Simple. Transparent. Professional.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We make the roofing process easy so you can focus on what matters.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="relative">
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-blue-200 to-transparent" />
                )}
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-black text-blue-100 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Why Summit</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Built on Trust.
                <br />
                Backed by Results.
              </h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                We&apos;re not a fly-by-night operation. Summit Roofing is a
                locally owned company built on doing honest work at fair prices.
                When we show up, we treat your home like it&apos;s our own.
              </p>
              <div className="space-y-6">
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
                    <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mt-0.5 shadow-lg shadow-blue-600/20">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-600/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative grid grid-cols-2 gap-10">
                  {[
                    { number: "500", suffix: "+", label: "Roofs Completed" },
                    { number: "15", suffix: "+", label: "Years Experience" },
                    { number: "49", suffix: "", label: "Star Rating" },
                    { number: "100", suffix: "%", label: "Satisfaction Rate" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                        {stat.label === "Star Rating" ? (
                          <span>4.9</span>
                        ) : (
                          <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                        )}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
              Don&apos;t Take Our Word For It
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 font-medium">4.9 out of 5 based on 127 reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <StarRating count={review.rating} />
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-600/20">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                    <div className="text-xs text-gray-400">{review.location}</div>
                  </div>
                  <svg className="w-5 h-5 text-blue-500 ml-auto" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
              Our Work Speaks For Itself
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img) => (
              <div
                key={img.label}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white font-semibold text-sm">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-blue-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Ready to Protect Your Home?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation estimate. We&apos;ll come out, inspect
            your roof, and give you an honest assessment — no pressure, no
            gimmicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group bg-white text-blue-700 px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              Get Your Free Estimate
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="tel:9195551234"
              className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all"
            >
              Call (919) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Get Started</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Get Your Free Estimate
              </h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                Fill out the form and we&apos;ll get back to you within a few
                hours. Or call us directly — we pick up the phone.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: "(919) 555-1234",
                    href: "tel:9195551234",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    ),
                    label: "Email",
                    value: "info@summitroofingco.com",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    ),
                    label: "Service Area",
                    value: "Raleigh, Durham, Cary, Apex & Surrounding",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    ),
                    label: "Hours",
                    value: "Mon-Fri 7am-6pm | Sat 8am-2pm",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-gray-100">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-blue-600 hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-500">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl" />
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                {formSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Request Received!
                    </h3>
                    <p className="text-gray-500 max-w-sm mx-auto">
                      We&apos;ll be in touch within a few hours to schedule your
                      free inspection. Check your phone for a confirmation text.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Request Your Free Estimate</h3>
                      <p className="text-sm text-gray-500 mt-1">Takes less than 60 seconds</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                          placeholder="(919) 555-1234"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                          placeholder="john@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
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
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Project Details
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                        placeholder="Tell us what's going on with your roof..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                    >
                      Get My Free Estimate
                    </button>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        Your info is safe
                      </span>
                      <span>No spam</span>
                      <span>No obligation</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-bold text-white">Summit Roofing</span>
                  <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-blue-400">Co.</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Locally owned and operated. Serving the Raleigh area with
                quality roofing services for over 15 years.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Services</h4>
              <ul className="space-y-3 text-sm">
                {["Roof Replacement", "Roof Repair", "Storm Damage", "Inspections", "Gutters", "Commercial"].map((s) => (
                  <li key={s} className="hover:text-white transition-colors cursor-pointer">{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Service Areas</h4>
              <ul className="space-y-3 text-sm">
                {["Raleigh", "Durham", "Cary", "Apex", "Wake Forest", "Holly Springs"].map((area) => (
                  <li key={area} className="hover:text-white transition-colors cursor-pointer">{area}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>(919) 555-1234</li>
                <li>info@summitroofingco.com</li>
                <li>Raleigh, NC & Surrounding</li>
                <li>Mon-Fri 7am-6pm</li>
                <li>Sat 8am-2pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
            <span>&copy; {new Date().getFullYear()} Summit Roofing Co. All rights reserved.</span>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Sitemap</span>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
}

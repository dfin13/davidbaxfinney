"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, GraduationCap, Globe, Award } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

const adjectives = [
  "Self-Confident",
  "Hard-Working",
  "Outgoing",
  "Problem-Solver",
  "Independent",
  "Well-Informed",
  "Caring",
];

const values = [
  {
    title: "Execution Over Talk",
    desc: "I measure myself by what I've actually built: revenue generated, products shipped, teams led. Credentials matter less than results.",
  },
  {
    title: "Analytical Rigor",
    desc: "Finance trained my thinking to be precise, data-driven, and grounded. Every business decision I make runs through that filter.",
  },
  {
    title: "Relationships First",
    desc: "My top motivator is networking and belonging. I believe trust is built over time, through consistent action and genuine connection.",
  },
  {
    title: "Bias Toward Growth",
    desc: "I co-founded a company while carrying a 3.90 GPA and serving as VP of an entrepreneurship organization. I'm comfortable in motion.",
  },
];

const quickFacts = [
  {
    icon: GraduationCap,
    primary: "University of Arizona",
    secondary: "B.S. Finance · Eller College · May 2028",
  },
  {
    icon: Award,
    primary: "3.90 GPA · Dean's List × 3",
    secondary: "Consistent academic excellence",
  },
  {
    icon: MapPin,
    primary: "Tucson, AZ · San Rafael, CA",
    secondary: "Based in Arizona, from the Bay Area",
  },
  {
    icon: Globe,
    primary: "U.S. & EU Citizen",
    secondary: "Slovakia · Spanish B2",
  },
];

export default function About() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────── */}
      <section className="bg-hero-gradient pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <span className="text-xs font-medium text-slate-300 tracking-widest uppercase">
                About Me
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Finance student.{" "}
              <span className="gradient-text">Operator.</span>
              <br />
              Builder by instinct.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              I grew up watching my parents turn nothing into something, a lesson that shaped
              everything about how I approach business, relationships, and my own ambitions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── BIO ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Main bio */}
            <FadeIn className="lg:col-span-3">
              <div className="section-divider mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight mb-8">
                Professional Biography
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  I&apos;m David Finney, a second-year Finance student at the University of Arizona&apos;s
                  Eller College of Management, where I&apos;ve maintained a 3.90 GPA across three
                  consecutive Dean&apos;s List semesters. My academic foundation is in quantitative
                  finance: financial modeling, portfolio analysis, macroeconomic research, and the
                  frameworks that drive smart capital allocation.
                </p>
                <p>
                  But finance alone doesn&apos;t capture what I do. In August 2025, I co-founded
                  New Wave Cosmetics LLC alongside a partner, building a premium sea-salt haircare
                  brand from scratch. We hit profitability through brick-and-mortar retail with
                  approximately 1,000% per-unit margins, and placed a 10,000-unit
                  production order to support expansion into e-commerce. Running a real business
                  while enrolled full-time has sharpened my instincts in ways no classroom alone
                  could replicate.
                </p>
                <p>
                  I also built Riskr, an adventure discovery platform I designed and developed
                  as a solo project, which grew to 600+ user-submitted locations across 80+
                  countries with maps, safety ratings, and community-driven content. Riskr showed
                  me what it means to own every layer of a product: strategy, design, development,
                  and community growth.
                </p>
                <p>
                  My professional experience includes an asset management internship at Scarbrough
                  Financial Group in San Rafael, where I authored macroeconomic and sector research
                  reports, built Excel models for portfolio tracking, and shadowed portfolio managers
                  through live allocation decisions. That experience confirmed my interest in
                  finance at the intersection of analysis and applied judgment.
                </p>
                <p>
                  On campus, I serve as Vice President of the Student Entrepreneurs Association,
                  where I plan meetings, coordinate guest speakers, and manage event logistics for
                  30+ active members. I also served as an academic preceptor for MIS 111 and 112,
                  supporting faculty and grading coursework for 40+ students. In November 2025, I
                  won the BNAD 200 Business Case Competition, presenting consulting-style
                  recommendations to a panel of judges with data-backed financial analysis.
                </p>
                <p>
                  My long-term interests span banking, private equity, venture capital, and
                  company-building. I&apos;m drawn to roles and environments where analytical
                  thinking meets real decision-making, where the work produces tangible outcomes,
                  not just models.
                </p>
                <p>
                  I hold dual U.S. and Slovak (EU) citizenship, speak Spanish at a B2 level, and
                  split my time between Tucson, AZ and San Rafael, CA. Outside of work and school,
                  I&apos;m a competitive water polo player, an avid surfer, and an enthusiast of
                  investment research, blockchain development, and travel.
                </p>
              </div>
            </FadeIn>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Headshot */}
              <FadeIn delay={0.05}>
                <div className="flex justify-center lg:justify-start">
                  <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-gold-400/40 ring-offset-4 ring-offset-white shadow-xl">
                    <img src="/headshot.png" alt="David Finney" className="w-full h-full object-cover" />
                  </div>
                </div>
              </FadeIn>

              {/* Quick facts */}
              <FadeIn delay={0.1}>
                <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
                  <h3 className="text-sm font-bold text-navy-900 uppercase tracking-widest mb-5">
                    Quick Facts
                  </h3>
                  <ul className="space-y-4">
                    {quickFacts.map((fact, i) => (
                      <motion.li
                        key={fact.primary}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.07, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex items-start gap-3"
                      >
                        <fact.icon size={18} className="text-gold-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-navy-900">{fact.primary}</p>
                          <p className="text-xs text-slate-600">{fact.secondary}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Self-Adjectives */}
              <FadeIn delay={0.18}>
                <div className="bg-navy-900 rounded-2xl p-7">
                  <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
                    How I Describe Myself
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {adjectives.map((adj, i) => (
                      <motion.span
                        key={adj}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
                        className="text-xs bg-white/10 text-slate-200 border border-white/10 px-3 py-1.5 rounded-full font-medium"
                      >
                        {adj}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Interests */}
              <FadeIn delay={0.24}>
                <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
                  <h3 className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-4">
                    Interests & Pursuits
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Water Polo", "Surfing", "Travel", "Investment Research", "App Development", "Blockchain Dev"].map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-14">
            <div className="section-divider mb-5" />
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight mb-4">
              What Drives Me
            </h2>
            <p className="text-slate-600">
              Four principles that shape how I work, how I build relationships, and what I&apos;m
              optimizing for professionally.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 16px 32px -8px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-7 border border-slate-100 cursor-default h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 rounded-full bg-gold-400/15 text-gold-600 text-xs font-black flex items-center justify-center shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-navy-900">{v.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl font-black text-navy-900 mb-4">
              Want the full picture?
            </h2>
            <p className="text-slate-600 mb-8">
              See my resume, explore my persona evolution, or connect directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: "/resume", label: "View Resume", primary: true },
                { href: "/persona", label: "Persona Evolution", primary: false },
                { href: "/contact", label: "Get in Touch", primary: false },
              ].map((btn) => (
                <Link
                  key={btn.href}
                  href={btn.href}
                  className={`inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full transition-all active:scale-95 ${
                    btn.primary
                      ? "bg-navy-900 hover:bg-navy-800 text-white font-bold"
                      : "border border-slate-200 hover:border-gold-400 text-navy-900"
                  }`}
                >
                  {btn.label}
                  {btn.primary && <ArrowRight size={16} />}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

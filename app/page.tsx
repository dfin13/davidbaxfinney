"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Zap, Award, ExternalLink, Play } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

const stats = [
  { value: "3.90", label: "GPA", sub: "Dean's List × 3" },
  { value: "~1,000%", label: "Per-Unit Margin", sub: "New Wave Cosmetics" },
  { value: "600+", label: "Locations Mapped", sub: "Riskr Platform" },
  { value: "30+", label: "Members Led", sub: "SEA VP" },
];

const highlights = [
  {
    icon: TrendingUp,
    title: "Finance & Investing",
    desc: "Asset management intern, financial modeling, portfolio analysis, and a deep interest in private equity and venture capital.",
  },
  {
    icon: Zap,
    title: "Entrepreneurial Operator",
    desc: "Co-founded New Wave Cosmetics: ~1,000% per-unit margins, profitable in months, 10K-unit production order placed for e-commerce expansion. Built Riskr solo.",
  },
  {
    icon: Users,
    title: "Campus Leader",
    desc: "Vice President of the Student Entrepreneurs Association. Academic preceptor. Competitive case winner. Real outcomes, not resume filler.",
  },
];

const portfolioPreviews = [
  {
    label: "Consumer Brand",
    title: "New Wave Cosmetics",
    desc: "~1,000% per-unit margins, profitable within months, 10K-unit production order placed. A real business built from scratch.",
    tags: ["Operations", "Finance", "Brand Strategy"],
    href: "/portfolio",
  },
  {
    label: "Product Build",
    title: "Riskr",
    desc: "Solo-built adventure discovery app with 600+ locations across 80+ countries, maps, and safety ratings.",
    tags: ["Product Strategy", "Dev", "UX"],
    href: "/portfolio",
  },
  {
    label: "Finance Internship",
    title: "Scarbrough Financial Group",
    desc: "Asset management internship: Excel models, sector research, and portfolio scenario analysis.",
    tags: ["Financial Modeling", "Research", "Investing"],
    href: "/portfolio",
  },
];

const personaCards = [
  { label: "Self-Perception Style", value: "Driver", sub: "Task-oriented · Decisive · Direct" },
  { label: "Others Perceive Me As", value: "Expressive", sub: "Dynamic · Engaging · Impactful" },
  { label: "Charisma Zone", value: "Charismatic", sub: "Warmth 6.36 · Confidence 3.64" },
  { label: "Top Motivator", value: "Networking", sub: "94 / 100 score" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gradient-radial from-blue-900/20 via-transparent to-transparent rounded-full" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-gold-400/8 via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: text */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
              >
                Turning{" "}
                <span className="gradient-text">ambition</span>
                <br />
                into outcomes.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10"
              >
                I&apos;m David Finney, a finance student at the University of Arizona&apos;s Eller College,
                a co-founder generating real revenue, and a campus leader who builds things that matter.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-wrap gap-4 mb-16"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 active:scale-95 text-navy-950 font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-gold-400/25 hover:shadow-gold-400/40"
                >
                  My Story <ArrowRight size={16} />
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 active:scale-95 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 hover:bg-white/5"
                >
                  View Resume
                </Link>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-black text-white">{s.value}</p>
                    <p className="text-xs font-semibold text-gold-400 mt-0.5">{s.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{s.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-3xl scale-110 pointer-events-none" />
                {/* Ring decoration */}
                <div className="absolute inset-0 rounded-full border border-gold-400/20 scale-[1.08] pointer-events-none" />
                {/* Photo */}
                <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden ring-2 ring-gold-400/40 ring-offset-4 ring-offset-transparent shadow-2xl">
                  <img src="/headshot.png" alt="David Finney" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/30" />
          <p className="text-xs text-slate-500 tracking-widest uppercase">Scroll</p>
        </div>
      </section>

      {/* ── VALUE PROPOSITION ────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-16">
            <div className="section-divider mb-5" />
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight mb-4">
              Analyst mindset. Founder instinct. Leader by default.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Most people pick one lane. I&apos;m building credentials across three because the
              best operators I admire understand markets, build products, and move people.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <FadeIn key={h.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -8px rgba(200,152,58,0.12)" }}
                  transition={{ duration: 0.2 }}
                  className="group relative p-8 rounded-2xl border border-slate-100 hover:border-gold-400/40 bg-slate-50 hover:bg-white cursor-default transition-colors duration-300 h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-900 flex items-center justify-center mb-5 group-hover:bg-gold-400 transition-colors duration-300">
                    <h.icon size={20} className="text-gold-400 group-hover:text-navy-900 transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-navy-900 mb-3 text-lg">{h.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{h.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSONA EVOLUTION TEASER ─────────────────────────── */}
      <section className="bg-navy-900 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="section-divider mb-5" />
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-5">
                Inside the gap between{" "}
                <span className="gradient-text">who I think I am</span>{" "}
                and who others see.
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Through structured diagnostics in BCOM 314, I mapped my communication style,
                reputation, motivators, and charisma, and discovered a meaningful gap between my
                self-perception as a direct, decisive Driver and how others experience me: dynamic,
                engaging, and expressive.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Understanding that gap and closing it with intention is the foundation of a
                strong professional persona.
              </p>
              <Link
                href="/persona"
                className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 active:scale-95 text-navy-950 font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200"
              >
                Explore My Persona Evolution <ArrowRight size={16} />
              </Link>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4">
              {personaCards.map((card, i) => (
                <FadeIn key={card.label} delay={0.05 + i * 0.08}>
                  <div className="bg-navy-800 border border-white/8 rounded-2xl p-5 h-full">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">
                      {card.label}
                    </p>
                    <p className="text-xl font-black text-gold-400">{card.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{card.sub}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ────────────────────────────────── */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <div className="section-divider mb-5" />
              <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight">
                Selected Work
              </h2>
              <p className="text-slate-600 mt-3 max-w-xl">
                Projects that prove I can analyze, build, and lead. Not just talk about it.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-500 transition-colors shrink-0 group"
            >
              View All Projects{" "}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioPreviews.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={p.href}
                    className="group block bg-white rounded-2xl border border-slate-100 hover:border-gold-400/50 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 overflow-hidden h-full"
                  >
                    <div className="h-2 bg-gradient-to-r from-navy-900 to-navy-700 group-hover:from-gold-400 group-hover:to-gold-500 transition-all duration-500" />
                    <div className="p-7">
                      <p className="text-xs text-gold-500 font-semibold uppercase tracking-wider mb-2">
                        {p.label}
                      </p>
                      <h3 className="font-bold text-navy-900 text-lg mb-3">{p.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">{p.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ─────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="section-divider mb-5" />
              <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight mb-5">
                My Professional Persona Video
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                In this video, I walk through who I am, what I&apos;m building, and how my professional
                persona has evolved through self-reflection, peer feedback, and intentional growth.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                It&apos;s a look at the intersection of my analytical foundation, entrepreneurial
                ambition, and leadership experience, and where I&apos;m headed next.
              </p>
              <a
                href="https://www.youtube.com/watch?v=2hkoJ02Z4kc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-500 transition-colors group"
              >
                Open on YouTube{" "}
                <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/20">
                <iframe
                  src="https://www.youtube.com/embed/2hkoJ02Z4kc"
                  title="David Finney Professional Persona Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="bg-navy-950 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Let&apos;s connect.
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Whether you&apos;re a recruiter, professional, or fellow builder, I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 active:scale-95 text-navy-950 font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-gold-400/20"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
              <a
                href="https://www.linkedin.com/in/davidbfinney"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 active:scale-95 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200"
              >
                LinkedIn Profile <ExternalLink size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

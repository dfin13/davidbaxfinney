"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, TrendingUp, Code, Users, Award, X, ArrowRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

type Theme = {
  heroBg: string;
  heroPattern?: string;
  accent: string;
  accentText: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  cardBorder: string;
  cardAccent: string;
  watermark?: string;
};

type Project = {
  id: string;
  category: string;
  categoryLabel: string;
  categoryIcon: React.ElementType;
  title: string;
  subtitle: string;
  dates: string;
  role: string;
  description: string;
  what: string;
  impact: string[];
  skills: string[];
  why: string;
  link?: string;
  linkLabel?: string;
  linkStyle?: "business" | "project";
  featured?: boolean;
  image?: string;
  imageLabel?: string;
  theme: Theme;
};

const projects: Project[] = [
  {
    id: "new-wave",
    category: "Consumer Brand · Co-Founder",
    categoryLabel: "Consumer Brand",
    categoryIcon: TrendingUp,
    title: "New Wave Cosmetics LLC",
    subtitle: "Premium haircare brand, from zero to revenue",
    dates: "Aug 2025 – Present",
    role: "Co-Founder / Finance & Operations Lead",
    featured: true,
    description:
      "New Wave Cosmetics is a premium sea-salt styling haircare brand I co-founded in Sahuarita, AZ. Built from scratch with no outside capital, we designed the product formulation, built the brand identity, established retail distribution, and hit profitability within our first months of operation.",
    what:
      "I lead finance, operations, and growth strategy. That means setting pricing, modeling unit economics, managing production logistics, and planning the expansion into e-commerce.",
    impact: [
      "Profitable within months of launch through brick-and-mortar retail distribution",
      "~1,000% per-unit margin structure through smart formulation and supply chain decisions",
      "10,000-unit April production order placed to support e-commerce expansion",
      "Full brand identity, retail placement, and operations built from zero",
    ],
    skills: ["Financial Modeling", "Operations", "Unit Economics", "Brand Strategy", "Retail Distribution"],
    why:
      "New Wave is a functioning business with auditable margins, a placed production order, and active retail distribution — built without outside capital while enrolled full-time. The financial and operational scope is documented above.",
    link: "https://newwavecosmetics.com/",
    linkLabel: "Shop New Wave",
    linkStyle: "business",
    image: "/img-newwave.jpeg",
    theme: {
      heroBg: "linear-gradient(135deg, #78350f 0%, #92400e 35%, #b45309 65%, #d97706 100%)",
      accent: "#fbbf24",
      accentText: "#fbbf24",
      badgeBg: "rgba(251,191,36,0.15)",
      badgeText: "#fbbf24",
      badgeBorder: "rgba(251,191,36,0.3)",
      cardBorder: "border-amber-100",
      cardAccent: "from-amber-500 to-amber-400",
      watermark: "~",
    },
  },
  {
    id: "sea",
    category: "Campus Leadership · VP",
    categoryLabel: "Campus Leadership",
    categoryIcon: Users,
    title: "Student Entrepreneurs Association",
    subtitle: "Vice President — building an entrepreneurial community",
    dates: "Aug 2025 – Present",
    role: "Vice President",
    description:
      "The Student Entrepreneurs Association at the University of Arizona is the premier entrepreneurship organization on campus. As VP, I own the operational backbone: meeting structure, speaker programming, event logistics, and member engagement for 30+ active members.",
    what:
      "Weekly meeting planning, speaker recruitment and coordination (5+ per semester), budget management for academic and social events, and driving consistent member engagement throughout the year.",
    impact: [
      "5+ guest speakers and workshops coordinated per semester",
      "Weekly programming planned and facilitated for 30+ active members",
      "Budget and logistics management across academic and social events",
      "Direct relationship with founder and professional community in Tucson",
    ],
    skills: ["Event Management", "Public Speaking", "Stakeholder Coordination", "Budget Management", "Leadership"],
    why:
      "Holding a VP role while running a company and maintaining a 3.90 GPA reflects a consistent operating pace. The SEA work is real organizational management: budget, programming, speakers, and member engagement with measurable outputs each semester.",
    link: "https://www.linkedin.com/company/student-entrepreneurs-association/",
    linkLabel: "View on LinkedIn",
    linkStyle: "project",
    image: "/img-sea.jpeg",
    theme: {
      heroBg: "linear-gradient(135deg, #2e1065 0%, #4c1d95 40%, #6d28d9 75%, #7c3aed 100%)",
      accent: "#c4b5fd",
      accentText: "#c4b5fd",
      badgeBg: "rgba(196,181,253,0.12)",
      badgeText: "#c4b5fd",
      badgeBorder: "rgba(196,181,253,0.25)",
      cardBorder: "border-violet-100",
      cardAccent: "from-violet-600 to-violet-400",
      watermark: "◆",
    },
  },
  {
    id: "case-competition",
    category: "Academic · Case Competition Winner",
    categoryLabel: "Case Competition",
    categoryIcon: Award,
    title: "BNAD 200 Business Case Competition",
    subtitle: "First place — consulting-style analysis and presentation",
    dates: "November 2025",
    role: "Team Lead / First Place Winner",
    description:
      "A university-wide business case competition requiring teams to analyze a complex business problem, develop strategic recommendations, and present data-backed conclusions to a panel of judges in a client-style setting.",
    what:
      "Led financial analysis, framed the team's strategic narrative, and presented final recommendations to judges. Built the financial model supporting our core argument and drove the team's decision-making process.",
    impact: [
      "First place out of competing teams",
      "Consulting-style deliverable with financial analysis and strategic framing",
      "Presented to a panel of judges in a high-pressure live setting",
      "Demonstrated ability to synthesize complexity into clear recommendations",
    ],
    skills: ["Financial Analysis", "Strategic Consulting", "Presentation", "Team Leadership", "Problem Solving"],
    why:
      "A first-place finish in a university-wide competition judged by working professionals, requiring financial modeling, strategic framing, and live presentation under time pressure. The certificate is documented above.",
    link: "https://www.linkedin.com/posts/davidbfinney_last-semester-i-was-part-of-the-team-that-activity-7421668631316553728-criD?utm_source=share&utm_medium=member_desktop&rcm=ACoAACqFohQBSQN3TZHuE6h6rBaKQ0DLeUiGYwA",
    linkLabel: "View post",
    linkStyle: "project",
    image: "/cert-case-comp.jpeg",
    imageLabel: "First Place Certificate",
    theme: {
      heroBg: "linear-gradient(135deg, #064e3b 0%, #065f46 40%, #059669 75%, #10b981 100%)",
      accent: "#6ee7b7",
      accentText: "#6ee7b7",
      badgeBg: "rgba(110,231,183,0.12)",
      badgeText: "#6ee7b7",
      badgeBorder: "rgba(110,231,183,0.25)",
      cardBorder: "border-emerald-100",
      cardAccent: "from-emerald-600 to-emerald-400",
      watermark: "★",
    },
  },
  {
    id: "riskr",
    category: "Product Build · Solo Founder",
    categoryLabel: "Product Build",
    categoryIcon: Code,
    title: "Riskr",
    subtitle: "Adventure discovery platform built solo",
    dates: "Jul 2025 – Nov 2025",
    role: "Founder & Solo Developer",
    link: "https://theriskr.com",
    linkLabel: "View project",
    linkStyle: "project",
    image: "/img-riskr.png",
    description:
      "Riskr is an adventure discovery app I designed and built independently: a community-driven platform where users submit, rate, and discover adventure locations worldwide. I built the full product: front-end, back-end, maps integration, safety rating system, and community features.",
    what:
      "Sole designer, developer, and product strategist. I made every decision — from information architecture and UX flows to database design and community moderation logic.",
    impact: [
      "600+ user-submitted locations across 80+ countries",
      "Full maps integration with safety ratings and community features",
      "Solo build from concept to live product",
      "Applied real product strategy: user research, feature prioritization, iteration",
    ],
    skills: ["Product Strategy", "Full-Stack Development", "UX Design", "Community Building", "Data Architecture"],
    why:
      "Riskr is a live product with real users, built entirely solo: front-end, back-end, maps, community, and moderation logic. The scope and execution detail are above — 600+ locations across 80+ countries is not a side project.",
    theme: {
      heroBg: "linear-gradient(135deg, #0c1445 0%, #1e3a5f 40%, #1d4ed8 80%, #2563eb 100%)",
      accent: "#60a5fa",
      accentText: "#93c5fd",
      badgeBg: "rgba(96,165,250,0.12)",
      badgeText: "#93c5fd",
      badgeBorder: "rgba(96,165,250,0.25)",
      cardBorder: "border-blue-100",
      cardAccent: "from-blue-600 to-blue-400",
      watermark: "◈",
    },
  },
];

/* ── Expanded overlay ──────────────────────────────────────────── */
function ProjectOverlay({ p, onClose, onImageHover }: { p: Project; onClose: () => void; onImageHover: (src: string | null) => void }) {
  const t = p.theme;
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { if (lightbox) setLightbox(false); else onClose(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, lightbox]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: "rgba(6,11,24,0.85)", backdropFilter: "blur(16px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full sm:max-w-3xl overflow-hidden rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl flex flex-col"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Hero strip ── */}
        <div className="relative overflow-hidden flex-shrink-0" style={{ background: t.heroBg }}>
          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: 0.4,
            }}
          />
          {/* Watermark */}
          {p.theme.watermark && !p.image && (
            <div
              className="absolute right-4 bottom-0 select-none pointer-events-none"
              style={{ fontSize: "7rem", color: "rgba(255,255,255,0.06)", fontWeight: 900, lineHeight: 1 }}
              aria-hidden="true"
            >
              {p.theme.watermark}
            </div>
          )}

          {/* Polaroid image thumbnail */}
          {p.image && (
            <button
              onMouseEnter={() => onImageHover(p.image!)}
              onMouseLeave={() => onImageHover(null)}
              onClick={(e) => { e.stopPropagation(); onImageHover(null); setLightbox(true); }}
              className="absolute right-14 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
              aria-label="View image"
            >
              <div
                className="bg-white p-1.5 shadow-xl"
                style={{ transform: "rotate(2deg)", width: 80 }}
              >
                <img src={p.image} alt="Project image" className="w-full object-cover block" style={{ aspectRatio: "4/3" }} />
              </div>
            </button>
          )}

          {/* Close */}
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-black/50"
            style={{ background: "rgba(0,0,0,0.3)" }}
            aria-label="Close"
          >
            <X size={14} className="text-white" />
          </button>

          <div className="relative z-10 px-6 pt-6 pb-5">
            {/* Badges + link in one row */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border" style={{ background: t.badgeBg, color: t.badgeText, borderColor: t.badgeBorder }}>
                {p.categoryLabel}
              </span>
              {p.featured && (
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
                  Featured
                </span>
              )}
              {p.linkStyle === "business" && (
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
                  Live Business
                </span>
              )}
            </div>

            <h2
              className="text-2xl font-black text-white leading-tight tracking-tight mb-1"
              style={p.id === "new-wave" ? { fontFamily: "'Cyber Brush', sans-serif", fontSize: "2rem", letterSpacing: "0.02em" } : undefined}
            >
              {p.id === "new-wave" ? "New Wave" : p.title}
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{p.role} · {p.dates}</p>
              {p.link && p.linkStyle === "business" && (
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full transition-all"
                  style={{ background: t.accent, color: "#0B1221" }}>
                  {p.linkLabel} <ExternalLink size={10} />
                </a>
              )}
              {p.link && p.linkStyle === "project" && (
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border transition-all hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)" }}>
                  {p.linkLabel} <ExternalLink size={10} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex-1 overflow-y-auto sm:overflow-hidden grid sm:grid-cols-2 gap-0">
          {/* Left */}
          <div className="p-5 space-y-4 border-r border-slate-100">
            <div>
              <p className="text-[9px] font-black text-navy-900 uppercase tracking-[0.14em] mb-1.5">Overview</p>
              <p className="text-[11px] text-slate-600 leading-[1.5]">{p.description}</p>
            </div>
            <div>
              <p className="text-[9px] font-black text-navy-900 uppercase tracking-[0.14em] mb-1.5">My Role</p>
              <p className="text-[11px] text-slate-600 leading-[1.5]">{p.what}</p>
            </div>
            <div>
              <p className="text-[9px] font-black text-navy-900 uppercase tracking-[0.14em] mb-1.5">Skills</p>
              <div className="flex flex-wrap gap-1.5">
                {p.skills.map((s) => (
                  <span key={s} className="text-[10px] font-medium bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="p-5 space-y-4">
            <div>
              <p className="text-[9px] font-black text-navy-900 uppercase tracking-[0.14em] mb-1.5">Key Outcomes</p>
              <ul className="space-y-1.5">
                {p.impact.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600 leading-[1.45]">
                    <span className="shrink-0 font-bold" style={{ color: t.accent }}>›</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-3.5" style={{ background: "rgba(6,11,24,0.03)", border: "1px solid rgba(6,11,24,0.07)" }}>
              <p className="text-[9px] font-black text-navy-900 uppercase tracking-[0.14em] mb-1.5">Why It Matters</p>
              <p className="text-[11px] text-slate-600 leading-[1.5]">{p.why}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && p.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close image"
            >
              <X size={16} className="text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <img src={p.image} alt={p.imageLabel ?? "Project image"} className="w-full rounded-2xl shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}

/* ── Compact card ──────────────────────────────────────────────── */
function ProjectCard({ p, idx, onOpen }: { p: Project; idx: number; onOpen: () => void }) {
  const Icon = p.categoryIcon;
  const t = p.theme;

  return (
    <FadeIn delay={idx * 0.07}>
      <motion.button
        onClick={onOpen}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.18 }}
        className="w-full text-left group relative bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300"
      >
        {/* Accent bar */}
        <div className={`h-1 bg-gradient-to-r ${t.cardAccent} opacity-80 group-hover:opacity-100 transition-opacity`} />

        <div className="flex items-center gap-5 px-6 py-5">
          {/* Icon */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{ background: t.heroBg }}
          >
            <Icon size={18} className="text-white" />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-xs font-semibold text-slate-500">{p.categoryLabel}</span>
              {p.featured && (
                <span className="text-xs font-bold text-gold-500 bg-gold-400/10 border border-gold-400/20 px-2 py-0.5 rounded-full">
                  Featured
                </span>
              )}
              {p.linkStyle === "business" && (
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Live
                </span>
              )}
            </div>
            <p className="font-black text-navy-900 text-base truncate">{p.title}</p>
            <p className="text-xs text-slate-500 mt-0.5">{p.role} · {p.dates}</p>
          </div>

          {/* Arrow */}
          <div
            className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-slate-100 group-hover:border-slate-300 transition-all duration-200"
          >
            <ArrowRight size={14} className="text-slate-400 group-hover:text-navy-900 transition-colors -rotate-45" />
          </div>
        </div>

        {/* Skill tags — subtle row at bottom */}
        <div className="px-6 pb-4 flex flex-wrap gap-1.5">
          {p.skills.slice(0, 4).map((s) => (
            <span key={s} className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
              {s}
            </span>
          ))}
          {p.skills.length > 4 && (
            <span className="text-xs text-slate-400 px-2 py-0.5">+{p.skills.length - 4}</span>
          )}
        </div>
      </motion.button>
    </FadeIn>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <>
      <AnimatePresence>
        {selected && (
          <ProjectOverlay
            p={selected}
            onClose={() => { setSelectedId(null); setHoveredImage(null); }}
            onImageHover={setHoveredImage}
          />
        )}
      </AnimatePresence>

      {/* Enlarged polaroid — rendered at page root, position:fixed has no parent transforms */}
      {hoveredImage && (
        <div
          className="pointer-events-none"
          style={{
            position: "fixed",
            right: "8%",
            top: "20%",
            zIndex: 9999,
            width: 260,
            transform: "rotate(-2deg)",
            transition: "opacity 0.15s ease",
          }}
        >
          <div style={{ background: "#fff", padding: 10, boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}>
            <img src={hoveredImage} alt="Project" style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover" }} />
            <div style={{ height: 24 }} />
          </div>
        </div>
      )}

      {/* Header */}
      <section className="bg-hero-gradient pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <span className="text-xs font-medium text-slate-300 tracking-widest uppercase">Portfolio</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Selected{" "}
              <span className="gradient-text">work.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
            >
              Four projects across finance, product, leadership, and brand-building. Each one is documented in full — click to open.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-3">
            {projects.map((p, idx) => (
              <ProjectCard key={p.id} p={p} idx={idx} onOpen={() => setSelectedId(p.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl font-black text-navy-900 mb-4">
              Questions about any of these?
            </h2>
            <p className="text-slate-600 mb-8">
              Happy to discuss the detail behind any project — strategy, financials, execution, or what came next.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:davidbaxfinney@gmail.com"
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 active:scale-95 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/davidbfinney"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-gold-400 active:scale-95 text-navy-900 font-semibold text-sm px-6 py-3.5 rounded-full transition-all"
              >
                Connect on LinkedIn <ExternalLink size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

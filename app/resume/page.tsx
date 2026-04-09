"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Globe } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import DownloadButton from "@/components/resume/DownloadButton";

type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
  tag?: string;
};

const experience: ExperienceItem[] = [
  {
    company: "New Wave Cosmetics LLC",
    role: "Co-Founder / Finance & Operations Lead",
    location: "Sahuarita, AZ",
    dates: "Aug 2025 – Present",
    tag: "Entrepreneurship",
    bullets: [
      "Co-founded and operate a premium haircare brand producing sea-salt styling products",
      "Achieved ~1,000% per-unit margins through smart formulation and supply chain decisions",
      "Placed a 10,000-unit April production order to support expansion into e-commerce distribution",
    ],
  },
  {
    company: "Riskr (theriskr.com)",
    role: "Founder & Solo Developer",
    location: "Tucson, AZ",
    dates: "Jul 2025 – Nov 2025",
    tag: "Product Build",
    bullets: [
      "Designed an adventure discovery app with 600+ user-submitted locations across 80+ countries",
      "Built maps, safety ratings, and community features applying product strategy skills",
    ],
  },
  {
    company: "Scarbrough Financial Group",
    role: "Asset Management Intern",
    location: "San Rafael, CA",
    dates: "Dec 2023 – Apr 2024",
    tag: "Finance",
    bullets: [
      "Researched asset allocation strategies and authored reports on macroeconomic and sector trends",
      "Built Excel models for portfolio tracking and scenario analysis while shadowing portfolio managers",
    ],
  },
  {
    company: "Marinwood Community Services District",
    role: "Lifeguard & Swim Instructor",
    location: "San Rafael, CA",
    dates: "Apr 2023 – Aug 2025",
    tag: "Operations",
    bullets: [
      "Supervised 100+ patrons, taught swim lessons, and managed pool safety and operations",
    ],
  },
];

const leadership = [
  {
    org: "Student Entrepreneurs Association",
    role: "Vice President",
    location: "Tucson, AZ",
    dates: "Aug 2025 – Present",
    bullets: [
      "Plan and run weekly general meetings and coordinate 5+ guest speakers and workshops per semester",
      "Manage event logistics and budgets for academic and social events serving 30+ active members",
    ],
  },
  {
    org: "Business Case Competition (BNAD 200)",
    role: "First Place Winner",
    location: "Tucson, AZ",
    dates: "Nov 2025",
    bullets: [
      "Developed consulting-style solution through financial analysis and team problem-solving",
      "Presented concise, data-backed recommendations to a panel of judges in a client-style setting",
    ],
  },
  {
    org: "Management Information Systems Preceptorship",
    role: "Preceptor, MIS 111/112",
    location: "Tucson, AZ",
    dates: "Jan 2025 – May 2025",
    bullets: [
      "Graded coursework, maintained records for 40+ students, supported faculty and student learning",
    ],
  },
];

const tagColors: Record<string, string> = {
  Entrepreneurship: "bg-amber-50 text-amber-700 border-amber-200",
  "Product Build": "bg-blue-50 text-blue-700 border-blue-200",
  Finance: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Operations: "bg-slate-100 text-slate-600 border-slate-200",
};

const contactItems = [
  { icon: Mail, label: "davidbaxfinney@gmail.com", href: "mailto:davidbaxfinney@gmail.com" },
  { icon: Phone, label: "(415) 654-9794", href: "tel:+14156549794" },
  { icon: MapPin, label: "Tucson, AZ · San Rafael, CA", href: undefined },
  { icon: Linkedin, label: "linkedin.com/in/davidbfinney", href: "https://www.linkedin.com/in/davidbfinney" },
  { icon: Globe, label: "U.S. & EU Citizen", href: undefined },
];

export default function Resume() {
  return (
    <>
      {/* Header */}
      <section className="bg-hero-gradient pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6"
              >
                <span className="text-xs font-medium text-slate-300 tracking-widest uppercase">
                  Resume
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl font-black text-white tracking-tight"
              >
                David Finney
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-slate-300 mt-2 text-lg"
              >
                Finance Student · Co-Founder · Campus Leader
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <DownloadButton />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Body */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          {/* Contact Row */}
          <FadeIn>
            <div className="flex flex-wrap gap-5 text-sm text-slate-500 mb-12 pb-8 border-b border-slate-100">
              {contactItems.map(({ icon: Icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gold-500 transition-colors"
                  >
                    <Icon size={14} className="text-gold-400" />
                    {label}
                  </a>
                ) : (
                  <span key={label} className="flex items-center gap-2">
                    <Icon size={14} className="text-gold-400" />
                    {label}
                  </span>
                )
              )}
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.05}>
            <div className="mb-12">
              <h2 className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-6 flex items-center gap-3">
                Education
                <span className="flex-1 h-px bg-slate-100" />
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <p className="font-bold text-navy-900 text-lg">
                    University of Arizona, Eller College of Management
                  </p>
                  <p className="text-slate-600 font-medium">
                    Bachelor of Science in Business Administration — Finance
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full font-semibold">
                      GPA: 3.90
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-full font-semibold">
                      Dean&apos;s List × 3 Semesters
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-semibold text-slate-500">Tucson, AZ</p>
                  <p className="text-sm text-slate-400 mt-1">Expected May 2028</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Professional Experience */}
          <FadeIn delay={0.1}>
            <div className="mb-12">
              <h2 className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-6 flex items-center gap-3">
                Professional Experience
                <span className="flex-1 h-px bg-slate-100" />
              </h2>
              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative pl-5 border-l-2 border-slate-100 hover:border-gold-400 transition-colors duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-bold text-navy-900">{exp.company}</p>
                          {exp.tag && (
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${tagColors[exp.tag] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}>
                              {exp.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 font-medium text-sm">{exp.role}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm text-slate-500 font-medium">{exp.dates}</p>
                        <p className="text-xs text-slate-400">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                          <span className="text-gold-400 mt-1.5 shrink-0">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Leadership */}
          <FadeIn delay={0.1}>
            <div className="mb-12">
              <h2 className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-6 flex items-center gap-3">
                Leadership & Involvement
                <span className="flex-1 h-px bg-slate-100" />
              </h2>
              <div className="space-y-8">
                {leadership.map((item, i) => (
                  <motion.div
                    key={item.org}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative pl-5 border-l-2 border-slate-100 hover:border-gold-400 transition-colors duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <p className="font-bold text-navy-900">{item.org}</p>
                        <p className="text-slate-600 font-medium text-sm">{item.role}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm text-slate-500 font-medium">{item.dates}</p>
                        <p className="text-xs text-slate-400">{item.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                          <span className="text-gold-400 mt-1.5 shrink-0">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Skills */}
          <FadeIn delay={0.1}>
            <div>
              <h2 className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-6 flex items-center gap-3">
                Skills & Additional
                <span className="flex-1 h-px bg-slate-100" />
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    label: "Technical Skills",
                    items: ["Excel", "PowerPoint", "Word", "Tableau", "Financial Modeling"],
                  },
                  {
                    label: "Languages & Citizenship",
                    items: ["English (Native)", "Spanish (B2)", "U.S. Citizen", "EU Citizen (Slovakia)"],
                  },
                  {
                    label: "Interests",
                    items: ["Water Polo", "App Development", "Surfing", "Travel", "Investment Research", "Blockchain Dev"],
                    full: true,
                  },
                ].map((group) => (
                  <div key={group.label} className={group.full ? "sm:col-span-2" : ""}>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((s) => (
                        <span
                          key={s}
                          className="text-sm bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg font-medium hover:border-gold-400/60 transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

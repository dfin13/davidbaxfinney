"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Info, X } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

function InfoTooltip() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-gold-400 border border-white/10 hover:border-gold-400/30 rounded-full px-3 py-1.5 transition-all duration-200"
        aria-label="About this assessment"
      >
        <Info size={12} />
        About this assessment
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-80 sm:w-96 bg-navy-900 border border-white/10 rounded-2xl px-5 py-4 shadow-2xl z-20 text-left"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-slate-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={14} />
            </button>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Context:</strong> This page documents an assessment completed as part of{" "}
              <strong className="text-white">BCOM 314 (Business Communication)</strong> at the University of Arizona. The
              Self-Perception Inventory (SPI) and Professional Reputation Survey (PRS) are structured diagnostic tools used
              in the course, not self-declared personality traits. I&apos;m sharing the results and my interpretation here
              as a transparent record of that process, not as a definitive statement of who I am.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const StyleComparisonChart = dynamic(
  () => import("@/components/charts/StyleComparisonChart"),
  { ssr: false, loading: () => <div className="h-72 bg-slate-50 rounded-xl animate-pulse" /> }
);
const CharismaChart = dynamic(
  () => import("@/components/charts/CharismaChart"),
  { ssr: false, loading: () => <div className="h-72 bg-slate-50 rounded-xl animate-pulse" /> }
);
const AdjektivesChart = dynamic(
  () => import("@/components/charts/AdjektivesChart"),
  { ssr: false, loading: () => <div className="h-48 bg-slate-50 rounded-xl animate-pulse" /> }
);

export default function PersonaEvolution() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────── */}
      <section className="bg-hero-gradient pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <span className="text-xs font-medium text-slate-300 tracking-widest uppercase">
                BCOM 314 · University of Arizona · Class Assignment
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Two profiles.{" "}
              <span className="gradient-text">One complete picture.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
            >
              A structured behavioral assessment in BCOM 314 produced two data points: how I operate
              internally, and how that operating style registers with others. The result confirms both
              dimensions — and the combination is more advantageous than either alone.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 inline-block relative"
            >
              <InfoTooltip />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: The Profile ─────────────────────── */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <FadeIn>
              <div className="section-divider mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight mb-6">
                Internally structured and execution-focused. Externally engaging and socially dynamic. Both are accurate.
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
                <p>
                  The Self-Perception Inventory places me firmly in the <strong className="text-navy-900">Driver</strong> quadrant:
                  task-oriented, decisive, structured, and fast-moving. Drivers operate with a high
                  focus on outcomes — set a goal, build a plan, execute without distraction.
                  My SPI composite (proactivity&nbsp;1.0 / reactivity&nbsp;−3.0) reflects someone
                  internally directed and deliberate, not reactive to social cues.
                </p>
                <p>
                  The Professional Reputation Survey adds a second layer. Peers scored me at
                  proactivity&nbsp;6.2 / reactivity&nbsp;1.4, placing me in the{" "}
                  <strong className="text-navy-900">Expressive</strong> quadrant: energetic, socially
                  engaging, relationship-forward, outwardly dynamic. Expressives generate energy in a
                  room and influence through presence as much as through precision.
                </p>
                <p>
                  The two profiles are not in tension. They are additive. The Driver profile describes
                  how I operate internally. The Expressive profile describes how that operating style
                  lands externally. Together, they confirm a range that most professionals only develop
                  one side of.
                </p>
              </div>
            </FadeIn>

            {/* Side-by-side comparison */}
            <FadeIn delay={0.12} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy-900 rounded-2xl p-6 border border-white/8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    My Self-Assessment
                  </p>
                  <p className="text-2xl font-black text-white mb-1">Driver</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Proactivity: 1.0 · Reactivity: −3.0
                  </p>
                  <div className="mt-4 space-y-1.5">
                    {["Task-oriented", "Decisive", "Structured", "Outcome-focused", "Direct"].map((t) => (
                      <div key={t} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gold-400/10 rounded-2xl p-6 border border-gold-400/25">
                  <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-3">
                    How Peers See Me
                  </p>
                  <p className="text-2xl font-black text-navy-900 mb-1">Expressive</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Proactivity: 6.2 · Reactivity: 1.4
                  </p>
                  <div className="mt-4 space-y-1.5">
                    {["Engaging", "Dynamic", "Socially present", "Energizing", "Outwardly impactful"].map((t) => (
                      <div key={t} className="text-xs text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
                <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-2">
                  Outward Energy: Internal vs. External Read
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>Internal (SPI)</span>
                      <span className="font-bold text-navy-900">1.0</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full">
                      <div className="h-2 bg-blue-700 rounded-full" style={{ width: "10%" }} />
                    </div>
                  </div>
                  <span className="text-slate-300 font-bold">vs</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>External (PRS)</span>
                      <span className="font-bold text-gold-600">6.2</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full">
                      <div className="h-2 bg-gold-400 rounded-full" style={{ width: "62%" }} />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  Internal discipline registers externally as energy, initiative, and presence. This pattern holds across every dimension of the assessment — the operating style produces the output consistently.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Why both profiles are coherent ──── */}
      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-10">
            <div className="section-divider mb-5" />
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight mb-4">
              Why both assessments point to the same person: three mechanisms that explain the full profile
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              The SPI and PRS are measuring different things — internal operating mode versus
              external professional signal. The fact that they diverge is expected. Understanding
              the mechanism behind each dimension is what makes the data actionable.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                num: "01",
                title: "Internal Discipline Registers as External Energy",
                body: "Drivers self-regulate internally — structure, precision, and decisive momentum are the felt experience. What registers externally is the output of that discipline: initiative, forward motion, and presence. The internal operating mode produces the external signal; the two are not separate.",
              },
              {
                num: "02",
                title: "High Social Motivation Translates Directly",
                body: "My highest motivator score is Networking (94/100). Genuine investment in human connection is perceptible — in how I make eye contact, how I listen, how I engage in group settings. This is not a performed trait. It is the natural output of a motivational profile oriented toward people.",
              },
              {
                num: "03",
                title: "Confidence Manifests as Engagement",
                body: "Where many people interpret confidence as composure or restraint, mine shows up as initiative and presence. Certainty produces lean-in behavior: more questions, forward momentum, pushing the room. That pattern reads as expressive energy — which is an accurate read of how the underlying confidence operates.",
              },
            ].map((card) => (
              <div key={card.num} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-md transition-shadow duration-300">
                <span className="text-3xl font-black text-slate-300 block mb-3">{card.num}</span>
                <h3 className="font-bold text-navy-900 text-sm mb-3">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy-900 rounded-2xl p-7 border border-white/8">
            <p className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-3">
              The Core Insight
            </p>
            <p className="text-white leading-relaxed">
              The Driver profile and the Expressive profile are not competing interpretations.
              They describe the same person at two different layers: <em>internal operating mode</em> and{" "}
              <em>external professional signal</em>. Both are real. Professionals who can operate with
              Driver discipline while projecting Expressive presence occupy a distinct and rare position
              in any room.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Radar Chart ─────────────────────── */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-10">
            <div className="section-divider mb-5" />
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight mb-4">
              Execution strength confirmed across both profiles. Social range extends the picture further.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Six behavioral dimensions mapped across internal style (Driver) and external perception
              (Expressive). The profiles converge on task orientation and decisiveness, then diverge
              on relational and social dimensions — where the Expressive read adds additional range
              on top of a confirmed execution foundation.
            </p>
          </FadeIn>
          <div
            className="bg-slate-50 rounded-2xl border border-slate-100 p-8 mb-6"
            role="img"
            aria-label="Radar chart comparing self-perception (Driver) vs. peer perception (Expressive) across six dimensions: Task Orientation, Decisiveness, Directness, Social Energy, Expressiveness, and Relationship Focus"
          >
            <StyleComparisonChart />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
              <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-2">Confirmed Dimensions</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Both profiles confirm decisiveness and task orientation at high levels. The Driver
                core is validated by both assessments simultaneously — the execution foundation
                is consistent across self-report and external perception.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
              <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-2">Extended Dimensions</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Social energy, expressiveness, and relationship focus score significantly higher
                in the PRS — these are the relational dimensions where execution-oriented
                professionals typically underperform. They register as clear strengths here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Adjectives ──────────────────────── */}
      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-10">
            <div className="section-divider mb-5" />
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight mb-4">
              The peer assessment maps a broader professional profile than execution metrics alone capture
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The SPI produced 7 self-selected descriptors. The PRS produced 29 peer-attributed
              descriptors. Where the two overlap, they confirm self-awareness. Where they extend
              beyond it, they reveal the full range of how the professional profile registers
              in practice.
            </p>
          </FadeIn>
          <div
            className="bg-white rounded-2xl border border-slate-100 p-8 mb-6"
            role="img"
            aria-label="Adjective word cloud comparing self-selected descriptors (Ambitious, Driven, Decisive, Analytical, Disciplined) with peer-assigned descriptors (Calm, Easygoing, Empathetic, Poised, Trusting, Enthusiastic)"
          >
            <AdjektivesChart />
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-2">What the Extended Profile Reveals</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Words like <em>Calm, Easygoing, Empathetic, Poised, Trusting</em>, and{" "}
              <em>Well-Rounded</em> sit outside the Driver profile and outside most execution-oriented
              self-descriptions. They belong to a more relational, emotionally grounded register.
              The fact that peers consistently apply them indicates that the execution orientation
              and the interpersonal presence operate simultaneously — not in spite of each other.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Charisma ────────────────────────── */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <div className="section-divider mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight mb-5">
                Warmth is already established. Authority projection is the growth edge.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                The Charisma Diagnostic produces two scores: <strong>Warmth</strong> (perceived
                approachability and trustworthiness) and <strong>Confidence</strong> (perceived
                capability and authority). Charismatic leaders score high on both. The quadrant
                they land in predicts how they are experienced in professional relationships.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-center">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-2">Warmth</p>
                  <p className="text-4xl font-black text-gold-500">+6.36</p>
                  <p className="text-xs text-slate-400 mt-1">above baseline · scale −10 to +10</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-center">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-2">Confidence</p>
                  <p className="text-4xl font-black text-navy-800">+3.64</p>
                  <p className="text-xs text-slate-400 mt-1">above baseline · scale −10 to +10</p>
                </div>
              </div>
              <div className="bg-gold-400/10 border border-gold-400/25 rounded-xl p-5 mb-5">
                <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-2">Charismatic Zone: Confirmed</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  On a scale of −10 to +10, both scores are positive. Warmth at +6.36 and
                  Confidence at +3.64 place me in the Charismatic Zone: perceived as simultaneously
                  trustworthy and capable. This is the target profile for effective leaders and communicators.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-2">What the Asymmetry Means</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Warmth is the more dominant signal right now (+6.36 vs. +3.64 on confidence),
                  which means I&apos;m perceived as highly trustworthy with a strong relational
                  presence. The growth edge is strengthening how authority registers: executive
                  presence cues like vocal precision, deliberate pacing, and composed stillness.
                  Both are already positive. The opportunity is to close the gap between them.
                </p>
              </div>
            </div>
            <div
              className="bg-slate-50 rounded-2xl border border-slate-100 p-6"
              role="img"
              aria-label="Scatter plot of Warmth vs. Confidence on a −10 to +10 scale, showing David positioned at Warmth +6.36, Confidence +3.64 — both above baseline, in the Charismatic Zone"
            >
              <CharismaChart />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Implications ────────────────────── */}
      <section className="bg-navy-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-12">
            <div className="section-divider mb-5" />
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              Applying the full profile: in teams, in leadership, and under pressure
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              A profile with both Driver discipline and Expressive presence creates specific
              strategic advantages — and specific points where deliberate calibration produces
              better outcomes. Both are worth understanding clearly.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                context: "In Teams",
                implication:
                  "I enter collaborative settings with significant social authority. My energy sets a pace that others follow, which is an asset in fast-moving environments. The calibration point: in rooms with quieter or more deliberate communicators, holding space for full input before advancing a direction produces better outcomes.",
                adjustment:
                  "Build explicit pause points. Ask 'What am I missing?' before closing a discussion.",
              },
              {
                context: "In Leadership",
                implication:
                  "The combination of Driver discipline and Expressive presence is genuinely rare. Driver rigor provides the structural credibility. Expressive energy makes others want to follow. Professionals who develop only one side tend to be either respected but cold, or magnetic but unpredictable. The integrated profile avoids both failure modes.",
                adjustment:
                  "Lead with warmth and narrative; anchor with structure and follow-through.",
              },
              {
                context: "In Communication",
                implication:
                  "Warmth at +6.36 means trust is established quickly and people are already engaged. In high-stakes settings — pitches, interviews, presentations — the lever is calibrating delivery to match the credibility that already exists: precision, deliberate pacing, and composed authority reinforce the relational foundation.",
                adjustment:
                  "Slow down in high-stakes moments. Precision and stillness signal confidence more reliably than energy.",
              },
            ].map((item) => (
              <div key={item.context} className="bg-navy-800 border border-white/8 rounded-2xl p-6">
                <p className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-3">
                  {item.context}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{item.implication}</p>
                <div className="border-t border-white/8 pt-4">
                  <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider mb-1">
                    Adjustment
                  </p>
                  <p className="text-xs text-slate-300 italic leading-relaxed">{item.adjustment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: Strategic Adjustments ──────────── */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-12">
            <div className="section-divider mb-5" />
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight mb-4">
              Four behavioral commitments, each tied directly to a specific data point
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              These aren&apos;t goals. They&apos;re behavioral commitments derived from specific data points,
              each tied to a concrete rationale and a practical action.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Own the Expressive Range",
                evidence: "PRS proactivity 6.2 · Charisma warmth 6.36 · Networking motivator 94",
                insight:
                  "The data is unambiguous: the Expressive profile isn&apos;t incidental to analytical performance — it amplifies it. Relational presence accelerates trust, which accelerates influence, which accelerates outcomes. The two profiles are not in competition. The professional advantage is in deploying both simultaneously and intentionally.",
                action: "Lead with warmth and engagement as a deliberate strategic asset, not a personality footnote.",
              },
              {
                num: "02",
                title: "Build Executive Presence",
                evidence: "Charisma warmth +6.36 · confidence +3.64 · both above baseline on −10 to +10 scale",
                insight:
                  "Trust is established — that foundation is confirmed. The next lever is ensuring that authority projection matches the relational credibility already in place. Research on charismatic leadership (Antonakis et al., 2011) identifies specific, trainable signals: metaphorical language, structured argumentation, controlled pacing, deliberate pause. These are concrete and developable.",
                action: "Slow down. Let silence do work. Seek out high-stakes speaking opportunities.",
              },
              {
                num: "03",
                title: "Create Space Before Deciding",
                evidence: "SPI Driver profile · Team role: Pragmatist · Reactivity gap SPI −3 vs. PRS 1.4",
                insight:
                  "My natural pace is fast. In environments with a diverse mix of behavioral styles, that speed can read as dismissiveness, even when the intent is efficiency. The Driver&apos;s strength is execution. The risk is inadvertently closing conversations that others needed more time in.",
                action: "In team settings: ask one more question before proposing a solution.",
              },
              {
                num: "04",
                title: "Let Outcomes Build Credibility",
                evidence: "Achievement motivator 80 · Competition motivator 80 · Stability motivator 35",
                insight:
                  "My motivator profile shows someone who is genuinely wired for achievement and competition, not stability or recognition. That energy, when channeled correctly, produces results that build trust over time. But ambition that isn&apos;t grounded in delivered outcomes can read as overconfidence. The counter is simple: keep executing.",
                action: "Let New Wave, Riskr, and the GPA tell the story. Credentials follow results.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="grid lg:grid-cols-5 gap-6 bg-slate-50 rounded-2xl border border-slate-100 p-7 hover:border-gold-400/30 hover:shadow-md transition-all duration-300"
              >
                <div className="lg:col-span-1 flex items-start gap-3">
                  <span className="text-4xl font-black text-slate-400">{item.num}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-black text-navy-900 text-base mb-1">{item.title}</h3>
                  <p className="text-xs text-gold-500 font-medium mb-3">Evidence: {item.evidence}</p>
                  <p
                    className="text-sm text-slate-600 leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: item.insight }}
                  />
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-navy-900 uppercase tracking-wider shrink-0 mt-0.5">
                      Action:
                    </span>
                    <span className="text-xs text-slate-600 italic">{item.action}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: Synthesis ───────────────────────── */}
      <section className="bg-navy-950 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="section-divider mb-6" />
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-8">
            Two assessments. One coherent profile. A range that most professionals develop only half of.
          </h2>
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>
              The SPI and PRS together map a professional with strong execution discipline and
              equally strong interpersonal presence. The Driver profile — task-oriented, decisive,
              results-focused — describes a consistent internal operating mode. The Expressive
              profile — engaging, energizing, relationship-credible — describes how that operating
              mode registers in rooms, teams, and professional relationships.
            </p>
            <p>
              These are not two versions of the same person. They are two dimensions of a single,
              integrated profile. Warmth is not a soft complement to analytical rigor — it is a
              force multiplier for it. Trust earned through relational presence is the mechanism
              by which execution-oriented professionals actually get things done through others.
            </p>
            <p>
              The Charismatic Zone (warmth +6.36, confidence +3.64) is the platform. The behavioral
              commitments are the deliberate application of what the data confirms. The motivator
              profile — Networking 94, Achievement 80, Competition 80 — explains why both dimensions
              are genuine rather than performed: the raw material was always there.
            </p>
            <p className="text-white font-medium">
              The profile is not a work in progress. It is an already-functional combination of
              execution strength and interpersonal range — with a clear, specific lever for continued growth.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-sm px-6 py-3.5 rounded-full transition-all"
            >
              See My Work <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all"
            >
              Connect with Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

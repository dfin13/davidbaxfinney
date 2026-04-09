"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

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
          <div className="max-w-3xl">
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
              Peers saw more in me{" "}
              <span className="gradient-text">than I saw</span>
              <br />
              in myself.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Through a structured communication assessment in BCOM 314, I discovered that my peers
              consistently rate me higher than I rate myself. More engaging, more dynamic, more present.
              That&apos;s a good problem to have.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-8 inline-flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 max-w-2xl"
            >
              <span className="text-gold-400 text-lg shrink-0 mt-0.5">ℹ</span>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Context:</strong> This page documents an assessment completed as part of{" "}
                <strong className="text-white">BCOM 314 (Business Communication)</strong> at the University of Arizona. The
                Self-Perception Inventory (SPI) and Professional Reputation Survey (PRS) are structured diagnostic tools used
                in the course, not self-declared personality traits. I&apos;m sharing the results and my interpretation here
                as a transparent record of that process, not as a definitive statement of who I am.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: The Gap ─────────────────────────── */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <FadeIn>
              <div className="section-divider mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight mb-6">
                My peers rated me as more engaging, more energetic, and more socially present than I give myself credit for
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
                <p>
                  On the Self-Perception Inventory, I identified strongly as a <strong className="text-navy-900">Driver</strong>:
                  task-oriented, decisive, structured, and fast-moving. Drivers operate with a high
                  focus on outcomes: they set a goal, build a plan, and execute with minimal distraction.
                  My SPI composite placed me at proactivity&nbsp;1.0 / reactivity&nbsp;−3.0, indicating
                  someone internally directed and deliberate rather than socially reactive.
                </p>
                <p>
                  The Professional Reputation Survey told a meaningfully different story. My peers scored
                  me at proactivity&nbsp;6.2 / reactivity&nbsp;1.4, placing me squarely in the{" "}
                  <strong className="text-navy-900">Expressive</strong> quadrant. Expressives are
                  described as energetic, socially engaging, relationship-forward, and outwardly dynamic.
                  They generate energy in a room; they influence through presence and enthusiasm, not
                  only through structure and precision.
                </p>
                <p>
                  The two profiles aren&apos;t contradictory. They&apos;re complementary. My peers weren&apos;t being
                  generous — they were being accurate. I have more range than I&apos;d given myself credit for,
                  and the data makes that concrete.
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
                  Peers Rate Me 5x Higher on Outward Energy
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>Self-reported</span>
                      <span className="font-bold text-navy-900">1.0</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full">
                      <div className="h-2 bg-blue-700 rounded-full" style={{ width: "10%" }} />
                    </div>
                  </div>
                  <span className="text-slate-300 font-bold">vs</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>Peer-reported</span>
                      <span className="font-bold text-gold-600">6.2</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full">
                      <div className="h-2 bg-gold-400 rounded-full" style={{ width: "62%" }} />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  My peers see significantly more energy, initiative, and presence than I report in myself — a pattern that shows up consistently across every dimension of the assessment.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY the gap exists ──────────────── */}
      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-10">
            <div className="section-divider mb-5" />
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight mb-4">
              Why peers see more than I report: three reasons this result is consistent, not surprising
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              When peers consistently rate someone higher than they rate themselves, there&apos;s a reason.
              Understanding it is what makes the result useful rather than just interesting.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                num: "01",
                title: "Internal Experience ≠ External Signal",
                body: "Drivers self-regulate internally. They feel the structure and precision from the inside. But to others, what reads on the outside is energy, initiative, and presence. My internal discipline produces externally visible momentum. That momentum is experienced as expressive, not mechanical.",
              },
              {
                num: "02",
                title: "High Social Motivation Leaks Through",
                body: "My highest motivator score is Networking (94/100). When someone is genuinely energized by human connection, that energy is perceptible: in how they make eye contact, how they listen, how they light up in group settings. I don't perform warmth; my motivational profile produces it naturally.",
              },
              {
                num: "03",
                title: "Confidence Manifests as Engagement",
                body: "Where many people interpret confidence as composure or restraint, mine shows up as initiative and presence. When I'm certain about something, I lean in. I ask more questions. I push the room forward. That pattern reads as enthusiasm, which is characteristic of Expressives, not Drivers.",
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
              The Driver-Expressive gap isn&apos;t a misalignment between my personality and my behavior.
              It&apos;s a misalignment between my <em>internal narrative</em> and my{" "}
              <em>external signal</em>. I was operating as an Expressive without recognizing it. That
              recognition matters, because intentional Expressives are dramatically more effective
              than accidental ones.
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
              The divergence concentrates in social dimensions, precisely where Drivers and Expressives differ most
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Six behavioral dimensions mapped across self-perception (Driver) and peer perception
              (Expressive). Both profiles agree on task orientation and decisiveness. The gap is
              additive, concentrated in the relational and social dimensions I had undercounted.
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
              <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-2">Convergent Dimensions</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Both profiles agree on decisiveness and task orientation. My Driver core is real.
                The gap is additive, not contradictory: I&apos;m as decisive as I think I am, <em>and</em>{" "}
                more socially engaging than I recognized.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
              <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-2">Divergent Dimensions</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Social energy, expressiveness, and relationship focus all scored dramatically higher
                in the PRS. These aren&apos;t traits I&apos;d have named as strengths. They turned out to be
                among my most visible characteristics.
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
              Peers attributed qualities I had not claimed, and the data suggests they were right
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              I selected 7 adjectives in the SPI. My peers attributed 29 descriptors through the
              PRS. The overlap validates my self-awareness. The divergence (the 22 traits I didn&apos;t
              claim) reveals a dimension of my professional presence I had systematically undervalued.
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
            <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-2">What the Divergence Reveals</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Words like <em>Calm, Easygoing, Empathetic, Poised, Trusting</em>, and{" "}
              <em>Well-Rounded</em> don&apos;t appear in my self-view at all. These aren&apos;t adjectives a
              Driver typically claims. They belong to a more relational, emotionally aware profile.
              My peers saw through the execution orientation to something warmer and more grounded
              underneath. That&apos;s not incidental: it&apos;s an asset I had systematically undervalued.
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
                  <p className="text-4xl font-black text-gold-500">6.36</p>
                  <p className="text-xs text-slate-500 mt-1">/ 10</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-center">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-2">Confidence</p>
                  <p className="text-4xl font-black text-navy-800">3.64</p>
                  <p className="text-xs text-slate-500 mt-1">/ 10</p>
                </div>
              </div>
              <div className="bg-gold-400/10 border border-gold-400/25 rounded-xl p-5 mb-5">
                <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-2">Charismatic Zone: Confirmed</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Both scores above the midpoint places me in the Charismatic Zone: perceived as
                  simultaneously trustworthy and capable. This is the target zone for effective
                  leaders and communicators.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-2">What the Asymmetry Means</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Warmth outpaces Confidence by a significant margin (6.36 vs. 3.64). This means
                  I&apos;m already trusted. The social foundation is there. The gap is that
                  executive presence cues (vocal authority, deliberate pacing, commanding
                  physical stillness) aren&apos;t yet matching my relational strength. These are
                  learnable, not fixed, and this is my clearest near-term development target.
                </p>
              </div>
            </div>
            <div
              className="bg-slate-50 rounded-2xl border border-slate-100 p-6"
              role="img"
              aria-label="Scatter plot of Warmth vs. Confidence showing David positioned at Warmth 6.36, Confidence 3.64, in the Charismatic Zone (high warmth, moderate confidence)"
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
              The gap has real consequences: in teams, in leadership, and under pressure
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              A gap between internal style and external perception has concrete consequences for
              teamwork, leadership, and communication. Understanding them allows me to navigate
              each more deliberately.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                context: "In Teams",
                implication:
                  "I enter collaborative settings with more social authority than I realize. My energy sets a pace that others follow. The risk: moving faster than the room without noticing, particularly with less assertive teammates who may defer to my momentum rather than voice disagreement.",
                adjustment:
                  "Build explicit pause points. Ask 'What am I missing?' before closing a discussion.",
              },
              {
                context: "In Leadership",
                implication:
                  "My Expressive presence makes me naturally persuasive and energizing to be around. But Expressives who don't develop their Driver discipline can be perceived as exciting but unpredictable. The combination of both styles is genuinely rare and worth developing deliberately.",
                adjustment:
                  "Lead with warmth and narrative; anchor with structure and follow-through.",
              },
              {
                context: "In Communication",
                implication:
                  "My warmth (6.36) means people are already listening. The gap is that my confidence cues don&apos;t yet match, which means high-stakes situations (pitches, interviews, presentations) may not fully leverage the trust I&apos;ve already built through presence and relationships.",
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
                  "I spent years treating my social energy as a secondary trait, something that accompanied my execution rather than contributed to it. The data says otherwise. My Expressive profile isn&apos;t in conflict with analytical rigor; it amplifies it. I&apos;m actively reclaiming and developing this range as a professional asset.",
                action: "Stop downplaying warmth and engagement. Lead with it deliberately.",
              },
              {
                num: "02",
                title: "Build Executive Presence",
                evidence: "Charisma confidence 3.64 (below warmth by 2.72 points)",
                insight:
                  "Trust is already there. The gap is authority projection: the vocal and physical cues that signal &ldquo;this person is in command.&rdquo; Research on charismatic leadership (Antonakis et al., 2011) identifies specific signals: metaphorical language, structured argumentation, controlled pacing, deliberate pause. These are trainable.",
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
            The gap isn&apos;t a liability. It&apos;s a more complete picture of who I already am.
          </h2>
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>
              Before BCOM 314, I understood my professional identity through a narrow lens:
              what I could execute, how precisely I could analyze, how consistently I could deliver.
              That framing served me, but it was incomplete.
            </p>
            <p>
              The data added a dimension I had systematically underweighted: my relational presence.
              Not warmth as a soft trait, but warmth as a strategic asset. The PRS didn&apos;t reveal a
              different person. It revealed a fuller picture of the person I already am. My peers
              weren&apos;t being generous; they were being accurate.
            </p>
            <p>
              The professional I&apos;m building going forward integrates both profiles. The Driver&apos;s
              precision and execution discipline. The Expressive&apos;s social range and relational
              credibility. The Charismatic Zone as a platform, already established with real room
              to grow. The motivator profile as a map, showing exactly where I perform best and
              where I need to manage my own instincts.
            </p>
            <p className="text-white font-medium">
              The gap between who I thought I was and who others see isn&apos;t a problem to solve.
              It&apos;s a competitive advantage, once you know it&apos;s there.
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

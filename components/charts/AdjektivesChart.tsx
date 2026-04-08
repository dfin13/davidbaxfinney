"use client";

const selfAdjectives = [
  "Self-Confident",
  "Outgoing",
  "Caring",
  "Independent",
  "Well-Informed",
  "Hard-Working",
  "Problem-Solver",
];

// Adjectives that appear in PRS but not self-selected
const othersOnly = [
  "Calm",
  "Adventurous",
  "Competitive",
  "Entertaining",
  "Even-Tempered",
  "Growth-Oriented",
  "Respects Authority",
  "Risk-Taker",
  "Curious",
  "Driven",
  "Easygoing",
  "Empathetic",
  "Experimental",
  "Social",
  "Trusting",
  "Good with Numbers",
  "Idea-Generator",
  "Involved",
  "Leaderlike",
  "Poised",
  "Spontaneous",
  "Thrill-Seeker",
  "Well-Rounded",
];

// Overlap (appear in both PRS and self-selected)
const sharedAdjectives = ["Outgoing", "Hard-Working", "Problem-Solver", "Well-Informed", "Caring"];

export default function AdjektivesChart() {
  return (
    <div className="space-y-6">
      {/* Shared */}
      <div>
        <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-3">
          Shared — How I See Myself & How Others See Me
        </p>
        <div className="flex flex-wrap gap-2">
          {sharedAdjectives.map((adj) => (
            <span
              key={adj}
              className="text-xs px-3 py-1.5 rounded-full font-semibold bg-gold-400/15 text-gold-600 border border-gold-400/30"
            >
              {adj}
            </span>
          ))}
        </div>
      </div>

      {/* Self only */}
      <div>
        <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-3">
          Self-Selected Only — My Internal View
        </p>
        <div className="flex flex-wrap gap-2">
          {selfAdjectives
            .filter((adj) => !sharedAdjectives.includes(adj))
            .map((adj) => (
              <span
                key={adj}
                className="text-xs px-3 py-1.5 rounded-full font-semibold bg-blue-50 text-blue-700 border border-blue-200"
              >
                {adj}
              </span>
            ))}
        </div>
      </div>

      {/* Others only */}
      <div>
        <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-3">
          Peer-Attributed Only — How Others See Me Distinctly
        </p>
        <div className="flex flex-wrap gap-2">
          {othersOnly.map((adj) => (
            <span
              key={adj}
              className="text-xs px-3 py-1.5 rounded-full font-medium bg-slate-50 text-slate-600 border border-slate-200"
            >
              {adj}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import PrintButton from "./PrintButton";

const experience = [
  {
    company: "New Wave Cosmetics LLC",
    role: "Co-Founder / Finance & Operations Lead",
    location: "Sahuarita, AZ",
    dates: "Aug 2025 – Present",
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

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  /* Hide site chrome when printing */
  @media print {
    nav, footer, .print-bar { display: none !important; }
    body { background: #fff !important; }
    .resume-page { box-shadow: none !important; }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  }

  @page { size: letter; margin: 0; }

  .print-bar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
    background: #060B18; color: #fff; font-family: Inter, sans-serif;
    display: flex; align-items: center; justify-content: space-between;
    padding: 10px 24px; font-size: 13px; gap: 12px;
  }
  .print-bar span { opacity: 0.65; font-size: 12px; }
  .print-btn {
    background: #C8983A; color: #060B18; font-weight: 700; font-size: 12px;
    border: none; border-radius: 100px; padding: 7px 18px; cursor: pointer;
    font-family: inherit; white-space: nowrap;
  }
  .print-btn:hover { background: #D4A843; }

  .resume-page {
    font-family: Inter, system-ui, sans-serif;
    font-size: 9pt;
    color: #0F172A;
    background: #fff;
    width: 8.5in;
    min-height: 11in;
    margin: 56px auto 32px;
    padding: 0.55in 0.65in;
    box-shadow: 0 4px 32px rgba(0,0,0,0.12);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  /* Header */
  .r-header { border-bottom: 2px solid #C8983A; padding-bottom: 9pt; margin-bottom: 11pt; display: flex; justify-content: space-between; align-items: flex-end; }
  .r-name { font-size: 20pt; font-weight: 900; color: #060B18; letter-spacing: -0.03em; line-height: 1; }
  .r-tagline { font-size: 8.5pt; color: #475569; font-weight: 500; margin-top: 2pt; }
  .r-meta { text-align: right; font-size: 8pt; color: #64748B; line-height: 1.6; }
  .r-contacts { display: flex; flex-wrap: wrap; gap: 8pt; margin-top: 6pt; font-size: 8pt; color: #475569; }
  .r-contacts a { color: #475569; text-decoration: none; }

  /* Section */
  .r-section { margin-bottom: 10pt; }
  .r-section-title {
    font-size: 6.5pt; font-weight: 800; letter-spacing: 0.14em;
    text-transform: uppercase; color: #C8983A;
    border-bottom: 1px solid #E2E8F0; padding-bottom: 2.5pt; margin-bottom: 7pt;
  }

  /* Education */
  .r-edu-row { display: flex; justify-content: space-between; align-items: flex-start; }
  .r-edu-school { font-weight: 700; font-size: 10pt; color: #060B18; }
  .r-edu-degree { font-size: 8.5pt; color: #334155; margin-top: 1.5pt; }
  .r-badges { display: flex; gap: 5pt; margin-top: 4pt; }
  .r-badge { font-size: 7pt; font-weight: 600; background: #FEF3C7; color: #92400E; border: 1px solid #FDE68A; border-radius: 100px; padding: 1.5pt 6pt; }
  .r-badge-gray { background: #F1F5F9; color: #475569; border-color: #CBD5E1; }

  /* Experience */
  .r-exp { margin-bottom: 8pt; padding-left: 8pt; border-left: 2px solid #E2E8F0; }
  .r-exp-hd { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3pt; }
  .r-company { font-weight: 700; font-size: 9.5pt; color: #060B18; }
  .r-role { font-size: 8pt; color: #475569; font-weight: 500; margin-top: 1pt; }
  .r-right { text-align: right; font-size: 8pt; color: #64748B; line-height: 1.5; white-space: nowrap; padding-left: 8pt; }
  .r-bullets { list-style: none; margin: 0; padding: 0; }
  .r-bullets li { font-size: 8.5pt; color: #334155; line-height: 1.4; padding-left: 9pt; position: relative; margin-bottom: 1.5pt; }
  .r-bullets li::before { content: "›"; color: #C8983A; position: absolute; left: 0; font-weight: 700; }

  /* Skills */
  .r-skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8pt; }
  .r-skill-label { font-size: 7pt; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 3pt; }
  .r-skill-tags { display: flex; flex-wrap: wrap; gap: 3pt; }
  .r-skill-tag { font-size: 7.5pt; font-weight: 500; color: #334155; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 4pt; padding: 1.5pt 6pt; }
`;

export default function ResumePrint() {
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = CSS;
    document.head.appendChild(el);
    document.title = "David Finney — Resume";
    return () => { document.head.removeChild(el); };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => window.print(), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="print-bar">
        <div>David Finney — Resume</div>
        <span>File → Print → Save as PDF · set margins to None</span>
        <PrintButton />
      </div>

      <div className="resume-page">
        {/* Header */}
        <div className="r-header">
          <div>
            <div className="r-name">David Finney</div>
            <div className="r-tagline">Finance Student · Co-Founder · Campus Leader</div>
            <div className="r-contacts">
              <a href="mailto:davidbaxfinney@gmail.com">davidbaxfinney@gmail.com</a>
              <span>·</span>
              <a href="tel:+14156549794">(415) 654-9794</a>
              <span>·</span>
              <span>Tucson, AZ · San Rafael, CA</span>
              <span>·</span>
              <a href="https://www.linkedin.com/in/davidbfinney">linkedin.com/in/davidbfinney</a>
              <span>·</span>
              <span>U.S. &amp; EU Citizen (Slovakia)</span>
            </div>
          </div>
          <div className="r-meta">
            <div>Expected May 2028</div>
            <div>GPA: 3.90 · Dean&apos;s List × 3</div>
          </div>
        </div>

        {/* Education */}
        <div className="r-section">
          <div className="r-section-title">Education</div>
          <div className="r-edu-row">
            <div>
              <div className="r-edu-school">University of Arizona, Eller College of Management</div>
              <div className="r-edu-degree">Bachelor of Science in Business Administration — Finance</div>
              <div className="r-badges">
                <span className="r-badge">GPA: 3.90</span>
                <span className="r-badge r-badge-gray">Dean&apos;s List × 3 Semesters</span>
              </div>
            </div>
            <div className="r-right">
              <div>Tucson, AZ</div>
              <div>Expected May 2028</div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="r-section">
          <div className="r-section-title">Professional Experience</div>
          {experience.map((exp) => (
            <div key={exp.company} className="r-exp">
              <div className="r-exp-hd">
                <div>
                  <div className="r-company">{exp.company}</div>
                  <div className="r-role">{exp.role}</div>
                </div>
                <div className="r-right">
                  <div>{exp.dates}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              <ul className="r-bullets">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div className="r-section">
          <div className="r-section-title">Leadership &amp; Involvement</div>
          {leadership.map((item) => (
            <div key={item.org} className="r-exp">
              <div className="r-exp-hd">
                <div>
                  <div className="r-company">{item.org}</div>
                  <div className="r-role">{item.role}</div>
                </div>
                <div className="r-right">
                  <div>{item.dates}</div>
                  <div>{item.location}</div>
                </div>
              </div>
              <ul className="r-bullets">
                {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="r-section">
          <div className="r-section-title">Skills &amp; Additional</div>
          <div className="r-skills-grid">
            <div>
              <div className="r-skill-label">Technical Skills</div>
              <div className="r-skill-tags">
                {["Excel", "PowerPoint", "Word", "Tableau", "Financial Modeling"].map((s) => (
                  <span key={s} className="r-skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="r-skill-label">Languages &amp; Citizenship</div>
              <div className="r-skill-tags">
                {["English (Native)", "Spanish (B2)", "U.S. Citizen", "EU Citizen (Slovakia)"].map((s) => (
                  <span key={s} className="r-skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <div className="r-skill-label">Interests</div>
              <div className="r-skill-tags">
                {["Water Polo", "App Development", "Surfing", "Travel", "Investment Research", "Blockchain Dev"].map((s) => (
                  <span key={s} className="r-skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

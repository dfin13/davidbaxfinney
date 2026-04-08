"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const GOLD = "#C8983A";
const NAVY = "#060B18";
const SLATE = "#334155";
const MUTED = "#64748B";
const LIGHT = "#475569";

const s = StyleSheet.create({
  page: { fontFamily: "Helvetica", fontSize: 9, color: SLATE, backgroundColor: "#fff", paddingTop: 36, paddingBottom: 36, paddingHorizontal: 44 },

  // Header
  header: { borderBottomWidth: 1.5, borderBottomColor: GOLD, paddingBottom: 8, marginBottom: 10 },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  name: { fontFamily: "Helvetica-Bold", fontSize: 22, color: NAVY },
  tagline: { fontSize: 8, color: LIGHT, marginTop: 2 },
  headerRight: { alignItems: "flex-end" },
  headerRightText: { fontSize: 7.5, color: MUTED, lineHeight: 1.5 },
  contacts: { flexDirection: "row", flexWrap: "wrap", gap: 5, marginTop: 5 },
  contactText: { fontSize: 7.5, color: LIGHT },
  contactDot: { fontSize: 7.5, color: MUTED },

  // Section
  section: { marginBottom: 9 },
  sectionTitle: { fontFamily: "Helvetica-Bold", fontSize: 6.5, color: GOLD, letterSpacing: 1.5, textTransform: "uppercase", borderBottomWidth: 0.75, borderBottomColor: "#E2E8F0", paddingBottom: 2.5, marginBottom: 6 },

  // Education
  eduRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  eduSchool: { fontFamily: "Helvetica-Bold", fontSize: 10, color: NAVY },
  eduDegree: { fontSize: 8.5, color: SLATE, marginTop: 1.5 },
  badgeRow: { flexDirection: "row", gap: 4, marginTop: 4 },
  badge: { fontFamily: "Helvetica-Bold", fontSize: 7, color: "#92400E", backgroundColor: "#FEF3C7", borderWidth: 0.75, borderColor: "#FDE68A", borderRadius: 50, paddingVertical: 1.5, paddingHorizontal: 6 },
  badgeGray: { color: LIGHT, backgroundColor: "#F1F5F9", borderColor: "#CBD5E1" },

  // Experience
  expBlock: { marginBottom: 7, paddingLeft: 8, borderLeftWidth: 1.5, borderLeftColor: "#E2E8F0" },
  expHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 2.5 },
  expCompany: { fontFamily: "Helvetica-Bold", fontSize: 9.5, color: NAVY },
  expRole: { fontSize: 8, color: LIGHT, marginTop: 1 },
  expRight: { alignItems: "flex-end" },
  expDate: { fontSize: 7.5, color: MUTED },
  expLoc: { fontSize: 7.5, color: MUTED },

  // Bullets
  bullet: { flexDirection: "row", marginBottom: 1.5 },
  bulletMark: { fontFamily: "Helvetica-Bold", fontSize: 8.5, color: GOLD, width: 9 },
  bulletText: { fontSize: 8.5, color: SLATE, flex: 1, lineHeight: 1.4 },

  // Skills
  skillsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  skillGroup: { width: "47%" },
  skillGroupFull: { width: "100%", marginTop: 4 },
  skillLabel: { fontFamily: "Helvetica-Bold", fontSize: 7, color: MUTED, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 3 },
  skillTags: { flexDirection: "row", flexWrap: "wrap", gap: 3 },
  skillTag: { fontSize: 7.5, color: SLATE, backgroundColor: "#F8FAFC", borderWidth: 0.75, borderColor: "#E2E8F0", borderRadius: 4, paddingVertical: 1.5, paddingHorizontal: 5 },

  metaRight: { alignItems: "flex-end" },
  metaText: { fontSize: 8, color: MUTED },
});

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
    bullets: ["Supervised 100+ patrons, taught swim lessons, and managed pool safety and operations"],
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
    bullets: ["Graded coursework, maintained records for 40+ students, supported faculty and student learning"],
  },
];

export function ResumePDF() {
  return (
    <Document title="David Finney — Resume" author="David Finney">
      <Page size="LETTER" style={s.page}>

        {/* Header */}
        <View style={s.header}>
          <View style={s.headerRow}>
            <View>
              <Text style={s.name}>David Finney</Text>
              <Text style={s.tagline}>Finance Student · Co-Founder · Campus Leader</Text>
            </View>
            <View style={s.headerRight}>
              <Text style={s.headerRightText}>Expected May 2028</Text>
              <Text style={s.headerRightText}>GPA: 3.90 · Dean's List × 3</Text>
            </View>
          </View>
          <View style={s.contacts}>
            <Text style={s.contactText}>davidbaxfinney@gmail.com</Text>
            <Text style={s.contactDot}>·</Text>
            <Text style={s.contactText}>(415) 654-9794</Text>
            <Text style={s.contactDot}>·</Text>
            <Text style={s.contactText}>Tucson, AZ · San Rafael, CA</Text>
            <Text style={s.contactDot}>·</Text>
            <Text style={s.contactText}>linkedin.com/in/davidbfinney</Text>
            <Text style={s.contactDot}>·</Text>
            <Text style={s.contactText}>U.S. & EU Citizen (Slovakia)</Text>
          </View>
        </View>

        {/* Education */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Education</Text>
          <View style={s.eduRow}>
            <View>
              <Text style={s.eduSchool}>University of Arizona, Eller College of Management</Text>
              <Text style={s.eduDegree}>Bachelor of Science in Business Administration — Finance</Text>
              <View style={s.badgeRow}>
                <Text style={s.badge}>GPA: 3.90</Text>
                <Text style={[s.badge, s.badgeGray]}>Dean's List × 3 Semesters</Text>
              </View>
            </View>
            <View style={s.metaRight}>
              <Text style={s.metaText}>Tucson, AZ</Text>
              <Text style={s.metaText}>Expected May 2028</Text>
            </View>
          </View>
        </View>

        {/* Experience */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Professional Experience</Text>
          {experience.map((exp) => (
            <View key={exp.company} style={s.expBlock}>
              <View style={s.expHeader}>
                <View>
                  <Text style={s.expCompany}>{exp.company}</Text>
                  <Text style={s.expRole}>{exp.role}</Text>
                </View>
                <View style={s.expRight}>
                  <Text style={s.expDate}>{exp.dates}</Text>
                  <Text style={s.expLoc}>{exp.location}</Text>
                </View>
              </View>
              {exp.bullets.map((b, i) => (
                <View key={i} style={s.bullet}>
                  <Text style={s.bulletMark}>›</Text>
                  <Text style={s.bulletText}>{b}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Leadership */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Leadership & Involvement</Text>
          {leadership.map((item) => (
            <View key={item.org} style={s.expBlock}>
              <View style={s.expHeader}>
                <View>
                  <Text style={s.expCompany}>{item.org}</Text>
                  <Text style={s.expRole}>{item.role}</Text>
                </View>
                <View style={s.expRight}>
                  <Text style={s.expDate}>{item.dates}</Text>
                  <Text style={s.expLoc}>{item.location}</Text>
                </View>
              </View>
              {item.bullets.map((b, i) => (
                <View key={i} style={s.bullet}>
                  <Text style={s.bulletMark}>›</Text>
                  <Text style={s.bulletText}>{b}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Skills & Additional</Text>
          <View style={s.skillsGrid}>
            <View style={s.skillGroup}>
              <Text style={s.skillLabel}>Technical Skills</Text>
              <View style={s.skillTags}>
                {["Excel", "PowerPoint", "Word", "Tableau", "Financial Modeling"].map((sk) => (
                  <Text key={sk} style={s.skillTag}>{sk}</Text>
                ))}
              </View>
            </View>
            <View style={s.skillGroup}>
              <Text style={s.skillLabel}>Languages & Citizenship</Text>
              <View style={s.skillTags}>
                {["English (Native)", "Spanish (B2)", "U.S. Citizen", "EU Citizen (Slovakia)"].map((sk) => (
                  <Text key={sk} style={s.skillTag}>{sk}</Text>
                ))}
              </View>
            </View>
            <View style={s.skillGroupFull}>
              <Text style={s.skillLabel}>Interests</Text>
              <View style={s.skillTags}>
                {["Water Polo", "App Development", "Surfing", "Travel", "Investment Research", "Blockchain Dev"].map((sk) => (
                  <Text key={sk} style={s.skillTag}>{sk}</Text>
                ))}
              </View>
            </View>
          </View>
        </View>

      </Page>
    </Document>
  );
}

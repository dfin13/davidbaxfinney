import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "David Finney | Finance, Entrepreneurship & Leadership",
    template: "%s | David Finney",
  },
  description:
    "David Finney — Finance student at the University of Arizona Eller College of Management (GPA 3.90), co-founder of New Wave Cosmetics, and solo developer of Riskr. Targeting finance and investment internships.",
  keywords: [
    "David Finney", "finance student", "entrepreneurship", "University of Arizona",
    "Eller College of Management", "finance internship", "New Wave Cosmetics",
    "Riskr", "investment banking", "asset management", "Tucson AZ",
  ],
  authors: [{ name: "David Finney" }],
  creator: "David Finney",
  openGraph: {
    title: "David Finney | Finance, Entrepreneurship & Leadership",
    description:
      "Finance student (GPA 3.90), co-founder with ~1,000% unit margins, and campus leader. See what I've built.",
    type: "website",
    locale: "en_US",
    siteName: "David Finney",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Finney | Finance & Entrepreneurship",
    description: "Finance student, co-founder, and builder at the University of Arizona.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Finney",
  jobTitle: "Finance Student & Co-Founder",
  affiliation: {
    "@type": "EducationalOrganization",
    name: "University of Arizona Eller College of Management",
  },
  email: "davidbaxfinney@gmail.com",
  telephone: "+14156549794",
  address: { "@type": "PostalAddress", addressLocality: "Tucson", addressRegion: "AZ" },
  sameAs: ["https://www.linkedin.com/in/davidbfinney"],
  url: "https://theriskr.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-navy-950 focus:font-bold focus:rounded-full focus:text-sm"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

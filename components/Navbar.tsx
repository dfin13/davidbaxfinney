"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/persona", label: "Persona" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBase = isHome
    ? scrolled
      ? "bg-navy-900/95 backdrop-blur-md border-b border-white/5"
      : "bg-transparent"
    : "bg-white border-b border-slate-200";

  const logoColor = isHome ? "text-white" : "text-navy-900";
  const linkColor = isHome ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-navy-900";
  const activeColor = isHome ? "text-gold-400" : "text-gold-500";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBase}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className={`transition-colors ${logoColor}`}
            >
              <span className="font-black text-base tracking-[0.18em] uppercase">
                D<span className="text-gold-400">B</span>F
              </span>
              <span className="hidden sm:inline text-xs font-medium tracking-widest ml-3 opacity-50 uppercase" style={{ letterSpacing: "0.15em" }}>
                David Bax Finney
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    pathname === link.href ? activeColor : linkColor
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/davidbfinney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-4 py-2 rounded-full border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                isHome ? "text-white hover:text-gold-400" : "text-slate-700 hover:text-navy-900"
              }`}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-navy-950/90 backdrop-blur-md cursor-pointer"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-16 left-0 right-0 bg-navy-900 border-b border-white/10 px-6 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-2 transition-colors ${
                    pathname === link.href
                      ? "text-gold-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.linkedin.com/in/davidbfinney"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center text-sm font-medium px-4 py-3 rounded-full border border-gold-400 text-gold-400"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

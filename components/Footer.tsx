import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/persona", label: "Persona" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <p className="font-black text-xl tracking-[0.2em] text-white">
                D<span className="text-gold-400">B</span>F
              </p>
              <p className="text-xs text-slate-500 tracking-[0.14em] uppercase mt-1">David Bax Finney</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Finance student, co-founder, and builder. Turning ambition into
              outcomes at the University of Arizona.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/davidbfinney"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:davidbaxfinney@gmail.com"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
              <a
                href="tel:+14156549794"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Phone"
              >
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="mailto:davidbaxfinney@gmail.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  davidbaxfinney@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14156549794"
                  className="hover:text-gold-400 transition-colors"
                >
                  (415) 654-9794
                </a>
              </li>
              <li className="text-slate-500">Tucson, AZ · San Rafael, CA</li>
              <li className="text-slate-500">U.S. & EU Citizen (Slovakia)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} David Finney. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            University of Arizona · Eller College of Management · Finance &apos;28
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send, CheckCircle } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "davidbaxfinney@gmail.com",
    href: "mailto:davidbaxfinney@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(415) 654-9794",
    href: "tel:+14156549794",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tucson, AZ · San Rafael, CA",
    href: undefined,
  },
];

const contextItems = [
  "Internship or full-time recruiting inquiries",
  "Finance, investing, or entrepreneurship conversations",
  "Partnership or collaboration opportunities",
  "Networking — I genuinely enjoy meeting people",
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => { const next = { ...prev }; delete next[e.target.name]; return next; });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required.";
    if (!formState.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = "Enter a valid email address.";
    if (!formState.subject) newErrors.subject = "Please select a subject.";
    if (!formState.message.trim()) newErrors.message = "Message is required.";
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-hero-gradient pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <span className="text-xs font-medium text-slate-300 tracking-widest uppercase">Contact</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5 leading-tight"
            >
              Let&apos;s talk.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg text-slate-300 leading-relaxed"
            >
              Whether you&apos;re a recruiter, a fellow builder, or just someone who wants to connect —
              I read every message and respond to every serious inquiry.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <FadeIn>
                <div className="section-divider mb-6" />
                <h2 className="text-xl font-black text-navy-900 mb-8">Direct Contact</h2>

                <div className="space-y-4 mb-8">
                  {contactMethods.map(({ icon: Icon, label, value, href }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 group">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-gold-400/10 group-hover:border-gold-400/30 transition-colors">
                            <Icon size={16} className="text-gold-500" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-0.5">{label}</p>
                            <p className="font-semibold text-navy-900 group-hover:text-gold-500 transition-colors text-sm">{value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                            <Icon size={16} className="text-gold-500" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-0.5">{label}</p>
                            <p className="font-semibold text-navy-900 text-sm">{value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/davidbfinney"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 bg-[#0A66C2] hover:bg-[#0958a8] text-white rounded-xl px-5 py-4 transition-colors mb-5 group"
                >
                  <Linkedin size={18} />
                  <div>
                    <p className="font-bold text-sm">Connect on LinkedIn</p>
                    <p className="text-xs text-blue-200">linkedin.com/in/davidbfinney</p>
                  </div>
                  <ExternalLink size={14} className="ml-auto opacity-60 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                {/* Context */}
                <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
                  <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-3">Best Contexts to Reach Out</p>
                  <ul className="space-y-2">
                    {contextItems.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-gold-400 shrink-0 mt-0.5">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.15}>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5">
                      <CheckCircle size={28} className="text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-black text-navy-900 mb-2">Message sent.</h3>
                    <p className="text-slate-600 max-w-sm">
                      Thanks for reaching out. I&apos;ll get back to you as soon as possible — usually within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div aria-live="polite" aria-atomic="true" className="sr-only">
                      {Object.keys(errors).length > 0 && `Please fix ${Object.keys(errors).length} error${Object.keys(errors).length > 1 ? "s" : ""} in the form.`}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
                          Your Name <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "error-name" : undefined}
                          className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-navy-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all ${errors.name ? "border-red-400" : "border-slate-200"}`}
                        />
                        {errors.name && <p id="error-name" className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
                          Email Address <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="jane@firm.com"
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "error-email" : undefined}
                          className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-navy-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all ${errors.email ? "border-red-400" : "border-slate-200"}`}
                        />
                        {errors.email && <p id="error-email" className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
                        Subject <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "error-subject" : undefined}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all appearance-none ${errors.subject ? "border-red-400" : "border-slate-200"}`}
                      >
                        <option value="">Select a reason...</option>
                        <option value="recruiting">Recruiting / Internship Inquiry</option>
                        <option value="networking">Professional Networking</option>
                        <option value="entrepreneurship">Entrepreneurship / Collaboration</option>
                        <option value="finance">Finance / Investing Discussion</option>
                        <option value="other">Something Else</option>
                      </select>
                      {errors.subject && <p id="error-subject" className="text-red-500 text-xs mt-1.5">{errors.subject}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
                        Message <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell me a bit about yourself and what you'd like to discuss..."
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "error-message" : undefined}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-navy-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all resize-none ${errors.message ? "border-red-400" : "border-slate-200"}`}
                      />
                      {errors.message && <p id="error-message" className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-sm px-7 py-3.5 rounded-full transition-colors shadow-sm"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>Send Message <Send size={15} /></>
                      )}
                    </motion.button>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-navy-950 py-14">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest font-semibold">
              Prefer to keep it simple?
            </p>
            <p className="text-white font-bold text-lg mb-6">
              Shoot me an email directly:{" "}
              <a href="mailto:davidbaxfinney@gmail.com" className="text-gold-400 hover:text-gold-300 transition-colors">
                davidbaxfinney@gmail.com
              </a>
            </p>
            <p className="text-slate-500 text-sm">
              University of Arizona · Eller College of Management · Finance &apos;28
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

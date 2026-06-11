"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#dc2626] bg-[#dc2626]/10 px-3 py-1.5 rounded-md mb-4 border border-[#dc2626]/20">
            Contact
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#fef2f2] tracking-tight mb-3">
            Get in Touch with{' '}
            <span className="text-[#dc2626]">PeakBureau</span>
          </h1>
          <p className="text-lg text-[#e5c7c7] max-w-xl mx-auto">
            Have a question about a tool comparison? Want to suggest a new tool for review?
            Or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          <div className="lg:col-span-2">
            <div className="card-dark">
              <h2 className="text-xl font-bold text-[#fef2f2] mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-[#dc2626]/5 border border-[#dc2626]/20 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#dc2626]/10 flex items-center justify-center mx-auto mb-3">
                    <Send className="w-6 h-6 text-[#dc2626]" />
                  </div>
                  <p className="text-[#fef2f2] font-semibold text-lg mb-1">Message Sent!</p>
                  <p className="text-[#a88282] text-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#e5c7c7] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#dc2626]/15 rounded-lg text-[#fef2f2] placeholder:text-[#a88282] focus:border-[#dc2626] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#e5c7c7] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#dc2626]/15 rounded-lg text-[#fef2f2] placeholder:text-[#a88282] focus:border-[#dc2626] focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#e5c7c7] mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#dc2626]/15 rounded-lg text-[#fef2f2] focus:border-[#dc2626] focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="tool-suggestion">Suggest a Tool</option>
                      <option value="feedback">Site Feedback</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#e5c7c7] mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#dc2626]/15 rounded-lg text-[#fef2f2] placeholder:text-[#a88282] focus:border-[#dc2626] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-red"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="card-dark">
              <h3 className="text-sm font-semibold text-[#fef2f2] mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#dc2626]" />
                Email Us
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-[#a88282]">
                  <strong className="text-[#e5c7c7]">General:</strong>
                  <br />
                  <a href="mailto:hello@peakbureau.com" className="text-[#dc2626] hover:underline">
                    hello@peakbureau.com
                  </a>
                </p>
                <p className="text-sm text-[#a88282]">
                  <strong className="text-[#e5c7c7]">Tool Suggestions:</strong>
                  <br />
                  <a href="mailto:tools@peakbureau.com" className="text-[#dc2626] hover:underline">
                    tools@peakbureau.com
                  </a>
                </p>
                <p className="text-sm text-[#a88282]">
                  <strong className="text-[#e5c7c7]">Press:</strong>
                  <br />
                  <a href="mailto:press@peakbureau.com" className="text-[#dc2626] hover:underline">
                    press@peakbureau.com
                  </a>
                </p>
              </div>
            </div>

            <div className="card-dark">
              <h3 className="text-sm font-semibold text-[#fef2f2] mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#dc2626]" />
                Location
              </h3>
              <p className="text-sm text-[#a88282] leading-relaxed">
                PeakBureau HQ
                <br />
                Arts District, Los Angeles
                <br />
                CA 90013, United States
              </p>
            </div>

            <div className="card-dark">
              <h3 className="text-sm font-semibold text-[#fef2f2] mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#dc2626]" />
                Response Time
              </h3>
              <p className="text-sm text-[#a88282]">
                We typically respond within{' '}
                <strong className="text-[#fef2f2]">24 hours</strong> during
                business days (Pacific Time).
              </p>
            </div>

            <Link
              href="/about"
              className="card-dark block hover:border-[#dc2626]/30 transition-all group"
            >
              <h3 className="text-sm font-semibold text-[#fef2f2] mb-1 group-hover:text-[#dc2626] transition-colors">
                Meet Our Team
              </h3>
              <p className="text-xs text-[#a88282]">
                Learn more about the PeakBureau team.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

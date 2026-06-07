"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Mail, MapPin, Clock, Send } from "lucide-react";

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
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#E63946] bg-[#401616] px-3 py-1.5 rounded-md mb-4">
            Contact
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#FEF2F0] tracking-tight mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-[#BE8A83] max-w-xl mx-auto">
            Have a question, suggestion, or want to list your tool? We&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-[#2D0F0F] border border-[#5F1E1E] rounded-xl p-8">
              <h2 className="text-xl font-bold text-[#FEF2F0] mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-[#401616] border border-[#FF6B6B]/30 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center mx-auto mb-3">
                    <Send className="w-6 h-6 text-[#FF6B6B]" />
                  </div>
                  <p className="text-[#FEF2F0] font-semibold text-lg mb-1">Message Sent!</p>
                  <p className="text-[#BE8A83] text-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#BE8A83] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1A0A0A] border border-[#5F1E1E] rounded-lg text-[#FEF2F0] placeholder:text-[#80504A] focus:border-[#E63946] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#BE8A83] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1A0A0A] border border-[#5F1E1E] rounded-lg text-[#FEF2F0] placeholder:text-[#80504A] focus:border-[#E63946] focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#BE8A83] mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#1A0A0A] border border-[#5F1E1E] rounded-lg text-[#FEF2F0] focus:border-[#E63946] focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="tool-listing">List My Tool</option>
                      <option value="bug">Report a Bug</option>
                      <option value="suggestion">Feature Suggestion</option>
                      <option value="advertising">Advertising / Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#BE8A83] mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1A0A0A] border border-[#5F1E1E] rounded-lg text-[#FEF2F0] placeholder:text-[#80504A] focus:border-[#E63946] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#E63946] hover:bg-[#C53030] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-[#2D0F0F] border border-[#5F1E1E] rounded-xl p-6">
              <h3 className="text-sm font-semibold text-[#FEF2F0] mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E63946]" />
                Email Us
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-[#BE8A83]">
                  <strong className="text-[#FEF2F0]">Support:</strong>
                  <br />
                  <a href="mailto:support@emailcompare.net" className="text-[#E63946] hover:underline">
                    support@emailcompare.net
                  </a>
                </p>
                <p className="text-sm text-[#BE8A83]">
                  <strong className="text-[#FEF2F0]">General:</strong>
                  <br />
                  <a href="mailto:info@emailcompare.net" className="text-[#E63946] hover:underline">
                    info@emailcompare.net
                  </a>
                </p>
                <p className="text-sm text-[#BE8A83]">
                  <strong className="text-[#FEF2F0]">Press:</strong>
                  <br />
                  <a href="mailto:info@emailcompare.net" className="text-[#E63946] hover:underline">
                    info@emailcompare.net
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-[#2D0F0F] border border-[#5F1E1E] rounded-xl p-6">
              <h3 className="text-sm font-semibold text-[#FEF2F0] mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E63946]" />
                Office
              </h3>
              <p className="text-sm text-[#BE8A83] leading-relaxed">
                1209 Orange Street, Suite 500
                <br />
                Wilmington, DE 19801
                <br />
                United States
              </p>
            </div>

            <div className="bg-[#2D0F0F] border border-[#5F1E1E] rounded-xl p-6">
              <h3 className="text-sm font-semibold text-[#FEF2F0] mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E63946]" />
                Response Time
              </h3>
              <p className="text-sm text-[#BE8A83]">
                We typically respond within <strong className="text-[#FEF2F0]">24 hours</strong> during
                business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

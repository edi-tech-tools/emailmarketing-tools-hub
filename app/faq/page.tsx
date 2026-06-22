"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is email marketing software and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email marketing software helps businesses create, send, and track email campaigns to engage subscribers and drive sales. Core features include drag-and-drop email editors, contact management and segmentation, automation workflows, A/B testing, analytics dashboards, and click/subscription management. Popular platforms include Mailchimp, ActiveCampaign, Constant Contact, Klaviyo, and Brevo (formerly Sendinblue). Most tools work on a subscriber-based pricing model and integrate with e-commerce platforms, CRMs, and landing page builders.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Mailchimp and ActiveCampaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mailchimp is better for beginners and small businesses who need an all-in-one marketing platform with a user-friendly drag-and-drop builder, pre-built templates, and a generous free tier. ActiveCampaign is built for advanced marketing automation — it offers powerful conditional logic, lead scoring, CRM integration, and predictive sending. If you need simple newsletters and basic automations, start with Mailchimp. If you want deep customer journeys and conditional email sequences, ActiveCampaign is the stronger choice.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the right email marketing platform for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start by defining your goals: e-commerce recovery emails, newsletter engagement, lead nurturing, or transactional notifications. Key factors include subscriber count limits, deliverability rates, automation depth, template flexibility, e-commerce/CRM integrations, and pricing. Small businesses often start with Mailchimp or Constant Contact for simplicity. E-commerce stores typically prefer Klaviyo or Omnisend for their Shopify integrations and abandoned cart flows. Enterprise teams may need HubSpot or Salesforce Marketing Cloud for advanced segmentation and multi-channel campaigns. Always test 2–3 platforms with free trials before committing.",
      },
    },
    {
      "@type": "Question",
      name: "How do I set up email automation workflows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email automation workflows (also called journeys or sequences) allow you to send targeted emails triggered by subscriber actions. Common workflows include: welcome series (triggered on signup), abandoned cart reminders (triggered when a user leaves items in cart), post-purchase follow-ups, re-engagement campaigns for inactive subscribers, and lead nurturing drips. To set one up, choose your trigger event, define conditions (e.g., 'if clicked, send X; if not, send Y'), create your email content, and set timing delays. Most platforms like ActiveCampaign, Klaviyo, and MailerLite provide visual workflow builders that make this easy.",
      },
    },
    {
      "@type": "Question",
      name: "How can I improve email deliverability?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email deliverability depends on sender reputation, content quality, and list hygiene. Best practices include: authenticate your domain with SPF, DKIM, and DMARC records; warm up new sending domains gradually; maintain a clean list by removing hard bounces and inactive subscribers; avoid spam trigger words in subject lines and body copy; use a reputable sending infrastructure (dedicated IP for high volume); monitor blacklists with tools like MXToolbox; and keep your email engagement rates high by sending relevant content to engaged segments. Tools like Mailgun, SendGrid, and Postmark are built specifically for high deliverability.",
      },
    },
    {
      "@type": "Question",
      name: "What are the GDPR requirements for email marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under GDPR, you must have explicit consent before sending marketing emails to EU residents. Key requirements include: using a confirmed opt-in (double opt-in is best practice), clearly stating what subscribers are signing up for, storing proof of consent (timestamp and IP), providing a visible and working unsubscribe link in every email, honoring opt-outs within 48 hours, and having a privacy policy that explains how you handle personal data. Most email marketing platforms offer GDPR-specific features like consent checkboxes, data processing agreements, and automated consent record keeping.",
      },
    },
    {
      "@type": "Question",
      name: "How do email marketing pricing models work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email marketing platforms typically price based on the number of subscribers or emails sent per month. Common models include: flat-rate tiers by subscriber count (e.g., Mailchimp's plans by contact volume), send-volume pricing (e.g., SendGrid charges per 1,000 emails), freemium with limits (free up to a certain subscriber count), and feature-based tiers (Basic/Plus/Pro with more automation and reporting at higher tiers). Most providers offer 15–25% annual discounts. Enterprise plans often include custom pricing with dedicated support and higher sending limits.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best free email marketing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Several platforms offer generous free tiers. Mailchimp's free plan includes up to 500 contacts and 1,000 emails per month. Brevo (Sendinblue) offers unlimited emails to up to 300 contacts per day. MailerLite's free plan supports up to 1,000 subscribers and 12,000 emails per month. Mailjet provides 6,000 emails per month for free. Free tiers are great for testing and small lists, but they often lack advanced automation, A/B testing, and premium support. As you grow, expect to upgrade to a paid plan for better segmentation and deliverability features.",
      },
    },
    {
      "@type": "Question",
      name: "How do I A/B test email campaigns effectively?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A/B testing (split testing) helps optimize open rates and click-through rates. Test one variable at a time: subject lines (most impactful), sender names, preview text, email content/layout, call-to-action buttons, send times, or images vs. plain text. Split your audience so each variant goes to a statistically significant sample (at least 1,000 subscribers per variant), let the test run long enough (24–48 hours minimum), and use the winning variant for the remaining audience. Most platforms like Mailchimp, ActiveCampaign, and Klaviyo have built-in A/B testing tools that automate this process.",
      },
    },
    {
      "@type": "Question",
      name: "What are the must-have features in an email marketing platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Essential features include: a drag-and-drop email builder with responsive templates, contact segmentation and tagging, visual automation workflow builder, A/B testing capabilities, detailed analytics (open rates, click rates, bounce rates, revenue tracking), click/subscription management (CAN-SPAM and GDPR compliant), integrations with your e-commerce platform and CRM, deliverability tools (SPF/DKIM setup guides), and mobile-responsive designs. For e-commerce specifically, look for abandoned cart automation, product recommendation blocks, and purchase-triggered flows. For transactional email, ensure you get dedicated IP options and API-based sending.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between ESP and email automation platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ESP (Email Service Provider) refers broadly to any platform used to send bulk emails — this includes everything from basic newsletter tools like Mailchimp to enterprise platforms like Salesforce Marketing Cloud. Email automation platforms are a subset of ESPs that specialize in triggered, behavior-based email sequences — think ActiveCampaign, Klaviyo, and Drip. Automation platforms excel at conditional logic, lead scoring, multi-step journeys, and predictive sending. Basic ESPs focus on broadcast campaigns and list management. Many modern platforms (like Brevo and MailerLite) now offer both capabilities in a single tool.",
      },
    },
    {
      "@type": "Question",
      name: "How do I migrate from one email marketing platform to another?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Migrating email platforms involves: 1) Export your subscriber list from the old platform (typically as CSV), including tags, custom fields, and engagement data if available. 2) Clean the list by removing bounces and unsubscribes before importing. 3) Set up your new platform with proper authentication (SPF, DKIM, DMARC) and warm up your sending domain. 4) Rebuild your automation workflows and email templates in the new platform. 5) Test thoroughly by sending to a small segment first. 6) After confirming deliverability, notify subscribers and redirect your tracking domain and API integrations. Most platforms offer migration guides and support for moving from competitors.",
      },
    },
    {
      "@type": "Question",
      name: "How do email marketing companies handle data security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reputable email marketing platforms implement encryption at rest and in transit (TLS 1.2+), SOC 2 Type II audits, ISO 27001 certification, GDPR and CCPA compliance tools, regular penetration testing, multi-factor authentication (MFA), role-based access controls (RBAC), and data backup with disaster recovery procedures. Enterprise platforms like Salesforce Marketing Cloud and HubSpot also offer dedicated data processing agreements (DPAs) and business associate agreements (BAAs) for HIPAA compliance. Always verify a vendor's security page and data processing terms before committing your subscriber data.",
      },
    },
    {
      "@type": "Question",
      name: "What is email deliverability and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email deliverability is the ability to land in recipients' inboxes rather than spam folders. It matters because even a perfectly designed campaign is worthless if it never reaches your audience. Key factors affecting deliverability include: sender reputation (IP and domain), authentication (SPF, DKIM, DMARC), bounce rates, spam complaint rates, list engagement levels, and content quality. Industry benchmarks show average inbox placement rates of 85–95%. Tools like 250ok, Validity Everest, and InboxInspector help monitor and improve deliverability. Low deliverability is often caused by purchased lists, infrequent sending, or poor list hygiene.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use free email marketing tools for a growing business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free email marketing tools work well for side projects, very small lists (under 1,000 subscribers), and testing purposes. However, as you grow, free tiers become limiting: you lose advanced automation, A/B testing, dedicated support, detailed analytics, and premium deliverability features. Most free plans also include the provider's branding in your emails (e.g., 'Powered by Mailchimp'). For a serious business, a paid plan costing $20–$100/month is a worthwhile investment that gives you professional-looking emails, better deliverability, and automation that actually saves time.",
      },
    },
    {
      "@type": "Question",
      name: "How do email marketing reviews and ratings work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email marketing reviews are collected by third-party platforms like G2, Capterra, and TrustRadius. Users submit ratings (usually 1–5 stars) and written feedback based on their experience. These platforms verify reviewers, moderate for authenticity, and aggregate scores to produce overall ratings. Reviews typically cover ease of use, customer support, value for money, feature set, and deliverability. Always read recent reviews and look for patterns rather than outliers. At Email Compare, we aggregate verified reviews alongside our own data-driven feature analysis to give you the full picture.",
      },
    },
    {
      "@type": "Question",
      name: "What is the future of email marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email marketing is evolving rapidly with AI-powered features: predictive send-time optimization, AI-generated subject lines and content, natural language segmentation queries, and automated A/B testing. Other trends include interactive AMP emails (surveys, carousels, forms inside emails), hyper-personalization using real-time behavioral data, privacy-first tracking as third-party cookies phase out, and deeper e-commerce integrations with purchase prediction models. The email marketing software market continues to grow as email remains the highest-ROI marketing channel, averaging $36 for every $1 spent.",
      },
    },
  ],
};

const FAQ_ITEMS = [
  {
    question: "What is email marketing software and how does it work?",
    answer:
      "Email marketing software helps businesses create, send, and track email campaigns to engage subscribers and drive sales. Core features include drag-and-drop email editors, contact management and segmentation, automation workflows, A/B testing, analytics dashboards, and click/subscription management. Popular platforms include Mailchimp, ActiveCampaign, Constant Contact, Klaviyo, and Brevo (formerly Sendinblue). Most tools work on a subscriber-based pricing model and integrate with e-commerce platforms, CRMs, and landing page builders.",
  },
  {
    question: "What is the difference between Mailchimp and ActiveCampaign?",
    answer:
      "Mailchimp is better for beginners and small businesses who need an all-in-one marketing platform with a user-friendly drag-and-drop builder, pre-built templates, and a generous free tier. ActiveCampaign is built for advanced marketing automation — it offers powerful conditional logic, lead scoring, CRM integration, and predictive sending. If you need simple newsletters and basic automations, start with Mailchimp. If you want deep customer journeys and conditional email sequences, ActiveCampaign is the stronger choice.",
  },
  {
    question: "How do I choose the right email marketing platform for my business?",
    answer:
      "Start by defining your goals: e-commerce recovery emails, newsletter engagement, lead nurturing, or transactional notifications. Key factors include subscriber count limits, deliverability rates, automation depth, template flexibility, e-commerce/CRM integrations, and pricing. Small businesses often start with Mailchimp or Constant Contact for simplicity. E-commerce stores typically prefer Klaviyo or Omnisend for their Shopify integrations and abandoned cart flows. Enterprise teams may need HubSpot or Salesforce Marketing Cloud for advanced segmentation and multi-channel campaigns. Always test 2–3 platforms with free trials before committing.",
  },
  {
    question: "How do I set up email automation workflows?",
    answer:
      "Email automation workflows (also called journeys or sequences) allow you to send targeted emails triggered by subscriber actions. Common workflows include: welcome series (triggered on signup), abandoned cart reminders (triggered when a user leaves items in cart), post-purchase follow-ups, re-engagement campaigns for inactive subscribers, and lead nurturing drips. To set one up, choose your trigger event, define conditions (e.g., 'if clicked, send X; if not, send Y'), create your email content, and set timing delays. Most platforms like ActiveCampaign, Klaviyo, and MailerLite provide visual workflow builders that make this easy.",
  },
  {
    question: "How can I improve email deliverability?",
    answer:
      "Email deliverability depends on sender reputation, content quality, and list hygiene. Best practices include: authenticate your domain with SPF, DKIM, and DMARC records; warm up new sending domains gradually; maintain a clean list by removing hard bounces and inactive subscribers; avoid spam trigger words in subject lines and body copy; use a reputable sending infrastructure (dedicated IP for high volume); monitor blacklists with tools like MXToolbox; and keep your email engagement rates high by sending relevant content to engaged segments. Tools like Mailgun, SendGrid, and Postmark are built specifically for high deliverability.",
  },
  {
    question: "What are the GDPR requirements for email marketing?",
    answer:
      "Under GDPR, you must have explicit consent before sending marketing emails to EU residents. Key requirements include: using a confirmed opt-in (double opt-in is best practice), clearly stating what subscribers are signing up for, storing proof of consent (timestamp and IP), providing a visible and working unsubscribe link in every email, honoring opt-outs within 48 hours, and having a privacy policy that explains how you handle personal data. Most email marketing platforms offer GDPR-specific features like consent checkboxes, data processing agreements, and automated consent record keeping.",
  },
  {
    question: "How do email marketing pricing models work?",
    answer:
      "Email marketing platforms typically price based on the number of subscribers or emails sent per month. Common models include: flat-rate tiers by subscriber count (e.g., Mailchimp's plans by contact volume), send-volume pricing (e.g., SendGrid charges per 1,000 emails), freemium with limits (free up to a certain subscriber count), and feature-based tiers (Basic/Plus/Pro with more automation and reporting at higher tiers). Most providers offer 15–25% annual discounts. Enterprise plans often include custom pricing with dedicated support and higher sending limits.",
  },
  {
    question: "What are the best free email marketing tools?",
    answer:
      "Several platforms offer generous free tiers. Mailchimp's free plan includes up to 500 contacts and 1,000 emails per month. Brevo (Sendinblue) offers unlimited emails to up to 300 contacts per day. MailerLite's free plan supports up to 1,000 subscribers and 12,000 emails per month. Mailjet provides 6,000 emails per month for free. Free tiers are great for testing and small lists, but they often lack advanced automation, A/B testing, and premium support. As you grow, expect to upgrade to a paid plan for better segmentation and deliverability features.",
  },
  {
    question: "How do I A/B test email campaigns effectively?",
    answer:
      "A/B testing (split testing) helps optimize open rates and click-through rates. Test one variable at a time: subject lines (most impactful), sender names, preview text, email content/layout, call-to-action buttons, send times, or images vs. plain text. Split your audience so each variant goes to a statistically significant sample (at least 1,000 subscribers per variant), let the test run long enough (24–48 hours minimum), and use the winning variant for the remaining audience. Most platforms like Mailchimp, ActiveCampaign, and Klaviyo have built-in A/B testing tools that automate this process.",
  },
  {
    question: "What are the must-have features in an email marketing platform?",
    answer:
      "Essential features include: a drag-and-drop email builder with responsive templates, contact segmentation and tagging, visual automation workflow builder, A/B testing capabilities, detailed analytics (open rates, click rates, bounce rates, revenue tracking), click/subscription management (CAN-SPAM and GDPR compliant), integrations with your e-commerce platform and CRM, deliverability tools (SPF/DKIM setup guides), and mobile-responsive designs. For e-commerce specifically, look for abandoned cart automation, product recommendation blocks, and purchase-triggered flows. For transactional email, ensure you get dedicated IP options and API-based sending.",
  },
  {
    question: "What is the difference between ESP and email automation platforms?",
    answer:
      "ESP (Email Service Provider) refers broadly to any platform used to send bulk emails — this includes everything from basic newsletter tools like Mailchimp to enterprise platforms like Salesforce Marketing Cloud. Email automation platforms are a subset of ESPs that specialize in triggered, behavior-based email sequences — think ActiveCampaign, Klaviyo, and Drip. Automation platforms excel at conditional logic, lead scoring, multi-step journeys, and predictive sending. Basic ESPs focus on broadcast campaigns and list management. Many modern platforms (like Brevo and MailerLite) now offer both capabilities in a single tool.",
  },
  {
    question: "How do I migrate from one email marketing platform to another?",
    answer:
      "Migrating email platforms involves: 1) Export your subscriber list from the old platform (typically as CSV), including tags, custom fields, and engagement data if available. 2) Clean the list by removing bounces and unsubscribes before importing. 3) Set up your new platform with proper authentication (SPF, DKIM, DMARC) and warm up your sending domain. 4) Rebuild your automation workflows and email templates in the new platform. 5) Test thoroughly by sending to a small segment first. 6) After confirming deliverability, notify subscribers and redirect your tracking domain and API integrations. Most platforms offer migration guides and support for moving from competitors.",
  },
  {
    question: "How do email marketing companies handle data security?",
    answer:
      "Reputable email marketing platforms implement encryption at rest and in transit (TLS 1.2+), SOC 2 Type II audits, ISO 27001 certification, GDPR and CCPA compliance tools, regular penetration testing, multi-factor authentication (MFA), role-based access controls (RBAC), and data backup with disaster recovery procedures. Enterprise platforms like Salesforce Marketing Cloud and HubSpot also offer dedicated data processing agreements (DPAs) and business associate agreements (BAAs) for HIPAA compliance. Always verify a vendor's security page and data processing terms before committing your subscriber data.",
  },
  {
    question: "What is email deliverability and why does it matter?",
    answer:
      "Email deliverability is the ability to land in recipients' inboxes rather than spam folders. It matters because even a perfectly designed campaign is worthless if it never reaches your audience. Key factors affecting deliverability include: sender reputation (IP and domain), authentication (SPF, DKIM, DMARC), bounce rates, spam complaint rates, list engagement levels, and content quality. Industry benchmarks show average inbox placement rates of 85–95%. Tools like 250ok, Validity Everest, and InboxInspector help monitor and improve deliverability. Low deliverability is often caused by purchased lists, infrequent sending, or poor list hygiene.",
  },
  {
    question: "Can I use free email marketing tools for a growing business?",
    answer:
      "Free email marketing tools work well for side projects, very small lists (under 1,000 subscribers), and testing purposes. However, as you grow, free tiers become limiting: you lose advanced automation, A/B testing, dedicated support, detailed analytics, and premium deliverability features. Most free plans also include the provider's branding in your emails (e.g., 'Powered by Mailchimp'). For a serious business, a paid plan costing $20–$100/month is a worthwhile investment that gives you professional-looking emails, better deliverability, and automation that actually saves time.",
  },
  {
    question: "How do email marketing reviews and ratings work?",
    answer:
      "Email marketing reviews are collected by third-party platforms like G2, Capterra, and TrustRadius. Users submit ratings (usually 1–5 stars) and written feedback based on their experience. These platforms verify reviewers, moderate for authenticity, and aggregate scores to produce overall ratings. Reviews typically cover ease of use, customer support, value for money, feature set, and deliverability. Always read recent reviews and look for patterns rather than outliers. At Email Compare, we aggregate verified reviews alongside our own data-driven feature analysis to give you the full picture.",
  },
  {
    question: "What is the future of email marketing?",
    answer:
      "Email marketing is evolving rapidly with AI-powered features: predictive send-time optimization, AI-generated subject lines and content, natural language segmentation queries, and automated A/B testing. Other trends include interactive AMP emails (surveys, carousels, forms inside emails), hyper-personalization using real-time behavioral data, privacy-first tracking as third-party cookies phase out, and deeper e-commerce integrations with purchase prediction models. The email marketing software market continues to grow as email remains the highest-ROI marketing channel, averaging $36 for every $1 spent.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#E63946] bg-[#401616] px-3 py-1.5 rounded-md mb-4">
              FAQ
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#FEF2F0] tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#BE8A83] max-w-xl mx-auto leading-relaxed">
              Everything you need to know about email marketing — from choosing the right
              tools to understanding pricing, security, and industry trends.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-[#2D0F0F] border border-[#5F1E1E] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#401616] transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[#FEF2F0] font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#E63946] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-[#BE8A83] leading-relaxed text-sm border-t border-[#5F1E1E] pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#BE8A83] text-sm">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-[#E63946] hover:underline font-medium"
              >
                Contact our team
              </a>{" "}
              and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

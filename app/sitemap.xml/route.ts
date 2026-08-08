import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "activecampaign-vs-mailerlite-vs-sendgrid-2026",
  "ai-powered-email-personalization-2026",
  "best-email-ab-testing-tools-2026",
  "best-email-marketing-automation-tools-for-e-commerce-2026-comparison",
  "best-email-marketing-platforms-compared-2026",
  "best-email-marketing-platforms-small-business-2026",
  "best-email-testing-tools-2026",
  "best-newsletter-platforms-creators-2026",
  "choosing-email-marketing-platform-2026-buyers-guide",
  "cold-email-outreach-tools-strategies-2026",
  "customerio-vs-braze-vs-iterable-2026",
  "daily-update-d-2026-06-24-email-marketing-ab-testing-strategies",
  "email-automation-tools-workflows-2026-comparison",
  "email-automation-workflows-2026-high-converting-sequences",
  "email-automation-workflows-best-practices-2026",
  "email-automation-workflows-that-drive-revenue",
  "email-deliverability-audit-guide-2026",
  "email-deliverability-guide-2026",
  "email-deliverability-optimization-2026-dmarc-spf-dkim",
  "email-deliverability-optimization-tips",
  "email-design-eye-tracking-heatmaps-2026",
  "email-design-tools-comparison",
  "email-engagement-scoring-models-compared-2026",
  "email-list-growth-strategies-2026",
  "email-list-hygiene-database-cleaning-2026",
  "email-marketing-automation-cost-comparison-2026",
  "email-marketing-automation-workflows-10-high-converting-sequences-you-can-deploy-today",
  "email-marketing-benchmarks-2026-by-industry",
  "email-marketing-compliance-legal-requirements-2026",
  "email-marketing-kpis-beyond-open-rates-2026",
  "email-marketing-kpis-metrics-2026",
  "email-marketing-roi-benchmarks-2026",
  "email-proofreading-copy-optimization-tools-2026",
  "email-segmentation-strategies-2026",
  "email-subject-line-ab-testing-guide-2026",
  "email-warmup-best-practices-2026",
  "mailchimp-vs-brevo-vs-constant-contact-2026",
  "mailchimp-vs-constant-contact-vs-convertkit-2026",
  "mailchimp-vs-klaviyo-2026-email-marketing-comparison",
  "predictive-email-analytics-ai-2026",
  "smtp-service-providers-compared-sendgrid-vs-amazon-ses-vs-mailgun-2026",
  "spf-dkim-dmarc-email-authentication-guide",
  "transactional-email-api-comparison-2026",
  "transactional-email-services-comparison-2026",
  "transactional-vs-marketing-emails",
  "mailchimp-vs-klaviyo-vs-activecampaign-2026-comprehensive-comparison",
  "brevo-vs-mailerlite-vs-sendpulse-2026",
  "sendgrid-vs-amazon-ses-vs-mailgun-2026-deliverability",
  "email-automation-ai-features-2026-comparison",
  "crm-integration-email-marketing-2026",
  "interactive-email-marketing-strategies-2026",
  "email-marketing-attribution-models-2026",
  "email-marketing-platform-comparison-2026",
  "email-deliverability-best-practices-2026",
  "win-back-email-campaigns-reactivating-dormant-subscribers-2026",
  "email-copywriting-frameworks-that-convert-2026",
  "saas-onboarding-lifecycle-email-automation-2026",
  "email-marketing-accessibility-inclusive-design-2026",
  "ai-inbox-eras-optimizing-email-for-ai-assistants-2026",
  "email-frequency-optimization-sending-cadence-2026",
  "dark-mode-email-design-optimization-guide-2026",
  "email-automation-benchmarks-2026-by-trigger-type",,
  "post-purchase-email-automation-guide-2026"
] as const;

const TOOL_SLUGS = [
  "250ok",
    "acoustic",
    "activecampaign",
    "amazon-ses",
    "aweber",
    "beefree",
    "benchmark-email",
    "braze",
    "campaign-monitor",
    "chamaileon",
    "clevertap",
    "constant-contact",
    "convertkit",
    "customer-io",
    "drip",
    "emailoctopus",
    "email-on-acid",
    "emarsys",
    "freshmarketer",
    "getresponse",
    "hubspot-marketing-hub",
    "inboxinspector",
    "intercom",
    "iterable",
    "klaviyo",
    "leanplum",
    "listmonk",
    "litmus",
    "mailchimp",
    "mailercloud",
    "mailerlite",
    "mailgun",
    "mailjet",
    "mail-tester",
    "marketo-engage",
    "mautic",
    "mimecast-email-security",
    "moengage",
    "netcore-cloud",
    "neverbounce",
    "omnisend",
    "oracle-eloqua",
    "pardot",
    "pepipost",
    "postmark",
    "quickemailverification",
    "salesforce-marketing-cloud",
    "sendfox",
    "sendgrid",
    "sendinblue-brevo",
    "sendpulse",
    "smtp.com",
    "socketlabs",
    "sparkpost",
    "stripo.email",
    "unspamemail",
    "validity-everest",
    "verifalia",
    "zerobounce",
    "zoho-campaigns",
] as const;

const CATEGORY_SLUGS = [
  "email-automation",
    "email-deliverability",
    "email-design",
    "email-marketing",
    "email-security",
    "email-verification",
    "esp",
    "transactional-email",
] as const;

export async function GET() {
  const baseUrl = "https://emailcompare.net";

  const urls: string[] = [  "email-frequency-optimization-sending-cadence-2026",
];

  urls.push(`<url><loc>${baseUrl}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/blog</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/contact</loc><changefreq>monthly</changefreq><priority>0.4</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/disclosure</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);

  for (const slug of CATEGORY_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/category/${slug}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
  }

  for (const slug of BLOG_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/blog/${slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
  }

  for (const slug of TOOL_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/tools/${slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}

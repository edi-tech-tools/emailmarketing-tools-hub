import { MetadataRoute } from "next";

const BLOG_SLUGS = [
    "spf-dkim-dmarc-email-authentication-guide",
    "email-deliverability-optimization-tips",
    "transactional-vs-marketing-emails",
    "best-email-marketing-platforms-compared-2026",
    "email-design-eye-tracking-heatmaps-2026",
    "email-marketing-roi-benchmarks-2026",
    "mailchimp-vs-brevo-vs-constant-contact-2026",
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

  const urls: string[] = [];

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

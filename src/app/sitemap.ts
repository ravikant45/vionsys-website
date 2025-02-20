import { NextResponse } from "next/server";

export const BaseUrl = process.env.DOMAIN || "";

export async function GET() {
  const baseUrl = "https://www.vionsys.com";

  const pages = [
    "",
    "about",
    "career",
    "contact",
    "services/software-development",
    "services/crm",
    "services/digital-marketing",
    "services/web-development",
    "services/cloud-computing",
    "services/salesforce",
    "services/itstaffing",
    "services/big-data-analytics",
    "services/machinelearning-ai",
    "services/devOps",
    "services/testing",
    "services/bi-analytics",
    "services/product-development",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${page === "" ? "1.00" : "0.80"}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

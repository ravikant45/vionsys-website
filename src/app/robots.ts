import { MetadataRoute } from "next";

const BaseUrl = process.env.DOMAIN || "https://www.vionsys.com";

// Array containing paths to disallow
const disallowedPaths = [
  "/login/",
  "/cart/",
  "/checkout/",
  "/wp-admin/",
  "/wp-login.php",
  "/private/",
  "/search",
  "/temp/",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedPaths,
      },
    ],
    sitemap: `${BaseUrl}/sitemap.xml`,
  };
}

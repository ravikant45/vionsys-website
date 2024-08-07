import { MetadataRoute } from "next";

const BaseUrl = process.env.DOMAIN || "";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/*"],
      },
    ],
    sitemap: `${BaseUrl}/sitemap.xml`,
  };
}

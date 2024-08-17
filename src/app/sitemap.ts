import { MetadataRoute } from "next";
import { IndustriesLinks, ServicesLinks } from "./ui/navbar/Navlinks";
import {
  generateDynamicEntries,
  generateSitemapEntries,
  getAllBlogsFetch,
  getAllCaseStudiesFetch,
  staticPages,
} from "@/helper/sitemapHelpers";

export const BaseUrl = process.env.DOMAIN || "";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Generate sitemaps for services and industries
  const servicesSitemap = generateSitemapEntries(ServicesLinks);
  const industriesSitemap = generateSitemapEntries(IndustriesLinks);

  // Fetch blog and case study data and generate sitemap entries
  const blogs = await getAllBlogsFetch();
  const blogSitemap = generateDynamicEntries(blogs, "/blogs");

  const caseStudies = await getAllCaseStudiesFetch();
  const caseStudiesSitemap = generateDynamicEntries(
    caseStudies,
    "/caseStudies"
  );

  return [
    ...staticPages,
    ...servicesSitemap,
    ...industriesSitemap,
    ...blogSitemap,
    ...caseStudiesSitemap,
  ];
}

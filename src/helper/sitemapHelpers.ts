import { MetadataRoute } from "next";
export const BaseUrl = process.env.DOMAIN || "";
const lastModified = new Date();

// Generic function to fetch data from an API endpoint
const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${BaseUrl}${endpoint}`);
    const data = await response?.json();
    return data?.data;
  } catch (error) {
    console.error("Error fetching data for dynamic Sitemap:", error);
    return [];
  }
};

// Static pages for the sitemap
export const staticPages: MetadataRoute.Sitemap = [
  { url: `${BaseUrl}`, priority: 1 },
  { url: `${BaseUrl}/about`, priority: 0.9 },
  { url: `${BaseUrl}/contact`, priority: 0.9 },
  { url: `${BaseUrl}/career`, priority: 0.9 },
  { url: `${BaseUrl}/blogs`, priority: 0.9 },
  { url: `${BaseUrl}/caseStudies`, priority: 0.9 },
].map((page) => ({
  ...page,
  lastModified,
  changeFrequency: "yearly",
}));

// Function to generate sitemap entries for static and dynamic links
export const generateSitemapEntries = (
  links: { href: string }[],
  priority: number = 0.9,
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never" = "yearly"
): MetadataRoute.Sitemap => {
  const lastModified = new Date();
  return links?.map(({ href }) => ({
    url: `${BaseUrl}${href}`,
    lastModified,
    changeFrequency,
    priority,
  }));
};

// Function to generate dynamic sitemap entries based on a keyword
export const generateDynamicEntries = (
  items: any[],
  path: string,
  priority: number = 0.8
): MetadataRoute.Sitemap => {
  const lastModified = new Date();
  return items?.map((item) => ({
    url: `${BaseUrl}${path}/${item?.keyWord}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
};

// Specific functions to fetch blogs and case studies
export const getAllBlogsFetch = async () => fetchData("/api/blogs/get");

export const getAllCaseStudiesFetch = async () =>
  fetchData("/api/caseStudies/getAll");

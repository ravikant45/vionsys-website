import { MetadataRoute } from "next";
import { IndustriesLinks, ServicesLinks } from "./ui/navbar/Navlinks";
export const BaseUrl = process.env.DOMAIN;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const Services: MetadataRoute.Sitemap = ServicesLinks.map(({ href }) => ({
    url: `${BaseUrl}${href}`,
  }));
  const Industries: MetadataRoute.Sitemap = IndustriesLinks.map(({ href }) => ({
    url: `${BaseUrl}${href}`,
  }));

  return [
    {
      url: `${BaseUrl}/about`,
    },
    {
      url: `${BaseUrl}/contact`,
    },
    {
      url: `${BaseUrl}/career`,
    },
    {
      url: `${BaseUrl}/blogs`,
    },
    {
      url: `${BaseUrl}/caseStudies`,
    },

    ...Services,
    ...Industries,
  ];
}

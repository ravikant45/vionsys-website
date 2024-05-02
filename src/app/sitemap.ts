import { MetadataRoute } from "next";
import { ServicesLinks } from "./ui/navbar/Navlinks";
const BaseUrl = process.env.DOMAIN;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const Services: MetadataRoute.Sitemap = ServicesLinks.map(({ href }) => ({
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
      url: `${BaseUrl}/industries`,
    },
    ...Services,
  ];
}

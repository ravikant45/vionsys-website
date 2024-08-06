import { BaseUrl } from "@/app/sitemap";
import ServicesTemplateOne from "@/app/ui/services/ServicesTemplateOne";
import SoftwareServicesData from "@/app/ui/services/data/SoftwareServicesData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Software Development Services",
  description: "Vionsys IT Solutions India Pvt Ltd offers high-quality software development services customized to meet your business needs. Our team of expert developers delivers unique, reliable, and scalable software solutions to keep your company ahead of the competition. Partner with us for custom apps, enterprise software, and advanced technological integration.",
  alternates: {
    canonical: `${BaseUrl}/services/software-development`
  },
  openGraph: {
    images: "/opangraph.png",
    description: "Vionsys IT Solutions India Pvt Ltd offers creative software development services that will help your organization grow. Our professional staff creates customized software solutions to improve efficiency and performance. From web applications to large enterprise systems, we provide technology that suits your exact requirements. Choose Vionsys for a flawless software development experience and a competitive advantage. "
  }
};
const softwareDevlopment = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateOne data={SoftwareServicesData} />
    </main>
  );
};

export default softwareDevlopment;

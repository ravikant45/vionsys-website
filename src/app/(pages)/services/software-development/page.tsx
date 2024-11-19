import { BaseUrl } from "@/app/sitemap";
import ServicesTemplateOne from "@/app/ui/services/ServicesTemplateOne";
import SoftwareServicesData from "@/app/ui/services/data/SoftwareServicesData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kharadi's Best IT Company - Software Development Services",
  description:
    "Vionsys IT Solutions India Pvt Ltd is a leading company that provides software development services. Our team delivers unique solutions to grow your business.",
  alternates: {
    canonical: `${BaseUrl}/services/software-development`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd offers creative software development services that will help your organization grow. Our professional staff creates customized software solutions to improve efficiency and performance. From web applications to large enterprise systems, we provide technology that suits your exact requirements. Choose Vionsys for a flawless software development experience and a competitive advantage.",
  },
};
const softwareDevlopment = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateOne data={SoftwareServicesData} />
    </main>
  );
};

export default softwareDevlopment;

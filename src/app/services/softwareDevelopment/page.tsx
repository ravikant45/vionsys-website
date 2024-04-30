import ServicesTemplateOne from "@/app/ui/services/ServicesTemplateOne";
import SoftwareServicesData from "@/app/ui/services/data/SoftwareServicesData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Software Development Services",
};
const softwareDevlopment = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateOne data={SoftwareServicesData} />
    </main>
  );
};

export default softwareDevlopment;

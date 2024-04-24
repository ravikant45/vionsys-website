import ServicesTemplateOne from "@/app/ui/services/ServicesTemplateOne";
import SoftwareServicesData from "@/app/ui/services/data/SoftwareServicesData";
import React from "react";

const softwareDevlopment = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateOne data={SoftwareServicesData} />
    </main>
  );
};

export default softwareDevlopment;

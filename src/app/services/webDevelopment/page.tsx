import ServicesTemplateOne from "@/app/ui/services/ServicesTemplateOne";
import webdevServicesData from "@/app/ui/services/data/WebdevServicesData";
import React from "react";

const page = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateOne data={webdevServicesData} />
    </main>
  );
};

export default page;

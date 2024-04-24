import ServicesTemplateOne from "@/app/ui/services/ServicesTemplateOne";
import ProductServicesData from "@/app/ui/services/data/ProductDevData";
import React from "react";

const page = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateOne data={ProductServicesData} />
    </main>
  );
};

export default page;

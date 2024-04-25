import ServicesTemplateTwo from "@/app/ui/services/ServicesTemplateTwo";
import { MLAIServicesData } from "@/app/ui/services/data/ML&AIServicesData";
import React from "react";

const page = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateTwo data={MLAIServicesData} />
    </main>
  );
};

export default page;

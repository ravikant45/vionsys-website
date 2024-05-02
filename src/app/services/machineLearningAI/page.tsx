import ServicesTemplateTwo from "@/app/ui/services/ServicesTemplateTwo";
import { MLAIServicesData } from "@/app/ui/services/data/ML&AIServicesData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ML and AI Services",
};
const page = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateTwo data={MLAIServicesData} />
    </main>
  );
};

export default page;

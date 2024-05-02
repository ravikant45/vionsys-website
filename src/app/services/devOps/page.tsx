import ServicesTemplateTwo from "@/app/ui/services/ServicesTemplateTwo";
import { DevOpesServicesData } from "@/app/ui/services/data/DevOpesServicesData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "DevOpes Services",
};
const page = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateTwo data={DevOpesServicesData} />
    </main>
  );
};

export default page;

import ServicesTemplateTwo from "@/app/ui/services/ServicesTemplateTwo";
import { DevOpesServicesData } from "@/app/ui/services/data/DevOpesServicesData";
import React from "react";

const page = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateTwo data={DevOpesServicesData} />
    </main>
  );
};

export default page;

import ServicesTemplateOne from "@/app/ui/services/ServicesTemplateOne";
import webdevServicesData from "@/app/ui/services/data/WebdevServicesData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Web Development Services",
};
const page = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateOne data={webdevServicesData} />
    </main>
  );
};

export default page;

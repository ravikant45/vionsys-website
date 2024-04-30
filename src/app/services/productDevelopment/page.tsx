import ServicesTemplateOne from "@/app/ui/services/ServicesTemplateOne";
import ProductServicesData from "@/app/ui/services/data/ProductDevData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Product Development Service",
};

const page = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateOne data={ProductServicesData} />
    </main>
  );
};

export default page;

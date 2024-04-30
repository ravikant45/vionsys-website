import ServicesTemplateFour from "@/app/ui/services/ServicesTemplateFour";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
};
const page: React.FC = () => {
  return (
    <div className="pt-16 overflow-x-hidden">
      <ServicesTemplateFour />
    </div>
  );
};

export default page;

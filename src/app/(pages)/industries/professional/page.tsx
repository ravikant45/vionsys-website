import Cta from "@/app/ui/industries/Professionalservice/Cta";
import Hero from "@/app/ui/industries/Professionalservice/Hero";
import Ourservices from "@/app/ui/industries/Professionalservice/Ourservices";
import React from "react";

const page = () => {
  return (
    <div className="pt-18 overflow-x-hidden">
      <Hero />
      <Ourservices />
      <Cta />
    </div>
  );
};

export default page;

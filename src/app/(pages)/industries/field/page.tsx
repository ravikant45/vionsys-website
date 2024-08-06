import React from "react";
import Hero from "@/app/ui/industries/field/Hero";
import Service from "@/app/ui/industries/field/Service";
import Cta from "@/app/ui/industries/field/Cta";

const page = () => {

  return (
    <div className="overflow-hidden">
      <Hero />
      <Service />
      <Cta />
    </div>
  );
};

export default page;

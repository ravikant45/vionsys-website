'use client';

import React from "react";
import Hero from "@/app/ui/industries/education/Hero";
import Service from "@/app/ui/industries/education/Service";
import Cta from "@/app/ui/industries/field/Cta";

const page = () => {
  

  return (
    <div className="md:pt-16 pt-14 overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Service */}
      <Service />

      {/* Partner */}
      <Cta />
      
    </div>
  );
};

export default page;

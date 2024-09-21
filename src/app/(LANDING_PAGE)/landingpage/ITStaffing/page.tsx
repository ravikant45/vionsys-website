import React from "react";
import Hero from "../componets/ITStaffingUI/Hero";
import WhatWeServe from "../componets/ITStaffingUI/WhatWeServe";
import Cta from "../componets/ITStaffingUI/Cta";
import Footer from "@/app/ui/footer/Footer";
import Navbar from "@/app/ui/navbar/Navbar";
import OurHighlights from "../componets/ITStaffingUI/OurHighlights";
import OurOfferings from "../componets/ITStaffingUI/OurOfferings";
import ContactUs from "../componets/landingUI/ContactUs";
import App from "../app";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <OurHighlights />
      <OurOfferings />
      <WhatWeServe />
      <Cta />
      <ContactUs />
      <App />
      <Footer />
    </div>
  );
};

export default page;

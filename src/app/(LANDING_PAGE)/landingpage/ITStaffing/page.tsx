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
import ChooseUs from "../componets/ITStaffingUI/ChooseUs";
import Sample from "../componets/ITStaffingUI/Sample";
import InfiniteMovingCardsDemo from "@/app/ui/home/Clients";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <OurHighlights />
      <OurOfferings />
      <WhatWeServe />
      <Cta />
      <ChooseUs />
      <InfiniteMovingCardsDemo />
      <ContactUs />
      <App />
      <Footer />
    </div>
  );
};

export default page;

import React from "react";
import { TypewriterDemo } from "../../ui/about/TypeWriterDemo";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import LifeAtVionsys from "../../ui/about/LifeAtVionsys";
import ISOLogo from "@/components/ui/ISOLogo";
const AboutUs = dynamic(() => import("../../ui/about/AboutUs"), {
  loading: () => <p>Loading...</p>,
});
const About2 = dynamic(() => import("../../ui/about/About2"), {
  loading: () => <p>Loading...</p>,
});
const Visit = dynamic(() => import("../../ui/about/Visit"), {
  loading: () => <p>Loading...</p>,
});
const ThreeDCard = dynamic(() => import("../../ui/about/ThreeDCard"), {
  loading: () => <p>Loading...</p>,
});

export const metadata: Metadata = {
  title: "About Us",
  description: "Vionsys, a pioneering IT solutions provider, specializes in software development, cloud services, and cybersecurity. We provide innovative, scalable solutions designed to accelerate corporate growth and efficiency while providing sturdy, secure, and cutting-edge technology for a competitive advantage.",
  openGraph:{
    images:"/opangraph.png",
    description:"We provide premium IT services such as custom software, cloud solutions, and cybersecurity. Our devoted staff provides organizations with innovative technologies, assuring a competitive advantage and operational efficiency. Vionsys offers transformational IT skills."
  }
};


const page = () => {
  return (
    <div className="pt-16 overflow-x-hidden">
      <AboutUs />
      <About2 />
      <ThreeDCard />
      <LifeAtVionsys />
      <ISOLogo />
      <TypewriterDemo />
      <Visit />
    </div>
  );
};

export default page;

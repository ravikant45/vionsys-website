import React from "react";

import salesbg2 from "/public/assets/services/Salesforce/salesbg2.jpg";
import Image from "next/image";

import Cloud from "@/app/ui/salesforce/Cloud";
import Future from "@/app/ui/salesforce/future";
import Provide from "@/app/ui/salesforce/Provide";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salesforce Services",
};
const salesforce = () => {
  return (
    <div className="pt-10 overflow-x-hidden">
  <div className="flex justify-center items-center w-screen h-screen  px-1">
    <Image src={salesbg2} alt="" className="object-cover bg-cover w-full absolute h-screen" />

    <div className="relative w-screen flex flex-col justify-center items-center gap-4">
      <h1
        data-aos="fade-left"
        className="text-xl md:text-4xl px-2 text-white text-center font-extrabold"
      >
        Drive Breakthrough Advancements In
        <span className="font-extrabold flex justify-center">Salesforce</span>{" "}
      </h1>

      <h3
        data-aos="fade-right"
        className="font-bold text-center md:text-2xl text-lg text-orange px-2"
      >
        Elevate Your Business with Our Salesforce Services.
      </h3>

      <p className="text-center font-normal md:w-1/2 w-full text-paragraph px-2 leading-9 text-white relative">Empower your business with our tailored Salesforce services. Streamline operations, boost customer relationships, and drive growth in today's dynamic digital landscape. Let us be your trusted partner in harnessing the full potential of Salesforce.</p>
    </div>

  </div>
  
  <Future />
  <Cloud />
  <Provide />
  <ScheduleMeetAndContactCTA />
</div>

  );
};

export default salesforce;

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
    <div className="md:pt-16 pt-20">
      <div className="flex justify-center items-center w-screen md:h-screen h-auto px-1">
        <Image src={salesbg2} alt="" className="object-cover bg-cover w-full absolute md:h-full h-[50%]" />

        <div className="relative -top-4 w-full flex flex-col justify-center items-center gap-4">
          <h1
            data-aos="fade-left"
            className="md:text-5xl text-3xl text-white text-center"
          >
            Drive Breakthrough Advancements In
            <span className="font-bold flex justify-center">Salesforce</span>{" "}
          </h1>

          <h3
            data-aos="fade-right"
            className="font-bold text-center md:text-3xl text-2xl text-orange"
          >
            Elevate Your Business with Our Salesforce Services.
          </h3>

           <p className="text-center md:w-1/2 w-full text-lg px-2 leading-9 text-white relative">Empower your business with our tailored Salesforce services. Streamline operations, boost customer relationships, and drive growth in today's dynamic digital landscape. Let us be your trusted partner in harnessing the full potential of Salesforce.</p>
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

import React from "react";

import salesbg2 from "/public/assets/services/Salesforce/salesbg2.jpg";
import Image from "next/image";

import Cloud from "@/app/ui/salesforce/Cloud";
import Future from "@/app/ui/salesforce/future";
import Provide from "@/app/ui/salesforce/Provide";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Salesforce Services",
  description: "Maximize your company's potential with Vionsys IT Solutions India Pvt Ltd's complete Salesforce services. Our certified Salesforce experts provide specialized solutions, including implementation, modification, and integration, to help you optimize your business processes and improve customer connections. Whether you want to improve your sales, service, or marketing, Vionsys can alter your Salesforce platform to deliver exceptional outcomes. ",
  alternates: {
    canonical: `${BaseUrl}/services/salesforce`
  },
  openGraph: {
    images: "/opangraph.png",
    description: "With experienced Salesforce services from Vionsys IT Solutions India Pvt Ltd, you can transform your customer engagement and drive growth. We provide complete solutions, from Salesforce setup and customisation to continuous support and maintenance. Our team guarantees that your Salesforce platform is fully matched with your business requirements, providing seamless integration and advanced analytics to improve performance. Experience the Vionsys edge with Salesforce solutions today. "
  }
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

          <p className="text-center font-normal md:w-2/3 w-full text-paragraph md:px-2 px-1 leading-9 text-white relative">At Vionsys IT Solutions India Pvt Ltd, we specialize in comprehensive Salesforce implementation that helps businesses leverage the full potential of this powerful CRM platform. Our team of experts is dedicated to providing solutions that improve efficiency, improve customer relationships and enhance your overall efficiency.</p>
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

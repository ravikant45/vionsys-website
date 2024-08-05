
import webdevServicesData from "@/app/ui/services/data/WebdevServicesData";
import React, { useEffect } from "react";
import "./page1.css";
import Image from "next/image";
import Link from "next/link";
import FaqSec from "./faqSec";
import Firstsec from "./Firstsec";
import { Metadata } from "next";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";

export const metadata: Metadata = {
  title: "Web Development Service",
  description:"Increase your internet visibility with Vionsys IT Solutions India Pvt Ltd's comprehensive web development services. Our skilled team specializes in designing responsive, user-friendly websites that are performance-optimized and built to increase interaction. From custom web apps to e-commerce solutions, we offer comprehensive services to meet your company's requirements. Choose Vionsys for unique web development that increases your digital footprint and success. ",
  openGraph: {
    images:"/opangraph.png",
    description:"Vionsys IT Solutions India Pvt Ltd provides experienced web development services that help you turn your vision into a compelling online presence. We provide specialized web design, development, and maintenance services to help your website stand out in the competitive digital landscape. Our solutions include everything from front-end design to back-end integration, resulting in a seamless user experience. Collaborate with Vionsys to develop a website that increases traffic, engagement, and conversions.   "
  }
};

const Page = () => {
  const data = webdevServicesData;

  return (
    <main className="pt-16 overflow-x-hidden">
      {/*first section */}
      <Firstsec/>
    
      {/* types of of that services */}
      <section className=" pt-10">
        <div className=" flex flex-col justify-center items-center md:py-3 ">
          <h1 className="font-bold text-3xl mb-5">
            why
            <span className="text-orange mx-1 font-extrabold text-4xl relative inline-block stroke-current">
              Choose
              <svg className="absolute -bottom-0.5 text-blue1 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
              </svg>
            </span>
            us
          </h1>
          <p className="text-lg text-gray-500 p-2 font-semibold text-SubHeading lg:text-xl text-center max-w-[50rem] dark:text-gray-400">
            At Vionsys IT Solutions India Pvt. Ltd., we understand that choosing
            a development partner is a critical decision for your business.
            Here's why we believe we are the right choice for your development
            needs.
          </p>
        </div>
        <div className="flex flex-wrap  justify-center items-center md:gap-5 p-2 cursor-pointer">
          {data.workType.map((work: any) => {
            return (
              <div
                key={work.id}
                className="w-[20rem] md:h-[18rem] h-full p-2 flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
              >
                <div className=" relative rounded-t-xl overflow-hidden">
                  <Image
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                    width={500}
                    height={500}
                    src={work?.img}
                    alt={work?.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center text-center text-white md:p-4 p-2">
                    <h3 className="text-lg font-semibold mb-2">
                      {work?.title}
                    </h3>
                    <p className="text-sm">{work?.description}</p>
                  </div>
                </div>
                <div className="md:p-4 p-2">
                  <h3 className="text-center text-black font-semibold dark:text-white ">
                    {work?.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* faq section */}
      <div>
        <FaqSec />
      </div>

      {/* CTA */}
      <section className="bg-gray-100">
        <ScheduleMeetAndContactCTA />
      </section>
    </main>
  );
};


export default Page;

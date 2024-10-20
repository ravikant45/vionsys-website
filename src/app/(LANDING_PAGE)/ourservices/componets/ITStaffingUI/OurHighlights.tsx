/* eslint-disable react/no-unescaped-entities */
import { CheckCircledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import HighlightsImg from "@/app/(LANDING_PAGE)/ourservices/images/ITStaffing/Highlights.jpeg"
const OurHighlights = () => {
  return (
    <>
      <div id="gradient" className="flex flex-col md:flex-row items-center justify-around max-w-full mx-auto p-8 dark:bg-gray-900">
        <div className="relative w-full md:w-2/5 aspect-square mb-8 md:mb-0">
          <div className="absolute inset-0 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden">
            <Image
              src={HighlightsImg}
              alt="IT professional with headphones working on a computer"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5 space-y-6 text-left md:pl-8 backdrop:blur-sm">
          <h2  className="text-3xl font-bold text-SubHeading dark:text-gray-100 mb-4">
            Our Highlight's
          </h2>
          <ul className="space-y-4">
            {[
              "Upgrade Your IT Team",
              "Quick And Efficient Hiring",
              "Match Your Specific Needs",
              "Successful Track Record",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircledIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-blue1 dark:text-gray-200">
                    {item}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {index === 0 &&
                      "Strengthen your IT team with our skilled professionals, delivering fresh insights and advanced expertise to elevate your capabilities."}
                    {index === 1 &&
                      "Our efficient process helps you find the right talent fast, reducing time-to-hire while maintaining top quality."}
                    {index === 2 &&
                      "We offer customized solutions, matching professionals with the exact skills and experience required for your projects."}
                    {index === 3 &&
                      "Become one of the many satisfied clients who have reached their IT goals using our effective recruitment strategies."}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurHighlights;

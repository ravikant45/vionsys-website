import { pharmaData } from "@/utils/pharmaData";
import Image from "next/image";
import React from "react";
import { BsCaretRightFill } from "react-icons/bs";

const Services = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="px-4 py-6 mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-SubHeading font-bold">Our Services</h2>
        </div>
        {pharmaData.map((service, index) => (
          <div
            key={index}
            className="md:flex md:justify-center md:py-6 md:items-start md:gap-12 mb-8"
          >
            <div
              className={`flex justify-center mb-8 md:mb-0 md:w-1/2 ${
                index % 2 === 0 ? "order-1" : "order-2"
              }`}
            >
              <Image
                src={service.imageSrc}
                alt="Illustration"
                className="rounded-lg"
                width={450}
                height={300}
                unoptimized={true} // Option to disable Next.js Image Optimization (if needed)
                priority // Option to load the image as priority
              />
            </div>
            <div
              className={`md:w-1/2 flex flex-col items-center justify-center gap-4 ${
                index % 2 === 0 ? "order-2" : "order-1"
              }`}
            >
              <h1
                className="text-ThirdHeading font-semibold"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                {service.title}
              </h1>
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <div className="p-2 mr-4 text-white bg-blue3 rounded-full">
                    <BsCaretRightFill />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

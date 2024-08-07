import React from "react";
import Image from "next/image";
import webdevServicesData from "@/app/ui/services/data/WebdevServicesData";

const Ourservices = () => {
  const data = webdevServicesData;
  return (
    <div>
      <section className=" pt-10">
        <div className=" flex flex-col justify-center items-center md:py-3 ">
          <h1 className="font-bold text-3xl mb-5">
            why
            <span className="text-orange mx-1 font-extrabold text-4xl relative inline-block stroke-current">
              Choose
              <svg
                className="absolute -bottom-0.5 text-blue1 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  strokeWidth="2"
                ></path>
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
    </div>
  );
};

export default Ourservices;

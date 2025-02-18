import React from "react";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
import ClientsServices from "@/utils/ClientsServices";
const ServicesTemplateOne = ({ data }: { data: any }) => {
  const getWaveColor = (heading: string): string[] => {
    switch (heading) {
      case "SOFTWARE DEVELOPMENT":
        return ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"];
      case "WEB DEVELOPMENT":
        return ["#f8d361", "#f69d3f", "#f76c5e", "#e879f9", "#22d3ee"];
      case "PRODUCT DEVELOPMENT":
        return ["#65f7d0", "#5fd3f3", "#4d7cff", "#D20062", "#22d3ee"];
      default:
        return ["#38bdf8", "#FEC7B4", "#102C57", "#e879f9", "#D20062"];
    }
  };

  return (
    <main className="overflow-x-hidden">
      {/* hero section */}
      {/* Radial gradient for the container to give a faded look */}
      <section className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md py-4 md:h-screen h-[70vh] px-2 md:px-6 gap-4">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <p
          data-aos="fade-down"
          className="md:text-4xl text-3xl capitalize font-extrabold text-white tracking-wider leading-9 text-center"
        >
          {data?.headline}
        </p>
        <p data-aos="fade-up" className="text-paragraph text-white text-center">
          {data?.paragraph}
        </p>
      </section>

      {/* //the services sections */}
      <section className="services_look bg-dot-zinc-300 py-3">
        <div className=" flex justify-center items-center py-6">
          <h1
            data-aos="fade-left"
            className="text-MainHeading font-extrabold text-center"
          >
            Our Services
          </h1>
        </div>
        <div
          data-aos="zoom-out"
          className="flex flex-wrap justify-center gap-6 md:px-4"
        >
          {data?.Services?.map((ser: any) => {
            return (
              <div
                className="flex flex-col gap-2 py-5 items-center w-[25rem] px-2 border rounded-lg"
                key={ser?.id}
              >
                <span className=" bg-purple-700 p-5 w-16 h-16 rounded-full hover:cursor-pointer hover:scale-105 transition-all">
                  <ser.logo color="white" size={25} />
                </span>
                <h1 className="text-ThirdHeading text-[#e57e2c] text-center font-bold">
                  {ser?.title}
                </h1>
                <p className="text-paragraph  text-center">{ser?.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* types of of that services */}
      <section className="">
        <div className=" flex flex-col justify-center items-center md:py-3">
          <h1
            data-aos="fade-right"
            className="text-MainHeading font-extrabold md:p-5 md:px-5 px-2"
          >
            Why Choose Us
          </h1>
          <p
            data-aos="fade-left"
            className="max-w-[50rem] md:text-SubHeading text-ThirdHeading text-[#e57e2c] font-bold text-center md:px-5 px-2"
          >
            At Vionsys IT Solutions Pvt. Ltd., we understand that choosing a
            development partner is a critical decision for your business. Here's
            why we believe we are the right choice for your development needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center  md:gap-5 p-2">
          {data.workType.map((work: any) => {
            return (
              <div
                key={work.id}
                data-aos="zoom-out"
                className="w-[20rem] h-[20rem] m-5 flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
              >
                <div className="relative rounded-t-xl overflow-hidden">
                  <Image
                    className=" group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                    width={500}
                    height={500}
                    src={work?.img}
                    alt={work?.title}
                  ></Image>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-base text-black font-semibold dark:text-white">
                    {work?.title}
                  </h3>
                  <p className="mt-1 text-paragraph dark:text-gray1">
                    {work?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ClientsServices />

      {/* faq section */}
      <section>
        <div className="bg-white">
          <div className="max-w-screen-xl pt-4 mx-auto pb-16 sm:pt-6 sm:pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
            <h2
              data-aos="fade-left"
              className="leading-9 font-extrabold text-MainHeading text-center"
            >
              Frequently asked questions?
            </h2>
            <div
              data-aos="zoom-out"
              className="mt-6 border-t-4 border-gray-100 pt-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
                {data?.faq.map((data: any) => {
                  return (
                    <dl key={data?.id}>
                      <dt className="font-medium leading-6 text-black text-lg mt-4">
                        {data?.ques}
                      </dt>
                      <dd className="mt-4">
                        <p className="leading-6 text-base text-gray1">
                          {data?.ans}
                        </p>
                      </dd>
                    </dl>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100">
        <ScheduleMeetAndContactCTA />
      </section>
    </main>
  );
};

export default ServicesTemplateOne;

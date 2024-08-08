"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
const ServicesTemplateOne = ({ data }: { data: any }) => {
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
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="md:text-4xl text-3xl uppercase font-extrabold text-white tracking-wider leading-9 text-center"
        >
          {data?.headline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="text-paragraph text-white text-center"
        >
          {data?.paragraph}
        </motion.p>
      </section>
      {/* types of of that services */}
      <section className="">
        <div className=" flex flex-col justify-center items-center md:py-3">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 20 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="text-MainHeading font-extrabold md:p-5 md:px-5 px-2"
          >
            Why Choose Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="max-w-[50rem] md:text-SubHeading text-ThirdHeading text-[#e57e2c] font-bold text-center md:px-5 px-2"
          >
            At Vionsys IT Solutions Pvt. Ltd., we understand that choosing a
            development partner is a critical decision for your business. Here's
            why we believe we are the right choice for your development needs.
          </motion.p>
        </div>
        <div className="flex flex-wrap justify-center items-center  md:gap-5 p-2">
          {data.workType.map((work: any) => {
            return (
              <div
                key={work.id}
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
 
      {/* faq section */}
      <section>
        <div className="bg-white">
          <div className="max-w-screen-xl pt-4 mx-auto pb-16 sm:pt-6 sm:pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="leading-9 font-extrabold text-MainHeading text-center"
            >
              Frequently asked questions?
            </motion.h2>
            <div className="mt-6 border-t-4 border-gray-100 pt-10">
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
 
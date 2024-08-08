"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import webdevServicesData from "@/app/ui/services/data/WebdevServicesData";

const faqSec: React.FC = () => {
  const data = webdevServicesData;
  return (
    <>
      <section>
        <div className=" bg-dot-zinc-300">
          <div className=" max-w-screen-xl pt-4 mx-auto pb-16 sm:pt-6 sm:pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
            <div className="flex justify-center">
              <h2 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-blue1 ">
                Frequently asked questions?
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 1.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="mt-6 border-t-2 border-orange md:pt-10 pt-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
                {data?.faq.map((data: any) => {
                  return (
                    <div className="h-full md:py-4 md:px-6 p-3 border border-blue1 border-t-0 border-l-0 rounded-br-xl">
                      <dl key={data?.id}>
                        <dt className="leading-6 text-black font-bold text-2 mt-4 flex items-center">
                          <FaQuestionCircle className="mr-2 text-blue1" />
                          <span>{data?.ques}</span>
                        </dt>
                        <dd className="mt-4">
                          <p className="leading-6 text-base text-orange font-medium">
                            {data?.ans}
                          </p>
                        </dd>
                      </dl>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default faqSec;

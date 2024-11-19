"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { service } from "@/utils/educationService";

const Service = () => {
  return (
    <>
      <section>
        <motion.div className="flex flex-col items-center md:py-6 py-4">
          <h1 className="font-extrabold text-MainHeading text-center">
            Our Services
          </h1>
          <p className="text-SubHeading mt-2 font-bold px-4 text-center max-w-5xl">
            Empowering Education Through Innovation: Tailored IT Solutions for a
            Smarter Learning Experience.
          </p>
        </motion.div>
        <div className="text-center md:px-8 px-6">
          {service.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center text-left"
            >
              <div
                className={`w-full md:w-1/2 md:p-4 object-cover rounded-xl ${item.className_sec1}`}
              >
                <Image
                  src={item.img}
                  width={800}
                  height={800}
                  alt={`${item.title} Image`}
                  className="p-4 inline-block rounded-xl shadow-lg border border-merino-400"
                />
              </div>

              <div
                className={`w-full md:w-2/5 lg:w-1/2 md:px-4 md:py-0 py-5 lg:pl-12 ${item.className_sec2}`}
              >
                <motion.h3
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }}
                  className="font-extrabold mt-4 md:text-2xl md:mt-0 text-xl text-center"
                >
                  {item.title}
                </motion.h3>
                <div className=" text-left">
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2,
                      x: { type: "spring", stiffness: 30 },
                      opacity: { duration: 0.6 },
                      ease: "easeInOut",
                    }}
                    className="text-lg mt-6"
                  >
                    <span>
                      <span className="font-semibold">{item.para1}</span>:{" "}
                    </span>
                    {item.Des1}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2,
                      x: { type: "spring", stiffness: 30 },
                      opacity: { duration: 0.6 },
                      ease: "easeInOut",
                    }}
                    className="text-lg mt-2"
                  >
                    <span>
                      <span className="font-semibold">{item.para2}</span>:{" "}
                    </span>
                    {item.Des2}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2,
                      x: { type: "spring", stiffness: 30 },
                      opacity: { duration: 0.6 },
                      ease: "easeInOut",
                    }}
                    className="text-lg mt-2"
                  >
                    <span>
                      <span className="font-semibold">{item.para3}</span>:{" "}
                    </span>
                    {item.Des3}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2,
                      x: { type: "spring", stiffness: 30 },
                      opacity: { duration: 0.6 },
                      ease: "easeInOut",
                    }}
                    className="text-lg mt-2"
                  >
                    <span>
                      <span className="font-semibold">{item.para4}</span>:{" "}
                    </span>
                    {item.Des4}
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;

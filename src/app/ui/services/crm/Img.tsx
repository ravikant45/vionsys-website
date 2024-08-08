"use client";
import React from "react";
import { motion } from "framer-motion";
const Img = () => {
  const keyPoints = [
    {
      id: 1,
      title: "Growth-Focused Strategy",
      description:
        "We don't just implement CRMs; we create a strategy to drive your company's growth. We will identify areas for improvement and use the CRM to increase sales, marketing, and customer service efficiency.",
    },
    {
      id: 2,
      title: "Deep Industry Expertise",
      description:
        "Our consultants are not masters of all trades. We understand your industry and can individually design the CRM to your firm, meeting your unique demands and goals.",
    },
    {
      id: 3,
      title: "Data-Driven Decisions",
      description:
        "We are not fond of guesswork. We analyze data to improve CRM operations for clients and ensure that the most value insights are derived from customer data.",
    },
    {
      id: 4,
      title: "Unwavering Support",
      description:
        "We're in for the long haul. You'll have a personal point of contact who will be with you every step of the way, offering consultation, support, and advice on how to build your business in all areas.",
    },
    {
      id: 5,
      title: "Focus on User Success",
      description:
        "A strong CRM is meaningless if your staff does not use it. We focus on assisting users in learning and effectively using the system through training and continuous support in order to maximize benefits.",
    },
  ];
  return (
    <div className="bg-white relative w-screen h-auto">
      <section id="features" className="block px-4 py-6 md:py-12 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="relative mx-auto max-w-8xl text-center"
        >
          <span className="font-extrabold text-MainHeading capitalize">
            Why choose us
          </span>
          <p className="md:text-2xl  font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-SubHeading to-SubHeading md:px-52 text-center">
            Other CRM consultants can set you up with a brand-new system. But at
            Vionsys, we go beyond basic implementation. We become an extension
            of your team, personally committed to your long-term success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {keyPoints.map((point) => (
            <div
              key={point.id}
              className="rounded-md border border-neutral-800 bg-[rgba(255,255,255,0.4)] p-6 text-center shadow"
            >
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bolt text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                </svg>
              </div>
              <h3 className="mt-6 text-black font-medium text-lg">
                {point.title}
              </h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">
                {point.description}
              </p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Img;

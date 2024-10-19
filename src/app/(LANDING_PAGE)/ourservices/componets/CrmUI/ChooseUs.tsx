"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type HeroCrmChooseProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChooseUs: React.FC<HeroCrmChooseProps> = ({
  showModal,
  setShowModal,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const points = [
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
    <div className="min-h-screen p-4 md:p-8 bg-dot-slate-300">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-MainHeading font-extrabold mb-4 text-center"
        >
          Why Choose Us?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-SubHeading font-bold text-center mb-8"
        >
          Other CRM consultants may set up your system, but at Vionsys, we go
          further becoming part of your team and dedicated to your long-term
          success.
        </motion.p>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
          {points.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 ${
                index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
              }`}
            >
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "right-0" : "left-0"
                } w-4 h-4 bg-blue-500 rounded-full transform -translate-y-1/2 ${
                  index % 2 === 0 ? "-translate-x-1/2" : "translate-x-1/2"
                }`}
              ></div>
              <div
                className="bg-blue-100 p-6 rounded-lg shadow-md cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <h3 className="text-xl font-bold text-black mb-2">
                  {point.title}
                </h3>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-800 mb-4">{point.description}</p>
                      <Button
                        onClick={() => {
                          setShowModal(!showModal);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Contact Us Now <FaArrowRight className="ml-2" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

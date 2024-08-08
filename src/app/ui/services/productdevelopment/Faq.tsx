"use client";
import React from "react";
import FAQData, { FAQItem } from "@/app/ui/services/data/ProductFAQ";
import { motion } from "framer-motion";
const Faq = () => {
  return (
    <div>
      <section className="bg-slate-50">
        <div className="text-center pb-4">
          <motion.h3
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="lg:text-4xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-700 z-10  py-8"
          >
            Frequently Asked <span className="text-blue1">Questions</span>
          </motion.h3>
        </div>
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="">
            <ul className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {FAQData.map((data: FAQItem) => (
                <li key={data.qid} className="text-left mb-2 border-b-2 pb-2">
                  <div>
                    <motion.h4
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.2,
                        scale: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.6 },
                        ease: "easeInOut",
                      }}
                      className="font-semibold text-lg"
                    >
                      {data.question}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.2,
                        scale: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.6 },
                        ease: "easeInOut",
                      }}
                      className="text-gray-600"
                    >
                      {data.answer}
                    </motion.p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;

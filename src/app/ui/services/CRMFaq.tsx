"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
interface FAQItem {
  question: string;
  answer: string;
}
const CRMFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs: FAQItem[] = [
    {
      question: "What is CRM, and why is it important for businesses?",
      answer:
        "CRM stands for Customer Relationship Management. It's crucial for businesses because it helps manage customer interactions and data, leading to improved customer satisfaction and loyalty, ultimately boosting revenues.",
    },
    {
      question: "What are the key benefits of implementing a CRM system?",
      answer:
        "Benefits include improved customer relationships, increased efficiency, better decision-making, enhanced marketing and sales effectiveness and improved customer service.",
    },
    {
      question:
        "What are the different types of CRM systems available, and how do they differ?",
      answer:
        "There are operational CRM, analytical CRM and collaborative CRM. Operational focuses on customer-facing processes, analytical on data analysis and collaborative on interdepartmental communication.",
    },
    {
      question:
        "What are some common challenges associated with implementing a CRM system?",
      answer:
        "Challenges include resistance to change, data quality issues, integration challenges, lack of executive buy-in and training/support needs.",
    },
    {
      question:
        "How can businesses measure the success of their CRM initiatives?",
      answer:
        "Success can be measured through metrics like customer satisfaction, sales performance, marketing effectiveness, customer service quality and overall business performance.",
    },
  ];

  return (
    <>
      {/* Faq section */}
      <motion.section
        initial={{ opacity: 0, scale: 1.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="w-[100vw] py-6 bg-dot-slate-300"
      >
        <div className="relative w-full bg-white md:px-6 px-4 pt-10 md:pb-8 pb-4  shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
          <div className="mx-auto md:px-5 px-2">
            <div className="flex flex-col items-center">
              <h2 className="text-MainHeading font-extrabold">FAQ</h2>
              <p className="mt-3 text-SubHeading font-bold ">
                Frequently asked questions
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-5">
                  <details className="group">
                    <summary
                      onClick={() => toggleFAQ(index)}
                      className="flex cursor-pointer list-none items-center justify-between font-medium"
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`transition ${
                          openIndex === index ? "group-open:rotate-180" : ""
                        }`}
                      >
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    {openIndex === index && (
                      <p className="group-open:animate-fadeIn mt-3 text-gray1">
                        {faq.answer}
                      </p>
                    )}
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default CRMFaq;

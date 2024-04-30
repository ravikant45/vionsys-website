"use client";
import React, { useState } from "react";
import Image from "next/image";

import Empower from "@/app/ui/crm/Empower";
import Importance from "@/app/ui/crm/Importance";

import CRM from "../../../../public/assets/services/crm/CRM.png";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Relationship Management Services",
};
interface FAQItem {
  question: string;
  answer: string;
}

const Page: React.FC = () => {
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
        "Benefits include improved customer relationships, increased efficiency, better decision-making, enhanced marketing and sales effectiveness, and improved customer service.",
    },
    {
      question:
        "What are the different types of CRM systems available, and how do they differ?",
      answer:
        "There are operational CRM, analytical CRM, and collaborative CRM. Operational focuses on customer-facing processes, analytical on data analysis, and collaborative on interdepartmental communication.",
    },
    {
      question:
        "What are some common challenges associated with implementing a CRM system?",
      answer:
        "Challenges include resistance to change, data quality issues, integration challenges, lack of executive buy-in, and training/support needs.",
    },
    {
      question:
        "How can businesses measure the success of their CRM initiatives?",
      answer:
        "Success can be measured through metrics like customer satisfaction, sales performance, marketing effectiveness, customer service quality, and overall business performance.",
    },
  ];

  return (
    <div className="pt-16 overflow-x-hidden">
      <div className="grid overflow-x-hidden md:grid-cols-2 md:px-6 px-2 py-4 grid-cols-1 bg-slate-100 justify-items-center items-center">
        <div className="md:px-4 px-2">
          <h1 data-aos="fade-left" className="text-2xl text-orange font-bold">
            Customer Relationship Management (CRM)
          </h1>
          <h3
            data-aos="fade-right"
            className="text-sm py-1 text-gray1 pb-4 italic"
          >
            Selecting Excellence: Elevate Your CRM Experience with Us.
          </h3>
          <p data-aos="fade-down" className="text-sm text-black py-8">
            Discover CRM excellence with our innovative methodology, blending
            precision and innovation for unparalleled success. Seamlessly
            integrating technology and data-driven insights, we propel
            businesses to enduring triumphs and elevate customer journeys.
            Experience the pinnacle of effective work, meticulously designed for
            sustained growth and unmatched satisfaction.
          </p>
        </div>
        <div>
          <Image data-aos="zoom-in" src={CRM} alt="" width="800" height="800" />
        </div>
      </div>
      <Empower />
      <Importance />

      {/* Faq section */}
      <section data-aos="zoom-in" className="w-[100vw] py-6">
        <div className="relative w-full bg-white md:px-6 px-4 pt-10 md:pb-8 pb-4  shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
          <div className="mx-auto md:px-5 px-2">
            <div className="flex flex-col items-center">
              <h2 className="text-center text-3xl font-bold tracking-tight md:text-5xl text-orange">
                FAQ
              </h2>
              <p className="mt-3 text-lg text-gray1 md:text-xl">
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
      </section>

      {/* Contact us and schedule a meet section */}
      <ScheduleMeetAndContactCTA />
    </div>
  );
};

export default Page;

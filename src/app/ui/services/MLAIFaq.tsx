
"use client";
import React, { useState } from "react";
interface FAQItem {
    id: number;
    question: string;
    ans: string;
 
}
const MLAIFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs: FAQItem[] = [
    {
        id: 1,
        question:"How can Machine Learning and AI benefit my business?",
        ans:"Machine Learning and AI can help your business by automating processes, enhancing decision-making through predictive analytics, improving customer experiences, optimizing operations and driving innovation. These technologies can uncover insights from data that can lead to cost savings, increased revenue and competitive advantages."
      },
      {
        id: 2,
        question:"How do you ensure the reliability and accuracy of AI/ML models?",
        ans:"We ensure reliability and accuracy through rigorous testing and validation processes. This includes cross-validation, A/B testing, performance monitoring and continuous model refinement. We use metrics such as accuracy, precision, recall and F1-score to evaluate model performance."
      },
      {
        id: 3,
        question:"How do you address data privacy and security in AI/ML projects?",
        ans:"We prioritize data privacy and security by adhering to strict data governance practices. This includes data anonymization, encryption, access controls and compliance with regulations like GDPR and CCPA. Our solutions are designed to ensure data integrity and confidentiality."
      },
      {
        id: 4,
        question:"What is the typical timeline for developing an AI/ML solution?",
        ans:"The timeline varies based on project complexity and requirements. A simple proof of concept can take a few weeks while a full-scale deployment might take several months. We provide detailed project timelines after an initial consultation and needs assessment."
      },
      {
        id: 5,
        question:"What services does your company offer in Machine Learning and AI?",
        ans:"We offer a comprehensive range of Machine Learning and AI services including consulting, custom model development, data analysis, model training, deployment, integration and ongoing support and maintenance."
      },
      {
        id: 6,
        question:" How do you stay updated with the latest advancements in Machine Learning and AI?",
        ans:"Our team continuously engages in professional development, attends industry conferences, participates in research,and collaborates with academic institutions to stay at the forefront of Machine Learning and AI advancements. This ensures that we deliver cutting-edge solutions to our clients."
      },
  ];

  return (
    <>
      {/* Faq section */}
      <section data-aos="zoom-in" className="w-[100vw] py-6 bg-dot-slate-300">
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
                        {faq.ans}
                      </p>
                    )}
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MLAIFaq;

import React from "react";
import FAQData, { FAQItem } from "@/app/ui/services/data/ProductFAQ";

const Faq = () => {
  return (
    <div>
      <section className="bg-slate-50">
        <div className="text-center pb-4">
          <h3
            data-aos="fade-left"
            data-aos-duration="500"
            className="lg:text-4xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-700 z-10  py-8"
          >
            Frequently Asked <span className="text-blue1">Questions</span>
          </h3>
        </div>
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="">
            <ul className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {FAQData.map((data: FAQItem) => (
                <li key={data.qid} className="text-left mb-2 border-b-2 pb-2">
                  <div>
                    <h4
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      className="font-semibold text-lg"
                    >
                      {data.question}
                    </h4>
                    <p
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      className="text-gray-600"
                    >
                      {data.answer}
                    </p>
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

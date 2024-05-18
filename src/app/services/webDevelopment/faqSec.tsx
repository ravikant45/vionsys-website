import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa';
import webdevServicesData from "@/app/ui/services/data/WebdevServicesData";

const faqSec: React.FC  = () => {
    const data = webdevServicesData;
  return (
    <div>
    <section>
        <div className=" bg-dot-zinc-300">
          <div className=" max-w-screen-xl pt-4 mx-auto pb-16 sm:pt-6 sm:pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
          <div className="flex justify-center">
        <h2 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-blue1 ">
        Frequently asked questions?
      </h2>
    </div>
            <div data-aos='zoom-out' className="mt-6 border-t-2 border-orange pt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12">

                {data?.faq.map((data: any) => {
                  return (
                    <div className="h-full py-4 px-6 border border-blue1 border-t-0 border-l-0 rounded-br-xl">
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
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default faqSec;
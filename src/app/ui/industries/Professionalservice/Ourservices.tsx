import React from "react";
import { features } from "@/utils/professionalservice";

const Ourservices: React.FC = () => {
  return (
    <main>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl">
          <h2 className="max-w-lg text-MainHeading text-center font-bold tracking-tight sm:text-4xl md:mx-auto">
            Our Professional Services
          </h2>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2 bg-dot-slate-700 px-4 py-4">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="col-span-full text-center mb-4">
                <h3 data-aos="fade-up" data-aos-duration="600" className="max-w-lg font-sans bg-slate-100 rounded-2xl p-2 text-SubHeading font-bold leading-none tracking-tight md:mx-auto">
                  {feature.title}
                </h3>
              </div>
              {/* First card */}
              <div data-aos="fade-right" data-aos-duration="600" className="duration-300 transform bg-white border-l-4 border-blue-700 hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                  <h6 className="mb-2 font-semibold leading-5">
                    {feature.sub1}
                  </h6>
                  <p className="text-sm text-cardPara">{feature.desc1}</p>
                </div>
              </div>
              {/* Second card */}
              <div className="duration-300 transform bg-white border-l-4 border-blue-700 hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                  <h6 className="mb-2 font-semibold leading-5">
                    {feature.sub2}
                  </h6>
                  <p className="text-sm text-gray-900">{feature.desc2}</p>
                </div>
              </div>
              {/* Third card */}
              <div data-aos="fade-left" data-aos-duration="600" className="duration-300 transform bg-white border-l-4 border-blue-700 hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                  <h6 className="mb-2 font-semibold leading-5">
                    {feature.sub3}
                  </h6>
                  <p className="text-sm text-gray-900">{feature.desc3}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Ourservices;

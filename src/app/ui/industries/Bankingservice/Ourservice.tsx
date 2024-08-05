import React from "react";
import {services} from "@/utils/bankingservice"

const Ourservice: React.FC = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="font-bold text-MainHeading text-center border-t-4 py-8  border-blue-600">
          Our Banking Services
        </h1>
        {services.map((service, index) => (
          <section className="bg-grid-blue-100 py-5">
            <React.Fragment key={index}></React.Fragment>
            <h2 data-aos="fade-up" data-aos-duration="700" className="font-semibold text-SubHeading text-center md:mx-72 md:my-10 bg-blue-100 rounded-md">
              {service.title}
            </h2>
            {/* Main section*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First card */}
              <div data-aos="fade-right" data-aos-duration="700" className="bg-white rounded-lg shadow-lg p-8">
                <div className="border-t-4 border-blue-600 py-1 w-14"/> 
                <h3 className="font-semibold leading-5 mb-4 ">{service.sub1}</h3>
                <p className="text-gray-700">{service.desc1}</p>
              </div>
              {/* Second card */}
              <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="border-t-4 border-blue-600 py-1 w-14"/> 
                <h2 className="font-semibold leading-5 mb-4">{service.sub2}</h2>
                <p className="text-gray-700">{service.desc2}</p>
              </div>
              {/* Third card */}
              <div data-aos="fade-left" data-aos-duration="700" className="bg-white rounded-lg shadow-lg p-8">
              <div className="border-t-4 border-blue-600 py-1 w-14"/> 
                <h2 className="font-semibold leading-5 mb-4">{service.sub3}</h2>
                <p className="text-gray-700">{service.desc3}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Ourservice;

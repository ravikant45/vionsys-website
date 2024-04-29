import React from 'react';

import Finance from '/public/assets/Industries/Finance.jpg';
import Telecom from '/public/assets/Industries/Telecom.jpg';
import Image from 'next/image';

const FirstSection = () => {
  const keys = [
    {
      id: 1,
      title: "Software Solutions",
    },
    {
      id: 2,
      title: "Data Analytics and Business Intelligence",
    },
    {
      id: 3,
      title: "Cybersecurity Solutions",
    },
    {
      id: 4,
      title: "Cloud Computing Services",
    },
    {
      id: 5,
      title: "Mobile Banking and Payment Solutions",
    },
    {
      id: 6,
      title: "Regulatory Compliance Solutions",
    },
    {
      id: 7,
      title: "CRM Systems",
    },
    {
      id: 8,
      title: "Robotic Process Automation",
    },
    {
      id: 9,
      title: "Artificial Intelligence and Machine Learning",
    },
  ];
  return (
    <div>
      <section>
        <div className="bg-black">
          <Image src={Finance} alt="" className="h-[50vh] opacity-45" />
          <div className="absolute md:left-1/2 md:top-32 top-20 px-3 flex justify-center items-center flex-col transform text-white">
            <h1 className="md:text-2xl underline font-bold text-orange text-center">
              Finance Sector
            </h1>
            <p className="my-3">
              We offer tailored IT solutions for the finance sector, enabling
              institutions to innovate, optimize operations, and enhance
              customer service. Our advanced technologies, including AI and
              blockchain, empower clients to streamline processes, mitigate
              risks, and capitalize on opportunities. By partnering with us,
              financial institutions can leverage technology to stay competitive
              and better serve their customers in the digital age.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col py-4 gap-4">
          <p className="md:text-2xl font-bold text-orange md:px-10 px-4 ">
            Key offerings:
          </p>
          <div className="flex flex-wrap gap-4 px-6 justify-center text-lg font-serif">
            {keys.map((offer) => (
              <h1
                key={offer.id}
                className="bg-gray-100 flex-grow text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
              >
                {offer.title}{" "}
              </h1>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="grid overflow-x-hidden md:grid-cols-2 px-6 grid-cols-1 bg-slate-100 justify-items-center items-center">
          <div className="">
            <p className="underline font-semibold text-2xl text-orange">Telecommunication Sector</p>
            <p className="text-lg mt-5 text-black">Ensure the protection of your brand with our Cybersecurity & IT Solutions</p>
            <p className="text-sm mt-5 mb-5">
              Choose us for your IT requirements as we provide innovative
              solutions, have a team of highly skilled experts, provide reliable
              support and prioritize customer satisfaction to propel your
              business towards success.
            </p>
            <div className="grid grid-cols-2 justify-center border rounded-lg">
              <ul className="bg-white rounded-lg w-96 text-gray-900">
                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Network Infrastructure</li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">Software Solutions</li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">Data Management and Analytics</li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">Cybersecurity</li>
                <li className="px-6 py-2 w-full rounded-b-lg">Cloud Services</li>
              </ul>
            </div>
          </div>
          <div>
            <Image src={Telecom} quality={100} alt="" className="p-6" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstSection;

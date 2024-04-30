import React from 'react';

import BankingC from '/public/assets/Industries/bankingC.jpg';
import Ecomm from '/public/assets/Industries/Ecomm.jpeg';
import Finance from '/public/assets/Industries/Finance.jpg';
import Telecom from '/public/assets/Industries/Telecom.jpg';
import Image from 'next/image';

import KeyOfferingIndustriesG from '@/utils/KeyOfferingIndustriesG';
import KeyOfferingIndustriesL from '@/utils/KeyOfferingIndustriesL';

export interface Key {
  id: number;
  title: string;
}

const FirstSection = () => {
  const keys:Key[] = [
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

  const List:Key[] = [
    {
      id: 1,
      title: "Network Infrastructure",
    },
    {
      id: 2,
      title: "Software Solutions",
    },
    {
      id: 3,
      title: "Data Management and Analytics",
    },
    {
      id: 4,
      title: "Cybersecurity",
    },
    {
      id: 5,
      title: "IoT (Internet of Things)",
    },
    {
      id: 6,
      title: "Next-Generation Technologies",
    },
    {
      id: 7,
      title: "Cloud Services",
    },
  ];

  return (
    <div>
      <section>
        <div className="bg-black">
          <Image src={Finance} alt="" className="h-[50vh] opacity-45" />
          <div className="absolute md:left-1/2 md:top-32 top-20 px-3 flex justify-center items-center flex-col transform text-white">
            <h1 data-aos='fade-right' className="md:text-2xl underline font-bold text-orange text-center">Finance Sector</h1>
            <p data-aos='fade-left' className="my-3">
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
        {
          <KeyOfferingIndustriesG keys={keys} />
        }
      </section>
      <section>
        <div className="grid overflow-x-hidden md:grid-cols-2 px-6 grid-cols-1 bg-slate-100 justify-items-center items-center py-6">
          <div className="">
            <p data-aos='fade-up' className="underline font-semibold text-2xl text-orange">Telecommunication Sector</p>
            <p data-aos='fade-left' className="text-lg mt-5 text-black">Ensure the protection of your brand with our Cybersecurity & IT Solutions</p>
            <p data-aos='fade-right' className="text-sm mt-5 mb-5">
              Choose us for your IT requirements as we provide innovative
              solutions, have a team of highly skilled experts, provide reliable
              support and prioritize customer satisfaction to propel your
              business towards success.
            </p>
            <p data-aos='fade-left' className="md:text-2xl font-bold text-[#3469bc] md:px-6 px-4 py-3">Key offerings:</p>
            {
              <KeyOfferingIndustriesL List={List}/>
            }
          </div>
          <div data-aos='fade-right'>
            <Image src={Telecom} quality={100} alt="" className="p-6" />
          </div>
        </div>
      </section>
      <section>
        <div className='grid overflow-x-hidden md:grid-cols-2 px-6 grid-cols-1 py-10 justify-items-center items-center'>
          <div data-aos='fade-left'>
          <Image src={BankingC} quality={100} alt="" className='md:px-4 px-2'/>
          </div>
          <div>
            <p data-aos='fade-up' className="underline font-semibold text-2xl text-orange">Banking Sector</p>
            <p data-aos='fade-up' className="text-sm mt-5 mb-5">Our company plays a pivotal role in modernizing the baking industry by offering cutting-edge solutions. We empower bakeries to operate with greater efficiency, enabling them to deliver superior products and services while seamlessly adapting to evolving consumer preferences in today's digital landscape.</p>
            <div className=''>
            <p data-aos='fade-left' className="md:text-2xl font-bold text-[#3469bc] md:px-6 px-4 py-3">Key offerings:</p>
              <ul className="list-disc list-inside font-semibold">
                <li data-aos='fade-right' className='hover:bg-[#7ca4d6] py-2'>Digital Transformation</li>
                <li data-aos='fade-left' className='hover:bg-[#7ca4d6] py-2'>Cybersecurity</li>
                <li data-aos='fade-right' className='hover:bg-[#7ca4d6] py-2'>Customer Experience</li>
                <li data-aos='fade-left' className='hover:bg-[#7ca4d6] py-2'>Cloud Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="bg-black relative">
          <Image src={Ecomm} alt="" className="z-0 h-[80vh] opacity-45" />
          <div className="absolute md:left-1/2 z-10 md:top-80 top-48 px-3 flex justify-center items-center flex-col transform text-white">
            <h1 data-aos='fade-left' className="md:text-2xl underline font-bold text-orange text-center">E-commerce Sector</h1>
            <p data-aos='fade-right' className="my-3">We are here to revolutionize e-commerce. We offer a suite of vital services that power your online success. From crafting seamless websites and apps to providing invaluable insights with big data analytics, we have got you covered. Our expertise extends to personalized recommendations, supply chain optimization, and top-notch security solutions. Plus, we are dedicated to boosting your mobile commerce efforts and enhancing customer relationships. Count on us to be your ultimate tech partner in conquering the digital world!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstSection;

"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

import PharmaContent1 from "/public/assets/Industries/PharmaContent1.jpeg";
import PharmaContent2 from "/public/assets/Industries/PharmaContent2.png";
import PharmaContent3 from "/public/assets/Industries/PharmaContent3.jpg";
import Telecom from "/public/assets/Industries/Telecom.jpg";
import Ecomm from "/public/assets/Industries/Ecomm.jpeg";
import insurance from "/public/assets/Industries/insurance.jpg";


{/* Pharma array*/ }
const content3 = [
  {
    title: "Pharmaceutical Industry",
    description:
      "IT companies offer specialized solutions for the pharmaceutical industry to ensure compliance with regulations, enhance quality management, streamline clinical trials, optimize supply chain operations, manage pharmacovigilance, derive insights from data analytics, enable digital marketing and sales and integrate with healthcare IT systems. These solutions help pharmaceutical companies improve efficiency, ensure product safety and efficacy, accelerate time-to-market and drive innovation in a highly regulated and competitive market landscape.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={PharmaContent1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Pharmacovigilance Systems:",
    description:
      "Pharmacovigilance software enables pharmaceutical companies to monitor and manage the safety of their products throughout their lifecycle. It includes features for adverse event reporting, safety surveillance, signal detection, risk management and regulatory reporting. These systems help companies comply with pharmacovigilance regulations and ensure the safety and efficacy of their products.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={PharmaContent2}
          width={500}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Why Choose Us?",
    description:
      "We prioritize quality and reliability in our software solutions, ensuring that they meet the highest standards of performance, security and scalability. Our solutions undergo rigorous testing and validation processes to ensure they deliver consistent results and meet customer expectations. By leveraging the latest technologies and industry best practices, we ensure that our software remains ahead of the curve. Additionally, our dedicated support team is always ready to assist, ensuring a seamless experience for our clients.",
    content: (
      <Image
        src={PharmaContent3}
        width={500}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
];

export interface Key {
  id: number;
  title: string;
}

const SecondSection = () => {
  return (
    <div>
      {/* Pharma */}
      <section>
        <div className="bg-black relative">
          <Image
            src="/Pharma.jpg"
            alt=""
            className="lg:h-[50vh] h-auto lg:w-screen w-auto opacity-55"
            height={300}
            width={900}
          />
          <div className="absolute inset-0 flex justify-center items-center flex-col text-white">
            <h1 className="md:text-6xl text-xl font-bold text-white text-center">
              Pharma
            </h1>
          </div>
        </div>

        <div className="lg:h-auto">
          <StickyScroll content={content3} />
        </div>
      </section>
      {/* Telecom Sector */}
      <section>
        <div className="flex flex-col gap-2 md:flex-row justify-center w-full px-2 py-2">
          <div data-aos="fade-right" className=" md:order-2 order-1 md:w-1/2 w-full">
            <Image src={Telecom} alt="" className="md:p-5" />
          </div>
          <div className="md:order-1 order-2 m-2 h-[auto] w-full md:w-1/2">
            <p
              data-aos="fade-up"
              className="font-extrabold md:text-MainHeading text-2xl text-[#215cbc]"
            >
              Telecommunication Sector
            </p>
            <p data-aos="fade-left" className="md:text-SubHeading text-xl text-[#e57e2c] font-bold md:w-[50vw] pt-2">
              Ensure the protection of your brand with our Cybersecurity & IT
              Solutions
            </p>
            <p data-aos="fade-right" className="text-paragraph pt-3">
              Choose us for your IT requirements as we provide innovative
              solutions, have a team of highly skilled experts, provide reliable
              support and prioritize customer satisfaction to propel your
              business towards success.
            </p>
            <div className="md:w-1/3 lg:w-4/5">
              <h3 data-aos="fade-right" className="text-ThirdHeading font-bold pt-2">
                Key Offerings:
              </h3>
              <ul className="bg-white rounded-lg w-full text-paragraph font-medium list-inside list-disc text-wrap lg:text-nowrap">
                <li data-aos='fade-left' className="md:px-6 px-2 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc">
                  Network Infrastructure
                </li>
                <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Software Solutions
                </li>
                <li data-aos='fade-left' className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Data Management and Analytics
                </li>
                <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Cybersecurity
                </li>
                <li data-aos='fade-left' className="md:px-6 px-2 py-2 w-full border-b border-gray-400 hover:bg-blue-400">
                  Internet of Things (IoT)
                </li>
                <li data-aos='fade-left' className="md:px-6 px-2 py-2 w-full border-b border-gray-400 hover:bg-blue-400">
                  Next-Generation Technologies
                </li>
                <li data-aos='fade-left' className="md:px-6 px-2 py-2 w-full border-b border-gray-400 hover:bg-blue-400">
                  Cloud Services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Insurance */}
      <section>
        <div className="flex flex-col gap-2 md:flex-row justify-center w-full px-2 py-2">
          <div className="md:w-1/2 w-full">
            <Image src={insurance} alt="" className="" />
          </div>
          <div className="bg-grey m-2 h-[auto] w-full md:w-1/2">
            <h1
              className="font-extrabold md:text-MainHeading text-2xl text-[#215cbc]"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              Insurance
            </h1>
            <h2
              className="md:text-SubHeading text-xl text-[#e57e2c] font-bold md:w-[50vw] pt-2"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Empowering insurers to adapt, innovate, and thrive.
            </h2>
            <p data-aos="fade-left" className="text-paragraph pt-3">
              Catalyzing insurance evolution through tailored IT solutions, we're
              here to streamline operations, fortify security and drive
              unparalleled growth. With our expertise, your insurance business
              will navigate the digital landscape seamlessly, delivering enhanced
              customer experiences and sustainable success.
            </p>

            <div className="md:w-1/3 lg:w-4/5 h-[auto]">
              <h3 data-aos="fade-right" className="text-ThirdHeading font-bold pt-2">
                Key Offerings:
              </h3>
              <ul className="bg-white rounded-lg w-full text-paragraph font-medium list-inside list-disc md:h-auto">
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc">
                  Risk Management
                </li>
                <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Fraud Detection
                </li>
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Data Management and Analytics
                </li>
                <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Customer Insights
                </li>
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 w-full border-b border-gray-400 hover:bg-blue-400">
                  Cloud Services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* E-Commerce Sector */}
      <section>
        <div className="bg-slate-100 grid overflow-x-hidden md:grid-cols-2 px-6 grid-cols-1 py-10 justify-items-center items-center">
          <div className="md:order-2 order-1">
            <Image src={Ecomm} alt="" className="md:px-4 px-2 py-2" quality={100} />
          </div>
          <div className="md:order-1 order-2 md:px-4 px-1">
            <h1
              data-aos="fade-left"
              className="font-extrabold md:text-MainHeading text-2xl text-[#215cbc]"
            >
              E-commerce Sector
            </h1>
            <p className="font-bold md:text-SubHeading text-xl text-[#e57e2c]">Elevate Your E-commerce with Cutting-Edge IT Solutions</p>
            <p data-aos="fade-right" className="my-3">
              We are here to revolutionize e-commerce with essential services. From seamless websites and apps to big data insights, we've got you covered. Personalized recommendations, optimized supply chain and top-notch security solutions. Boost mobile commerce and enhance customer relationships with us!
            </p>
            <div className="md:w-1/3 lg:w-4/5 h-[auto]">
              <h3 data-aos="fade-right" className="text-ThirdHeading font-bold pt-2">
                Key Offerings:
              </h3>
              <ul className="bg-white rounded-lg w-full text-paragraph font-medium list-inside list-disc md:h-auto">
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc">
                  E-commerce Website Development
                </li>
                <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Mobile App Development
                </li>
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  E-commerce Platform Integration
                </li>
                <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Cloud Services
                </li>
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 w-full border-b border-gray-400 hover:bg-blue-400">
                  Analytics and Business Intelligence
                </li>
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 w-full border-b border-gray-400 hover:bg-blue-400">
                  Security and Fraud Prevention
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;

import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

import ConstHeading from "/public/ConstHeading.jpg";
import healthcare from "/public/assets/Industries/healthcare.jpg";
import education from "/public/assets/Industries/education.jpg";
import ConstContent1 from "/public/assets/Industries/ConstContent1.jpeg";
import ConstContent2 from "/public/assets/Industries/ConstContent2.jpg";

// Construction
const content = [
  {
    title: "Features of Construction Technology",
    description:
      "Construction software often includes robust project management tools to help oversee various aspects of a construction project. This can include task scheduling, resource allocation, budget management, and timeline tracking. With these features, project managers can efficiently plan, execute, and monitor the progress of construction projects.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={ConstContent1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Collaboration Tools:",
    description:
      "Effective collaboration is essential in construction projects involving multiple stakeholders such as architects, engineers, contractors, and clients. Construction software typically provides collaboration tools such as document sharing, real-time communication, and project messaging. These tools facilitate seamless communication and collaboration among team members, leading to improved coordination and productivity.",
    content: (
      <Image
        src={ConstContent2}
        width={500}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
];

const ThirdSection = () => {
  return (
    <>
      {/* Construction Sector */}
      <section>
        <div className="bg-black relative">
          <Image
            src={ConstHeading}
            alt=""
            className="lg:h-[50vh] h-auto lg:w-screen w-auto opacity-55"
          />
          <div className="absolute inset-0 flex justify-center items-center flex-col text-white px-2">
            <h1 className="md:text-6xl text-xl  font-bold text-white text-center">
              CONSTRUCTION
            </h1>
          </div>
        </div>

        <div className="lg:h-auto">
          <StickyScroll content={content} />
        </div>
      </section>
      {/* HealthCare Sector */}
      <section>
        <div className="bg-slate-100 flex flex-col md:flex-row md:h-[auto] justify-evenly w-full px-2">
          <div className="bg-grey m-3 h-[auto] w-full md:w-1/2 md:order-1 order-2 py-5">
            <h1
              className="font-extrabold md:text-MainHeading text-2xl text-[#215cbc]"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              Healthcare
            </h1>
            <h2
              className="md:text-SubHeading text-xl text-[#e57e2c] font-bold md:w-[40vw] mt-2"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Delivering precision, enhancing care.
            </h2>
            <p data-aos="fade-left" className=" pt-3 text-left text-paragraph">
              Authorising healthcare organizations with innovative IT solutions,
              we're dedicated to revolutionizing patient care, optimizing
              operations, and ensuring data security in an ever-evolving
              landscape. From seamless integration to cutting-edge digital tools,
              we're committed to enhancing efficiency and enabling better
              outcomes.for improving lives.
            </p>
            <div className="md:w-1/3 lg:w-4/5 h-[auto]">
              <h3 data-aos="fade-right" className="text-ThirdHeading font-bold pt-2">
                Key Offerings:
              </h3>
              <ul className="bg-white rounded-lg w-full text-paragraph font-medium list-inside list-disc">
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc">
                  Healthcare Cloud Solutions
                </li>
                <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Electronic Health Records Systems
                </li>
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Data Management and Analytics
                </li>
                <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Cybersecurity Solutions
                </li>
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 w-full border-b border-gray-400 hover:bg-blue-400">
                  Telemedicine Solutions
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 m-2 md:order-2 order-1 flex items-center">
            <Image src={healthcare} alt="" className="" />
          </div>
        </div>
      </section>
      {/* Eductaion Sector */}
      <div className="flex flex-col md:flex-row justify-center gap-2  h-[auto] w-full px-2">
        <div className="m-2 md:w-1/2 w-full">
          <Image src={education} alt="" className="" />
        </div>
        <div className="bg-grey m-2 h-[auto] w-full md:w-1/2">
          <h1
            className="font-extrabold md:text-MainHeading text-2xl text-[#215cbc]"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            Education
          </h1>
          <h2
            className="md:text-SubHeading text-xl text-[#e57e2c] font-bold md:w-[50vw] md:pt-2"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Elevating education through seamless integration of technology.
          </h2>
          <p data-aos="fade-left" className="text-paragraph pt-3">
            Empowering educators and institutions with innovative IT solutions,
            we pave the way for transformative learning experiences. From
            seamless management systems to interactive platforms, our solutions
            revolutionize education delivery, ensuring efficiency,excellence.
          </p>
          <div className="md:w-1/3 lg:w-4/5 h-[auto]">
            <h3 data-aos="fade-right" className="text-ThirdHeading font-bold pt-2">
              Key Offerings:
            </h3>
            <ul className="bg-white rounded-lg text-gray-900 font-medium list-inside list-disc w-auto">
              <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc md:text-nowrap">
                Learning Management Systems (LMS)
              </li>
              <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                E-Learning Solutions
              </li>
              <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Student Information Systems (SIS)
              </li>
              <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Online Assessment and Proctoring
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Field Sector */}
      <section>
        <div className="flex flex-col md:flex bg-slate-100 md:flex-row h-auto md:justify-evenly w-full md:px-4 px-1 py-8">
          <div className="bg-grey m-3 h-auto w-full md:w-1/2 md:px-3 px-1 md:order-1 order-2">
            <h1 data-aos="fade-right" className="font-extrabold md:text-MainHeading text-2xl text-[#215cbc]">
              Field Services
            </h1>
            <h2 data-aos="fade-left" className="md:text-SubHeading text-xl text-[#e57e2c] font-bold md:w-[40vw] md:mt-2">
              Driving Business Growth Through Strategic Field Service
              Optimization.
            </h2>
            <p data-aos="fade-right" className="text-paragraph pt-3 text-left">
              Field services encompass on-site support, installation, maintenance, and troubleshooting for software products, ensuring effective implementation and utilization. Technicians resolve technical issues, provide user training, and optimize software performance at customer locations. Proactive maintenance, upgrades, and emergency support minimize downtime and ensure uninterrupted operation.
            </p>
            <div className="md:w-1/3 lg:w-4/5 h-[auto]">
              <h3 data-aos="fade-right" className="text-ThirdHeading font-bold pt-2">
                Key Offerings:
              </h3>
              <ul className="bg-white rounded-lg text-gray-900 font-medium list-inside list-disc w-auto">
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc md:text-nowrap">
                  Software Solutions
                </li>
                <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Mobile Applications
                </li>
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Cloud Services
                </li>
                <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Internet of Things Integration
                </li>
                <li data-aos="fade-left" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  IT Infrastructure Support
                </li>
                <li data-aos="fade-right" className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                  Training and Support
                </li>
              </ul>
            </div>
          </div>
          <div className=" bg-no-repeat h-auto w-full md:w-1/2 m-2 flex justify-center items-center md:order-2 order-1">
            <Image
              src="/Feild.jpg"
              alt=""
              height={1000}
              width={1000}
              className="lg:h-[60vh] h-auto lg:w-screen w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdSection;

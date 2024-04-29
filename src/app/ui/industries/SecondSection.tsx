"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import ConstHeading from "/public/ConstHeading.jpg";
import IT from "/public/ITHeading.jpg";

const content = [
  {
    title: "Features of Construction Technology",
    description:
      "Construction software often includes robust project management tools to help oversee various aspects of a construction project. This can include task scheduling, resource allocation, budget management, and timeline tracking. With these features, project managers can efficiently plan, execute, and monitor the progress of construction projects.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ConstContent1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Advantages Of Construction Management Software",
    description:
      "Construction software revolutionizes the industry by streamlining project management tasks like scheduling and budgeting, fostering seamless collaboration among stakeholders regardless of location, and facilitating quick and efficient communication. It enhances accuracy through features like BIM, optimizes document management, and saves time and money by automating processes and improving productivity. With robust risk management tools and support for regulatory compliance, construction software ensures smoother project execution, reduced errors, and enhanced overall project success.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ConstContent2.jpg"
          width={500}
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
        src="/ConstContent3.jpg"
        width={500}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Cost Estimation and Budgeting:",
    description:
      "Construction software often includes tools for cost estimation and budget management. These features help in accurately estimating project costs, including materials, labor, equipment, and overhead expenses. Budget tracking and forecasting functionalities enable project managers to monitor expenditures, identify cost overruns, and make informed decisions to keep projects within budget.",
    content: (
      <Image
        src="/ConstContent4.jpg"
        width={500}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
];

const content2 = [
  {
    title: "IT digital transformation",
    description:
      "IT digital transformation revolutionizes businesses by utilizing technology to reshape operations, enhance customer value, and stay competitive. It involves adopting digital tools like cloud computing, AI, IoT, and automation to innovate, boost efficiency, and improve experiences. This process requires both technological implementation and cultural shifts within organizations, fostering agility and responsiveness to evolving market demands. Ultimately, digital transformation empowers businesses to embrace innovation, drive growth, and remain competitive.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ITContent1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Technology Adoption:",
    description:
      "IT digital transformation involves adopting digital technologies such as cloud computing, artificial intelligence (AI), data analytics, Internet of Things (IoT), and automation to drive innovation and improve business processes. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ITContent2.jpg"
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
      "Vionsys IT Solutions boasts a team of experienced professionals with expertise in digital transformation strategies, technologies, and implementation. They have a proven track record of successfully guiding businesses through the digital transformation journey.",
    content: (
      <Image
        src="/ITContent3.jpg"
        width={500}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
];

const content3 = [
  {
    title: "Pharmaceutical Industry",
    description:
      "IT companies offer specialized solutions for the pharmaceutical industry to ensure compliance with regulations, enhance quality management, streamline clinical trials, optimize supply chain operations, manage pharmacovigilance, derive insights from data analytics, enable digital marketing and sales, and integrate with healthcare IT systems. These solutions help pharmaceutical companies improve efficiency, ensure product safety and efficacy, accelerate time-to-market, and drive innovation in a highly regulated and competitive market landscape.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/PharmaContent1.jpg"
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
      "Pharmacovigilance software enables pharmaceutical companies to monitor and manage the safety of their products throughout their lifecycle. It includes features for adverse event reporting, safety surveillance, signal detection, risk management, and regulatory reporting. These systems help companies comply with pharmacovigilance regulations and ensure the safety and efficacy of their products.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/PharmaContent2.jpg"
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
      "We prioritize quality and reliability in our software solutions, ensuring that they meet the highest standards of performance, security, and scalability. Our solutions undergo rigorous testing and validation processes to ensure they deliver consistent results and meet customer expectations.",
    content: (
      <Image
        src="/PharmaContent3.jpg"
        width={500}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
];

const SecondSection = () => {
  return (
    <div>
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

      <section>
        <div className="bg-black relative">
          <Image src={IT} alt="" className="lg:h-[50vh] h-auto lg:w-screen w-auto opacity-45" />
          <div className="absolute inset-0 flex justify-center items-center flex-col text-white">
            <h1 className="md:text-6xl text-xl font-bold text-white text-center">
              IT Digital Transformation
            </h1>
          </div>
        </div>

        <div className="lg:h-auto">
          <StickyScroll content={content2} />
        </div>
      </section>

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

      <section>
        <div className="flex flex-col md:flex md:flex-row h-auto md:justify-evenly w-full px-4 py-8">
          <div className="bg-grey m-3 h-auto w-full md:w-1/2 px-3">
            <h1 className="md:text-4xl text-xl font-extrabold text-[#3469bc] py-4">
              Field Services
            </h1>
            <h2 className="md:text-3xl text-xl font-bold text-amber-600 md:w-[40vw] mt-2">
              Driving Business Growth Through Strategic Field Service
              Optimization.
            </h2>
            <p className="md:font-medium text-gray1 pt-3 text-left">
              Field services involve providing on-site
              support, installation, maintenance, and troubleshooting services
              for software products and solutions. These services are crucial
              for ensuring that customers can effectively implement and utilize
              software to its fullest potential. Field service technicians are
              dispatched to customer locations to address technical issues,
              resolve software-related problems, and provide training and
              guidance to users. They play a critical role in maintaining
              customer satisfaction, resolving issues promptly, and optimizing
              software performance. Field services for software companies often
              include proactive maintenance, scheduled upgrades, and emergency
              support to minimize downtime and ensure uninterrupted operation of
              software systems.
            </p>
          </div>
          <div className=" bg-no-repeat h-auto w-full md:w-1/2 m-2 flex justify-center items-center ">
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
    </div>
  );
};

export default SecondSection;

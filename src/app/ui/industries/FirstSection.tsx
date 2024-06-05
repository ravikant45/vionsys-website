import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

import IT from "/public/ITHeading.jpg";
import Finance from "/public/assets/Industries/Finance.jpg";
import BankingC from "/public/assets/Industries/bankingC.jpg";
import profservice from "/public/assets/Industries/profservice.jpg";
import ITContent1 from "/public/assets/Industries/ITContent1.jpg";
import ITContent2 from "/public/assets/Industries/ITContent2.jpg";
import ITContent3 from "/public/assets/Industries/ITContent3.jpg";

{
  /* IT digital transformation array */
}
const content2 = [
  {
    title: "IT digital transformation",
    description:
      "IT digital transformation revolutionizes businesses by utilizing technology to reshape operations, enhance customer value and stay competitive. It involves adopting digital tools like cloud computing, AI, IoT and automation to innovate, boost efficiency and improve experiences. This process requires both technological implementation and cultural shifts within organizations, fostering agility and responsiveness to evolving market demands. Ultimately, digital transformation empowers businesses to embrace innovation, drive growth and remain competitive.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={ITContent1}
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
      "IT digital transformation involves adopting digital technologies such as cloud computing, artificial intelligence (AI), data analytics, Internet of Things (IoT) and automation to drive innovation and improve business processes. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={ITContent2}
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
      "Our team consists of highly experienced professionals with deep expertise in digital transformation strategies, technologies and implementation. They have a proven track record of successfully guiding businesses through their digital transformation journeys. With comprehensive knowledge of the challenges and opportunities in this field, we deliver tailored solutions that drive innovation, efficiency and growth. Whether adopting new technologies or optimizing processes, our experts are dedicated to helping businesses thrive in the digital age.",
    content: (
      <Image
        src={ITContent3}
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
// Finance Sector array
const FirstSection = () => {
  return (
    <div>
      {/* IT digital transformation */}
      <section>
        <div className="bg-black relative">
          <Image
            src={IT}
            alt=""
            className="lg:h-[50vh] h-auto lg:w-screen w-auto opacity-45"
          />
          <div className="absolute inset-0 flex justify-center items-center flex-col text-white">
            <h1 className="md:text-5xl text-xl font-bold text-white text-center">
              IT Digital Transformation
            </h1>
          </div>
        </div>

        <div className="lg:h-auto">
          <StickyScroll content={content2} />
        </div>
      </section>
      {/* Finance Sector */}
      <section>
        <div className="grid overflow-x-hidden bg-slate-100 md:grid-cols-2 px-6 grid-cols-1 py-10 justify-items-center items-center">
          <div data-aos="fade-left">
            <Image
              src={Finance}
              quality={100}
              alt=""
              className="md:px-4 px-2 py-2"
            />
          </div>
          <div className="">
            <h1
              data-aos="fade-right"
              className="font-extrabold md:text-MainHeading text-2xl text-[#215cbc]"
            >
              Finance Sector
            </h1>
            <p className="font-bold md:text-SubHeading text-xl text-[#e57e2c]">
              Driving Financial Excellence with IT Innovation.
            </p>
            <p data-aos="fade-left" className="text-base my-3">
              We offer tailored IT solutions for the finance sector, enabling
              institutions to innovate, optimize operations and enhance customer
              service. Our advanced technologies including AI and blockchain,
              empower clients to streamline processes, mitigate risks and
              capitalize on opportunities. By partnering with us, financial
              institutions can leverage technology to stay competitive and
              better serve their customers in the digital age.
            </p>
            <div className="md:w-1/3 lg:w-4/5">
              <h3
                data-aos="fade-right"
                className="text-ThirdHeading font-bold pt-2"
              >
                Key Offerings:
              </h3>
              <ul className="bg-white rounded-lg w-full text-paragraph font-medium list-inside list-disc text-wrap lg:text-nowrap">
                <li
                  data-aos="fade-left"
                  className="md:px-6 px-2 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc"
                >
                  Software Solutions & CRM Systems
                </li>
                <li
                  data-aos="fade-right"
                  className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300"
                >
                  Data Analytics and Business Intelligence
                </li>
                <li
                  data-aos="fade-left"
                  className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300"
                >
                  Cybersecurity Solutions
                </li>
                <li
                  data-aos="fade-right"
                  className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300"
                >
                  Cloud Computing Services & e-Banking
                </li>
                <li
                  data-aos="fade-left"
                  className="md:px-6 px-2 py-2 w-full border-b border-gray-400 hover:bg-blue-400"
                >
                  Robotic Process Automation
                </li>
                <li
                  data-aos="fade-left"
                  className="md:px-6 px-2 py-2 w-full border-b border-gray-400 hover:bg-blue-400"
                >
                  Artificial Intelligence and Machine Learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Professional Services */}
      <section>
        <div className="flex flex-col md:flex-row h-[auto] justify-evenly w-full px-2">
          <div className="bg-grey m-3 h-[auto] w-full md:w-1/2 md:order-1 order-2">
            <h1
              className="font-extrabold md:text-MainHeading text-2xl text-[#215cbc]"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              Professional Services
            </h1>
            <h2
              className="md:text-SubHeading text-xl text-[#e57e2c] font-bold md:w-[40vw] mt-2"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Empowering professionals to thrive in a digital-first world.
            </h2>
            <p data-aos="fade-left" className="text-paragraph pt-3">
              Approving healthcare organizations with innovative IT solutions,
              we're dedicated to revolutionizing patient care, optimizing
              operations and ensuring data security in an ever-evolving
              landscape. From seamless integration to cutting-edge digital
              tools.
            </p>
            <div className="md:w-1/3 lg:w-4/5">
              <h3
                data-aos="fade-right"
                className="text-ThirdHeading font-bold pt-2"
              >
                Key Offerings:
              </h3>
              <ul className="bg-white rounded-lg w-full text-paragraph font-medium list-inside list-disc text-wrap lg:text-nowrap">
                <li
                  data-aos="fade-left"
                  className="md:px-6 px-2 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc"
                >
                  Enterprise Resource Planning (ERP) Systems
                </li>
                <li
                  data-aos="fade-right"
                  className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300"
                >
                  Customer Relationship Management (CRM) Systems
                </li>
                <li
                  data-aos="fade-left"
                  className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300"
                >
                  Project Management Tools
                </li>
                <li
                  data-aos="fade-right"
                  className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300"
                >
                  Cybersecurity Solutions
                </li>
                <li
                  data-aos="fade-left"
                  className="md:px-6 px-2 py-2 w-full border-b border-gray-400 hover:bg-blue-400"
                >
                  Knowledge Management Systems
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 w-full m-2 md:order-2 order-1">
            <Image src={profservice} alt="" className="w-full" />
          </div>
        </div>
      </section>
      {/* Banking Sector */}
      <section>
        <div className="bg-slate-100 grid overflow-x-hidden md:grid-cols-2 px-6 grid-cols-1 py-10 justify-items-center items-center">
          <div data-aos="fade-left" className="">
            <Image
              src={BankingC}
              quality={100}
              alt=""
              className="md:px-4 px-2 py-2"
            />
          </div>
          <div className="">
            <p
              data-aos="fade-up"
              className="font-extrabold md:text-MainHeading text-2xl text-[#215cbc]"
            >
              Banking Sector
            </p>
            <p className="font-bold md:text-SubHeading text-xl text-[#e57e2c]">
              Empowering the banking sector through innovative IT solutions.
            </p>
            <p data-aos="fade-up" className="text-paragraph mt-5 mb-5">
              Our company plays a pivotal role in modernizing the banking
              industry by offering cutting-edge solutions. We empower banks to
              operate with greater efficiency, enabling them to deliver superior
              products and services while seamlessly adapting to evolving
              consumer preferences in today's digital landscape.
            </p>
            <div className="md:w-1/3 lg:w-4/5">
              <h3
                data-aos="fade-right"
                className="text-ThirdHeading font-bold pt-2"
              >
                Key Offerings:
              </h3>
              <ul className="bg-white rounded-lg w-full text-paragraph font-medium list-inside list-disc text-wrap lg:text-nowrap">
                <li
                  data-aos="fade-left"
                  className="md:px-6 px-2 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc"
                >
                  Digital Transformation
                </li>
                <li
                  data-aos="fade-right"
                  className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300"
                >
                  Cybersecurity
                </li>
                <li
                  data-aos="fade-left"
                  className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300"
                >
                  Customer Experience
                </li>
                <li
                  data-aos="fade-right"
                  className="md:px-6 px-2 py-2 border-b border-gray-400 w-full hover:bg-blue-300"
                >
                  Cloud Computing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstSection;

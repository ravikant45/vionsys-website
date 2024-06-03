import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import SoftwareTestingImage from "/public/assets/services/Testing/software-testing-banner.png";
import QualityAssuranceImage from "/public/assets/services/Testing/QAassurance.jpg";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineViewCompactAlt } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { LuFunctionSquare } from "react-icons/lu";
import { TbTestPipe } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
import { SiReadthedocs } from "react-icons/si";
import { GrPlan } from "react-icons/gr";
import { FaPenToSquare } from "react-icons/fa6";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { Metadata } from "next";
import Link from "next/link";
import Quality from "/public/assets/services/Testing/Quality.jpeg";

export const metadata: Metadata = {
  title: "Testing Services",
};

const page: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Web Automation Testing",
      description:
        "Transform your software testing with our Web Automation Testing service, streamlining processes for enhanced efficiency. By automating tests, we ensure swift, accurate results, empowering seamless software performance.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20 ">
          <TbAutomaticGearbox size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 2,
      title: "Compatibility Testing for Web Applications",
      description:
        "Ensuring that web applications function seamlessly across different web browsers, devices and screen resolutions to provide a consistent user experience.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20 ">
          <MdOutlineViewCompactAlt size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 3,
      title: "Usability Testing",
      description:
        "Assessing the user interface and experience of web applications to ensure intuitive navigation, efficient workflow and overall user satisfaction.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20">
          <MdOutlineVerifiedUser size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 4,
      title: "Performance Testing",
      description:
        "Evaluating the speed, responsiveness and scalability of web applications under various load conditions to ensure optimal performance.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20 ">
          <CgPerformance size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 5,
      title: "Functional Testing",
      description:
        "Systematically verifying each feature of the web application to ensure it operates as intended according to specifications.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20">
          <LuFunctionSquare size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 6,
      title: "Regression Testing",
      description:
        "Detecting and preventing the introduction of defects or errors in web applications due to recent code changes or updates.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20">
          <TbTestPipe size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 7,
      title: "Unit Testing",
      description:
        "Unit testing involves verifying individual components of the web application's code to ensure they function correctly in isolation. These tests are automated and focus on identifying and addressing bugs early in the development process.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20">
          <FaUnity size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 8,
      title: "Security Testing",
      description:
        "Identifying and addressing potential security vulnerabilities in web applications to safeguard against cyber threats and protect sensitive data.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20">
          <MdOutlineSecurity size={35} className="text-orange" />
        </div>
      ),
    },
  ];
  return (
    <main className="pt-16 overflow-x-hidden">
      {/* Hero Section  */}
      <section className="w-[100vw] md:h-[100vh] h-[60vh] ">
        <div className="relative w-full h-full flex justify-start items-center">
          <Image
            src={SoftwareTestingImage}
            alt=""
            className="w-full h-full z-0"
          />
          <div className="bg-transparent z-10 text-white absolute top-0  h-full flex flex-col justify-center items-start w-full px-4">
            <div className="md:w-[50%] w-full flex flex-col gap-2 p-2">
              <h4
                data-aos="fade-left"
                className="md:text-5xl text-xl font-extrabold text-orange "
              >
                Ensuring Software Stability Through Rigorous Testing
              </h4>
              <p data-aos="fade-right" className="md:text-lg text-sm py-4">
                We redefine software
                testing and quality assurance with a tailored approach that
                merges innovation and expertise. With a relentless pursuit of
                perfection, we meticulously assess, refine and optimize your
                software, ensuring robustness, security and exceptional
                performance. Trust us to elevate your software to new heights of
                reliability and user satisfaction, empowering your business for
                success in today's dynamic digital landscape.
              </p>
              <div className="md:block hidden">
                <Link href="/contact">
                  <Button data-aos="fade-right">Contact us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why to choose us for the software testing */}
      <section className="w-[100vw]">
        <div className="w-full flex flex-col gap-8 justify-center items-center md:px-4 md:py-6 py-3 px-2">
          <h2
            data-aos="fade-down"
            className="md:text-3xl text-xl font-extrabold text-orange"
          >
            Why Vionsys Excels as Your QA and Testing Partner?
          </h2>
          <div className="w-full grid md:grid-cols-2 grid-cols-1  gap-4 md:px-12">
            {/* left side */}
            <div className="flex flex-col gap-2 text-base leading-8 justify-center">
              <p data-aos="fade-left ">
                We emerge as your top-tier QA and testing partner offering unparalleled expertise. With our commitment to excellence, bolstered by cutting-edge tools and meticulous methodologies, we ensure software reliability and deliver seamless user experiences that drive exceptional business success.
              </p>
              <ul data-aos="zoom-in" className="ml-4 list-disc">
                <li>Expertise in QA and testing.</li>
                <li>Access to cutting-edge testing tools.</li>
                <li>Comprehensive QA solutions.</li>
                <li>Reliable and consistent results.</li>
              </ul>
            </div>

            {/* right side */}
            <div className="md:px-8">
              <Image
                data-aos="zoom-out"
                src={QualityAssuranceImage}
                alt=""
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Testing Services */}
      <section className="w-[100vw] dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full flex flex-col justify-center items-center gap-4 md:px-4 px-2 md:py-6 py-2">
          <h3 className="text-orange font-bold md:text-3xl text-xl relative z-20">
            Our Software Testing Services
          </h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 text-xl">
            {services.map((service) => (
              <div
                data-aos="flip-left"
                key={service.id}
                className="flex flex-col py-4 items-center gap-2"
              >
                {service.icon}
                <h4 className="text-blue3 font-bold items-center relative z-20 bg-clip-text">
                  {service.title}
                </h4>
                <p className="text-center text-base relative z-20 bg-clip-text">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo for QA & Testing */}
      <section>
        <div className="bg-black relative">
          <Image src={Quality} alt='' className="md:w-[100vw] md:h-[100vh] h-[60vh] sm:[50vh] opacity-75" quality={100} />
          <div className="bg-transparent z-10 text-white absolute top-0  h-full flex flex-col justify-center items-start w-full px-4">
            <div className="md:w-[50%] w-full flex flex-col gap-2 p-2">
              <h1 data-aos="fade-left" className="md:text-5xl text-2xl py-4 text-white font-bold">
                Below are the testing implementation steps
              </h1>
              <p data-aos="fade-right" className="md:text-lg text-sm font-medium">We implement testing follows a structured process starting with requirement understanding. Test cases are executed in a prepared environment, defects are reported and resolved through retesting and regression testing ensures stability. This culminates in comprehensive test closure and post-implementation support for seamless software deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* process of implementation */}
      <section className="w-[100vw] py-6">
        <div className="grid md:grid-cols-5 grid-cols-1 justify-center items-center gap-4 px-8">
          {/* left side */}
          <div className=" col-span-2 flex flex-col justify-center items-center gap-4 md:order-1 order-2">
            <div
              data-aos="fade-left"
              className="grid md:grid-cols-3 grid-cols-2 gap-2 border-b"
            >
              <div className="flex justify-center items-center border-r px-2 py-8">
                <div className="p-4 bg-gray2 rounded-full flex justify-center items-center">
                  <SiReadthedocs size={35} />
                </div>
              </div>
              <div className="col-span-2 flex flex-col pl-2 gap-2 py-2">
                <h3 className="text-ThirdHeading font-bold">
                  Requirement Understanding
                </h3>
                <p className="text-paragraph">
                  At the outset, we engage closely with our clients, delving
                  into their pivotal needs and aspirations. This initial phase
                  lays the groundwork for comprehending their unique
                  expectations and workflow intricacies, enabling us to
                  meticulously chart out project specifications with precision.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-right"
              className="grid md:grid-cols-3 grid-cols-2 gap-2 border-b"
            >
              <div className="flex justify-center items-center border-r px-2">
                <div className="p-4 bg-gray2 rounded-full flex justify-center items-center">
                  <GrPlan size={35} />
                </div>
              </div>
              <div className="col-span-2 flex flex-col pl-2 gap-2">
                <h3 className="text-ThirdHeading font-bold">Test Planning</h3>
                <p className="text-paragraph">
                  Crafting a thorough blueprint is our forte, encompassing
                  strategic outlines, delineated testing phases, deliverables
                  and resource requisites. This meticulous approach ensures
                  simplification and seamless implementation of the testing
                  process, driving efficiency and effectiveness throughout.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="grid md:grid-cols-3 grid-cols-2 gap-2 border-b"
            >
              <div className="flex justify-center items-center border-r px-2">
                <div className="p-4 bg-gray2 rounded-full flex justify-center items-center">
                  <FaPenToSquare size={35} />
                </div>
              </div>
              <div className="col-span-2 flex flex-col pl-2 gap-2">
                <h3 className="text-ThirdHeading font-bold">
                  Test Cases Development
                </h3>
                <p className="text-paragraph">
                  Post-test plan analysis, our QA team swiftly identifies key
                  objectives, crafting detailed test cases. This includes test
                  data, preconditions, expected results and postconditions,
                  ensuring precision in our testing approach.
                </p>
              </div>
            </div>
          </div>
          {/* middle */}
          <div className="md:flex hidden justify-center items-center md:order-2 order-1">
            <div
              data-aos="zoom-out"
              className="col-span-1 w-44 h-44 h-22 md:rounded-full bg-gray2 flex justify-center items-center border-4 border-blue1"
            >
              <h3 className="uppercase font-bold text-center text-black text-2xl">Steps of testing</h3>
            </div>
          </div>
          {/* Right side */}
          <div className="col-span-2 flex flex-col justify-center items-center gap-4 order-3">
            <div
              data-aos="fade-left"
              className="grid md:grid-cols-3 grid-cols-2 gap-2 border-b"
            >
              <div className="flex justify-center items-center border-r px-2 py-8">
                <div className="p-4 bg-gray2 rounded-full flex justify-center items-center">
                  <MdOutlineWifiProtectedSetup size={35} />
                </div>
              </div>
              <div className="col-span-2 flex flex-col pl-2 gap-2 py-2">
                <h3 className="text-ThirdHeading font-bold">
                  Environment Set-up
                </h3>
                <p className="text-paragraph">
                  After grasping the project plan and objectives, our developers
                  swiftly select optimal advanced testing tools. We meticulously
                  configure these tools for test execution, culminating in a
                  dependable testing environment to uphold the integrity of our
                  testing procedures.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-right"
              className="grid md:grid-cols-3 grid-cols-2 gap-2 border-b"
            >
              <div className="flex justify-center items-center border-r px-2">
                <div className="p-4 bg-gray2 rounded-full flex justify-center items-center">
                  <TbSettingsAutomation size={35} />
                </div>
              </div>
              <div className="col-span-2 flex flex-col pl-2 gap-2">
                <h3 className="text-ThirdHeading font-bold">
                  Test Execution & Automation
                </h3>
                <p className="text-paragraph">
                  As a premier software testing company in India, our adept QA
                  team swiftly executes and automates tests in accordance with
                  the test plan. We promptly initiate retesting to guarantee
                  flawless execution, upholding our commitment to seamless
                  software quality assurance.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="grid md:grid-cols-3 grid-cols-2 gap-2 border-b"
            >
              <div className="flex justify-center items-center border-r px-2">
                <div className="p-4 bg-gray2 rounded-full flex justify-center items-center">
                  <TbReportAnalytics size={35} />
                </div>
              </div>
              <div className="col-span-2 flex flex-col pl-2 gap-2">
                <h3 className="text-ThirdHeading font-bold">Final Report</h3>
                <p className="text-paragraph">
                  To offer a comprehensive overview for analysis, we
                  meticulously compile a detailed document summarizing the
                  entire process. This includes all tests conducted, the final
                  testing report and completion metrics, ensuring clarity and
                  transparency in our testing procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule a meet and contact us */}
      <ScheduleMeetAndContactCTA />
    </main>
  );
};

export default page;

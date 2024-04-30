import React from "react";
import Image from "next/image";
import insurance from "/public/assets/Industries/insurance.jpg";
import healthcare from "/public/assets/Industries/healthcare.jpg";
import education from "/public/assets/Industries/education.jpg";
import profservice from "/public/assets/Industries/profservice.jpg";

const ThirdSection = () => {
  return (
    <>
      {/* Parent div */}
      <div className="flex flex-col gap-2 md:flex-row justify-center w-full px-2">
        <div className="md:w-1/2 w-full">
          <Image src={insurance} alt="" className="" />
        </div>
        <div className="bg-grey m-2 h-[auto] w-full md:w-1/2">
          <h1
            className="text-3xl font-extrabold text-[#3469bc] underline"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            Insurance
          </h1>
          <h2
            className="text-2xl font-bold text-amber-600 md:w-[50vw] pt-2"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Empowering insurers to adapt, innovate, and thrive.
          </h2>
          <p className=" pt-3">
            Catalyzing insurance evolution through tailored IT solutions, we're
            here to streamline operations, fortify security, and drive
            unparalleled growth. With our expertise, your insurance business
            will navigate the digital landscape seamlessly, delivering enhanced
            customer experiences and sustainable success.
          </p>

          <div className="md:w-1/2 h-[auto]">
            <h3 className="text-[#3469bc] font-bold pt-4 w-1/2 text-xl">
              Key Offerings:
            </h3>
            <ul className="bg-white rounded-lg w-full text-gray-900 font-medium list-inside list-disc md:h-auto">
              <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc">
                Risk Management
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Fraud Detection
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Data Management and Analytics
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Customer Insights
              </li>
              <li className="px-6 py-2 w-full border-b border-gray-400 hover:bg-blue-400">
                Cloud Services
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Second div */}
      <div className="flex flex-col md:flex-row md:h-[auto] justify-evenly w-full px-2">
        <div className="bg-grey m-3 h-[auto] w-full md:w-1/2">
          <h1
            className="text-3xl font-extrabold text-[#3469bc] pt-2 underline"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            Healthcare
          </h1>
          <h2
            className="text-2xl font-bold text-amber-600 md:w-[40vw] mt-2"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Delivering precision, enhancing care.
          </h2>
          <p className=" pt-3 text-left">
            Authorising healthcare organizations with innovative IT solutions,
            we're dedicated to revolutionizing patient care, optimizing
            operations, and ensuring data security in an ever-evolving
            landscape. From seamless integration to cutting-edge digital tools,
            we're committed to enhancing efficiency and enabling better
            outcomes.for improving lives.
          </p>
          <div className="md:w-1/2 h-[auto]">
            <h3 className="text-[#3469bc] font-bold pt-4 w-1/2 text-xl">
              Key Offerings:
            </h3>
            <ul className="bg-white rounded-lg w-full text-gray-900 font-medium list-inside list-disc">
              <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc">
                Healthcare Cloud Solutions
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Electronic Health Records Systems
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Data Management and Analytics
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Cybersecurity Solutions
              </li>
              <li
                className="px-6 py-2 w-full border-b border-gray-400
                 hover:bg-blue-400"
              >
                Telemedicine Solutions
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 m-2">
          <Image src={healthcare} alt="" className="" />
        </div>
      </div>
      {/* Third Div */}
      <div className="flex flex-col md:flex-row justify-center gap-2  h-[auto] w-full px-2">
        <div className="m-2 md:w-1/2 w-full">
          <Image src={education} alt="" className="" />
        </div>
        <div className="bg-grey m-2 h-[auto] w-full md:w-1/2">
          <h1
            className="text-3xl font-extrabold text-[#3469bc] underline"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            Education
          </h1>
          <h2
            className="text-2xl font-bold text-amber-600 md:w-[50vw] pt-2"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Elevating education through seamless integration of technology.
          </h2>
          <p className=" pt-3">
            Empowering educators and institutions with innovative IT solutions,
            we pave the way for transformative learning experiences. From
            seamless management systems to interactive platforms, our solutions
            revolutionize education delivery, ensuring efficiency,excellence.
          </p>
          <div className="md:w-1/2">
            <h3 className="text-[#3469bc] font-bold pt-2 w-1/2 text-xl">
              Key Offerings:
            </h3>
            <ul className="bg-white rounded-lg text-gray-900 font-medium list-inside list-disc w-auto">
              <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc md:text-nowrap">
                Learning Management Systems (LMS)
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                E-Learning Solutions
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Student Information Systems (SIS)
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Online Assessment and Proctoring
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Fourth div started */}
      <div className="flex flex-col md:flex-row h-[auto] justify-evenly w-full px-2">
        <div className="bg-grey m-3 h-[auto] w-full md:w-1/2">
          <h1
            className="text-3xl font-extrabold text-[#3469bc] pt-2 underline"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            Professional Services
          </h1>
          <h2
            className="text-2xl font-bold text-amber-600 md:w-[40vw] mt-2"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Empowering professionals to thrive in a digital-first world.
          </h2>
          <p className=" pt-3">
            Approving healthcare organizations with innovative IT solutions,
            we're dedicated to revolutionizing patient care, optimizing
            operations, and ensuring data security in an ever-evolving
            landscape. From seamless integration to cutting-edge digital tools.
          </p>
          <div className="md:w-1/2 lg:w-2/3">
            <h3 className="text-[#3469bc] font-bold pt-4 w-1/2 text-xl">
              Key Offerings:
            </h3>
            <ul className="bg-white rounded-lg w-full text-gray-900 font-medium list-inside list-disc text-wrap lg:text-nowrap">
              <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc">
                Enterprise Resource Planning (ERP) Systems
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Customer Relationship Management (CRM) Systems
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Project Management Tools
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full hover:bg-blue-300">
                Cybersecurity Solutions
              </li>
              <li
                className="px-6 py-2 w-full border-b border-gray-400
                 hover:bg-blue-400"
              >
                Knowledge Management Systems
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 w-full m-2">
          <Image src={profservice} alt="" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default ThirdSection;

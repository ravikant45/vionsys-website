import Image from "next/image";
import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Life At Vionsys",
};

const LifeAtVionsys: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Benefits",
      description:
        "We offers a comprehensive benefits package that includes healthcare, retirement plans, wellness programs, and other perks designed to support employees' health, financial security, and overall well-being.",
      icon: (
        <div data-aos="flip-right" className="p-4  rounded-full relative z-20 ">
          <FaHandsHelping size={45} className="text-blue1" />
        </div>
      ),
    },
    {
      id: 2,
      title: "Culture",
      description:
        "At Vionsys, the company fosters a vibrant and inclusive culture that values diversity, teamwork, and respect. Employees are encouraged to bring their authentic selves to work and contribute to a positive and supportive environment.",
      icon: (
        <div data-aos="flip-right" className="p-4  rounded-full relative z-20 ">
          <FaUsersGear  size={45} className="text-blue1" />
        </div>
      ),
    },
    {
      id: 3,
      title: "Flexible Work",
      description:
        "Vionsys recognizes the importance of work-life balance and offers flexible work arrangements, including remote work options, flexible hours, and other accommodations to help employees manage their professional and personal responsibilities effectively.",
      icon: (
        <div data-aos="flip-right" className="p-4 rounded-full relative z-20">
          <FaRegClock  size={45} className="text-blue1" />
        </div>
      ),
    },
    {
      id: 4,
      title: "Innovation and Collaboration",
      description:
        " Vionsys promotes a culture of innovation and collaboration, where employees are encouraged to think creatively, share ideas, and collaborate across teams to drive business growth and achieve shared goals.",
      icon: (
        <div data-aos="flip-right" className="p-4 rounded-full relative z-20 ">
          <FaBrain  size={45} className="text-blue1" />
        </div>
      ),
    },
    {
      id: 5,
      title: "Career Development",
      description:
        " Vionsys is committed to investing in the professional development of its employees. The company offers various training programs, mentorship opportunities, and career advancement pathways to help employees grow their skills, expand their knowledge, and advance their careers within the organization.",
      icon: (
        <div data-aos="flip-right" className="p-4 rounded-full relative z-20">
          <FaBriefcase  size={45} className="text-blue1" />
        </div>
      ),
    },
    {
        id: 6,
        title: "Work-Life Balance",
        description:
          "Vionsys fosters a healthy work-life balance, empowering employees to manage their workload efficiently while prioritizing personal and family time. This dedication promotes fulfillment and well-being, enhancing both professional satisfaction and overall happiness.",
        icon: (
          <div data-aos="flip-right" className="p-4 rounded-full relative z-20">
            <FaBalanceScale  size={45} className="text-blue1" />
          </div>
        ),
      },
  ];
  return (
    <main className="pt-16 overflow-x-hidden">

      {/* Our Testing Services */}
      <section className="w-[100vw] dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full flex flex-col justify-center items-center gap-4 md:px-4 px-2 md:py-6 py-2">
          <h1 className="text-orange font-bold md:text-3xl text-xl relative z-20">
            Life At Vionsys
          </h1>
          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8">
            {services.map((service) => (
              <div
                
                key={service.id}
                className="flex flex-col justify-center items-center gap-2"
              >
                {service.icon}
                <h4  className="text-orange text-xl font-bold relative z-20 bg-clip-text">
                  {service.title}
                </h4>
                <p className="text-center text-gray1 hover:text-black text-lg relative z-20 bg-clip-text">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LifeAtVionsys;

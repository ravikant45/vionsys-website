"use client";
import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Life At Vionsys",
};

const LifeAtVionsys: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Benefits",
      description:
        "We offers a comprehensive benefits package that includes healthcare, retirement plans, wellness programs and other perks designed to support employees' health, financial security and overall well-being.",
      icon: (
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="p-4  rounded-full relative z-20 "
        >
          <FaHandsHelping size={45} className="text-blue1" />
        </motion.div>
      ),
    },
    {
      id: 2,
      title: "Culture",
      description:
        "We foster a vibrant and inclusive culture that values diversity, teamwork and respect. We encourage our employees to bring their authentic selves to work and contribute to a positive and supportive environment",
      icon: (
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="p-4  rounded-full relative z-20 "
        >
          <FaUsersGear size={45} className="text-blue1" />
        </motion.div>
      ),
    },
    {
      id: 3,
      title: "Flexible Work",
      description:
        "We recognize the importance of work-life balance and offer flexible work arrangements, including remote work options and flexible hours, to help employees manage their responsibilities effectively.",
      icon: (
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="p-4 rounded-full relative z-20"
        >
          <FaRegClock size={45} className="text-blue1" />
        </motion.div>
      ),
    },
    {
      id: 4,
      title: "Innovation and Collaboration",
      description:
        "We promotes a culture of innovation and collaboration where employees are encouraged to think creatively, share ideas and collaborate across teams to drive business growth and achieve shared goals.",
      icon: (
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="p-4 rounded-full relative z-20 "
        >
          <FaBrain size={45} className="text-blue1" />
        </motion.div>
      ),
    },
    {
      id: 5,
      title: "Career Development",
      description:
        "We invest in our employees' professional development by offering training programs, mentorship opportunities, and career advancement pathways to help them grow their skills and advance their careers.",
      icon: (
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="p-4 rounded-full relative z-20"
        >
          <FaBriefcase size={45} className="text-blue1" />
        </motion.div>
      ),
    },
    {
      id: 6,
      title: "Work-Life Balance",
      description:
        "WWe foster a healthy work-life balance, empowering employees to manage their workload efficiently while prioritizing family time. This dedication enhances professional satisfaction and happiness.",
      icon: (
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="p-4 rounded-full relative z-20"
        >
          <FaBalanceScale size={45} className="text-blue1" />
        </motion.div>
      ),
    },
  ];
  return (
    <main className="pt-16 overflow-x-hidden">
      {/* Our Testing Services */}
      <section className="w-[100vw] dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full flex flex-col justify-center items-center gap-4 md:px-4 px-2 md:py-6 py-2">
          <h2 className="text-3xl font-extrabold text-orange relative z-20">
            Life At Vionsys
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-center items-center gap-2"
              >
                {service.icon}
                <h3 className="text-[#3469bc] text-xl font-bold relative z-20 bg-clip-text">
                  {service.title}
                </h3>
                <p className="text-paragraph md:px-7 px-5 font-normal text-justify hover:text-black text-lg relative z-20 bg-clip-text">
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

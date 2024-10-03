'use client'
import Image from 'next/image';
import { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import CRM1 from '../../../landingpage/images/Crm/Crm1.jpg';
import CRM2 from '../../../landingpage/images/Crm/Crm2.jpg';
import CRM3 from '../../../landingpage/images/Crm/Crm3.jpg';
import CRM4 from '../../../landingpage/images/Crm/Crm4.jpg';
import CRM5 from '../../../landingpage/images/Crm/Crm5.jpg';
import CRM6 from '../../../landingpage/images/Crm/Crm6.jpg';
import CRM7 from '../../../landingpage/images/Crm/Crm7.jpg';
import CRM8 from '../../../landingpage/images/Crm/Crm8.jpg';


export default function CrmServices() {
  const [activeTab, setActiveTab] = useState(0)

  const points = [
    {
    image: CRM1,
      title: "CRM customization",
      description:
        "You won’t find a one-size-fits-all quality CRM. Our team tailors this platform to suit your business. We will also integrate it with your existing system. This will create a central location for all customer data.",
    },
    {
        image: CRM2,
      title: "CRM Integration",
      description:
        "CRM systems can be integrated with other corporate systems such as email marketing, accounting software and e-commerce systems to provide smooth and efficient data flow.",
    },
    {
        image: CRM3,
      title: "CRM Resources",
      description:
        "CRM systems are tailored to the specific needs of businesses and industries, including custom farms, processes and automation.",
    },
    {
        image: CRM4,
      title: "Reporting and Analysis",
      description:
        "Drive actionable insights through customer data. We’ll help set up reports and dashboards to track key metrics, identify trends, and drive data-driven decisions.",
    },
    {
        image: CRM5,
      title: "User Adoption & Training",
      description:
        "Change is hard. Extensive training will be provided to sales, marketing and customer service departments. We will train them in a way that every employee feels comfortable and confident working with this new CRM system.",
    },
    {
        image: CRM6,
      title: "CRM security",
      description:
        "Ensure customer data security, and our staff will assist you with all best practices related to CRM security & compliance of your system in accordance with various data privacy laws.",
    },
    {
        image: CRM7,
      title: "CRM Change Management",
      description:
        "As your business grows, your needs from a CRM will change. We’ll help you track changes to your CRM system, so you’re still behind.",
    },
    {
        image: CRM8,
      title: "CRM Support",
      description:
        "We don’t get lost at the end of the process. We’ll be here to address your routine questions, troubleshoot problems that arise, and collaborate whenever you need to change your CRM.",
    },
  ];

  return (
    <div id='contactbg' className="min-h-screen md:p-8 p-2 flex items-center justify-center">
      <div className="w-full rounded-2xl lg:p-12 p-3 md:p-12">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }} className="font-extrabold text-MainHeading mb-4">Empower Your Tech Company with CRM</motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.5 },
            ease: "easeInOut",
          }} className="text-SubHeading font-bold mb-8">
          Our CRM solution is tailored for tech companies, providing tools to streamline operations and drive growth.
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }} className="text-2xl font-semibold text-amber-700 mb-6">Discover Our Offerings:</motion.h2>
        <div className="flex flex-col md:flex-row">
          <motion.div initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }} className="md:w-1/3 mb-4 md:mb-0 md:pr-4">
            {points.map((point, index) => (
              <button
                key={index}
                className={`w-full text-left shadow-2xl px-4 py-3 rounded-lg mb-2 transition-colors duration-300 ${
                  activeTab === index
                    ? 'bg-orange text-white font-medium border-black'
                    : 'bg-white text-black font-medium hover:bg-blue-300'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {point.title}
              </button>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }} className="md:w-2/3 bg-white shadow-2xl rounded-lg p-6">
          <div>
            <Image src={points[activeTab].image} alt='' className='mb-4' />
          <h3 className="text-2xl font-bold text-orange mb-3">{points[activeTab].title}</h3>
            <p className="text-black font-medium mb-6">{points[activeTab].description}</p>
            <button className="group px-6 py-3 bg-amber-500 text-white rounded-full font-medium flex items-center space-x-2 transition-all duration-300 ease-in-out hover:bg-amber-600">
              <span>Get Started</span>
              <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
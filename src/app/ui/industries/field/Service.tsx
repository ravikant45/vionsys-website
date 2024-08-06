'use client'

import React from 'react'
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoMdCloudOutline } from "react-icons/io";
import { MdSmartphone } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { motion } from "framer-motion";
import Image from 'next/image';

const Service = () => {

    const services = [
        {
          id: 1,
          icons: <AiOutlineAppstoreAdd className="h-20 w-20 p-3" />,
          title: "Software Solutions",
          img: "/assets/Industries/Field/Field11.jpg",
          para1: "Field Service Management",
          Des1: "Develop and implement solutions for scheduling, and field personnel management.",
          para2: "Client Relationship Management",
          Des2: "Integrate CRM technologies to manage customer interactions, and track service history.",
          para3: "Inventory Management",
          Des3: "Offer solutions for tracking and optimization, ensuring technicians have necessary tools.",
          para4: "Reporting and Analytics",
          Des4: "Provide reporting and analytics to gain performance, identify improvements, etc.",
          className1: "border-l-0 rounded-br-xl",
          className2: "mr-0 md:mr-8 order-1",
          className3: "order-2"
        },
        {
          id: 2,
          icons: <MdSmartphone className="h-20 w-20 p-3" />,
          title: "Mobile Applications",
          img: "/assets/Industries/Field/Field2.jpeg",
          para1: "Field Technician Apps",
          Des1: "Develop apps for technicians to access work info, update status, and report issues in real-time.",
          para2: "Customer Service Apps",
          Des2: "Develop apps for customers to request services, check status, and give feedback.",
          para3: "Offline Functionality",
          Des3: "Ensure apps work offline to support staff in areas with limited connectivity.",
          para4: "Geolocation and Mapping",
          Des4: "Use geolocation to optimize routes, reduce travel times, and enhance response times.",
          className1: "border-r-0 rounded-bl-xl",
          className2: "ml-0 md:ml-8 md:order-2 order-1",
          className3: "md:order-1 order-2",
        },
        {
          id: 3,
          icons: <IoMdCloudOutline className="h-20 w-20 p-3" />,
          title: "Cloud Services",
          img: "/assets/Industries/Field/Field3.jpeg",
          para1: "Cloud-Based Field Management",
          Des1: "Offer cloud systems for real-time data access and collaboration.",
          para2: "Data Storage and Security",
          Des2: "Provide secure cloud storage solutions and ensure compliance with regulations.",
          para3: "Disaster Recovery and Backup",
          Des3: "Implemented disaster recovery and backup solutions to keep the company on track. ",
          para4: "Hybrid and Multi-Cloud Solutions",
          Des4: "Create strategies to maximize performance, cost-efficiency, and security across cloud platforms.",
          className1: "border-l-0 rounded-br-xl",
          className2: "mr-0 md:mr-8 order-1",
          className3: "order-2"
        },
        {
          id: 4,
          icons: <FaLink className="h-20 w-20 p-3" />,
          title: "IoT Integration",
          img: "/assets/Industries/Field/Field4.jpeg",
          para1: "IoT-Enabled Devices",
          Des1: "Use IoT for device tracking, asset location, and predictive maintenance.",
          para2: "Remote Diagnostics",
          Des2: "Implement remote diagnostics for problem-solving and failure prediction.",
          para3: "Data Analytics",
          Des3: "Analyze IoT data to gain actionable insights, improve efficiencies, and improve service delivery.",
          para4: "Connected Workforce",
          Des4: "Technologies and devices that harness the power of IoT to improve communication, and productivity. ",
          className1: "border-r-0 rounded-bl-xl",
          className2: "ml-0 md:ml-8 md:order-2 order-1",
          className3: "md:order-1 order-2",
        },
        {
          id: 5,
          icons: <FaNetworkWired className="h-20 w-20 p-3" />,
          title: "IT Infrastructure Support",
          img: "/assets/Industries/Field/Field5.jpg",
          para1: "Network Management",
          Des1: "Provide solutions for reliable and secure field communications for field operations.",
          para2: "System Integration",
          Des2: "Ensure seamless to create a harmonious and efficient field service environment.",
          para3: "Hardware and Device Support",
          Des3: "Offer support for equipment and hardware, including troubleshooting and maintenance.",
          para4: "Cybersecurity Solutions",
          Des4: "Implement measures to protect field data, devices, and networks from threats and vulnerabilities.",
          className1: "border-l-0 rounded-br-xl",
          className2: "mr-0 md:mr-8 order-1",
          className3: "order-2"
        },
        {
          id: 6,
          icons: <MdSchool className="h-20 w-20 p-3" />,
          title: "Training and Support",
          img: "/assets/Industries/Field/Field6.jpeg",
          para1: "User Training",
          Des1: "Offer training for field staff, managers, and support staff to ensure effective use of ICT technology. ",
          para2: "Technical Support",
          Des2: "Provide 24-hour technical support to speed up troubleshooting for seamless field operations.",
          para3: "Documentation and Resources",
          Des3: "Supply comprehensive documentation and resources for IT adoption.",
          para4: "Continuous Improvement",
          Des4: "Gather feedback, and enhance IT systems for better productivity and satisfaction.",
          className1: "border-r-0 rounded-bl-xl",
          className2: "ml-0 md:ml-8 md:order-2 order-1",
          className3: "md:order-1 order-2",
        },
      ];

  return (
    <>
        <section>
      <div className="flex flex-col items-center md:pt-6 pt-4">
          <div className="px-14 w-full">
          <h1 className="font-extrabold w-full  border-y-2 border-MainHeading text-MainHeading text-center">
            Our Services
          </h1>
          </div>
        </div>
        {services.map((item) => (
          <div key={item.id} className="max-w-screen-xl mx-auto py-8 px-4 lg:py-10 lg:px-6">
          <div className="text-center md:mb-6 mb-3">
            <h2 className="text-2xl text-[#e57e2c] tracking-tight font-bold text-primary-800">
            {item.title}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className={`mb-6 md:mb-0 md:p-0 p-3 md:w-1/3 w-full ${item.className2}`}>
              <Image
                className="mx-auto rounded-lg"
                src={item.img}
                width={1000}
                height={1000}
                alt="can_help_banner"
              />
            </div>
            <div className={`flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2 ${item.className3}`}>
              <div className="w-full sm:w-1/2 mb-4 px-2">
                <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut"
                }} className={`h-auto py-4 px-6 border border-[#215cbc] border-t-0 ${item.className1}`}>
                  <h3 className="text-xl font-bold text-md mb-3">
                  {item.para1}
                  </h3>
                  <p className="text-sm">
                  {item.Des1}
                  </p>
                </motion.div>
              </div>
              <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <motion.div 
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut"
                }}
                className={`h-auto py-4 px-6 border border-[#215cbc] border-t-0 ${item.className1}`}>
                  <h3 className="text-xl font-bold text-md mb-3">
                  {item.para2}
                  </h3>
                  <p className="text-sm">
                    {" "}
                    {item.Des2}
                  </p>
                </motion.div>
              </div>

              <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut"
                }}
                 className={`h-auto py-4 px-6 border border-[#215cbc] border-t-0 ${item.className1}`}>
                  <h3 className="text-xl font-bold text-md mb-3">
                  {item.para3}
                  </h3>
                  <p className="text-sm">
                  {item.Des3}
                  </p>
                </motion.div>
              </div>

              <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut"
                }}
                 className={`h-auto py-4 px-6 border border-[#215cbc] border-t-0 ${item.className1}`}>
                  <h3 className="text-xl font-bold text-md mb-3">
                  {item.para4}
                  </h3>
                  <p className="text-sm">
                  {item.Des4}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </section>
    </>
  )
}

export default Service
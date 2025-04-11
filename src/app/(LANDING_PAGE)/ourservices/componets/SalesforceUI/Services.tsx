"use client";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FiCloud, FiLayers, FiDatabase } from "react-icons/fi";
import {
  LuHeartHandshake,
  LuWrench,
  LuGraduationCap,
  LuLifeBuoy,
} from "react-icons/lu";
import { IoCog, IoCodeSlash } from "react-icons/io5";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Salesforce Consulting",
    description:
      "Our Salesforce consulting firms in the usa empower your Sales, Customer Service, Marketing and Technology teams by transforming vision into practical technology solutions. We’re here to offer end to end Salesforce Consulting Services for the cloud that involves developing applications, collaborating cloud applications and supporting cloud solutions.",
    icon: <LuHeartHandshake className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Salesforce Implementation",
    description:
      "Our expert team is fully prepared to help you with the installation process, integrating and configuring your Salesforce items, personalized to your business-specific essentials. No matter you are planning to integrate new Salesforce infrastructure or migrating to Salesforce from your existing platform, it is the best choice in both cases.",
    icon: <FiCloud className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Salesforce Managed Services",
    description:
      "We offer end-to-end support, maintenance and optimization for your Salesforce ecosystem. From user management and customizations to performance monitoring and issue resolution, we ensure your CRM runs smoothly, securely and efficiently so you can focus on growing your business.",
    icon: <IoCog className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Salesforce Integration",
    description:
      "We specialize in Salesforce integration that unifies your business tools, streamlines data flow and enhances productivity. Whether it's ERP, marketing platforms or custom apps – we make it all work together, flawlessly.",
    icon: <FiLayers className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Salesforce Development",
    description:
      "We extend Salesforce functionality with bespoke solutions - streamlining operations, enhancing user experiences and automating processes that drive business growth.",
    icon: <IoCodeSlash className="h-6 w-6" />,
  },
  {
    id: 6,
    title: "Salesforce Customization",
    description:
      "Our Salesforce customization services adapt fields, workflows and reports to perfectly fit your business processes. Optimize every aspect of your CRM for improved performance and workflow automation, ensuring your team works smarter, not harder.",
    icon: <LuWrench className="h-6 w-6" />,
  },
  {
    id: 7,
    title: "Salesforce Training",
    description:
      "We offer customized Salesforce training programs tailored to your team’s needs. We ensure that your team can maximize the potential of Salesforce, streamlining processes and boosting productivity.",
    icon: <LuGraduationCap className="h-6 w-6" />,
  },
  {
    id: 8,
    title: "Salesforce Data Migration",
    description:
      "We specialize in seamless Salesforce data migration, ensuring smooth transitions from legacy systems to Salesforce. Our expert team handles every step of the process, prioritizing data integrity to ensure your valuable information is securely and accurately transferred.",
    icon: <FiDatabase className="h-6 w-6" />,
  },
  {
    id: 9,
    title: "Salesforce Support & Maintenance",
    description:
      "We provide ongoing Salesforce support and maintenance to ensure your CRM system runs smoothly. Our team offers timely updates, troubleshooting, and optimization to keep your business ahead.",
    icon: <LuLifeBuoy className="h-6 w-6" />,
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className="bg-black text-white p-6 md:px-16 md:py-6">
    <div className=" mx-auto">
      <h2 className="text-4xl font-bold mb-6">Our Capabilities <span>in Salesforce</span></h2>
      <p className="text-lg font-light mb-12">
      Hire Our dedicated Salesforce developers for custom CRM solutions. <br /> We build scalable, high-performance systems that drive growth and enhance customer experiences.
      </p>
           
      <div className="flex flex-col lg:flex-row bg-black rounded-xl overflow-hidden border border-gray-800">
        {/* Left side - Tabs */}
        <div className="lg:w-1/2 bg-gradient-to-r p-5 from-blue-600 to-blue-500">
          <div className="md:pr-5 md:h-[65vh] md:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-blue-500">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`py-4 px-4 mb-4 cursor-pointer border-b border-blue-400 ${activeTab === service.id ? "opacity-100" : "opacity-70 hover:opacity-90"}`}
                onClick={() => setActiveTab(service.id)}
              >
                <div className="flex items-center">
                  <span className="text-xl font-medium mr-4">{String(index + 1).padStart(2, "0")}.</span>
                  <span className="text-xl font-medium">{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Content */}
        <div className="lg:w-1/2 flex items-center justify-center bg-black p-8">
          {services.map((service) => (
            <div key={service.id} className={`${activeTab === service.id ? "block" : "hidden"}`}>
              <div className="flex flex-col md:w-96">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <div className="text-base text-gray-300">{service.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}

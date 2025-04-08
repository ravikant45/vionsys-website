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
    title: "Salesforce Implementation",
    description:
      "Setting up Salesforce for businesses, customizing it to fit their needs, and integrating it.",
    icon: <FiCloud className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Salesforce Consulting",
    description:
      "Offering expert advice on how to optimize Salesforce for specific business objectives and workflows.",
    icon: <LuHeartHandshake className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Salesforce Managed Services",
    description:
      "Ongoing support and administration of Salesforce environments to ensure peak performance.",
    icon: <IoCog className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Salesforce Integration",
    description:
      "Seamlessly integrating Salesforce with other enterprise systems such as ERP, marketing automation, and third-party apps.",
    icon: <FiLayers className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Salesforce Development",
    description:
      "Custom development to extend Salesforce's functionality through custom applications, workflows, and automations.",
    icon: <IoCodeSlash className="h-6 w-6" />,
  },
  {
    id: 6,
    title: "Salesforce Customization",
    description:
      "Tailoring Salesforce's CRM features (fields, workflows, reports) to match specific business processes.",
    icon: <LuWrench className="h-6 w-6" />,
  },
  {
    id: 7,
    title: "Salesforce Training",
    description:
      "Providing customized training programs to ensure teams can fully utilize Salesforce.",
    icon: <LuGraduationCap className="h-6 w-6" />,
  },
  {
    id: 8,
    title: "Salesforce Data Migration",
    description:
      "Assisting with the migration of data from legacy systems to Salesforce while ensuring data integrity.",
    icon: <FiDatabase className="h-6 w-6" />,
  },
  {
    id: 9,
    title: "Salesforce Support & Maintenance",
    description:
      "Providing post-implementation support, bug fixes, and performance optimization.",
    icon: <LuLifeBuoy className="h-6 w-6" />,
  },
  // {
  //     id: 7,
  //     title: "Salesforce AppExchange Solutions",
  //     description: "Helping businesses find and implement third-party apps from the Salesforce AppExchange to extend functionality."
  // },
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

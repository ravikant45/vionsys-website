"use client"

import { useState } from "react"
import { FaCloud, FaCogs, FaLaptopCode, FaMobileAlt, FaRobot, FaSalesforce, FaShoppingCart, FaTools } from "react-icons/fa"
import { RiCustomerService2Fill } from "react-icons/ri";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(1)

  const services = [
    {
      id: 1,
      title: "Website Design",
      icon: <FaLaptopCode className="text-white w-8 h-8" />,
      content: (
        <>
          <p>We create visually stunning and responsive websites tailored to your business needs, ensuring a seamless user experience.</p>
        </>
      ),
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-white w-8 h-8" />,
      content: (
        <>
          <p>Our mobile app development services cater to both Android and iOS platforms, delivering high-performance applications.</p>
        </>
      ),
    },
    {
      id: 3,
      title: "Custom Software Development",
      icon: <FaCogs className="text-white w-8 h-8" />,
      content: (
        <>
          <p>We build scalable and secure custom software solutions that align with your business goals and enhance productivity.</p>
        </>
      ),
    },
    {
      id: 4,
      title: "Ecommerce Solutions",
      icon: <FaShoppingCart className="text-white w-8 h-8" />,
      content: (
        <>
          <p>Empowering businesses with tailored ecommerce solutions, including store setup, payment gateway integration, and more.</p>
        </>
      ),
    },
    {
      id: 5,
      title: "Cloud Services",
      icon: <FaCloud className="text-white w-8 h-8" />,
      content: (
        <>
          <p>Providing cloud solutions, including migration, hosting, and management, to optimize business efficiency.</p>
        </>
      ),
    },
    {
      id: 6,
      title: "AI & ML Product Development",
      icon: <FaRobot className="text-white w-8 h-8" />,
      content: (
        <>
          <p>We develop AI-driven solutions and machine learning models to automate processes and gain insights from data.</p>
        </>
      ),
    },
    {
      id: 7,
      title: "Customer Relationship Management (CRM)",
      icon: <RiCustomerService2Fill className="text-white w-8 h-8" />,
      content: (
        <>
          <p>Our CRM solutions help businesses streamline customer interactions and improve sales and marketing strategies.</p>
        </>
      ),
    },
    {
      id: 8,
      title: "Salesforce Services",
      icon: <FaSalesforce className="text-white w-8 h-8" />,
      content: (
        <>
          <p>We provide Salesforce consulting, implementation, and integration services to optimize business workflows.</p>
        </>
      ),
    },
    {
      id: 9,
      title: "Maintenance & Support",
      icon: <FaTools className="text-white w-8 h-8" />,
      content: (
        <>
          <p>Ensuring your applications run smoothly with regular updates, troubleshooting, and technical support.</p>
        </>
      ),
    },
];


  return (
    <div className="bg-black text-white p-6 md:px-16 md:py-6">
      <div className=" mx-auto">
        <h2 className="text-4xl font-bold mb-6">Comprehensive Suite of Custom Software Development Services</h2>
        <p className="text-lg font-light mb-12">
          Our custom software development process revolves around a hyper-focused approach that prioritizes the
          tailoring of user experiences and the creation of highly efficient solutions. With our service offerings, we
          guarantee a transparent and trusted partnership that guarantees delivery of impactful and innovative software
          development solutions.
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
                  <div className="text-base text-gray-300">{service.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


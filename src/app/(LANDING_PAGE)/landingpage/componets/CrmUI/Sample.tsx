// 'use client'
// import React from 'react'
// import { FiUsers, FiBarChart, FiZap } from "react-icons/fi";

// const Sample = () => {
//   return (
//     <div>
//         <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
//             <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <FiUsers className="h-12 w-12 text-blue-600" />
//                 <h3 className="text-xl font-bold">CRM Implementation</h3>
//                 <p className="text-gray-600">Streamline your customer relationships with tailored Salesforce solutions.</p>
//               </div>
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <FiBarChart className="h-12 w-12 text-blue-600" />
//                 <h3 className="text-xl font-bold">Analytics & Reporting</h3>
//                 <p className="text-gray-600">Gain actionable insights with powerful Salesforce analytics tools.</p>
//               </div>
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <FiZap className="h-12 w-12 text-blue-600" />
//                 <h3 className="text-xl font-bold">Integration Services</h3>
//                 <p className="text-gray-600">Seamlessly connect Salesforce with your existing business systems.</p>
//               </div>
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <FiZap className="h-12 w-12 text-blue-600" />
//                 <h3 className="text-xl font-bold">Cunstom
//                      Salesforce Development</h3>
//                 <p className="text-gray-600">Seamlessly connect Salesforce with your existing business systems.</p>
//               </div>
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <FiZap className="h-12 w-12 text-blue-600" />
//                 <h3 className="text-xl font-bold">Salesforce Consulting</h3>
//                 <p className="text-gray-600">Seamlessly connect Salesforce with your existing business systems.</p>
//               </div>
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <FiZap className="h-12 w-12 text-blue-600" />
//                 <h3 className="text-xl font-bold">Marketing Cloud Integration</h3>
//                 <p className="text-gray-600">Seamlessly connect Salesforce with your existing business systems.</p>
//               </div>
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <FiZap className="h-12 w-12 text-blue-600" />
//                 <h3 className="text-xl font-bold">Service Cloud Services</h3>
//                 <p className="text-gray-600">Seamlessly connect Salesforce with your existing business systems.</p>
//               </div>
//             </div>
//           </div>
//         </section>
//     </div>
//   )
// }

// export default Sample;


// 'use client'
// import React from "react"

// export const SalesforceOfferings = () => {
//   const offerings = [
//     {
//       id: 1,
//       title: "Sales Cloud",
//       description:
//         "A CRM platform for sales teams to manage leads, accounts, opportunities, and customer interactions. It helps drive productivity and close deals faster.",
//     },
//     {
//       id: 2,
//       title: "Service Cloud",
//       description:
//         "A CRM platform for customer support and service teams to manage customer inquiries, cases, and support tickets across multiple channels.",
//     },
//     {
//       id: 3,
//       title: "Marketing Cloud",
//       description:
//         "A digital marketing platform enabling businesses to manage campaigns, automate marketing efforts, and track engagement across email, SMS, social media, and more.",
//     },
//     {
//       id: 4,
//       title: "Commerce Cloud",
//       description:
//         "A platform for managing e-commerce operations, offering personalized online shopping experiences across web, mobile, social, and in-store.",
//     },
//     {
//       id: 5,
//       title: "Community Cloud",
//       description:
//         "Allows businesses to create online communities for customers, partners, and employees to interact and share information.",
//     },
//     {
//       id: 6,
//       title: "Analytics Cloud (Tableau CRM)",
//       description:
//         "Provides advanced analytics and AI-driven insights to help businesses make data-driven decisions, with dashboards and customizable reports.",
//     },
//     {
//       id: 7,
//       title: "Financial Services Cloud",
//       description:
//         "A version of Salesforce tailored for financial institutions, providing tools for wealth management, retail banking, and insurance.",
//     },
//     {
//       id: 8,
//       title: "Health Cloud",
//       description:
//         "A solution built for healthcare providers to manage patient relationships and care coordination.",
//     },
//     {
//       id: 9,
//       title: "Nonprofit Cloud",
//       description:
//         "A solution built for nonprofit organizations to manage donors, volunteers, and fundraising efforts.",
//     },
//     {
//       id: 10,
//       title: "Education Cloud",
//       description:
//         "Helps educational institutions manage relationships with students, alumni, and staff, focusing on recruitment, engagement, and success.",
//     },
//     {
//       id: 11,
//       title: "Manufacturing Cloud",
//       description:
//         "Tailored for manufacturers, it helps in managing operations, sales, and service processes specific to the manufacturing industry.",
//     },
//     {
//       id: 12,
//       title: "IoT Cloud",
//       description:
//         "Designed to manage and process IoT (Internet of Things) data to enable businesses to connect devices and act on real-time insights.",
//     },
//     {
//       id: 13,
//       title: "Einstein AI",
//       description:
//         "Salesforce's AI platform integrated across various clouds to provide predictive insights, automation, and natural language processing.",
//     },
//     {
//       id: 14,
//       title: "Quip (Collaboration Cloud)",
//       description:
//         "A collaborative platform for team communication, document sharing, and project management.",
//     },
//   ]

//   return (
//     <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="font-extrabold text-MainHeading mb-2">Salesforce Cloud Offerings</h1>
//           <p className="font-semibold text-SubHeading">
//             Empowering businesses with tailored cloud solutions for sales, service, marketing, and beyond.
//           </p>
//         </div>
//         <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {offerings.map((item) => (
//             <div key={item.id} className="book bg-white rounded-lg shadow-lg overflow-hidden flex justify-center items-center">
//               <div className="p-4">
//                 <p className="text-base font-medium text-gray-600">{item.description}</p>
//               </div>
//               <div className="cover bg-gradient-to-br from-blue-500 to-indigo-600 p-6  flex justify-center items-center">
//                 <p className="text-xl font-bold text-white text-center">{item.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <style jsx>{`
//         .book {
//           position: relative;
//           height: 200px;
//           transform: preserve-3d;
//           perspective: 2000px;
//           transition: all 0.3s ease;
//         }
//         .cover {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           transform-origin: left;
//           transition: all 0.5s ease;
//           cursor: pointer;
//         }
//         .book:hover .cover {
//           transform: rotateY(-140deg);
//         }
//         @media (max-width: 640px) {
//           .book {
//             height: 180px;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }


// 


// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'

// const slides = [
//   {
//     image: "/assets/Home/Service.jpg",
//     title: "Infrastructure as a Service (IaaS)",
//     points: [
//       "On-demand resources with pay-as-you-go pricing.",
//       "Fully managed infrastructure without the need for physical hardware.",
//       "Customizable environments to meet specific business needs."
//     ],
//     description: "Provide clients with scalable and flexible virtualized computing resources over the internet, including storage, networking, and servers."
//   },
//   {
//     image: "/assets/Home/Service.jpg",
//     title: "Platform as a Service (PaaS)",
//     points: [
//       "Automated updates, maintenance, and security.",
//       "Integration with popular programming languages and tools.",
//       "Development environments that streamline app creation."
//     ],
//     description: "Offer a cloud-based platform for developers to build, deploy, and manage applications without worrying about underlying infrastructure."
//   },
//   {
//     image: "/assets/Home/Service.jpg",
//     title: "Software as a Service (SaaS)",
//     points: [
//       "Accessible through web browsers—no installation needed.",
//       "Regular updates and maintenance handled by the service provider.",
//       "Scalable solutions, whether for a few users or an entire organization."
//     ],
//     description: "Provide software applications via the cloud that users can access from any device with an internet connection."
//   },
//   {
//     image: "/assets/Home/Service.jpg",
//     title: "Cloud Migration Services",
//     points: [
//       "Comprehensive migration plans and strategies.",
//       "Zero downtime during the transition process.",
//       "Integration of existing systems into the cloud seamlessly."
//     ],
//     description: "Help businesses move their existing infrastructure, applications, and data to the cloud with minimal disruption."
//   },
//   {
//     image: "/assets/Home/Service.jpg",
//     title: "Cloud Storage Services",
//     points: [
//       "Flexible storage plans to accommodate growing data needs.",
//       "Encryption for data security during transfer and storage.",
//       "Disaster recovery options to protect against data loss."
//     ],
//     description: "Securely store data and files in the cloud, accessible from anywhere with robust backup and redundancy options."
//   }
// ]

// export default function Component() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
//     }, 5000)

//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className='h-full'>
//       <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
//       <div className="relative w-full md:w-1/2 h-[400px]">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//               index === currentIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <Image
//               src={slide.image}
//               alt={slide.title}
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         ))}
//       </div>
//       <div className="w-full md:w-1/2 bg-white p-8">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`transition-opacity duration-1000 ease-in-out ${
//               index === currentIndex ? 'opacity-100' : 'opacity-0 hidden'
//             }`}
//           >
//             <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
//             <ul className="list-disc list-inside mb-4">
//               {slide.points.map((point, i) => (
//                 <li key={i} className="mb-2">{point}</li>
//               ))}
//             </ul>
//             <p className="text-gray-600">{slide.description}</p>
//           </div>
//         ))}
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`w-2 h-2 rounded-full ${
//               index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//     </div>
//   )
// }


/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import CRM1 from '../../../landingpage/images/Crm/Crm1.jpg';
import CRM2 from '../../../landingpage/images/Crm/Crm2.jpg';
import CRM3 from '../../../landingpage/images/Crm/Crm3.jpg';
import CRM4 from '../../../landingpage/images/Crm/Crm4.jpg';
import CRM5 from '../../../landingpage/images/Crm/Crm5.jpg';
import CRM6 from '../../../landingpage/images/Crm/Crm6.jpg';
import CRM7 from '../../../landingpage/images/Crm/Crm7.jpg';
import CRM8 from '../../../landingpage/images/Crm/Crm8.jpg';
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  image: any;
}
const services: Service[] = [
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

export default function Sample() {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    if (isMobile && imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-slate-700 p-8">
      <h1 className="text-MainHeading font-bold mb-4">
      Empower Your Tech Company with CRM
      </h1>
      <p className="mb-8">
      Our CRM solution is tailored for tech companies, providing tools to streamline operations and drive growth.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-4 cursor-pointer border-b border-gray-700 flex justify-between items-center ${
                selectedService.title === service.title
                  ? "text-blue-700"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => handleServiceClick(service)}
            >
              <span>{service.title}</span>
              <FaAngleRight className="w-5 h-5" />
            </div>
          ))}
        </div>
        <div className="w-full md:w-2/3" ref={imageRef}>
          <Image
            src={selectedService.image}
            alt={selectedService.title}
            width={600}
            height={400}
            className="w-full h-80 object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{selectedService.title}</h2>
          <p>{selectedService.description}</p>
        </div>
      </div>
    </div>
  );
}

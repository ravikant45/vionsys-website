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


'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    image: "/assets/Home/Service.jpg",
    title: "Infrastructure as a Service (IaaS)",
    points: [
      "On-demand resources with pay-as-you-go pricing.",
      "Fully managed infrastructure without the need for physical hardware.",
      "Customizable environments to meet specific business needs."
    ],
    description: "Provide clients with scalable and flexible virtualized computing resources over the internet, including storage, networking, and servers."
  },
  {
    image: "/assets/Home/Service.jpg",
    title: "Platform as a Service (PaaS)",
    points: [
      "Automated updates, maintenance, and security.",
      "Integration with popular programming languages and tools.",
      "Development environments that streamline app creation."
    ],
    description: "Offer a cloud-based platform for developers to build, deploy, and manage applications without worrying about underlying infrastructure."
  },
  {
    image: "/assets/Home/Service.jpg",
    title: "Software as a Service (SaaS)",
    points: [
      "Accessible through web browsers—no installation needed.",
      "Regular updates and maintenance handled by the service provider.",
      "Scalable solutions, whether for a few users or an entire organization."
    ],
    description: "Provide software applications via the cloud that users can access from any device with an internet connection."
  },
  {
    image: "/assets/Home/Service.jpg",
    title: "Cloud Migration Services",
    points: [
      "Comprehensive migration plans and strategies.",
      "Zero downtime during the transition process.",
      "Integration of existing systems into the cloud seamlessly."
    ],
    description: "Help businesses move their existing infrastructure, applications, and data to the cloud with minimal disruption."
  },
  {
    image: "/assets/Home/Service.jpg",
    title: "Cloud Storage Services",
    points: [
      "Flexible storage plans to accommodate growing data needs.",
      "Encryption for data security during transfer and storage.",
      "Disaster recovery options to protect against data loss."
    ],
    description: "Securely store data and files in the cloud, accessible from anywhere with robust backup and redundancy options."
  }
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='h-full'>
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full md:w-1/2 h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 bg-white p-8">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
            <ul className="list-disc list-inside mb-4">
              {slide.points.map((point, i) => (
                <li key={i} className="mb-2">{point}</li>
              ))}
            </ul>
            <p className="text-gray-600">{slide.description}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
    </div>
  )
}
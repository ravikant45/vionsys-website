"use client";
import { motion } from "framer-motion";
import React from "react";

function Future() {
  const cards = [
    {
      id: 1,
      front: {
        title: "Salesforce Consulting",
        description:
          "Our Salesforce consulting services are designed to help you identify and implement the best strategies for your business. We work closely with you to understand your specific needs and tailor our solutions to your specific needs.",
      },
      back: {
        title: "Our consulting services include:",
        list: [
          {
            title: "Requirements Analysis",
            description:
              "A comprehensive analysis of your business processes and requirements.",
          },
          {
            title: "Action Plan",
            description: "A customized Salesforce roadmap.",
          },
          {
            title: "Solution Design",
            description:
              "To create a comprehensive solution framework that will maximize the capabilities of Salesforce.",
          },
          {
            title: "Change Management",
            description:
              "Ensure smooth transition and adoption of Salesforce across your organization.",
          },
        ],
      },
    },
    {
      id: 2,
      front: {
        title: "Salesforce Implementation",
        description:
          "We offer end-to-end Salesforce deployment services, ensuring that Salesforce integrates seamlessly with your existing systems. Our user interface is designed to be efficient and hassle-free, allowing you to start taking advantage of Salesforce quickly.",
      },
      back: {
        title: "Our service users include:",
        list: [
          {
            title: "Program Outline",
            description: "Program timeline and detailed milestones.",
          },
          {
            title: "Configuration",
            description: "Customizing Salesforce to fit your business process.",
          },
          {
            title: "Integration",
            description:
              "Seamless integration with other operating systems and applications.",
          },
          {
            title: "Data Migration",
            description:
              "Secure and accurate migration of your existing data to Salesforce.",
          },
          {
            title: "Usage Training",
            description:
              "A comprehensive training program to ensure your team is proficient in using Salesforce.",
          },
        ],
      },
    },
    {
      id: 3,
      front: {
        title: "Salesforce Products",
        description:
          "Every business is unique, and we understand that your Salesforce model should reflect that. Our customization services are designed to tailor Salesforce to meet your specific business needs.",
      },
      back: {
        title: "Our customization services include:",
        list: [
          {
            title: "Custom Development",
            description:
              "Building custom applications and roles in Salesforce.",
          },
          {
            title: "Business strategy",
            description:
              "The process of automating business processes to improve efficiency.",
          },
          {
            title: "Custom Reports and Dashboards",
            description:
              "Create insightful reports and dashboards that provide real-time business intelligence.",
          },
          {
            title: "Data Migration",
            description:
              "Secure and accurate migration of your existing data to Salesforce.",
          },
          {
            title: "Better user interface",
            description:
              "Salesforce UI enhancements to improve user experience and adoption.",
          },
        ],
      },
    },
    {
      id: 4,
      front: {
        title: "Salesforce integration",
        description:
          "Seamlessly integrate Salesforce with your other business applications for an integrated, efficient ecosystem. Our integration services ensure that data flows seamlessly between Salesforce and your other systems, giving you a comprehensive view of your business operations.",
      },
      back: {
        title: "Our integration services include:",
        list: [
          {
            title: "API Integration",
            description:
              "Using Salesforce with third-party applications using APIs.",
          },
          {
            title: "Middleware solutions",
            description: "Use of middleware for complex integration.",
          },
          {
            title: "Custom Connectors",
            description:
              "To configure custom connectors for unique integration needs.",
          },
          {
            title: "Data Synchronization",
            description:
              "Ensure consistent and consistent data flow across systems.",
          },
        ],
      },
    },
    {
      id: 5,
      front: {
        title: "Salesforce Project Management",
        description:
          "Our Salesforce Managed Services offer ongoing support and maintenance to ensure your Salesforce instance continues to meet the needs of your growing business. ",
      },
      back: {
        title: "We recommend that:",
        list: [
          {
            title: "Proactive monitoring",
            description:
              "Constantly monitoring your Salesforce instance to identify and fix issues before they affect your business.",
          },
          {
            title: "System Administration",
            description:
              "Ongoing maintenance of user accounts, security settings, and system settings.",
          },
          {
            title: "Performance Improvement",
            description:
              "Continue to optimize your Salesforce instances to increase performance.",
          },
          {
            title: "Feature enhancements",
            description:
              "By updating your Salesforce instance with the latest features and functionality.",
          },
        ],
      },
    },
    {
      id: 6,
      front: {
        title: "Salesforce training and support",
        description:
          "Empower your team with the knowledge and skills needed to get the most out of Salesforce. ",
      },
      back: {
        title: "Our training and support services include:",
        list: [
          {
            title: "Customized Training Plan",
            description:
              "Customized training based on your specific business plan and Salesforce configuration.",
          },
          {
            title: "Help required",
            description:
              "Reach out to our expert support team whenever you need help.",
          },
          {
            title: "•	User acquisition strategies",
            description:
              "Strategies and best practices to build user engagement and maximize ROI.",
          },
        ],
      },
    },
  ];
  return (
    <div className="w-full h-auto overflow-x-hidden overflow-y-auto">
      <div className="md:px-10 md:py-12 p-5 text-center relative md:mt-10 mt-3">
        <div className="bg-gradient-to-r bg-clip-text text-transparent from-red-500 to-blue-700">
          <h3 className="text-3xl font-bold text-center py-2">
            Companies utilizing Salesforce are poised for favorable future
            outcomes
          </h3>
        </div>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="text-base text-gray-800 font-medium text-left pt-3"
        >
          As a company leveraging Salesforce, it's essential to recognize that
          your future success hinges on your ability to adapt to evolving market
          trends, embrace new technologies, and prioritize customer-centric
          strategies. By remaining agile and fully harnessing the capabilities
          of the Salesforce platform, you can position yourself for long-term
          success in an increasingly competitive landscape.
        </motion.p>
      </div>

      {/* Attributes Section */}
      <div className="w-full h-auto bg-slate-50">
        <div className="mx-auto py-4 md:py-6 lg:py-12 overflow-x-hidden overflow-y-auto">
          <div className="mx-auto flex w-full flex-col items-center space-y-4 text-center">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="font-extrabold md:text-MainHeading text-2xl text-[#215cbc]"
            >
              Our Attributes
            </motion.h2>
            <p className="font-bold md:text-SubHeading text-lg text-[#e57e2c] sm:leading-7">
              Explore the incredible offerings provided by us to enrich your
              online visibility.
            </p>
          </div>

          {/* Cards Section */}
          <div className="flex justify-center items-center w-full h-auto py-4">
            <div className="flex flex-wrap justify-evenly items-center gap-x-4 gap-y-8 md:px-16 px-4">
              {cards.map((card) => (
                <div className="flip-card" key={card.id}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="flex justify-center items-center w-full h-full">
                        <div className="w-full py-10 flex flex-col justify-between gap-4 px-2">
                          <h3 className="text-xl font-semibold">
                            {card?.front?.title}
                          </h3>
                          <p>{card?.front?.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="w-full h-full flex flex-col justify-center gap-4 px-2">
                        <ul>
                          {card.back.list.map((item) => (
                            <li
                              key={item?.title}
                              className="flex flex-col justify-start items-start"
                            >
                              <span className="text-md font-medium underline text-white">
                                {item?.title}:
                              </span>
                              <span className="text-sm text-start ml-4">
                                {item?.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Future;

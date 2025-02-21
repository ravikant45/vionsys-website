"use client";

import DynamicLoader from "@/components/ui/DynamicLoader";
import {
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaHeadset,
  FaCode,
  FaChartBar,
  FaBug,
  FaRobot,
  FaSalesforce,
  FaCogs,
  FaCloud,
  FaSync,
  FaQuestion,
} from "react-icons/fa";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { RiQuestionAnswerFill } from "react-icons/ri";

const InfiniteMovingCardsDemo = dynamic(() => import("../home/Clients"), {
  loading: () => <DynamicLoader />,
});

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const services = [
  {
    id: 1,
    title: "Software Development",
    description:
      "We design tailor-made, scalable, and high-performance software solutions adapted to the needs of your business. Whether it's enterprise software, SaaS applications, or custom tools, we guarantee flawless functionality and performance.",
    icon: <FaCode color="#007bff" size={40} />,
  },
  {
    id: 2,
    title: "Business Intelligence & Analytics Services",
    description:
      "Transforming raw data into actionable insights. Our BI and analytics services help businesses make data-driven decisions through real-time reporting, dashboards, and predictive analytics.",
    icon: <FaChartBar color="#ff9900" size={40} />,
  },
  {
    id: 3,
    title: "Testing and QA",
    description:
      "Ensure flawless operation with our robust quality assurance (QA) and software testing services.​ We perform manual and automated testing to remove bugs, improve security, and optimize the user experience.",
    icon: <FaBug color="#dc3545" size={40} />,
  },
  {
    id: 4,
    title: "Machine Learning and AI",
    description:
      "Leverage the power of AI and ML to automate processes, improve decision-making, and gain competitive advantage. Our AI-powered solutions span chatbots, predictive analytics, and intelligent automation.",
    icon: <FaRobot color="#17a2b8" size={40} />,
  },
  {
    id: 5,
    title: "Salesforce Solutions",
    description:
      "Improve your customer interactions with our Salesforce development, integration, and customization services. We help businesses improve the effectiveness of their CRM and drive sales growth.",
    icon: <FaSalesforce color="#28a745" size={40} />,
  },
  {
    id: 6,
    title: "Customer Relationship Management (CRM)",
    description:
      "Optimize customer interactions and increase loyalty with our industry-leading CRM solutions, designed to strengthen engagement and boost conversions.",
    icon: <FaUsers color="#6f42c1" size={40} />,
  },
  {
    id: 7,
    title: "Product Development",
    description:
      "From design to implementation, we offer comprehensive product development services. Our agile development methodology ensures faster time to market and higher quality.",
    icon: <FaCogs color="#e83e8c" size={40} />,
  },
  {
    id: 8,
    title: "Cloud Computing",
    description:
      "With our secure and scalable cloud solutions, migrate, optimize, and manage your business in the cloud. Our expertise lies in the integration of AWS, Azure, and Google Cloud.",
    icon: <FaCloud color="#6610f2" size={40} />,
  },
  {
    id: 9,
    title: "DevOps Solutions",
    description:
      "With our secure and scalable cloud solutions, migrate, optimize, and manage your business in the cloud. Our expertise lies in the integration of AWS, Azure, and Google Cloud.",
    icon: <FaSync color="#20c997" size={40} />,
  },
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Skilled professionals delivering top-notch IT solutions.",
    icon: <FaUsers size={40} color="#007bff" />,
  },
  {
    title: "Tailored Strategies",
    description: "Customized solutions to fit your business goals.",
    icon: <FaLightbulb size={40} color="#ffcc00" />,
  },
  {
    title: "Cutting-Edge Technology",
    description: "Leveraging the latest innovations for success.",
    icon: <FaRocket size={40} color="#28a745" />,
  },
  {
    title: "Reliable Support",
    description: "24/7 assistance for smooth operations.",
    icon: <FaHeadset size={40} color="#dc3545" />,
  },
];

const faqs = [
  {
    id: 1,
    question:
      "How long do I have to wait before the work on my project starts?",
    answer:
      "Typically, it takes about two weeks to start cooperating on the project. However, it depends on the project features and the number of people involved in it.",
  },
  {
    id: 2,
    question: "What makes your IT staffing services unique?",
    answer:
      "Our IT Staffing Services provide businesses with top-tier, pre-vetted tech talent. Whether you need developers, DevOps engineers, data analysts, or AI specialists, we connect you with the right professionals for your needs.",
  },
  {
    id: 3,
    question: "How can I get started with Vionsys IT Solutions?",
    answer:
      "Getting started is easy! Simply:\n\n- Contact us through our website, email, or phone.\n- Discuss your requirements with our expert team.\n- Receive a customized solution tailored to your business needs.\n- Kickstart your project with our experienced professionals.",
  },
  {
    id: 4,
    question: "What Are Your Development Processes and Methodology?",
    answer:
      "At Vionsys IT Solutions, we follow an agile, structured, and client-centric approach to ensure the successful delivery of high-quality IT solutions. Our development methodology is designed to maximize efficiency, transparency, and scalability.",
  },
  {
    id: 5,
    question: "What digital marketing services do you offer?",
    answer:
      "At Vionsys IT Solutions, we offer comprehensive digital marketing services to boost your online presence and drive growth. Our SEO strategies improve search rankings, while PPC campaigns generate instant leads. We enhance brand engagement through social media marketing and attract customers with compelling content marketing. Additionally, our email marketing solutions nurture leads and drive conversions. With data-driven strategies, we help your business stand out in the digital space.",
  },
];

const Index = () => {
  return (
    <section className="overflow-hidden">
      <section className="grid grid-cols-1 md:grid-cols-2 justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full "
        >
          <div className=" mx-auto">
            <header className="mt-12 sm:mt-16">
              <motion.h1
                className="text-4xl text-blue1 lg:text-6xl font-bold p-2"
                {...fadeInUp}
              >
                Welcome to Vionsys IT Solutions
              </motion.h1>
              <div className="w-20 h-2 bg-blue1 my-6 m-2"></div>
              <motion.p className="text-xl mb-12 lg:pr-12 p-2" {...fadeInUp}>
                At Vionsys IT Solutions, we specialize in providing cutting-edge
                IT services that help businesses scale, innovate, and stay ahead
                of the competition. From custom software development to digital
                transformation, we deliver solutions tailored to your success.
              </motion.p>
              <motion.div {...fadeInUp}>
                <Link
                  href={"/contact"}
                  className="inline-block m-2 py-4 px-8 leading-none text-white bg-slate-900 hover:bg-blue1 rounded shadow text-sm font-bold transition-all"
                >
                  Contact Us
                </Link>
              </motion.div>
            </header>
          </div>
        </motion.div>
        <div className="w-full flex justify-center md:pl-6 items-center overflow-hidden">
          <Image
            width={620}
            height={600}
            quality={100}
            alt="image"
            src="/ser.jpg"
            className=""
          />
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ id, title, description, icon }) => (
            <motion.div
              key={id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              {...fadeInUp}
            >
              {icon}
              <h3 className="mt-6 text-lg font-semibold text-black">{title}</h3>
              <p className="text-base text-gray-600 mt-5">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <motion.div
          className="max-w-xl mx-auto text-center mb-12"
          {...fadeInUp}
        >
          <motion.h2 className="text-3xl font-bold" {...fadeInUp}>
            Why Choose Vionsys IT Solutions?
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map(({ title, description, icon }) => (
            <motion.div
              key={title}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              {...fadeInUp}
            >
              {icon}
              <h3 className="mt-6 text-lg font-semibold text-black">{title}</h3>
              <p className="text-base text-gray-600 mt-4">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <InfiniteMovingCardsDemo />

      {/* FAQ section */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-md mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Frequently Asked <span className="text-blue1">Questions</span>
            </h3>
          </div>
          <motion.ul className="space-y-8" {...fadeInUp}>
            {faqs?.map(({ id, question, answer }) => (
              <li key={id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="hidden sm:flex items-center justify-center p-3 rounded-full bg-indigo-500 text-white text-lg">
                    <FaQuestion />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {question}
                  </h4>
                </div>
                <div className="mt-4 flex items-start space-x-4">
                  <p className="text-gray-700 text-base">{answer}</p>
                  <div className="hidden sm:flex items-center justify-center p-3 rounded-full bg-indigo-500 text-white text-lg">
                    <RiQuestionAnswerFill />
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* CTA section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="py-12 px-6 sm:px-10 text-center"
      >
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <motion.h1 className="text-4xl font-bold mt-2 mb-6" {...fadeInUp}>
            Want to discuss how we can help your business grow? Get in touch
            with us today!
          </motion.h1>
          <motion.div {...fadeInUp}>
            <Link
              className="inline-block py-4 px-8 leading-none text-white bg-slate-900 hover:bg-blue1 rounded shadow text-sm font-bold transition-all"
              href="mailto:info@vionsys.com"
            >
              Mail us
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default Index;

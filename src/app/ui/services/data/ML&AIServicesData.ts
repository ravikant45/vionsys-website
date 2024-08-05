import { MdSmartButton } from "react-icons/md";
import { IoChatbox } from "react-icons/io5";
import { TbDeviceVisionPro } from "react-icons/tb";
import { MdOnlinePrediction } from "react-icons/md";
import { FaRobot } from "react-icons/fa6";
import { RiAiGenerate } from "react-icons/ri";

import { MdHealthAndSafety } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdPrecisionManufacturing } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa6";
import { MdSatelliteAlt } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";

type Obj = {
  title: string;
  description: string;
}

export interface Feature {
  id: number;
  icon: React.ComponentType;
  title: string;
  description: string;
  subTitle?: string;
  list: Obj[];
}

export interface Industries {
  id: number;
  icon: React.ComponentType;
  title: string;
  heading: string;
  description: string;
}

interface MLAIServicesData {
  line1: string;
  line2: string;
  para: string;
  features: Feature[];
  industries: Industries[];
}

const MLAIServicesData: MLAIServicesData = {
  line1: "Unlock the Power of Data with",
  line2: "Machine Learning and AI",
  para: "At Vionsys IT Solutions India Pvt Ltd, we specialize in sophisticated Machine Learning (ML) and Artificial Intelligence (AI) solutions that drive innovation and transformation across industries. Our team of experts is committed to helping businesses harness the power of AI and ML to increase operational efficiency, improve decision-making, and gain competitive advantage.",

  features: [
    {
      id: 1,
      icon: MdSmartButton,
      title: "AI and ML consultants",
      description: "Our AI and ML consulting services are designed to help you identify the best ways to incorporate these technologies into your business. We work closely with you to understand your unique challenges and opportunities, offering tailored solutions that meet your needs.",
      subTitle: "Our consulting services include:",
      list: [
        { title: "Needs Analysis", description: "In-depth analysis of your business processes and data to identify AI and ML implementation opportunities." },
        { title: "Implementation Planning", description: "A comprehensive AI and ML approach aligned with your business objectives." },
        { title: "Solution Design", description: "Designing a customized AI and ML solution that addresses your unique needs." },
        { title: "Technology selection", description: "Recommend the best tools, platforms, and frameworks for your AI and ML projects." }
      ]
    },
    {
      id: 2,
      icon: IoChatbox,
      title: "AI & ML Development",
      description: "We provide end-to-end development services for AI and ML applications, ensuring your solutions are robust and scalable and deliver the results you want.",
      subTitle: "Our development services include:",
      list: [
        { title: "Model development", description: "Build and train machine learning models using state-of-the-art algorithmic techniques." },
        { title: "Algorithm Optimization", description: "Algorithms are optimized to maximize performance and accuracy." },
        { title: "Application development", description: "We are building AI-powered applications that seamlessly integrate with your existing systems." },
        { title: "Prototyping and proof of concept", description: "Create prototypes and proof-of-concept models to validate ideas and demonstrate potential benefits." }
      ]
    },
    {
      id: 3,
      icon: TbDeviceVisionPro,
      title: "Data Engineering",
      description: "Successful AI and ML projects depend on high-quality data. Our data engineering services ensure your data is properly prepared, managed, and optimized for AI and ML applications.",
      subTitle: "Our services include:",
      list: [
        { title: "Data Collection", description: "Gather relevant data from various sources, including databases, APIs, and IoT devices." },
        { title: "Data cleaning and preprocessing", description: "Make sure your data is clean, accurate, and ready for analysis." },
        { title: "Data Integration", description: "Combining data from multiple sources to create an integrated data set." },
        { title: "Data storage and management", description: "Implement scalable data storage solutions that support your AI and ML needs." }
      ]
    },
    {
      id: 4,
      icon: MdOnlinePrediction,
      title: "A hybrid of AI and ML",
      description: "Increase their productivity and productivity by integrating AI and ML capabilities into your existing systems and business processes",
      subTitle: "Our integration services include:",
      list: [
        { title: "API development ", description: "API development is the creation of APIs that provide seamless communication between AI instances and other applications." },
        { title: "System integration", description: "Integrating AI and ML models into your business processes and systems." },
        { title: "Automation", description: "Implement AI-powered automation solutions to improve efficiency and reduce manual effort." },
        { title: "Real-time analytics", description: "Enables real-time data processing and analytics to support timely decision-making." }
      ]
    },
    {
      id: 5,
      icon: FaRobot,
      title: "Application of AI and ML",
      description: "Run your AI and ML models in trusted manufacturing environments. Our deployment services ensure your models are scalable and reliable and deliver consistent performance.",
      subTitle: "Our services include:",
      list: [
        { title: "Model deployment", description: "Deploy models to cloud platforms, on-premises, or edge devices." },
        { title: "Performance Monitoring", description: "The performance of the model is continuously monitored to ensure its effectiveness." },
        { title: "Maintenance and update", description: "Regular model updates add new data and improve accuracy." },
        { title: "Scalability", description: "Ensure your AI and ML solutions can scale to meet increasing demand." }
      ]
    },
    {
      id: 6,
      icon: RiAiGenerate,
      title: "AI and ML Support",
      description: "Our support and maintenance services ensure that your AI and ML solutions continue to deliver value over time.",
      subTitle: "We recommend that:",
      list: [
        { title: "Technical Support", description: "To provide ongoing technical support to address any issues or challenges." },
        { title: "Model maintenance", description: "Models are regularly updated and retrained to remain accurate and relevant." },
        { title: "Performance Optimization", description: "Prototypes are continuously optimized to increase productivity." },
        { title: "Implementation Training", description: "Provide training programs to help your team implement and manage AI and ML solutions effectively." }
      ]
    }
  ],

  industries: [
    {
      id: 1,
      icon: MdHealthAndSafety,
      title: "Healthcare",
      heading: "Revolutionizing Patient Care and Operational Efficiency",
      description: "AI and ML are transforming healthcare by enabling predictive diagnostics, personalized treatment plans and efficient hospital management. Our solutions help healthcare providers improve patient outcomes, streamline operations and reduce costs through advanced data analytics, image recognition and natural language processing."
    },
    {
      id: 2,
      icon: RiMoneyRupeeCircleFill,
      title: "Finance",
      heading: "Enhancing Security and Decision-Making",
      description: "In the finance industry, AI and ML are critical for fraud detection, risk management and personalized banking experiences. Our services include predictive analytics for financial forecasting, automated trading systems and customer sentiment analysis to help financial institutions make informed decisions and enhance security."
    },
    {
      id: 3,
      icon: RiShoppingBag3Fill,
      title: "Retail and E-commerce",
      heading: "Driving Customer Engagement and Sales",
      description: "We help retail and e-commerce businesses leverage AI and ML to enhance customer experiences through personalized recommendations, inventory management and demand forecasting. Our solutions enable dynamic pricing strategies, optimize supply chains and improve customer service with AI-powered chatbots."
    },
    {
      id: 4,
      icon: MdPrecisionManufacturing,
      title: "Manufacturing",
      heading: "Optimizing Production and Quality Control",
      description: "AI and ML are key to the future of smart manufacturing. Our solutions include predictive maintenance, process optimization and quality control through machine vision. We help manufacturers reduce downtime, improve product quality and increase overall efficiency."
    },
    {
      id: 5,
      icon: FaTruckMoving,
      title: "Logistics and Supply Chain",
      heading: "Streamlining Operations and Reducing Costs",
      description: "In logistics and supply chain management, our AI and ML solutions provide real-time analytics, route optimization and demand forecasting. We help companies improve inventory management, reduce transportation costs and enhance supply chain visibility."
    },
    {
      id: 6,
      icon: MdSatelliteAlt,
      title: "Telecommunications",
      heading: "Enhancing Network Performance and Customer Satisfaction",
      description: "Our AI and ML solutions for the telecommunications industry include network optimization, predictive maintenance and customer service automation. We help telecom companies improve network reliability, reduce operational costs and provide better customer experiences."
    },
    {
      id: 7,
      icon: MdElectricBolt,
      title: "Energy and Utilities",
      heading: "Improving Efficiency and Sustainability",
      description: "AI and ML are crucial for optimizing energy production, managing grid operations and enhancing sustainability. Our solutions help energy and utility companies predict equipment failures, optimize energy distribution and integrate renewable energy sources effectively."
    },
    {
      id: 8,
      icon: IoSchoolSharp,
      title: "Education",
      heading: "Personalizing Learning Experiences",
      description: "In the education sector, our AI and ML solutions enable personalized learning, student performance analytics and administrative automation. We help educational institutions improve learning outcomes, enhance student engagement and streamline administrative processes."
    }
  ]
};

export { MLAIServicesData };

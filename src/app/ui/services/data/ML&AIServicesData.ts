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

export interface Feature {
  id: number;
  icon: any;
  title: string;
  description: string;
}

export interface Industries {
  id: number;
  icon: any;
  title: string;
  heading:string;
  description: string;
}



interface MLAIServicesData {
  line1: string;
  line2: string;
  para: string;
  features: Feature[];
  industries:Industries[];
  
}


const MLAIServicesData: MLAIServicesData = {
  line1: "Unlock the Power of Data with",
  line2: "Machine Learning and AI  ",
  para: " we harness the potential of Machine Learning and Artificial Intelligence to drive innovation and transform your business. Our expert team of data scientists and AI engineers specializes in developing custom ML and AI solutions tailored to your unique needs.",

  features: [
    {
      id: 1,
      icon: MdSmartButton,
      title: "Machine Learning",
      description:
        "Leverage advanced algorithms and data analysis techniques to establish a scalable foundation.",
    },
    {
      id: 2,
      icon: IoChatbox,
      title: "Virtual Assistants",
      description:
        "Enhance productivity and efficiency while safeguarding your digital assets with cutting-edge monitoring.",
    },
    {
      id: 3,
      icon: TbDeviceVisionPro,
      title: "Computer Vision",
      description:
        "Optimize governance and streamline operations with robust collaboration and communication tools.",
    },
    {
      id: 4,
      icon: MdOnlinePrediction,
      title: "Predictive Analytics",
      description:
        "Drive informed decision-making and maximize ROI through strategic resource allocation facilitated.",
    },
    {
      id: 5,
      icon: FaRobot,
      title: "AI Robotics",
      description:
        "Transform operations with proactive insights and performance management capabilities enabled.",
    },
    {
      id: 6,
      icon: RiAiGenerate,
      title: "Generative AI",
      description:
        "Ensure operational continuity with secure and configuration management powered by generative AI.",
    },
  ],

  industries:[
    {
      id: 1,
      icon: MdHealthAndSafety,
      title: "Healthcare",
      heading:"Revolutionizing Patient Care and Operational Efficiency",
      description:
        "AI and ML are transforming healthcare by enabling predictive diagnostics, personalized treatment plans and efficient hospital management. Our solutions help healthcare providers improve patient outcomes, streamline operations and reduce costs through advanced data analytics, image recognition and natural language processing.",
    },
    {
      id: 2,
      icon: RiMoneyRupeeCircleFill,
      title: "Finance",
      heading:"Enhancing Security and Decision-Making",
      description:
        "In the finance industry, AI and ML are critical for fraud detection, risk management and personalized banking experiences. Our services include predictive analytics for financial forecasting, automated trading systems and customer sentiment analysis to help financial institutions make informed decisions and enhance security.",
    },
    {
      id: 3,
      icon: RiShoppingBag3Fill,
      title: "Retail and E-commerce",
      heading:"Driving Customer Engagement and Sales",
      description:
        "We help retail and e-commerce businesses leverage AI and ML to enhance customer experiences through personalized recommendations, inventory management and demand forecasting. Our solutions enable dynamic pricing strategies, optimize supply chains and improve customer service with AI-powered chatbots.",
    },
    {
      id: 4,
      icon: MdPrecisionManufacturing,
      title: "Manufacturing",
      heading:"Optimizing Production and Quality Control",
      description:
        "AI and ML are key to the future of smart manufacturing. Our solutions include predictive maintenance, process optimization and quality control through machine vision. We help manufacturers reduce downtime, improve product quality and increase overall efficiency.",
    },
    {
      id: 5,
      icon: FaTruckMoving,
      title: "Logistics and Supply Chain",
      heading:"Streamlining Operations and Reducing Costs",
      description:
        "In logistics and supply chain management, our AI and ML solutions provide real-time analytics, route optimization and demand forecasting. We help companies improve inventory management, reduce transportation costs and enhance supply chain visibility.",
    },
    {
      id: 6,
      icon: MdSatelliteAlt,
      title: "Telecommunications",
      heading:"Enhancing Network Performance and Customer Satisfaction",
      description:
        "Our AI and ML solutions for the telecommunications industry include network optimization, predictive maintenance and customer service automation. We help telecom companies improve network reliability, reduce operational costs and provide better customer experiences.",
    },
    {
      id: 7,
      icon: MdElectricBolt,
      title: "Energy and Utilities",
      heading:"Improving Efficiency and Sustainability",
      description:
        "AI and ML are crucial for optimizing energy production, managing grid operations and enhancing sustainability. Our solutions help energy and utility companies predict equipment failures, optimize energy distribution and integrate renewable energy sources effectively.",
    },
    {
      id: 8,
      icon: IoSchoolSharp,
      title: "Education",
      heading:"Personalizing Learning Experiences",
      description:
        "In the education sector, our AI and ML solutions enable personalized learning, student performance analytics and administrative automation. We help educational institutions improve learning outcomes, enhance student engagement and streamline administrative processes.",
    }
  ],
  
};

export { MLAIServicesData };

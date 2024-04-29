import { MdSmartButton } from "react-icons/md";
import { IoChatbox } from "react-icons/io5";
import { TbDeviceVisionPro } from "react-icons/tb";
import { MdOnlinePrediction } from "react-icons/md";
import { FaRobot } from "react-icons/fa6";
import { RiAiGenerate } from "react-icons/ri";
export interface Feature {
  id: number;
  icon: any;
  title: string;
  description: string;
}

interface MLAIServicesData {
  line1: string;
  line2: string;
  para: string;
  features: Feature[];
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
        "Transform your operations with proactive insights and performance management capabilities enabled.",
    },
    {
      id: 6,
      icon: RiAiGenerate,
      title: "Generative AI",
      description:
        "Ensure peace of mind and operational continuity with secure and configuration management powered by generative AI.",
    },
  ],
};

export { MLAIServicesData };

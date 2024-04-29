import { FaInfinity } from "react-icons/fa6";
import { MdMonitorHeart } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import { FaDev } from "react-icons/fa6";
import { GrConfigure } from "react-icons/gr";
export interface Feature {
  id: number;
  icon: any;
  title: string;
  description: string;
}

interface DevOpesServicesData {
  line1: string;
  line2: string;
  para: string;
  features: Feature[];
}

const DevOpesServicesData: DevOpesServicesData = {
  line1: "Streamline your development lifecycle with",
  line2: "Agile DevOps Solutions ",
  para: "Revolutionize your software delivery process with our agile DevOps solutions. By breaking down silos between development and operations teams, we empower your organization to accelerate innovation, increase efficiency, and deliver value to your customers faster than ever before.",

  features: [
    {
      id: 1,
      icon: FaInfinity,
      title: "CICD",
      description:
        "Establish a scalable foundation for digital operations with seamless integration.",
    },
    {
      id: 2,
      icon: MdMonitorHeart,
      title: "Monitoring and Logging",
      description:
        "Safeguard your digital assets with cutting-edge monitoring and logging solutions.",
    },
    {
      id: 3,
      icon: MdPeople,
      title: "Collaboration",
      description:
        "Foster efficient governance and streamlined operations through robust collaboration and communication tools.",
    },
    {
      id: 4,
      icon: SiTestcafe,
      title: "Automated Testing",
      description:
        "Maximize ROI with strategic resource allocation through comprehensive automated testing.",
    },
    {
      id: 5,
      icon: FaDev,
      title: "Orchestration Software",
      description:
        "Gain proactive insights for performance management through advanced orchestration capabilities.",
    },
    {
      id: 6,
      icon: GrConfigure,
      title: "Configuration Management",
      description:
        "Ensure peace of mind with secure, automated backups and configuration management.",
    },
  ],
};

export { DevOpesServicesData };

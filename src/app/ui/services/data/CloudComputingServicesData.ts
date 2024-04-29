import { PiTreeStructureFill } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineMonitor } from "react-icons/ai";
import { MdBackup } from "react-icons/md";

export interface Feature {
  id: number;
  icon: any;
  title: string;
  description: string;
}

interface CloudComputingServicesData {
  line1: string;
  line2: string;
  para: string;
  features: Feature[];
}

const CloudComputingServicesData: CloudComputingServicesData = {
  line1: "Transform your infrastructure with",
  line2: "Cloud Computing",
  para: "Experience the next evolution of business infrastructure with our cutting-edge cloud computing solutions. Our scalable and reliable cloud services empower your organization to adapt and thrive in today's dynamic digital landscape.",
  features: [
    {
      id: 1,
      icon: PiTreeStructureFill,
      title: "Cloud Infrastructure",
      description: "Scalable foundation for digital operations.",
    },
    {
      id: 2,
      icon: MdOutlineSecurity,
      title: "Cloud Security",
      description: "Cutting-edge protection for digital assets.",
    },
    {
      id: 3,
      icon: MdManageAccounts,
      title: "Cloud Management",
      description: "Efficient governance for streamlined operations.",
    },
    {
      id: 4,
      icon: FaRupeeSign,
      title: "Cloud Cost Optimization",
      description: "Maximize ROI through strategic resource allocation.",
    },
    {
      id: 5,
      icon: AiOutlineMonitor,
      title: "Cloud Monitoring",
      description: "Proactive insights for performance management.",
    },
    {
      id: 6,
      icon: MdBackup,
      title: "Data Backup",
      description: "Secure, automated backups for peace of mind.",
    },
  ],
};

export { CloudComputingServicesData };

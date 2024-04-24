import { BiSolidCustomize } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa6";
import { FaMobileButton } from "react-icons/fa6";
import { MdOutlineWeb } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import hero_image from "/public/assets/services/softwarebg.jpg";
import experties from "/public/assets/services/experties.jpg";
import cuttingedge from "/public/assets/services/cuttingedge.jpg";
import time from "/public/assets/services/time.jpg";
interface Service {
  id: number;
  title: string;
  logo: React.ComponentType;
  desc: string;
}

interface WorkType {
  id: number;
  img: any;
  title: string;
  description: string;
}

interface FAQ {
  id: number;
  ques: string;
  ans: string;
}

interface SoftwareServicesData {
  headline: string;
  paragraph: string;
  Services: Service[];
  workType: WorkType[];
  faq: FAQ[];
}

const SoftwareServicesData: SoftwareServicesData = {
  headline: " SOFTWARE DEVELOPMENT",
  paragraph:
    "At Vionsys IT Solutions INDIA Pvt. Ltd., we are not just about software development; we are architects of digital transformation. Our team crafts bespoke, scalable solutions that empower businesses to conquer their challenges and seize opportunities in the digital landscape.",
  Services: [
    {
      id: 1,
      title: "Custom Development",
      logo: BiSolidCustomize,
      desc: "Unique software tailored to your business needs. ",
    },
    {
      id: 2,
      title: "Enterprise App Development",
      logo: FaBuilding,
      desc: "Optimize efficiency with custom enterprise applications.",
    },
    {
      id: 3,
      logo: FaMobileButton,
      title: "Mobile App Development",
      desc: "Engaging mobile apps for seamless user experiences.",
    },
    {
      id: 4,
      title: "Web App Development",
      logo: MdOutlineWeb,
      desc: "Dynamic web applications for unparalleled user interaction.",
    },
    {
      id: 5,
      title: "Software Integration",
      logo: MdOutlineIntegrationInstructions,
      desc: "Seamless integration solutions for your digital ecosystem.",
    },
  ],
  workType: [
    {
      id: 1,
      img: experties,
      title: "Expertise and Experience",
      description:
        "Our team brings years of collective experience in software development across various industries. From startups to enterprises.",
    },
    {
      id: 2,
      img: cuttingedge,
      title: "Cutting-Edge Technologies ",
      description:
        " we constantly update our skills and stay abreast of the latest trends and technologies in software development. ",
    },
    {
      id: 3,
      img: time,
      title: "On-Time Delivery",
      description:
        "Our agile development methodology allows us to adapt to changing requirements and deliver incremental updates regularly.",
    },
  ],
  faq: [
    {
      id: 1,
      ques: "What programming languages do you specialize in?",
      ans: "We specialize in a wide range of programming languages, including but not limited to Java, Python, JavaScript, C#, and Ruby. Our language selection is tailored to your project's specific requirements, ensuring optimal performance and scalability.",
    },
    {
      id: 2,
      ques: "What development methodologies do you follow?",
      ans: "Our team is proficient in various development methodologies, such as Agile, Scrum, and DevOps. We prioritize collaboration, transparency, and iterative development to efficiently deliver high-quality solutions.",
    },
    {
      id: 3,
      ques: "How do you ensure the security of software applications?",
      ans: "Security is paramount to us. We adhere to industry best practices and standards to protect your applications from potential threats. Through rigorous code reviews, encryption protocols, and continuous security testing, we mitigate risks effectively throughout the development lifecycle.",
    },
    {
      id: 4,
      ques: "What support and maintenance services do you offer post-launch?",
      ans: "Our commitment extends beyond the launch of your software. We provide comprehensive support, including troubleshooting, bug fixes, and updates, ensuring the ongoing success and performance optimization of your applications.",
    },
  ],
};

export default SoftwareServicesData;

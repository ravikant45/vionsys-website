import { BiSolidCustomize } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa6";
import { FaMobileButton } from "react-icons/fa6";
import { MdOutlineWeb } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";

const SoftwareServicesData = {
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
};
export default SoftwareServicesData;

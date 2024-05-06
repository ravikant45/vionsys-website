import { PiStrategyBold } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { MdRocketLaunch } from "react-icons/md";
import { MdHighQuality } from "react-icons/md";
import endtoend from "/public/assets/services/endtoend.jpg";
import satisfy from "/public/assets/services/satisfy.jpg";
import support from "/public/assets/services/support.jpg";

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

interface ProductServicesData {
  headline: string;
  paragraph: string;
  Services: Service[];
  workType: WorkType[];
  faq: FAQ[];
}

const ProductServicesData: ProductServicesData = {
  headline: " PRODUCT DEVELOPMENT",
  paragraph:
    "In our suite of services, we specialize in comprehensive product development solutions, dedicated to transforming your ideas into successful, market-ready products. Our experienced team expertly navigates businesses through every phase of the product development journey, from concept to market launch.",
  Services: [
    {
      id: 1,
      title: "Product Strategy",
      logo: PiStrategyBold,
      desc: "Craft a unique product strategy tailored to your business needs, ensuring alignment with your objectives and market demands.",
    },
    {
      id: 2,
      title: "Product Design",
      logo: MdOutlineDesignServices,
      desc: "Transform your vision into reality with captivating product designs that optimize efficiency and enhance user experience.",
    },
    {
      id: 3,
      title: "Product Development",
      logo: MdOutlineDeveloperBoard,
      desc: "Bring your ideas to life with expert product development services, delivering engaging mobile apps and innovative solutions.",
    },
    {
      id: 4,
      title: "Quality Assurance",
      logo: MdHighQuality,
      desc: "Ensure the highest standards of quality and reliability for your products with our rigorous quality assurance processes and testing methodologies.",
    },
    {
      id: 5,
      title: "Product Launch",
      logo: MdRocketLaunch,
      desc: "Successfully introduce your products to the market with our seamless product launch solutions, including integration strategies tailored to your digital ecosystem.",
    },
  ],
  workType: [
    {
      id: 1,
      img: endtoend,
      title: "End-to-End Solutions",
      description:
        "From initial ideation to final product launch, we offer comprehensive, end-to-end solutions that cover every aspect of the product development lifecycle.",
    },
    {
      id: 2,
      img: satisfy,
      title: "Customer Satisfaction ",
      description:
        " We measure our success by the success of your product and are dedicated to ensuring that you're delighted with the final outcome.",
    },
    {
      id: 3,
      img: support,
      title: "Ongoing Support",
      description:
        "We provide ongoing support and maintenance services to ensure that your product continues to meet your needs and perform at its best.",
    },
  ],
  faq: [
    {
      id: 1,
      ques: "What is the product development process like at your company?",
      ans: "Our product development process involves several stages, including ideation, market research, prototyping, testing, and launch. We work closely with you throughout each phase to ensure that the final product meets your vision and requirements.",
    },
    {
      id: 2,
      ques: "How do you ensure that the product meets our business goals and objectives?",
      ans: "We begin by thoroughly understanding your business goals and objectives. Our team conducts detailed market research and analysis to identify opportunities and challenges, ensuring that the product we develop is strategically aligned with your objectives and targets the right audience.",
    },
    {
      id: 3,
      ques: "What sets your product development approach apart from others?",
      ans: "Our product development approach is characterized by innovation, collaboration, and a customer-centric mindset. We prioritize user feedback and iteration, ensuring that the final product not only meets but exceeds user expectations.",
    },
    {
      id: 4,
      ques: "How do you handle changes or revisions during the product development process?",
      ans: "We understand that requirements may evolve throughout the development process. Our agile methodology allows for flexibility and adaptation to change. We encourage open communication and provide mechanisms for feedback and iteration to accommodate any changes or revisions smoothly.",
    },
    {
      id: 5,
      ques: "What measures do you take to ensure product quality and reliability?",
      ans: "Quality and reliability are paramount in product development. We employ rigorous testing methodologies, including functional testing, performance testing, and user acceptance testing, to ensure that the product meets the highest standards of quality and reliability.",
    },
    {
      id: 6,
      ques: "What is your experience in launching products in the market?",
      ans: "We have a proven track record of successfully launching products in the market across various industries. Our team leverages market insights, strategic planning, and effective marketing strategies to ensure a successful product launch and maximum impact in the market.",
    },
  ],
};

export default ProductServicesData;

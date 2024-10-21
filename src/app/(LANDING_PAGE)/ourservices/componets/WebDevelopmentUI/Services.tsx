"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Service1 from "../../images/WebDevelopment/Service1.jpg";
import Service2 from "../../images/WebDevelopment/Service2.jpg";
import Service3 from "../../images/WebDevelopment/Service3.jpg";
import Service4 from "../../images/WebDevelopment/Service4.jpg";
import Service5 from "../../images/WebDevelopment/Service5.jpg";
import Service6 from "../../images/WebDevelopment/Service6.jpg";
import Service7 from "../../images/WebDevelopment/Service7.jpg";

interface Service {
  title: string;
  description: string;
  imageSrc: any;
  supportedPlatforms: string[];
}

const services: Service[] = [
  {
    title: "Premium Website Quality",
    description:
      "We specialize in creating premium-quality websites with responsive web design that seamlessly aligns with your vision. Our expert team ensures every detail reflects your brand, providing a user-friendly experience across all devices.",
    imageSrc: Service1,
    supportedPlatforms: ["Adobe XD", "Figma", "Sketch", "InVision"],
  },
  {
    title: "24/7 Service Support",
    description:
      "Our clients are our top priority, and we are dedicated to providing the best web design services along with 24/7 support. We stay active across all communication channels to ensure comprehensive customer assistance.",
    imageSrc: Service2,
    supportedPlatforms: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    title: "Website Maintenance",
    description:
      "We provide a tailored solution to ensure your online presence stays polished and functional. Our dedicated team works tirelessly behind the scenes, safeguarding your site against glitches and optimizing its performance.",
    imageSrc: Service3,
    supportedPlatforms: ["Node.js", "Django", "Ruby on Rails", ".NET"],
  },
  {
    title: "Responsive Web Design",
    description:
      "Experience the innovation of our responsive web design services, tailored to adapt seamlessly across all devices. With our cutting-edge approach, your website will captivate users whether they're browsing on a desktop, tablet, or smartphone.",
    imageSrc: Service4,
    supportedPlatforms: ["Magento", "Bigcommerce", "Shopify", "WooCommerce"],
  },
  {
    title: "Fast Delivery & Total Transparency",
    description:
      "Get ready to experience the thrill of lightning-fast delivery paired with unparalleled transparency in our cutting-edge web design services! At our core, we prioritize efficiency and honesty, ensuring your project progresses seamlessly while keeping you fully informed every step of the way.",
    imageSrc: Service5,
    supportedPlatforms: ["AWS", "Google Cloud", "Azure", "IBM Cloud"],
  },
  {
    title: "Graphic Design & Logo Design",
    description:
      "Explore our vibrant array of graphic design and logo creation services that ignite your brand's visual identity. Let your brand speak volumes through our expertly crafted designs, where every pixel tells a story of innovation and excellence.",
    imageSrc: Service6,
    supportedPlatforms: [
      "Salesforce",
      "Zoho CRM",
      "HubSpot",
      "Microsoft Dynamics",
    ],
  },
  {
    title: "Web Hosting and Domain Services",
    description:
      "We offer comprehensive web hosting and domain services to ensure your online presence is seamless and robust. Our web hosting solutions are designed to meet the diverse needs of businesses, providing reliable, secure, and high-performance hosting environments.",
    imageSrc: Service7,
    supportedPlatforms: [
      "Salesforce Service Cloud",
      "Salesforce Marketing Cloud",
    ],
  },
];

export default function Solutions() {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    if (isMobile && imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-slate-700 p-8">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 20 },
          opacity: { duration: 0.4 },
          ease: "easeInOut",
        }}
        className="text-MainHeading font-bold mb-4"
      >
        Our Services
      </motion.h1>
      <p className="mb-8 text-lg text-gray-800">
        We provide top-notch web design and development services tailored to
        your unique needs. Our customized and affordable web design solutions
        ensure your website stands out. With us, you can select the best plans
        to create a responsive web design that perfectly aligns with your
        vision.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-4 cursor-pointer border-b border-gray-700 flex justify-between items-center ${selectedService.title === service.title
                  ? "text-blue-700"
                  : "hover:bg-gray-200"
                }`}
              onClick={() => handleServiceClick(service)}
            >
              <span>{service.title}</span>
              <FaAngleRight className="w-5 h-5" />
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="w-full md:w-2/3"
          ref={imageRef}
        >
          <Image
            src={selectedService.imageSrc}
            alt={selectedService.title}
            width={600}
            height={400}
            quality={100}
            className="w-full h-32 md:h-80 object-cover mb-4" 
            priority={selectedService.title === services[0].title}
            placeholder="blur"
          />
          <motion.h2
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="text-2xl font-bold mb-2"
          >
            {selectedService.title}
          </motion.h2>
          <p>{selectedService.description}</p>
        </motion.div>
      </div>
    </div>
  );
}

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

const Industries = () => {
  const testimonials = [
    {
      name: "IT Digital Transformation",
      description:
        "Stay ahead in today's digital landscape with our comprehensive IT Digital Transformation services, enabling businesses to adapt, grow, and thrive.",
      href: "/industries/it-digital",
      ariaLabel: "Read more about IT Digital Transformation",
    },
    {
      name: "Finance Sector",
      description:
        "We provide innovative IT platforms to help banks, insurers, venture capitalists, and fintechs stay competitive, compliant, and customer-focused.",
      href: "/industries/finance",
      ariaLabel: "Read more about the Finance Sector",
    },
    {
      name: "Professional Services",
      description:
        "We provide expert advice, tailored installation, and comprehensive support to help businesses navigate challenges and achieve their goals.",
      href: "/industries/professional",
      ariaLabel: "Read more about Professional Services",
    },
    {
      name: "Banking Sector",
      description:
        "We provide banks with secure, scalable IT services to boost efficiency, ensure compliance, and enhance customer experience.",
      href: "/industries/banking",
      ariaLabel: "Read more about the Banking Sector",
    },
    {
      name: "Pharma Sector",
      description:
        "We provide IT services to streamline operations, ensure compliance, and accelerate innovation in the evolving pharmaceutical industry.",
      href: "/industries/pharma",
      ariaLabel: "Read more about the Pharma Sector",
    },
    {
      name: "Telecommunication Sector",
      description:
        "We provide scalable IT services and advanced network solutions to enhance customer experiences and drive innovation in the telecom industry.",
      href: "/industries/telecom",
      ariaLabel: "Read more about the Telecommunication Sector",
    },
  ];

  const testimonials2 = [
    {
      name: "Insurance Sector",
      description:
        "We provide IT services to help the insurance industry improve efficiency, customer experience, and compliance amidst digital and regulatory changes.",
      href: "/industries/insurance",
      ariaLabel: "Read more about the Insurance Sector",
    },
    {
      name: "E-commerce Sector",
      description:
        "We offer tailored IT solutions for the e-commerce sector, including website and app development, trading platform integration, cloud services, analytics, and security.",
      href: "/industries/ecommerce",
      ariaLabel: "Read more about the E-commerce Sector",
    },
    {
      name: "Construction Sector",
      description:
        "We provide IT solutions to enhance project management, efficiency, and safety in the construction industry, boosting productivity and innovation.",
      href: "/industries/construction",
      ariaLabel: "Read more about the Construction Sector",
    },
    {
      name: "Health Sector",
      description:
        "We offer IT solutions to enhance patient care and security, including Cloud Solutions, EHR Systems, Data Analytics, Cybersecurity, and Telemedicine.",
      href: "/industries/health",
      ariaLabel: "Read more about the Health Sector",
    },
    {
      name: "Education Sector",
      description:
        "We provide IT solutions for the education sector, including LMS, e-learning, SIS, and online assessments, to enhance learning, productivity, and security.",
      href: "/industries/education",
      ariaLabel: "Read more about the Education Sector",
    },
    {
      name: "Field Service Sector",
      description:
        "IT solutions for farming: efficiency, real-time data, better service. Includes software, mobile apps, cloud services, IoT, and support.",
      href: "/industries/field",
      ariaLabel: "Read more about the Field Service Sector",
    },
  ];

  return (
    <div className="z-0 px-6 py-4 overflow-x-hidden">
      <div className="text-center">
        <h1 className="text-MainHeading font-extrabold mt-2">
          Sectors We Serve
        </h1>
      </div>
      <div className="py-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials2}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Industries;

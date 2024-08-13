
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";
import React from "react";

const Industries = () => {
  const testimonials = [
    {
      name: "IT Digital Transformation",
      description: "Stay ahead in today's digital landscape with our comprehensive IT Digital Transformation services, enabling businesses to adapt, grow, and thrive.",
      button: <Link href="/industries/itDigital">Read More</Link>,
    },
    {
      name: "Finance Sector",
      description: "We provide innovative IT platforms to help banks, insurers, venture capitalists, and fintechs stay competitive, compliant, and customer-focused.",
      button: <Link href="/industries/finance">Read More</Link>,
    },
    {
      name: "Professional Services",
      description: "We provide expert advice, tailored installation, and comprehensive support to help businesses navigate challenges and achieve their goals.",
      button: <Link href="/industries/professional">Read More</Link>,
    },
    {
      name: "Banking Sector",
      description: "We provides banks with secure, scalable IT services to boost efficiency, ensure compliance, and enhance customer experience.",
      button: <Link href="/industries/banking">Read More</Link>,
    },
    {
      name: "Pharma Sector",
      description: "We provide IT services to streamline operations, ensure compliance, and accelerate innovation in the evolving pharmaceutical industry.",
      button: <Link href="/industries/pharma">Read More</Link>,
    },
    {
      name: "Telecommunication Sector",
      description: "We provide scalable IT services and advanced network solutions to enhance customer experiences and drive innovation in the telecom industry.",
      button: <Link href="/industries/telecom">Read More</Link>,
    },
  ];

  const testimonials2 = [
    {
      name: "Insurance Sector",
      description: "We provide IT services to help the insurance industry improve efficiency, customer experience, and compliance amidst digital and regulatory changes.",
      button: <Link href="/industries/insurance">Read More</Link>,
    },
    {
      name: "E-commerce Sector",
      description: "We offer tailored IT solutions for the e-commerce sector, including website and app development, trading platform integration, cloud services, analytics, and security.",
      button: <Link href="/industries/ecommerce">Read More</Link>,
    },
    {
      name: "Construction Sector",
      description: "We provide IT solutions to enhance project management, efficiency, and safety in the construction industry, boosting productivity and innovation.",
      button: <Link href="/industries/construction">Read More</Link>,
    },
    {
      name: "Health Sector",
      description: "We offer IT solutions to enhance patient care and security, including Cloud Solutions, EHR Systems, Data Analytics, Cybersecurity, and Telemedicine.",
      button: <Link href="/industries/health">Read More</Link>,
    },
    {
      name: "Education Sector",
      description: "We provide IT solutions for the education sector, including LMS, e-learning, SIS, and online assessments, to enhance learning, productivity, and security.",
      button: <Link href="/industries/education">Read More</Link>,
    },
    {
      name: "Field Service Sector",
      description: "IT solutions for farming: efficiency, real-time data, better service. Includes software, mobile apps, cloud services, IoT, and support.",
      button: <Link href="/industries/field">Read More</Link>,
    },
  ];

  return (
    <div className="z-0 px-6 py-4 overflow-x-hidden">
      <div className="text-center">
        <p className="font-bold text-MainHeading mt-4">Industries</p>
        <h1 className="text-SubHeading font-extrabold mt-2">Sectors We Serve</h1>
      </div>
      <div className="py-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards items={testimonials2} direction="left" speed="slow" />
      </div>
    </div>
  );
};

export default Industries;

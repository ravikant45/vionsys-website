import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

function WeProvide() {
  const slide1 = [
    {
      name: "Software Development",
      description:
        "Software development entails crafting computer programs to meet specific user needs, boosting efficiency and driving digital innovation through meticulous coding and development methodologies.",
      href: "/services/software-development",
      ariaLabel: "Explore Software Development services",
    },
    {
      name: "Web Development",
      description:
        "Web development is the strategic fusion of design and coding to create impactful websites and web applications, harnessing technologies like HTML, CSS, JavaScript and backend frameworks for tailored digital experiences.",
      href: "/services/web-development",
      ariaLabel: "Explore Web Development services",
    },
    {
      name: "Cloud Computing",
      description:
        "Cloud computing entails the dynamic delivery of computing resources like storage, servers and software over the internet, offering unparalleled scalability and flexibility to businesses.",
      href: "/services/cloud-computing",
      ariaLabel: "Explore Cloud Computing services",
    },
    {
      name: "Salesforce",
      description:
        "Optimize your business with our expert Salesforce solutions. We offer seamless implementation, customization, and integration to enhance customer relationships and drive growth.",
      href: "/services/salesforce",
      ariaLabel: "Explore Salesforce solutions",
    },
    {
      name: "IT Staffing",
      description:
        "Empower your business with top-tier IT talent. Our IT staffing services provide skilled professionals who match your unique needs, ensuring the right fit for your team and driving success in your projects.",
      href: "/services/itstaffing",
      ariaLabel: "Explore IT Staffing services",
    },
    {
      name: "Big Data Analytics",
      description:
        "Transform your data into actionable insights with our advanced Big Data Analytics services. We provide real-time analytics and predictive modeling to drive strategic decisions and enhance business performance.",
      href: "/services/big-data-analytics",
      ariaLabel: "Explore Big Data Analytics services",
    },
  ];

  const slide2 = [
    {
      name: "Machine Learning & AI",
      description:
        "Machine learning is a subset of artificial intelligence focused on developing algorithms that enable computers to learn from and make predictions based on data.",
      href: "/services/machinelearning-ai",
      ariaLabel: "Explore Machine Learning & AI services",
    },
    {
      name: "DevOps",
      description:
        "DevOps integrates software development (Dev) and IT operations (Ops) to enhance collaboration, efficiency and automation throughout the software delivery lifecycle.",
      href: "/services/devOps",
      ariaLabel: "Explore DevOps services",
    },
    {
      name: "Testing and QA",
      description:
        "Testing and Quality Assurance (QA) ensure software meets quality standards, functions flawlessly and satisfies user requirements through thorough evaluation.",
      href: "/services/testing",
      ariaLabel: "Explore Testing and QA services",
    },
    {
      name: "Digital Marketing",
      description:
        "Enhance your online presence with our expert SEO, social media, and targeted ad strategies. Drive engagement and achieve measurable results.",
      href: "/services/digital-marketing",
      ariaLabel: "Explore Digital Marketing services",
    },
    {
      name: "CRM",
      description:
        "Boost customer relationships with our user-friendly CRM. Streamline interactions, gain insights, and drive growth with our customizable platform.",
      href: "/services/crm",
      ariaLabel: "Explore CRM services",
    },
    {
      name: "BI and Analytics",
      description:
        "Transform data into actionable insights with our advanced analytics and customized dashboards for smarter decisions and business growth.",
      href: "/services/bi-analytics",
      ariaLabel: "Explore BI and Analytics services",
    },
  ];

  return (
    <div className="z-0 px-6 py-4 overflow-x-hidden">
      <div className="text-center">
        <h2 className="text-MainHeading font-extrabold mt-2">IT Solutions</h2>
      </div>
      <div className="py-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={slide1} direction="right" speed="slow" />
        <InfiniteMovingCards items={slide2} direction="left" speed="slow" />
      </div>
    </div>
  );
}

export default WeProvide;

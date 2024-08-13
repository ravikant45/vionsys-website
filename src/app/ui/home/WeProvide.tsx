import React from "react";
import Link from "next/link";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

function WeProvide() {

  const testimonials = [
    {
      name: "Software Development",
      description:
        "Software development entails crafting computer programs to meet specific user needs, boosting efficiency and driving digital innovation through meticulous coding and development methodologies.",
      button: <Link href="/services/software-development">Read More</Link>,
    },
    {
      name: "Web Development",
      description:
        "Web development is the strategic fusion of design and coding to create impactful websites and web applications, harnessing technologies like HTML, CSS, JavaScript and backend frameworks for tailored digital experiences.",
      button: <Link href="/services/web-development">Read More</Link>,
    },
    {
      name: "Cloud Computing",
      description:
        "Cloud computing entails the dynamic delivery of computing resources like storage, servers and software over the internet, offering unparalleled scalability and flexibility to businesses.",
      button: <Link href="/services/cloud-computing">Read More</Link>,
    },
    {
      name: "Salesforce",
      description:
        "Optimize your business with our expert Salesforce solutions. We offer seamless implementation, customization, and integration to enhance customer relationships and drive growth.",
      button: <Link href="/services/salesforce">Read More</Link>,
    },
    {
      name: "IT Staffing",
      description:
        "Empower your business with top-tier IT talent. Our IT staffing services provide skilled professionals who match your unique needs, ensuring the right fit for your team and driving success in your projects.",
      button: <Link href="/services/IT-staffing">Read More</Link>,
    },
    {
      name: "Big Data Analytics",
      description:
        "Transform your data into actionable insights with our advanced Big Data Analytics services. We provide real-time analytics and predictive modeling to drive strategic decisions and enhance business performance.",
      button: <Link href="/services/big-data-analytics">Read More</Link>,
    },
  ];

  const tests = [
    {
      name: "Machine Learning & AI",
      description: "Machine learning is a subset of artificial intelligence focused on developing algorithms that enable computers to learn from and make predictions based on data.",
      button: <Link href="/services/ML-AI">Read More</Link>,
    },
    {
      name: "DevOps",
      description:
        "DevOps integrates software development (Dev) and IT operations (Ops) to enhance collaboration, efficiency and automation throughout the software delivery lifecycle.",
      button: <Link href="/services/devOps">Read More</Link>,
    },
    {
      name: "Testing and QA",
      description: "Testing and Quality Assurance (QA) ensure software meets quality standards, functions flawlessly and satisfies user requirements through thorough evaluation.",
      button: <Link href="/services/testing">Read More</Link>,
    },
    {
      name: "Digital Marketing",
      description:
        "Enhance your online presence with our expert SEO, social media, and targeted ad strategies. Drive engagement and achieve measurable results.",
      button: <Link href="/services/digital-marketing">Read More</Link>,
    },
    {
      name: "CRM",
      description:
        "Boost customer relationships with our user-friendly CRM. Streamline interactions, gain insights, and drive growth with our customizable platform.",
      button: <Link href="/services/crm">Read More</Link>,
    },
    {
      name: "BI and Analytics",
      description:
        "Transform data into actionable insights with our advanced analytics and customized dashboards for smarter decisions and business growth.",
      button: <Link href="/services/bi-analytics">Read More</Link>,
    },
  ];
  
  return (
    <div className="z-0 px-6 py-4 overflow-x-hidden">
      <div className="text-center">
        <p className="font-bold text-SubHeading mt-4">
          What we provide
        </p>
        <h1 className="text-MainHeading font-extrabold mt-2">IT Solutions</h1>
      </div>
      <div className="py-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards items={tests} direction="left" speed="slow" />
      </div>
    </div>
  );
}

export default WeProvide;

import React from "react";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import Hero from "@/app/ui/services/testingservice/Hero";
import Chooseus from "@/app/ui/services/testingservice/Chooseus";
import Ourservices from "@/app/ui/services/testingservice/Ourservices";
import Implementation from "@/app/ui/services/testingservice/Implementation";
import ClientsServices from "@/utils/ClientsServices";

export const metadata: Metadata = {
  title: "Testing Services",
  description:
    "Vionsys IT Solutions India Pvt Ltd provides complete Testing and Quality Assurance (QA) services to ensure the reliability and performance of your software. Our skilled team provides comprehensive testing solutions, ranging from functional and performance testing to security and usability tests. Partner with us for comprehensive testing that finds and addresses issues early on, ensuring the success of your product. Choose Vionsys for reliable quality. ",
  alternates: {
    canonical: `${BaseUrl}/services/testing`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd specializes in offering top-tier testing and quality assurance (QA) services to ensure the delivery of flawless software solutions. Our stringent testing techniques, which include automation, manual, and regression testing, ensure that your apps work well under any conditions. Protect your company's reputation with our complete QA services, which reduce risks and improve software quality. ",
  },
};

const page: React.FC = () => {
  return (
    <main className="pt-16 overflow-x-hidden">
      <Hero />
      <Chooseus />
      <Ourservices />
      <Implementation />
      {/* Schedule a meet and contact us */}
      <ClientsServices/>
      <ScheduleMeetAndContactCTA />
    </main>
  );
};

export default page;

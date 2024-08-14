import React from "react";
import Services from "@/app/ui/services/ITStaffing/services";
import Choose from "@/app/ui/services/ITStaffing/choose";
import { Metadata } from "next";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
import { BaseUrl } from "@/app/sitemap";
import Hero from "@/app/ui/services/ITStaffing/Hero";
import ClientsServices from "@/utils/ClientsServices";

export const metadata: Metadata = {
  title: "IT Staffing",
  description:
    "Enhance your team with Vionsys IT Solutions India Pvt Ltd's extensive IT staffing services. We offer bespoke solutions to match your specific requirements, whether you are seeking for temporary, contract-to-hire, or permanent IT workers. Our wide network and skills ensure that you hire the best people to propel your organization forward. Partner with Vionsys for dependable and effective IT staffing that boosts your workforce skills. ",
  alternates: {
    canonical: `${BaseUrl}/services/IT-staffing`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd provides experienced IT staffing services that match you with top-tier technical specialists. From software developers and network engineers to project managers and data analysts, we provide competent expertise that corresponds with your company's aims. Our flexible staffing solutions allow you to swiftly and efficiently scale your workforce, ensuring that your projects are finished on time and within budget. Trust Vionsys to satisfy your IT workforce requirements with excellence. ",
  },
};

function Page() {
  return (
    <div className="pt-16">
      <Hero />
      <Services />
      <ClientsServices/>
      <Choose />
      {/* CTA */}
      <section className="bg-gray-100">
      <ScheduleMeetAndContactCTA />
      </section>
    </div>
  );
}

export default Page;

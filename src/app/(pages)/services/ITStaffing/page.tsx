import Image from "next/image";
import React from "react";
import ITStaffing from "/public/assets/services/ITStaffing/ITStaffing.jpg";
import Services from "@/app/ui/ITStaffing/services";
import Choose from "@/app/ui/ITStaffing/choose";
import { Metadata } from "next";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";

export const metadata: Metadata = {
  title: "IT Staffing",
  description: "Enhance your team with Vionsys IT Solutions India Pvt Ltd's extensive IT staffing services. We offer bespoke solutions to match your specific requirements, whether you are seeking for temporary, contract-to-hire, or permanent IT workers. Our wide network and skills ensure that you hire the best people to propel your organization forward. Partner with Vionsys for dependable and effective IT staffing that boosts your workforce skills. ",
  openGraph: {
    images: "/opangraph.png",
    description: "Vionsys IT Solutions India Pvt Ltd provides experienced IT staffing services that match you with top-tier technical specialists. From software developers and network engineers to project managers and data analysts, we provide competent expertise that corresponds with your company's aims. Our flexible staffing solutions allow you to swiftly and efficiently scale your workforce, ensuring that your projects are finished on time and within budget. Trust Vionsys to satisfy your IT workforce requirements with excellence. ",
  },
};

function Page() {
  return (
    <div className="pt-16">
      <div className="relative">
        <div className="bg-black">
          <Image
            src={ITStaffing}
            alt=""
            className="md:w-[100vw] md:h-[100vh] h-[50vh] sm:[50vh] opacity-55"
            quality={100}
          />
        </div>
        <div
          data-aos="fade-up"
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 md:pt-10"
        >
          <h1 className="md:text-4xl text-2xl font-extrabold md:py-6 py-1">
            Welcome to Vionsys IT Staffing Services
          </h1>
          <p className="md:text-xl text-base md:w-2/3 pt-2">
            We understand the critical role that skilled IT professionals play
            in driving innovation, productivity and growth for businesses of all
            sizes. Our comprehensive IT staffing services are designed to
            connect organizations with top-tier talent and provide flexible
            staffing solutions tailored to their unique needs.
          </p>
        </div>
      </div>
      <Services />
      <Choose />
      
      {/* CTA */}
      <section className="bg-gray-100">
        <ScheduleMeetAndContactCTA />
      </section>
    </div>
  );
}

export default Page;

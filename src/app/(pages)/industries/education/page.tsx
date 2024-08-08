import React from "react";
import Hero from "@/app/ui/industries/education/Hero";
import Service from "@/app/ui/industries/education/Service";
import Cta from "@/app/ui/industries/field/Cta";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Advanced IT for Education ",
  description: "We offer innovative IT services tailored to the education industry, including advanced learning management systems (LMS), e-learning solutions, student information systems (SIS) Our technology improves classroom interaction, enhances productivity about services are convenient, supports online research and is. With robust data management and cybersecurity, we ensure a safe and efficient learning environment. Partner with Vionsys to keep your teaching tools up-to-date, increase student success, and better manage your institution. Find out how our solutions can transform the educational experience and put your organization at the forefront of digital learning.",
  alternates: {
    canonical: `${BaseUrl}/industries/education`
  },
  openGraph: {
    images: "/opangraph.png",
    description: "We specialize in IT services for the education sector, providing state-of-the-art LMS, e-learning platforms and SIS to enhance the teaching and learning experience. Our solutions support seamless online assessment, effective student management, and interactive learning environments. With advanced data analytics and secure cloud solutions, we ensure your organization stays at the forefront of technological advances while protecting sensitive information. Choose Vionsys to enhance your education practices, improve student achievement, and streamline business processes. Embrace the future of education with our innovative technology solutions designed to meet the needs of today’s schools and universities."
  }
};

const page = () => {
  return (
    <div className="md:pt-16 pt-14 overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Service */}
      <Service />

      {/* Partner */}
      <Cta />
      
    </div>
  );
};

export default page;

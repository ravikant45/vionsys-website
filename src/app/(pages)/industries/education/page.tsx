import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Hero = dynamic(() => import("@/app/ui/industries/education/Hero"), {
  loading: () => <DynamicLoader />,
});
const Service = dynamic(() => import("@/app/ui/industries/education/Service"), {
  loading: () => <DynamicLoader />,
});
const Cta = dynamic(() => import("@/app/ui/industries/field/Cta"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "Best IT Solution Industry in Pune - Education Industry",
  description:
    "Vionsys IT Solutions India Pvt. ltd offers an overview of the educational sector in India. Become a part of Vionsys to keep your testing tools up to date.",
  alternates: {
    canonical: `${BaseUrl}/industries/education`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "We specialize in IT services for the education sector, providing state-of-the-art LMS, e-learning platforms, and SIS to enhance the teaching and learning experience. Our solutions support seamless online assessment, effective student management, and interactive learning environments. With advanced data analytics and secure cloud solutions, we ensure your organization stays at the forefront of technological advances while protecting sensitive information. Choose Vionsys to enhance your education practices, improve student achievement, and streamline business processes. Embrace the future of education with our innovative technology solutions designed to meet the needs of today’s schools and universities.",
  },
};

const Page = () => {
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

export default Page;

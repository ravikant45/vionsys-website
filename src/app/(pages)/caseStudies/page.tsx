import { BaseUrl } from "@/app/sitemap";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamically import CaseStudies component
const CaseStudies = dynamic(() => import("@/app/ui/casestudy/CaseStudies"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "Vionsys Case Studies: Innovation in IT & Digital Solutions",
  description:
    "Explore Vionsys' case studies showcasing innovative solutions in software development, IT services, and digital transformation across diverse industries",
  keywords: [
    "Innovative IT solutions",
    "Vionsys case studies",
    "Digital transformation case studies",
  ],
  alternates: {
    canonical: `${BaseUrl}/caseStudies`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Read the success stories and case studies of Vionsys IT Solutions Pvt Ltd to learn about our innovative solutions and the positive impact we've made for our clients. Explore our proven track record of delivering excellence.",
  },
};

const Page = () => {
  return <CaseStudies />;
};

export default Page;

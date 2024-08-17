import { BaseUrl } from "@/app/sitemap";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamically import CaseStudies component
const CaseStudies = dynamic(() => import("@/app/ui/casestudy/CaseStudies"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Discover how Vionsys IT Solutions Pvt Ltd has successfully delivered innovative IT solutions to clients across various industries. Our case stories showcase our expertise, commitment, and the impact of our work.",
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

import CaseStudies from "@/app/ui/casestudy/CaseStudies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Discover how Vionsys IT Solutions Pvt Ltd has successfully delivered innovative IT solutions to clients across various industries. Our case stories showcase our expertise, commitment, and the impact of our work.",
  openGraph: {
    images: "/opangraph.png",
    description:
      "Read the success stories and case studies of Vionsys IT Solutions Pvt Ltd to learn about our innovative solutions and the positive impact we've made for our clients. Explore our proven track record of delivering excellence.",
  },
};
const page = () => {
  return <CaseStudies />;
};

export default page;

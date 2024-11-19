import ServicesTemplateThree from "@/app/ui/services/ServicesTemplateThree";
import React from "react";
import { BigData } from "@/app/ui/services/data/BigData";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
export const metadata: Metadata = {
  title: "Big Data & Analytics Services | Vionsys IT Solutions India",
  description:
    "Big data analytics is a long procedure where data is collected, examined & analyzed. Be a part of Vionsys and turn your important data into a business asset.",
  alternates: {
    canonical: `${BaseUrl}/services/big-data-analytics`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd provides experienced Big Data Analytics services that will help you grow your business. Our solutions include data mining, predictive analytics, and real-time data processing that are tailored to your individual requirements. Use our advanced analytics skills to get valuable insights, optimise processes, and remain ahead of the competition. Vionsys' advanced analytics solutions provide the benefits of data-driven decision-making. ",
  },
};
const page = () => {
  return (
    <main className="pt-16 overflow-x-hidden">
      <ServicesTemplateThree data={BigData} />
    </main>
  );
};

export default page;

import ServicesTemplateThree from "@/app/ui/services/ServicesTemplateThree";
import React from "react";
import { BigData } from "@/app/ui/services/data/BigData";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
export const metadata: Metadata = {
  title: "Big Data Analytics Services",
  description:
    "Vionsys IT Solutions India Pvt Ltd's comprehensive Big Data Analytics services enable you to harness the power of data. Our team of professionals specializes in data integration, analysis, and visualization, delivering actionable insights to enhance corporate growth and efficiency. Use advanced analytics and big data technology to make more informed decisions, spot patterns, and discover new possibilities. Partner with Vionsys to turn your data into significant business assets. ",
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

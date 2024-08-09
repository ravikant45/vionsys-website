import React from "react";
import { Metadata } from "next";
import UserCaseStudies from "@/app/ui/casestudy/UserCaseStudies";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id: caseKey } = params;

  try {
    const baseUrl = process.env.DOMAIN;
    const product = await fetch(
      `${baseUrl}/api/caseStudies/get?keyWord=${caseKey}`
    ).then((res) => res.json());

    return {
      title: product?.data?.title,
      description:
        product?.data?.seoDescription ||
        "Discover how Vionsys IT Solutions Pvt Ltd has successfully delivered innovative IT solutions to clients across various industries. Our case stories showcase our expertise, commitment, and the impact of our work.",
      openGraph: {
        images: "/opangraph.png",
        description:
          product?.data?.seoDescription ||
          "Discover how Vionsys IT Solutions Pvt Ltd has successfully delivered innovative IT solutions to clients across various industries. Our case stories showcase our expertise, commitment, and the impact of our work.",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error",
      description: "An error occurred while fetching blog data.",
    };
  }

}
const page = () => {
  return <UserCaseStudies />;
};

export default page;

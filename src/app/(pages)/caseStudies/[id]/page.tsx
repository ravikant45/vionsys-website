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
      description: "Default blog description.",
      openGraph: {
        images: "/default-image.png",
        description: "Default Open Graph description.",
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

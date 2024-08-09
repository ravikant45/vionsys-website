import React from "react";
import { Metadata } from "next";
import UserCaseStudies from "@/app/ui/casestudy/UserCaseStudies";
import { BaseUrl } from "@/app/sitemap";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id: caseKey } = params;

  try {
    const product = await fetch(
      `${BaseUrl}/api/caseStudies/get?keyWord=${caseKey}`
    ).then((res) => res.json());

    return {
      title: product?.data?.title,
      description: product?.data?.seoDescription,
      openGraph: {
        images: [
          {
            url: product?.data?.image || `${BaseUrl}/opangraph.png`,
            alt: product?.data?.title,
          },
        ],
        description: product?.data?.seoDescription,
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

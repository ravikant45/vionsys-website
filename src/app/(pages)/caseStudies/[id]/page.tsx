import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamically import UserCaseStudies component
const UserCaseStudies = dynamic(
  () => import("@/app/ui/casestudy/UserCaseStudies"),
  {
    loading: () => <DynamicLoader />,
  }
);

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
      description: "An error occurred while fetching case study data.",
    };
  }
}

const Page = () => {
  return <UserCaseStudies />;
};

export default Page;

import { Metadata } from "next";
import BlogPage from "@/app/ui/blogs/blogpage";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id: blogKey } = params;

  try {
    const baseUrl = process.env.DOMAIN;
    const product = await fetch(
      `${baseUrl}/api/blogs/getOne?blogKey=${blogKey}`
    ).then((res) => res.json());

    return {
      title: product?.data?.title,
      description:
        product?.data?.seoDescription ||
        "Stay updated with the latest trends, insights, and innovations in the IT industry. Our blog features expert articles, technology updates, and company news, helping you stay ahead in your career and knowledge.",
      openGraph: {
        images: product?.data?.image || "/opangraph.png",
        description:
          product?.data?.seoDescription ||
          "Explore the Vionsys IT Solutions Pvt Ltd blog for the latest industry trends, expert insights, and company news. Stay informed and inspired with our in-depth articles and technology updates.",
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

const Page: React.FC = () => {
  return <BlogPage />;
};

export default Page;

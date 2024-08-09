import { Metadata } from "next";
import BlogPage from "@/app/ui/blogs/blogpage";
import { BaseUrl } from "@/app/sitemap";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id: blogKey } = params;

  try {
    const product = await fetch(
      `${BaseUrl}/api/blogs/getOne?blogKey=${blogKey}`
    ).then((res) => res.json());

    return {
      title: product?.data?.title,
      description: product?.data?.seoDescription,
      openGraph: {
        images: [
          {
            url: product?.data?.image,
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

const Page: React.FC = () => {
  return <BlogPage />;
};

export default Page;

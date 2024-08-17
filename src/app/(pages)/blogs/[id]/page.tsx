import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

const BlogPage = dynamic(() => import("@/app/ui/blogs/blogpage"), {
  loading: () => <DynamicLoader />,
});

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

    if (product?.data) {
      return {
        title: product.data.title || "Blog Post",
        description: product.data.seoDescription || "Read our blog post.",
        openGraph: {
          images: product.data.image
            ? [{ url: product.data.image, alt: product.data.title }]
            : undefined,
          description: product.data.seoDescription,
        },
      };
    } else {
      // Handle case where no blog data is returned
      return {
        title: "Blog Post Not Found",
        description: "This blog post could not be found.",
      };
    }
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

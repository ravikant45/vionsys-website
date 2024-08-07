import { BaseUrl } from "@/app/sitemap";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AllBlogs = dynamic(() => import("@/app/ui/dashboard/blogs/AllBlogs"), {
  ssr: false,
});
export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Stay updated with the latest trends, insights, and innovations in the IT industry. Our blog features expert articles, technology updates, and company news, helping you stay ahead in your career and knowledge.",
  alternates: {
    canonical: `${BaseUrl}/blogs`
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Explore the Vionsys IT Solutions Pvt Ltd blog for the latest industry trends, expert insights, and company news. Stay informed and inspired with our in-depth articles and technology updates.",
  },
};
const page = () => {
  return (
    <main className="py-16">
      <AllBlogs role={"user"} />
    </main>
  );
};

export default page;

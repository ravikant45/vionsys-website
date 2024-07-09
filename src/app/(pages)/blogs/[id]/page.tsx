import BlogPage from "@/app/ui/blogs/blogpage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Stay updated with the latest trends, insights, and innovations in the IT industry. Our blog features expert articles, technology updates, and company news, helping you stay ahead in your career and knowledge.",
  openGraph: {
    images: "/opangraph.png",
    description:
      "Explore the Vionsys IT Solutions Pvt Ltd blog for the latest industry trends, expert insights, and company news. Stay informed and inspired with our in-depth articles and technology updates.",
  },
};
const page = () => {
  return <BlogPage />;
};

export default page;

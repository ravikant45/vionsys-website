"use client";
import React, { useState } from "react";
import Loading from "@/app/(pages)/loading";
import Image from "next/image";
import { useParams } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
import useGetBlog from "@/services/blogs/useGetBlog";
import useGetAllBlogs from "@/services/blogs/useGetAllBlogs";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "antd";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { formatDate } from "@/utils/formatDate";

interface Blog {
  createdAt: string;
  description: string;
  id: string;
  image: string;
  postDate: string;
  title: string;
  author: string;
  updatedAt: string;
  keyWord: string;
}

const BlogPage = ({ role }: any) => {
  const { id: blogKey } = useParams();
  const { data, isPending } = useGetBlog(blogKey);
  const { data: AllBlogs, isPending: isGetAllBlogPending } = useGetAllBlogs();
  const [deleteblogId, setdeleteblogId] = useState<string>("");

  const [openmodalDelete, setopenmodalDelete] = useState<boolean>(false);
  // const Blogs = AllBlogs?.data || [];
  const Blogs = (AllBlogs?.data || []).sort(
    (a: any, b: any) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsPerPage = 6;
  const totalBlogs = Blogs.length;

  const nextBlogs = () => {
    if (currentIndex + blogsPerPage < totalBlogs) {
      setCurrentIndex(currentIndex + blogsPerPage);
    }
  };

  const prevBlogs = () => {
    if (currentIndex - blogsPerPage >= 0) {
      setCurrentIndex(currentIndex - blogsPerPage);
    }
  };

  if (isPending) return <Loading />;
  // const Blogs: Blog[] = AllBlogs?.data;

  return (
    <div className="overflow-x-hidden">
      <div className="md:px-10 px-8 py-20 p-3 w-full md:bg-white bg-white rounded-lg md:shadow-md shadow-lg">
        <div className="mb-4 flex justify-start">
          <Link
            href={"/blogs"}
            className="text-blue-600 hover:text-blue-800 transition-colors font-semibold rounded-md p-2 flex items-center gap-2"
          >
            <IoMdArrowBack size={20} />
            <span>Back</span>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="w-full lg:w-1/2 relative"
          >
            <Image
              src={data?.data.image}
              alt={data?.data.title}
              layout="responsive"
              width={400}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-sm"
            />
          </motion.div>
          <div className="flex flex-col lg:w-1/2 capitalize">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="text-4xl font-bold mb-4 text-gray-800"
            >
              {data?.data.title.toLowerCase()}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="flex"
            >
              <span className="text-sm font-bold">{data?.data.author} </span>
              <span className="mx-2 text-sm text-gray-500">-</span>
              <span className="text-sm text-gray-500">
                {formatDate(data?.data.postDate)}
              </span>
            </motion.p>
          </div>
        </div>

        <div
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        />
      </div>

      {/* social media icons */}
      <div className="flex gap-6 md:justify-center py-4">
        <Link
          aria-label="facebook link"
          href="https://www.facebook.com/share/j5CS6REwZ5K4WJWz/?mibextid=qi2Omg "
        >
          <FaSquareFacebook size={50} className="text-[#1877F2]" />
        </Link>
        <Link
          aria-label="instagram link"
          href="https://www.instagram.com/vionsys.it.solutions/?igsh=aXMyYzU1cjZ3M3Ux"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="instagram-gradient"
                x1="1"
                y1="1"
                x2="23"
                y2="23"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stop-color="#feda75" />
                <stop offset="25%" stop-color="#fa7e1e" />
                <stop offset="50%" stop-color="#d62976" />
                <stop offset="75%" stop-color="#962fbf" />
                <stop offset="100%" stop-color="#4f5bd5" />
              </linearGradient>
            </defs>
            <path
              d="M16 2H8C4.69 2 2 4.69 2 8V16C2 19.31 4.69 22 8 22H16C19.31 22 22 19.31 22 16V8C22 4.69 19.31 2 16 2ZM20 16C20 18.21 18.21 20 16 20H8C5.79 20 4 18.21 4 16V8C4 5.79 5.79 4 8 4H16C18.21 4 20 5.79 20 8V16ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15ZM17.5 6.5C16.67 6.5 16 7.17 16 8C16 8.83 16.67 9.5 17.5 9.5C18.33 9.5 19 8.83 19 8C19 7.17 18.33 6.5 17.5 6.5Z"
              fill="url(#instagram-gradient)"
            />
          </svg>
        </Link>
        <Link
          aria-label="linkedin link"
          href="https://www.linkedin.com/company/vionsys-it-solutions-ind-pvt-ltd/?originalSubdomain=in"
        >
          <FaLinkedin size={50} className="text-[#0077B5] text-center" />
        </Link>
        <Link aria-label="twitter link" href="https://twitter.com/vionsysit">
          <FaSquareXTwitter size={48} />
        </Link>
      </div>
      <div className="border-t-2 border-gray-300 pb-5"></div>

      <div className="p-5">
        <span className="text-white bg-black font-semibold text-2xl px-5 py-1">
          Related Blogs
        </span>
        <div className="border-t-4 border-gray-800"></div>
        <div className="grid grid-cols-3 mb-6 gap-5 p-4">
          {Blogs.slice(currentIndex, currentIndex + blogsPerPage)?.map(
            (blog: Blog) => (
              <div
                key={blog.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 capitalize"
              >
                <div className="relative">
                  {role === "admin" ? (
                    <Link href={`/admin/blogs/${blog.keyWord}`}>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1000}
                        height={1000}
                        className="rounded-t-lg w-full h-48 object-cover"
                      />
                    </Link>
                  ) : (
                    <Link href={`/blogs/${blog?.keyWord}`}>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1000}
                        height={1000}
                        className="rounded-t-lg w-full h-48 object-cover"
                      />
                    </Link>
                  )}
                </div>
                <div className="pt-4 flex justify-between items-center px-4">
                  {role === "admin" ? (
                    <Link
                      href={`/admin/blogs/${blog?.keyWord}`}
                      className="text-black hover:text-blue-500 hover:underline text-xl font-semibold capitalize"
                    >
                      {blog?.title?.toLowerCase()}
                    </Link>
                  ) : (
                    <Link
                      href={`/blogs/${blog?.keyWord}`}
                      className="text-black hover:text-blue-500 hover:underline text-xl font-semibold capitalize"
                    >
                      {blog?.title?.toLowerCase()}
                    </Link>
                  )}

                  {role === "admin" && (
                    <Button
                      onClick={() => {
                        setdeleteblogId(blog.id);
                        setopenmodalDelete(true);
                      }}
                      danger
                      icon={<MdDeleteOutline size={20} />}
                    />
                  )}
                </div>
                <p className="flex pb-4 pt-2 px-4">
                  <span className="text-sm font-bold">{blog?.author} </span>
                  <span className="mx-2 text-sm text-gray-500">-</span>
                  <span className="text-sm text-gray-500">
                    {formatDate(blog?.postDate)}
                  </span>
                </p>
              </div>
            )
          )}
        </div>

        <div className="flex gap-4 m-4 justify-center">
          <button
            onClick={prevBlogs}
            disabled={currentIndex === 0}
            className={`text-gray-700 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-black"
            }`}
          >
            <IoArrowBackCircleSharp size={40} />
          </button>
          <button
            onClick={nextBlogs}
            disabled={currentIndex + blogsPerPage >= totalBlogs}
            className={`text-gray-700 ${
              currentIndex + blogsPerPage >= totalBlogs
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-black"
            }`}
          >
            <IoArrowForwardCircleSharp size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

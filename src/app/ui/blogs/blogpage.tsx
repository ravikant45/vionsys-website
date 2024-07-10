"use client";
import React from "react";
import Loading from "@/app/(pages)/loading";
import Image from "next/image";
import { useParams } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

import Link from "next/link";
import useGetBlog from "@/services/blogs/useGetBlog";
import { formatDate } from "@/utils/formatDate";

const BlogPage = () => {
  const { id } = useParams();
  const { data, isPending } = useGetBlog(id);

  if (isPending) {
    return <Loading />;
  }
  return (
    <div className="md:px-10 px-8 py-20 p-3 w-full md:bg-white bg-white rounded-lg md:shadow-md shadow-lg">
      <div className="mb-4 flex justify-start">
        <Link
          href={"/blogs"}
          className="bg-blue-500 text-white rounded-md p-2 flex items-center gap-2 hover:bg-blue-600 transition"
        >
          <IoMdArrowBack size={20} />
          <span>Back</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
        <div className="w-full lg:w-1/2 relative">
          <Image
            src={data?.data.image}
            alt={data?.data.title}
            layout="responsive"
            width={400}
            height={400}
            objectFit="cover"
            className="rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {data?.data.title}
          </h1>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Posted On:&nbsp;</span>
            {formatDate(data?.data.postDate)}
          </p>
        </div>
      </div>

      <div
        className="prose prose-lg max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: data?.data?.description }}
      />
    </div>
  );
};

export default BlogPage;

"use client";
import useGetCaseStudy from "@/services/caseStudies/useGetCaseStudy";
import { useParams } from "next/navigation";

import React from "react";
import Loading from "../../loading";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

const page = () => {
  const { id } = useParams();
  const { data, isPending } = useGetCaseStudy(id);

  if (isPending) {
    return <Loading />;
  }
  return (
    <div className="py-14 md:pl-8 mt-3 px-4 flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="w-full mx-auto bg-white rounded-lg shadow-lg md:p-8 p-4">
        <div className="mb-4">
          <Link
            href="/caseStudies"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <IoMdArrowBack size={24} />
            <span className="ml-2 text-lg font-medium">Back</span>
          </Link>
        </div>
        <section className="flex flex-col md:justify-center md:items-center md:flex-row gap-8">
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={data?.data.image}
              alt={data?.data.title}
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {data?.data.title}
            </h1>
            {/* <p>Updated at : {formatDate(data.data.updatedAt)}</p> */}
          </div>
        </section>

        <section
          className="prose prose-lg max-w-none text-gray-800 pt-6"
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        />
      </div>
    </div>
  );
};

export default page;

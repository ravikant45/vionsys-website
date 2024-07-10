"use client";
import Loading from "@/app/(pages)/loading";
import useGetAllCaseStudies from "@/services/caseStudies/useGetAllCaseStudies";
import React from "react";
import { CaseStudy } from "../dashboard/caseStudies/AllCaseStudies";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";

const CaseStudies = () => {
  const { data, isPending } = useGetAllCaseStudies();

  if (isPending) {
    return <Loading />;
  }
  return (
    <div className="px-8 w-full py-20  bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Case Studies</h1>
        <p className="mt-4 text-lg text-gray-600 md:px-20">
          Explore our collection of case studies showcasing successful projects
          and innovative solutions across various industries. Discover how we
          have helped our clients achieve their goals through our expertise and
          commitment to excellence.
        </p>
      </div>
      <div className="flex flex-wrap ">
        {data &&
          data.data.map((study: CaseStudy) => {
            return (
              <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                <Image
                  width={300}
                  height={300}
                  src={study.image}
                  alt="Card img"
                  className="object-cover object-center w-full h-52"
                />
                <div className="flex flex-grow">
                  <div className="triangle"></div>
                  <div className="flex flex-col w-full justify-between px-4 py-6 bg-white border border-gray-400 text">
                    <div>
                      <span className="inline-block mb-2 text-xs font-bold capitalize ">
                        {study.createdAt && formatDate(study.createdAt)}
                      </span>
                      <Link
                        href={`/caseStudies/${study.id}`}
                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                      >
                        {study.title}
                      </Link>
                      <p
                        className="mb-4"
                        dangerouslySetInnerHTML={{
                          __html: study.description?.slice(0, 150) + "...",
                        }}
                      ></p>
                    </div>
                    <div>
                      <Link
                        href={`/caseStudies/${study.id}`}
                        className="inline-block pb-1 mt-1 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                      >
                        Read More{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CaseStudies;

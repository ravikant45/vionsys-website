"use client";
import useGetAllCaseStudies from "@/services/caseStudies/useGetAllCaseStudies";
import React from "react";
import Loading from "../loading";
import { CaseStudy } from "@/app/ui/dashboard/caseStudies/AllCaseStudies";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const { data, isPending } = useGetAllCaseStudies();

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="px-8 w-full py-20 h-screen bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Case Studies</h1>
        <p className="mt-4 text-lg text-gray-600 md:px-20">
          Explore our collection of case studies showcasing successful projects
          and innovative solutions across various industries. Discover how we
          have helped our clients achieve their goals through our expertise and
          commitment to excellence.
        </p>
      </div>
      <div className="relative py-8">
        <div className="relative flex flex-wrap justify-center gap-8 z-10">
          {data?.data?.map((caseStudy: CaseStudy) => (
            <div
              key={caseStudy.id}
              className="relative w-[300px] h-[300px] bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105"
            >
              <Link href={`/caseStudies/${caseStudy.id}`}>
                <Image
                  src={caseStudy.image}
                  alt={`Image for ${caseStudy.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl transition-transform transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
                <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  {caseStudy.title}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

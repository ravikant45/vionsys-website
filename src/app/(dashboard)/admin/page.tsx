"use client";
import Loading from "@/app/(pages)/loading";
import withAuthHOC from "@/HOC/withAuthHOC";
import useGetStat from "@/services/auth/useGetStat";
import React from "react";

const Page = () => {
  const { fetchStat, isPending } = useGetStat();

  if (isPending) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex pt-14 md:justify-center justify-start p-2 relative w-full">
      <section className="relative">
        <div className="bg-white shadow-2xl rounded-lg md:p-10 p-1 md:max-w-3xl w-full text-center  md:">
          <h1 className="md:text-5xl text-2xl font-extrabold text-gray-800 mb-8">
            Welcome to the Admin Dashboard
          </h1>
          <p className="md:text-xl text-sm text-gray-700 mb-6">
            Efficiently manage your blogs and case studies. Keep your content
            organized and up-to-date with our intuitive dashboard.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-3 grid-cols-1  ">
          <div className="bg-white p-5 mt-5 md:my-2 rounded-lg">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm leading-6 font-medium text-gray-500">
                  Total Blogs
                </h3>
                <p className="text-3xl font-bold text-black">
                  {fetchStat && fetchStat?.blogCount}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 md:my-2 rounded-lg">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm leading-6 font-medium text-gray-500">
                  Total Case Studies
                </h3>
                <p className="text-3xl font-bold text-black">
                  {fetchStat && fetchStat?.caseStudyCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="absolute md:block hidden inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 transform -translate-y-1/3 -translate-x-1/3 opacity-25"
          width="400"
          height="400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="200" fill="white" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 transform translate-y-1/3 translate-x-1/3 opacity-25"
          width="400"
          height="400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="400" height="400" fill="white" />
        </svg>
      </section>
    </main>
  );
};

export default withAuthHOC(Page, "admin");

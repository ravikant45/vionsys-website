"use client";
import useGetCaseStudy from "@/services/caseStudies/useGetCaseStudy";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import Loading from "../../loading";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const UserCaseStudies = () => {
  const { id } = useParams();
  const { data, isPending } = useGetCaseStudy(id);

  if (isPending) {
    return <Loading />;
  }
  return (
    <div className="overflow-hidden">
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
            <motion.div
              initial={{ opacity: 0, scale: 1.5 }}
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
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </motion.div>

            <div className="flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="text-4xl font-bold text-gray-800 mb-4"
              >
                {data?.data.title}
              </motion.h1>
              {/* <p>Updated at : {formatDate(data.data.updatedAt)}</p> */}
            </div>
          </section>

          <section
            className="prose prose-lg max-w-none text-gray-800 pt-6"
            dangerouslySetInnerHTML={{ __html: data?.data?.description }}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 py-12 mx-auto text-center sm:px-6 lg:py-16 lg:px-8 dark:bg-gray-600 flex flex-col items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="max-w-6xl md:p-8 p-2"
        >
          <p className="font-extrabold text-MainHeading">
            See Our Success Stories
          </p>
          <p className="text-SubHeading mt-3 font-bold">
            Discover how we've transformed businesses with our innovative IT
            solutions.
          </p>
          <p className="text-paragraph mt-3 mb-5">
            Our case studies highlight the challenges faced by our clients, the
            solutions we implemented, and the outstanding results achieved.
            Ready to see how we can help your business thrive?
          </p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="mt-3 flex md:gap-4 gap-2 justify-center items-center flex-wrap"
          >
            <Link href="/contact">
              <Button>Contact us</Button>
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default UserCaseStudies;

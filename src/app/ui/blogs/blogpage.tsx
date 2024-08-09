"use client";
import React from "react";
import Loading from "@/app/(pages)/loading";
import Image from "next/image";
import { useParams } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
import useGetBlog from "@/services/blogs/useGetBlog";
import { Button } from "@/components/ui/button";
// import { formatDate } from "@/utils/formatDate";

const BlogPage = () => {
  const { id: blogKey } = useParams();
  const { data, isPending } = useGetBlog(blogKey);

  if (isPending) return <Loading />;

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
          <div className="flex flex-col lg:w-1/2">
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
              {data?.data.title}
            </motion.h1>
            {/* <p className="text-sm text-gray-600">
            <span className="font-semibold">Posted On:&nbsp;</span>
            {formatDate(data?.data.postDate)}
          </p> */}
          </div>
        </div>

        <div
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        />
      </div>

      {/* CTA */}
      <div className="w-full max-w-4xl my-4 mx-auto p-2">
        <div className="border border-[#215cbc] p-4 md:p-6 rounded-lg text-center">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 20 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="text-MainHeading font-bold mb-4"
          >
            Let's Connect and Innovate Together!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="text-lg mb-4 text-gray-700"
          >
            We turn your ideas into reality. Whether it's{" "}
            <strong>
              custom software, expert advice, or an IT challenge, we're here to
              help.
            </strong>{" "}
            Reach out today and let's innovate and grow together!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="mt-4 flex md:gap-4 gap-2 justify-center items-center flex-wrap"
          >
            <Link href="/contact">
              <Button>Contact us</Button>
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

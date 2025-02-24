"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import AddBlogForm from "./AddBlogForm";
import useGetAllBlogs from "@/services/blogs/useGetAllBlogs";
import Image from "next/image";
import Link from "next/link";
import { MdDeleteOutline } from "react-icons/md";
import useDeleteBlog from "@/services/blogs/useDeleteBlog";
import Loading from "@/app/(pages)/loading";
import { WithAuthProps } from "@/HOC/withAuthHOC";
import { formatDate } from "@/utils/formatDate";
import { motion } from "framer-motion";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";

interface Blog {
  createdAt: string;
  description: string;
  id: string;
  image: string;
  postDate: string;
  author: string;
  title: string;
  updatedAt: string;
  keyWord: string;
}

const AllBlogs: React.FC<WithAuthProps> = ({ role }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [deleteblogId, setdeleteblogId] = useState<string>("");

  const [openmodalDelete, setopenmodalDelete] = useState<boolean>(false);
  const { data: AllBlogs, isPending: isGetAllBlogPending } = useGetAllBlogs();
  const { mutate: deleteBlog, isPending: isDeleteBlogPending } =
    useDeleteBlog();
  const handleCancelDeleteModal = () => setopenmodalDelete(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const Blogs: Blog[] = AllBlogs?.data;

  const Blogs: Blog[] = AllBlogs?.data || [];
  Blogs.sort(
    (a, b) =>
      new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
  );

  if (isGetAllBlogPending) {
    return <Loading />;
  }

  const latestBlog = Blogs.length > 0 ? Blogs[0] : null;
  const otherBlogs = role === "admin" ? Blogs : Blogs.slice(1);

  const blogsPerPage = 8;
  const totalBlogs = otherBlogs.length;

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

  const handleDeleteBlog = async (id: string) => {
    deleteBlog(id, {
      onSettled: () => setopenmodalDelete(false),
    });
  };
  if (isGetAllBlogPending) {
    return <Loading />;
  }

  return (
    <section className="w-full ">
      {role === "admin" && (
        <div className="mb-4 flex justify-end">
          <Button
            onClick={() => setIsAddModalOpen(!isAddModalOpen)}
            type="primary"
          >
            Add Blog
          </Button>
        </div>
      )}
      {/* Modal to add blogs */}
      <Modal
        width={900}
        centered
        open={isAddModalOpen}
        footer={null}
        onCancel={() => setIsAddModalOpen(false)}
      >
        <AddBlogForm setShowModal={setIsAddModalOpen} />
      </Modal>
      {/* Modal to delete the blogs */}
      <Modal
        footer={null}
        open={openmodalDelete}
        onCancel={handleCancelDeleteModal}
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-red-600 font-bold text-lg">
            Do you really want to delete this blog?
          </h1>
          <p className="text-gray-600">
            This action cannot be undone. Are you sure you want to proceed?
          </p>
          <Button
            onClick={() => handleDeleteBlog(deleteblogId)}
            type="primary"
            danger
            loading={isDeleteBlogPending}
          >
            {isDeleteBlogPending ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </Modal>
      <div className="">
        <main>
          {/* Featured Latest Blog */}
          {latestBlog && (
            <div className="flex flex-col items-center justify-center md:h-[70vh] md:p-6 p-2 md:flex-row w-full">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  scale: { type: "spring", stiffness: 30 },
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="w-full flex-1 md:h-auto relative"
              >
                <Image
                  src={latestBlog.image}
                  alt={latestBlog.title}
                  height={100}
                  width={1000}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>

              {/* Text Section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 30 },
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="w-full flex-1 flex flex-col items-center md:p-6 p-2"
              >
                <Link
                  href={
                    role === "admin"
                      ? `/admin/blogs/${latestBlog.keyWord}`
                      : `/blogs/${latestBlog.keyWord}`
                  }
                  className="flex flex-col justify-center"
                >
                  <h1 className="text-orange md:text-3xl text-xl font-bold hover:text-blue-500 hover:underline">
                    {latestBlog.title}
                  </h1>
                  <p className="flex pb-4 pt-2">
                    <span className="text-sm bg-black text-white px-1 rounded-md font-bold">
                      {latestBlog?.author}{" "}
                    </span>
                    <span className="mx-2 text-sm text-gray-500">-</span>
                    <span className="text-sm text-gray-500">
                      {formatDate(latestBlog?.postDate)}
                    </span>
                  </p>
                  <section className="line-clamp-4 pt-2 text-black">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: latestBlog?.description,
                      }}
                    />
                  </section>
                </Link>
              </motion.div>
            </div>
          )}

          {/* {role !== "admin" && (
            <section className="flex flex-col w-full justify-center items-center ">
              <h1 className="text-3xl font-bold px-3 pt-3 text-black ">
                Blogs
              </h1>
            </section>
          )} */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:px-8 px-3 md:py-10 py-5">
            {otherBlogs
              .slice(currentIndex, currentIndex + blogsPerPage)
              ?.map((blog: Blog) => (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.3,
                    x: { type: "spring", stiffness: 30 },
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  key={blog.id}
                  className="bg-white border md:flex border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="md:w-[40%]">
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
                  <div className="w-full">
                    <div className="pt-2 md:px-4 px-2 flex justify-between items-center capitalize">
                      {role === "admin" ? (
                        <Link
                          href={`/admin/blogs/${blog?.keyWord}`}
                          className="hover:text-blue-500 hover:underline md:text-xl text-lg font-semibold text-gray-800"
                        >
                          {blog?.title.toLowerCase()}
                        </Link>
                      ) : (
                        <Link
                          href={`blogs/${blog?.keyWord}`}
                          className="hover:text-blue-500 hover:underline md:text-xl text-lg font-semibold text-gray-800"
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
                    <section className="line-clamp-3 md:px-4 px-2 pt-2">
                      <div
                        dangerouslySetInnerHTML={{ __html: blog?.description }}
                      />
                    </section>
                    <p className="flex pb-4 pt-2 px-4">
                      <span className="text-sm bg-black text-white px-1 rounded-md font-bold">
                        {blog?.author}{" "}
                      </span>
                      <span className="mx-2 text-sm text-gray-500">-</span>
                      <span className="text-sm text-gray-500">
                        {formatDate(blog?.postDate)}
                      </span>
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </main>
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
    </section>
  );
};

export default AllBlogs;

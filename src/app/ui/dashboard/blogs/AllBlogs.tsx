"use client";
import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import AddBlogForm from "./AddBlogForm";
import useGetAllBlogs from "@/services/blogs/useGetAllBlogs";
import Image from "next/image";
import { jwtdecode } from "@/utils/jwt-decode";
import Link from "next/link";
import { MdDeleteOutline } from "react-icons/md";
import useDeleteBlog from "@/services/blogs/useDeleteBlog";
import Loading from "@/app/(pages)/loading";

interface Blog {
  id: string;
  image: string;
  postDate: string;
  title: string;
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const AllBlogs: React.FC = () => {
  const [role, setRole] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [deleteblogId, setdeleteblogId] = useState<string>("");

  const [openmodalDelete, setopenmodalDelete] = useState<boolean>(false);
  const { data: AllBlogs, isPending: isGetAllBlogPending } = useGetAllBlogs();
  const { mutate: deleteBlog, isPending: isDeleteBlogPending } =
    useDeleteBlog();
  const handleCancelDeleteModal = () => setopenmodalDelete(false);

  const Blogs: Blog[] | undefined = AllBlogs?.data;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const { role } = jwtdecode(token);
          setRole(role);
        } catch (e) {
          console.log(e);
        }
      }
    }
  }, []);

  const handleDeleteBlog = async (id: string) => {
    deleteBlog(id, {
      onSettled: () => setopenmodalDelete(false),
    });
  };
  if (isGetAllBlogPending) {
    return <Loading />;
  }

  return (
    <section className="px-8 py-6 w-full ">
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
      <div className="w-full ">
        <main>
          {role !== "admin" && (
            <section className="flex flex-col w-full pb-6 md:py-4 justify-center items-center ">
              <h1 className="text-3xl font-bold p-3 text-black ">Blogs</h1>
              <h1 className="text-xl md:text-3xl  ">
                Discover Engaging Narratives and Informative Insights: Spotlight
                on Our Latest Blog Post
              </h1>
            </section>
          )}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {Blogs?.map((blog: Blog) => (
              <div
                key={blog.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative">
                  {role === "admin" ? (
                    <Link href={`/admin/blogs/${blog.id}`}>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1000}
                        height={1000}
                        className="rounded-t-lg w-full h-48 object-cover"
                      />
                    </Link>
                  ) : (
                    <Link href={`/blogs/${blog.id}`}>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1000}
                        height={1000}
                        className="rounded-t-lg w-full h-48 object-cover"
                      />
                    </Link>
                  )}
                  <p className="absolute bottom-0 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-tr-lg">
                    {formatDate(blog.postDate)}
                  </p>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {blog?.title}
                  </h2>
                </div>
                <div className="p-4 flex justify-between items-center">
                  {role === "admin" ? (
                    <Link
                      href={`/admin/blogs/${blog.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Link>
                  ) : (
                    <Link
                      href={`blogs/${blog.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      Read More
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
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default AllBlogs;

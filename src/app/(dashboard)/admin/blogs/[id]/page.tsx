"use client";
import Loading from "@/app/(pages)/loading";
import AddBlogForm from "@/app/ui/dashboard/blogs/AddBlogForm";
import { formatDate } from "@/app/ui/dashboard/blogs/AllBlogs";
import { Button } from "@/components/ui/button";
import useGetBlog from "@/services/blogs/useGetBlog";
import { jwtdecode } from "@/utils/jwt-decode";
import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const Page: React.FC = () => {
  const { id } = useParams();
  const [role, setRole] = useState<string | null>(null);
  const { data, isPending } = useGetBlog(id);
  const [showModal, setShowModal] = useState<boolean>(false);

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

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="py-6 flex justify-center items-center md:px-10 bg-gray-100">
      <div className="py-8 md:px-4 px-8 p-3  w-full md:bg-white bg-white rounded-lg md:shadow-md shadow-lg">
        <div className="mb-4 flex justify-start">
          <Link
            href={"/admin/blogs"}
            className="bg-blue-500 text-white rounded-md p-2 flex items-center gap-2 hover:bg-blue-600 transition"
          >
            <IoMdArrowBack size={20} />
            <span>Back to Blogs</span>
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

        {role === "admin" && (
          <div className="flex justify-end">
            <Button
              onClick={() => setShowModal(!showModal)}
              className="bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Update
            </Button>
          </div>
        )}

        <Modal
          width={900}
          centered
          open={showModal}
          footer={null}
          onCancel={() => setShowModal(false)}
        >
          <AddBlogForm
            id={data?.data.id}
            title={data?.data.title}
            description={data?.data.description}
            image={data?.data.image}
            postDate={data?.data.createdDate}
            setShowModal={setShowModal}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Page;

"use client";
import { Button } from "@/components/ui/button";
import useGetCaseStudy from "@/services/caseStudies/useGetCaseStudy";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { jwtdecode } from "@/utils/jwt-decode";
import { Modal } from "antd";
import AddCaseStudyForm from "@/app/ui/dashboard/caseStudies/AddCaseStudyForm";
import useDeleteCaseStudy from "@/services/caseStudies/useDeleteCaseStudy";
import Loading from "@/app/(pages)/loading";
import { formatDate } from "@/app/ui/dashboard/blogs/AllBlogs";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const { data, isPending } = useGetCaseStudy(id);
  const { mutate: deleteCaseStudy, isPending: isDeletingCaseStudy } =
    useDeleteCaseStudy();
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

  const handleDeleteCaseStudy = (id: string) => {
    deleteCaseStudy(id, {
      onSuccess: () => {
        router.push("/admin/caseStudies");
      },
    });
    setShowModal(false);
  };

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="py-4 md:pl-8 px-4 flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="w-full mx-auto bg-white rounded-lg shadow-lg md:p-8 p-4">
        <div className="mb-4">
          <Link
            href="/admin/caseStudies"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <IoMdArrowBack size={24} />
            <span className="ml-2 text-lg font-medium">
              Back to Previous Page
            </span>
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
            <p>Updated at : {formatDate(data.data.updatedAt)}</p>
          </div>
        </section>

        <section
          className="prose prose-lg max-w-none text-gray-800 pt-6"
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        />

        <section className="mt-4">
          {role === "admin" && (
            <div className="flex gap-6 flex-wrap">
              <Button onClick={() => setShowModal(!showModal)}>Update</Button>
              <Button
                onClick={() => handleDeleteCaseStudy(`${data?.data?.id}`)}
                className="bg-red-600 hover:bg-red-500"
              >
                {isDeletingCaseStudy ? "Deleting..." : "Delete"}
              </Button>
            </div>
          )}
        </section>

        <Modal
          width={900}
          open={showModal}
          centered
          footer={null}
          onCancel={() => setShowModal(!showModal)}
        >
          <AddCaseStudyForm
            id={data?.data?.id}
            title={data?.data?.title}
            description={data?.data?.description}
            image={data?.data?.image}
            setShowModal={setShowModal}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Page;

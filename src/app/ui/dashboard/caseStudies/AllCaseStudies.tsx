"use client";
import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import AddCaseStudyForm from "./AddCaseStudyForm";
import useGetAllCaseStudies from "@/services/caseStudies/useGetAllCaseStudies";
import Link from "next/link";
import Image from "next/image";
import { jwtdecode } from "@/utils/jwt-decode";
import Loading from "@/app/(pages)/loading";
import { formatDate } from "@/utils/formatDate";
// import img from "../../../../../public/background.jpg";

export interface CaseStudy {
  id: string;
  image: string;
  title: string;
  createdAt?: string;
  description?: string;
}

const AllCaseStudies = () => {
  const [addShowModal, setAddShowModal] = useState<boolean>(false);
  const { data, isPending } = useGetAllCaseStudies();
  const [role, setRole] = useState<string | null>(null);

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
    <div className="px-8 w-full py-6 ">
      {role === "admin" && (
        <div className="mb-4 flex justify-end">
          <Button
            onClick={() => setAddShowModal(!addShowModal)}
            type="primary"
            className="text-base"
          >
            Add Case Study
          </Button>
        </div>
      )}
      <div className="relative py-8">
        <div className="relative flex flex-wrap justify-center gap-8 z-10">
          {data?.data?.map((study: CaseStudy) => (
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
                    {/* <span className="inline-block mb-2 text-xs font-bold capitalize ">
                      {study.createdAt && formatDate(study.createdAt)}
                    </span> */}
                    <Link
                      href={`/admin/caseStudies/${study.id}`}
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
                      href={`/admin/caseStudies/${study.id}`}
                      className="inline-block pb-1 mt-1 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                    >
                      Read More{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        width={900}
        centered
        open={addShowModal}
        footer={null}
        onCancel={() => setAddShowModal(!addShowModal)}
      >
        <AddCaseStudyForm setShowModal={setAddShowModal} />
      </Modal>
    </div>
  );
};

export default AllCaseStudies;

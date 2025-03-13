"use client";
import { Button } from "@/components/ui/button";
import useGetCaseStudy from "@/services/caseStudies/useGetCaseStudy";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Modal } from "antd";
import AddCaseStudyForm from "@/app/ui/dashboard/caseStudies/AddCaseStudyForm";
import useDeleteCaseStudy from "@/services/caseStudies/useDeleteCaseStudy";
import Loading from "@/app/(pages)/loading";
import withAuthHOC, { WithAuthProps } from "@/HOC/withAuthHOC";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { motion } from "framer-motion";
import { RiTwitterXFill } from "react-icons/ri";

const Page: React.FC<WithAuthProps> = ({ role }) => {
  const { id: keyWord } = useParams();

  const router = useRouter();
  const [openmodalDelete, setopenmodalDelete] = useState(false);
  const [deleteblogId, setdeleteblogId] = useState("");
  const { data, isPending } = useGetCaseStudy(keyWord);
  const { mutate: deleteCaseStudy, isPending: isDeletingCaseStudy } =
    useDeleteCaseStudy();
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleCancelDeleteModal = () => setopenmodalDelete(false);
  const [visible, setVisible] = useState(false);
  const [previewFile, setPreviewFile] = useState<{
    url: string;
    isPDF: boolean;
  } | null>(null);

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

  const handleCancel = () => {
    setVisible(false);
    setPreviewFile(null);
  };

  const handlePreviewResume = (url: string) => {
    setPreviewFile({
      url,
      isPDF: url.endsWith(".pdf"),
    });
    setVisible(false);
  };

  return (
    <div className="py-4 md:pl-8 px-4 flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300">
      {/* modal to delete the case study */}
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
            className="bg-red-600"
            onClick={() => handleDeleteCaseStudy(deleteblogId)}
          >
            {isDeletingCaseStudy ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </Modal>

      <div className="w-full mx-auto bg-white rounded-lg shadow-lg md:p-8 p-4">
        {/* Back to Previous Page */}
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

        <section className="flex flex-col md:justify-center md:flex-row gap-8 bg-gray-100 p-4 rounded-md h-full">
          <div className="flex flex-col justify-center h-[100] pl-3">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="md:text-4xl text-2xl font-bold top-0 text-gray-800 mb-4 text-center flex items-center h-full"
            >
              {data?.data.title}
            </motion.h1>

            <div className="flex flex-col md:flex-row md:justify-between justify-start md:items-end h-full gap-2">
              {/* Industry Icon */}
              <div className="flex items-center gap-2 p-1 md:text-xl text-base font-medium">
                <BsBuildings
                  size={40}
                  className="bg-blue-500 hover:bg-black text-white p-1 rounded-md"
                />
                <span className="font-bold md:text-xl text-base">
                  Industry:
                </span>{" "}
                {data?.data.industry}
              </div>

              {/* social media icons */}
              <div className="flex gap-4">
                <Link
                  aria-label="facebook link"
                  href="https://www.facebook.com/share/j5CS6REwZ5K4WJWz/?mibextid=qi2Omg"
                  target="_blank"
                >
                  <FaFacebook
                    size={40}
                    className="text-blue-500 hover:text-black bg-white rounded-full transition-all transform hover:scale-105"
                  />
                </Link>
                <Link
                  aria-label="instagram link"
                  href="https://www.instagram.com/vionsys.it.solutions/?igsh=aXMyYzU1cjZ3M3Ux"
                  target="_blank"
                >
                  <FaInstagram
                    size={40}
                    className="text-white bg-blue-500 hover:bg-black rounded-full p-1 transition-all transform hover:scale-105"
                  />
                </Link>
                <Link
                  aria-label="linkedin link"
                  href="https://www.linkedin.com/company/vionsys-it-solutions-ind-pvt-ltd/?originalSubdomain=in"
                  target="_blank"
                >
                  <FaLinkedinIn
                    size={40}
                    className="text-white bg-blue-500 hover:bg-black rounded-full transition-all transform hover:scale-105 p-1 text-center"
                    target="_blank"
                  />
                </Link>
                <Link
                  aria-label="twitter link"
                  href="https://twitter.com/vionsysit"
                >
                  <RiTwitterXFill
                    size={40}
                    className="rounded-full text-white bg-blue-500 hover:bg-black p-1 transition-all transform hover:scale-105"
                  />
                </Link>
              </div>
            </div>
            {/* <p>Updated at : {formatDate(data.data.updatedAt)}</p> */}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="w-full lg:w-1/2 relative pr-3"
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
        </section>

        {/* <section
          className="prose prose-lg max-w-none text-gray-800 pt-6"
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        /> */}

        <section className="flex md:flex-row flex-col-reverse my-4">
          <div className="flex md:flex-col">
            <div className="md:flex-1/2 w-full">
              <Image
                src={data?.data.imageMid}
                alt={data?.data.title + " mid image"}
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
          </div>
          <div
            className="prose prose-sm max-w-none text-gray-800 md:w-1/2 w-full h-full flex-2/3 leading-tight whitespace-normal"
            dangerouslySetInnerHTML={{ __html: data?.data?.description }}
          />
        </section>

        {/* update & delete button */}
        <section className="mt-4">
          {role === "admin" && (
            <div className="flex gap-6 flex-wrap">
              {/* Show case study pdf */}
              <Button
                onClick={() => handlePreviewResume(data?.data?.caseStudyFile)}
                className="bg-blue-600 hover:bg-blue-500"
              >
                View Case Study PDF
              </Button>
              <Button onClick={() => setShowModal(!showModal)}>Update</Button>
              <Button
                onClick={() => {
                  setdeleteblogId(data?.data?.id);
                  setopenmodalDelete(true);
                }}
                className="bg-red-600 hover:bg-red-500"
              >
                Delete
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
            industry={data?.data?.industry}
            description={data?.data?.description}
            image={data?.data?.image}
            keyWord={data?.data?.keyWord}
            setShowModal={setShowModal}
            seoDescription={data?.data?.seoDescription}
          />
        </Modal>
      </div>
      {/* Document Preview Modal */}
      <Modal
        title="Document Preview"
        open={previewFile !== null}
        onCancel={handleCancel}
        footer={null}
      >
        {previewFile && (
          <div className="flex flex-col items-center">
            {previewFile.isPDF ? (
              <embed
                src={previewFile.url}
                type="application/pdf"
                width="100%"
                height="500px"
              />
            ) : (
              <img
                src={previewFile.url}
                alt="Preview"
                className="w-full h-auto mb-4"
              />
            )}
            <Link
              href={
                previewFile.isPDF
                  ? previewFile.url
                  : `${previewFile.url.replace(
                      "/upload/",
                      "/upload/fl_attachment/"
                    )}`
              }
              download={previewFile.isPDF ? "document.pdf" : "image.png"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Download
            </Link>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default withAuthHOC(Page, "admin");

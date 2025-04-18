import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { Form, Button, Upload, UploadFile } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";
import useAddCaseStudy from "@/services/caseStudies/useAddCaseStudy";
import useUpdateCaseStudy from "@/services/caseStudies/useUpdateCaseStudy";

interface CaseStudyFormProps {
  id?: string;
  title?: string;
  description?: string;
  industry?: string;
  caseStudyFile?: string;
  seoDescription?: string;
  image?: string;
  imageMid?: string;
  keyWord?: string;
  setShowModal: (show: boolean) => void; // Add setShowModal prop
}

interface FormValues {
  id?: string;
  title: string;
  industry: string;
  keyWord: string;
  description: string;
  seoDescription: string;
  file: UploadFile[];
  fileMid: UploadFile[];
  caseStudyFile: UploadFile[];
}

// Dynamically import ReactQuill to avoid server-side rendering issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddCaseStudyForm: React.FC<CaseStudyFormProps> = ({
  id,
  title = "",
  keyWord,
  industry = "",
  seoDescription = "",
  description: initialDescription = "",
  image,
  imageMid,
  caseStudyFile,
  setShowModal,
}) => {
  const [form] = Form.useForm();
  const [description, setDescription] = useState<string>(initialDescription);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileMid, setFileMid] = useState<UploadFile[]>([]);
  const [caseStudyContent, setCaseStudyContent] = useState<UploadFile[]>([]);
  const { mutate: updateCaseStudy, isPending: isCaseStudyUpdating } =
    useUpdateCaseStudy();
  const { mutate: addCaseStudy, isPending: isAddingCaseStudy } =
    useAddCaseStudy();
  const isUpdating = !!id;

  const handleFormSubmit = (values: FormValues) => {
    values.description = description;
    values.keyWord = values.keyWord.trim().split(" ").join("-");
    if (isUpdating) {
      values.id = id;
      updateCaseStudy(values, {
        onSuccess: () => {
          form.resetFields();
          setDescription("");
          setFileList([]);
          setFileMid([]);
          setShowModal(false);
        },
      });
    } else {
      addCaseStudy(values, {
        onSuccess: () => {
          form.resetFields();
          setDescription("");
          setFileList([]);
          setFileMid([]);
          setShowModal(false);
        },
      });
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      title,
      industry,
      description: initialDescription,
      keyWord,
      caseStudyFile,
      seoDescription,
    });
    setDescription(initialDescription);

    if (image) {
      setFileList([
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: image,
        } as UploadFile,
      ]);
    }

    if (imageMid) {
      setFileMid([
        {
          uid: "-1",
          name: "imageMid.png",
          status: "done",
          url: imageMid,
        } as UploadFile,
      ]);
    }

    if (caseStudyFile) {
      setCaseStudyContent([
        {
          uid: "-1",
          name: "caseStudyFile.pdf",
          status: "done",
          url: caseStudyFile,
        } as UploadFile,
      ]);
    }
  }, [
    form,
    title,
    industry,
    initialDescription,
    keyWord,
    image,
    caseStudyFile,
    imageMid,
  ]);

  const handleFileChange = ({ fileList }: { fileList: UploadFile[] }) =>
    setFileList(fileList);

  const handleFileChangeMid = ({ fileList }: { fileList: UploadFile[] }) =>
    setFileMid(fileList);

  const handleCaseStudyPdf = ({ fileList }: { fileList: UploadFile[] }) =>
    setCaseStudyContent(fileList);

  return (
    <div className="flex w-full justify-center items-center bg-orange mt-6 px-4 rounded-2xl">
      <div className="max-w-full w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h3 className="text-center font-bold">
          {isUpdating ? "Update Case Study" : "Add Case Study"}
        </h3>
        <Form form={form} className="" onFinish={handleFormSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="title">Title</Label>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Please enter the title!" }]}
            >
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Enter title"
                autoComplete="off"
                className="appearance-none rounded-md relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
            </Form.Item>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="industry">Industry</Label>
            <Form.Item
              name="industry"
              rules={[
                {
                  required: true,
                  message: "Please enter the industry belong!",
                },
              ]}
            >
              <Input
                id="industry"
                name="industry"
                type="text"
                placeholder="Enter industry"
                autoComplete="off"
                className="appearance-none rounded-md relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
            </Form.Item>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="image">Image</Label>
            <Form.Item
              name="image"
              valuePropName="fileList"
              getValueFromEvent={(e) =>
                Array.isArray(e) ? e : e && e.fileList
              }
              rules={[
                { required: !isUpdating, message: "Please upload an image!" },
              ]}
            >
              <Upload
                name="image"
                listType="picture"
                beforeUpload={() => false}
                maxCount={1}
                fileList={fileList}
                onChange={handleFileChange}
              >
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="description">Description</Label>
            <ReactQuill
              id="description"
              value={description}
              onChange={setDescription}
              className="bg-white"
              theme="snow"
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, 4, 5, 6, false] }],
                  ["bold", "italic", "underline", "strike"],
                  [{ color: [] }, { background: [] }],
                  [{ script: "sub" }, { script: "super" }],
                  ["blockquote", "code-block"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  [{ direction: "rtl" }],
                  [{ align: [] }],
                ],
              }}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="imageMid">2nd Mid Image</Label>
            <Form.Item
              name="imageMid"
              valuePropName="fileList"
              getValueFromEvent={(e) =>
                Array.isArray(e) ? e : e && e.fileList
              }
              // getValueFromEvent={(e) => e?.fileList || []}
              rules={[
                { required: !isUpdating, message: "Please upload an image!" },
              ]}
            >
              <Upload
                name="imageMid"
                listType="picture"
                beforeUpload={() => false}
                maxCount={1}
                fileList={fileMid}
                onChange={handleFileChangeMid}
              >
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="caseStudyFile">Upload Case Study Pdf</Label>
            <Form.Item
              name="caseStudyFile"
              valuePropName="fileList"
              getValueFromEvent={(e) =>
                Array.isArray(e) ? e : e && e.fileList
              }
              rules={[
                {
                  required: !isUpdating,
                  message: "Please upload an pdf file!",
                },
              ]}
            >
              <Upload
                name="caseStudyFile"
                beforeUpload={() => false}
                maxCount={1}
                fileList={caseStudyContent}
                onChange={handleCaseStudyPdf}
              >
                <Button icon={<UploadOutlined />}>Click to Upload File</Button>
              </Upload>
            </Form.Item>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="keyWord">Key Word</Label>
            <p className="text-xs text-gray-500">
              Note: Keyword must needs to be a single word example:
              "key-word-page"
            </p>
            <Form.Item
              name="keyWord"
              rules={[
                { required: true, message: "Please enter the key Word!" },
              ]}
            >
              <Input
                id="keyWord"
                name="keyWord"
                type="text"
                placeholder="Enter key Word"
                autoComplete="off"
                className="appearance-none rounded-md relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
            </Form.Item>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="seoDescription">SEO Description</Label>
            <Form.Item
              name="seoDescription"
              rules={[
                { required: true, message: "Please enter the Description!" },
                { max: 250, message: "Maximum 250 characters allowed" },
              ]}
            >
              <Input
                id="seoDescription"
                name="seoDescription"
                type="text"
                placeholder="Enter SEO Description"
                autoComplete="off"
                className="appearance-none rounded-md relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
            </Form.Item>
          </LabelInputContainer>

          <Form.Item className="w-32">
            <Button
              loading={isUpdating ? isCaseStudyUpdating : isAddingCaseStudy}
              className={
                isUpdating
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-gradient-to-br from-black to-neutral-600"
              }
              type="primary"
              htmlType="submit"
            >
              &nbsp;{isUpdating ? "Update" : "Add"} &rarr;
              <BottomGradient />
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const BottomGradient: React.FC = () => {
  return (
    <>
      <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

interface LabelInputContainerProps {
  children: React.ReactNode;
  className?: string;
}

const LabelInputContainer: React.FC<LabelInputContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default AddCaseStudyForm;

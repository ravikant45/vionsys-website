import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { Form, Button, Upload, UploadFile } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import useAddBlog from "@/services/blogs/useAddBlog";
import useUpdateBlog from "@/services/blogs/useUpdateBlog";

interface BlogProps {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  keyWord?: string;
  seoDescription?: string;
  postDate?: string;
  setShowModal: (show: boolean) => void;
}

interface FormValues {
  title: string;
  keyWord: string;
  seoDescription: string;
  file: UploadFile[];
}

const BlogForm: React.FC<BlogProps> = ({
  id,
  title = "",
  seoDescription = "",
  description: initialDescription = "",
  image,
  keyWord,
  setShowModal,
}) => {
  const [form] = Form.useForm();
  const [description, setDescription] = useState<string>(initialDescription);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { mutate: addBlog, isPending: isAddBlogPending } = useAddBlog();
  const { mutate: updateBlog, isPending: isUpdateBlogPending } =
    useUpdateBlog();
  const isUpdating = !!id;

  useEffect(() => {
    form.setFieldsValue({
      title,
      seoDescription,
      keyWord,
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
  }, [form, title, initialDescription, keyWord, image, seoDescription]);

  const handleFormSubmit = (values: FormValues) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("keyWord", values.keyWord);
    formData.append("description", description);
    formData.append("seoDescription", values.seoDescription);

    if (!isUpdating) {
      const currentDate = new Date();
      formData.append("currentDate", currentDate.toISOString());
    }

    if (fileList.length > 0) {
      formData.append("file", fileList[0].originFileObj as Blob);
    }

    const handleSuccess = () => {
      form.resetFields();
      setDescription("");
      setFileList([]);
      setShowModal(false);
    };

    if (isUpdating) {
      formData.append("id", id as string);
      updateBlog(formData, { onSuccess: handleSuccess });
    } else {
      addBlog(formData, { onSuccess: handleSuccess });
    }
  };

  const handleFileChange = ({ fileList }: { fileList: UploadFile[] }) =>
    setFileList(fileList);

  return (
    <div className="flex w-full justify-center items-center bg-blue-100 mt-6 px-4 rounded-2xl">
      <div className="max-w-full w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <div className="flex">
          <div className="text-start flex justify-center mb-6">
            <Image src="/assets/logo.png" alt="Logo" width={150} height={150} />
          </div>
        </div>
        <Form form={form} onFinish={handleFormSubmit}>
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
            <Label htmlFor="file">Image</Label>
            <Form.Item
              name="file"
              valuePropName="fileList"
              getValueFromEvent={(e) =>
                Array.isArray(e) ? e : e && e.fileList
              }
              rules={[
                { required: !isUpdating, message: "Please upload an image!" },
              ]}
            >
              <Upload
                name="file"
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
            <Label htmlFor="keyWord">Key Word</Label>
            <Form.Item
              name="keyWord"
              rules={[
                { required: true, message: "Please enter a unique keyword!" },
              ]}
            >
              <Input
                id="keyWord"
                name="keyWord"
                type="text"
                placeholder="Enter keyword"
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
                { required: true, message: "Please enter a SEO Description" },
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
              loading={isUpdating ? isUpdateBlogPending : isAddBlogPending}
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

const BottomGradient: React.FC = () => (
  <>
    <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

interface LabelInputContainerProps {
  children: React.ReactNode;
  className?: string;
}

const LabelInputContainer: React.FC<LabelInputContainerProps> = ({
  children,
  className,
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);

export default BlogForm;

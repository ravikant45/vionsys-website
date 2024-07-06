'use client';
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/utils/cn';
import { Form, Button, Upload, UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Image from 'next/image';
import useAddBlog from '@/services/blogs/useAddBlog';

interface FormValues {
    title: string;
    file: UploadFile[];
}

const AddBlogForm: React.FC = () => {
    const [form] = Form.useForm();
    const [description, setDescription] = useState<string>('');
    const { mutate: addBlog, isPending: isAddBlogPending } = useAddBlog();

    const handleFormSubmit = (values: FormValues) => {
        console.log(values.file[0].originFileObj as Blob);
        console.log(description)
        const currentDate = new Date();
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('description', description);
        formData.append('currentDate', currentDate.toISOString());
        if (values.file && values.file.length > 0) {
            formData.append('file', values.file[0].originFileObj as Blob);
        }
        addBlog(formData, {
            onSuccess: () => {
                form.resetFields();
                setDescription('');
            }
        });
    };

    return (
        <div className='flex w-full justify-center items-center bg-blue-100 mt-6 px-4 rounded-2xl'>
            <div className="max-w-full w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                <div className='flex'>
                    <div className="text-start flex justify-center mb-6">
                        <Image src="/assets/logo.png" alt="Logo" width={150} height={150} className="" />
                    </div>
                </div>

                <Form form={form} className="" onFinish={handleFormSubmit}>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="title">Title</Label>
                        <Form.Item
                            name="title"
                            rules={[{ required: true, message: 'Please enter the title!' }]}
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
                                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                    ['bold', 'italic', 'underline', 'strike'],
                                    [{ 'color': [] }, { 'background': [] }],
                                    [{ 'script': 'sub' }, { 'script': 'super' }],
                                    ['blockquote', 'code-block'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                                    [{ 'direction': 'rtl' }],
                                    [{ 'align': [] }],
                                ],
                            }}
                        />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="file">Image</Label>
                        <Form.Item
                            name="file"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
                            rules={[{ required: true, message: 'Please upload an image!' }]}
                        >
                            <Upload
                                name="file"
                                listType="picture"
                                beforeUpload={() => false}
                                maxCount={1}
                            >
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>
                    </LabelInputContainer>

                    <Form.Item className='w-32'>
                        <Button
                            loading={isAddBlogPending}
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] transition-all duration-300 ease-linear px-2"
                            type="text"
                            htmlType="submit"
                        >
                            &nbsp;Submit &rarr;
                            <BottomGradient />
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

const BottomGradient: React.FC = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
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

export default AddBlogForm;

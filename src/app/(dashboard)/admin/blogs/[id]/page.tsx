'use client';
import AddBlogForm from '@/app/ui/dashboard/blogs/AddBlogForm';
import { Button } from '@/components/ui/button';
import useGetBlog from '@/services/blogs/useGetBlog';
import { jwtdecode } from '@/utils/jwt-decode';
import { Modal } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";

const Page: React.FC = () => {
    const { id } = useParams();
    const [role, setRole] = useState<string | null>(null);
    const { data, isPending } = useGetBlog(id);

    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const { role } = jwtdecode(token);
                    setRole(role);
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }, []);

    if (isPending) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className='py-6 flex justify-center items-center bg-dot-slate-300'>
            <div className="py-8 md:px-4 px-8 md:max-w-4xl w-auto md:mx-auto md:bg-blue-100 bg-white rounded-lg md:shadow-md">
                <div className='mb-2'>
                    <Link href={"/admin/blogs"} className='bg-blue-400 rounded-md w-10 flex justify-center items-center cursor-pointer mt-2 py-2'>
                        <IoMdArrowBack size={25} />
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row justify-center gap-8 mb-8">
                    <div className="w-full lg:w-1/2 relative">
                        <Image
                            src={data?.data.image}
                            alt={data?.data.title}
                            layout="responsive"
                            width={400}
                            height={400}
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col lg:w-2/3">
                        <h1 className="text-4xl font-bold mb-4">{data?.data.title}</h1>
                        <p className="text-sm"><span>Posted On:&nbsp;</span>{new Date(data?.data.postDate).toLocaleDateString()}</p>
                    </div>
                </div>

                <div className="prose prose-lg w-full" dangerouslySetInnerHTML={{ __html: data?.data?.description }} />

                <div>
                    {role === "admin" ? <Button onClick={() => setShowModal(!showModal)} className=''>Update</Button> : ('')}
                </div>

                {/* update modal */}
                <Modal width={900} centered open={showModal} footer={null} onCancel={() => setShowModal(false)}>
                    <AddBlogForm
                        id={data?.data.id}
                        title={data?.data.title}
                        description={data?.data.description}
                        image={data?.data.image}
                        postDate={data?.data.createdDate}
                        setShowModal={setShowModal}  // Pass the setShowModal function
                    />
                </Modal>
            </div>
        </div>
    );
}

export default Page;

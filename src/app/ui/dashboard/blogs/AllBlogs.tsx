import { Button, Flex, Modal, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import AddBlogForm from './AddBlogForm';
import useGetAllBlogs from '@/services/blogs/useGetAllBlogs';
import Image from 'next/image';
import { jwtdecode } from '@/utils/jwt-decode';
import Link from 'next/link';
import { MdDeleteOutline } from "react-icons/md";
import useDeleteBlog from '@/services/blogs/useDeleteBlog';

// Define the Blog type
interface Blog {
    id: string;
    image: string;
    postDate: string;
    title: string;
}

// Helper function to format the date
const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

const AllBlogs: React.FC = () => {
    const [role, setRole] = useState<string | null>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    const { data: AllBlogs, isPending: isGetAllBlogPending } = useGetAllBlogs();
    const { mutate: deleteBlog, isPending: isDeleteBlogPending } = useDeleteBlog();

    const Blogs: Blog[] | undefined = AllBlogs?.data;
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

    const handleDeleteBlog = (id: string) => {
        deleteBlog(id);
    }

    return (
        <section className='px-4 py-6 w-full bg-slate-50 bg-dot-slate-300'>
            <Button onClick={() => setIsAddModalOpen(!isAddModalOpen)} type='primary' className='text-base'>
                Add Blog
            </Button>

            <Modal width={900} centered open={isAddModalOpen} footer={null} onCancel={() => setIsAddModalOpen(false)}>
                {/* Add Blog Form */}
                <AddBlogForm setShowModal={setIsAddModalOpen} />
            </Modal>

            {/* Print all blogs from db */}
            <div className='w-full mt-4'>
                {
                    Blogs ? (
                        <div className='grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-4'>
                            {
                                Blogs?.map((blog: Blog) => (
                                    <div key={blog.id} className='max-w-sm h-[430px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                                        <div className='relative'>
                                            <Link href={`/admin/blogs/${blog?.id}`}>
                                                <Image src={blog?.image} alt="" width={1000} height={1000} className="rounded-t-md w-full h-[200px]" />
                                            </Link>
                                            <div><p className='absolute bottom-0 pl-2 pr-4 bg-slate-200 rounded-tr-md'>{formatDate(blog?.postDate)}</p></div>
                                        </div>


                                        <div className='flex flex-col justify-between gap-4'>
                                            <div className='px-4 py-2'>
                                                <h2 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-4'>{blog?.title}</h2>
                                            </div>


                                            <div className='py-2 px-4 flex justify-between items-center gap-4'>
                                                <Link href={`/admin/blogs/${blog?.id}`} type='link' className='text-blue-400 hover:underline'>Read More</Link>
                                                <div>
                                                    {
                                                        role === 'admin' ? (
                                                            <Button onClick={() => handleDeleteBlog(`${blog.id}`)} danger className='flex justify-center items-center cursor-pointer'>
                                                                <MdDeleteOutline size={20} className=' hover:text-red-400 text-red-600' />
                                                            </Button>
                                                        ) : ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <Flex align="center" gap="middle">
                            <Spin size="large" />
                        </Flex>
                    )
                }
            </div>
        </section>
    );
}

export default AllBlogs;

'use client';
import useGetCaseStudy from '@/services/caseStudies/useGetCaseStudy';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';

const Page = () => {
    const { id } = useParams();
    const { data, isPending } = useGetCaseStudy(id);

    if (isPending) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className='py-12 px-4 flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300'>
            <div className="w-full mx-auto bg-white rounded-lg shadow-lg p-8">
                <div className='mb-4'>
                    <Link href="/admin/caseStudies" className='inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors'>
                        <IoMdArrowBack size={24} />
                        <span className='ml-2 text-lg font-medium'>Back to Previous Page</span>
                    </Link>
                </div>
                <div className="flex flex-col gap-8">
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
                    <div className="flex flex-col lg:w-1/2">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{data?.data.title}</h1>
                    </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: data?.data?.description }} />
            </div>
        </div>
    );
}

export default Page;

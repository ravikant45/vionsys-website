'use client';
import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import AddCaseStudyForm from './AddCaseStudyForm';
import useGetAllCaseStudies from '@/services/caseStudies/useGetAllCaseStudies';
import Link from 'next/link';
import Image from 'next/image';
import { jwtdecode } from '@/utils/jwt-decode';
// import img from "../../../../../public/background.jpg";

interface CaseStudy {
    id: string;
    image: string;
    title: string;
}

const AllCaseStudies = () => {
    const [addShowModal, setAddShowModal] = useState<boolean>(false);
    const { data, isPending } = useGetAllCaseStudies();
    const [role, setRole] = useState<string | null>(null);

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

    return (
        <div className='px-8 w-full py-6 bg-dot-slate-400'>
            {
                role === 'admin' && (
                    <Button onClick={() => setAddShowModal(!addShowModal)} type='primary' className='text-base'>
                        Add Case Study
                    </Button>
                )
            }
            <div className='relative py-8'>
                {/* <div className="absolute inset-0 z-0">
                    <Image src={img} alt="Map Background" layout="fill" objectFit="cover" className="opacity-40 rounded-md" />
                </div> */}
                <div className='relative flex flex-wrap items-center gap-8 z-10'>
                    {isPending ? (<h2>Loading...</h2>) : (
                        data?.data?.map((caseStudy: CaseStudy) => (
                            <div key={caseStudy.id} className="relative w-[300px] h-[300px] bg-black rounded-xl">
                                <Link href={`/admin/caseStudies/${caseStudy.id}`}>
                                    <Image src={caseStudy.image} alt={caseStudy.title} layout="fill" objectFit="cover" className="rounded-xl shadow-lg transition-transform transform hover:scale-110 opacity-55" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
                                    <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold">{caseStudy.title}</h2>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Modal width={900} centered open={addShowModal} footer={null} onCancel={() => setAddShowModal(!addShowModal)}>
                <AddCaseStudyForm setShowModal={setAddShowModal} />
            </Modal>
        </div>
    )
}

export default AllCaseStudies;

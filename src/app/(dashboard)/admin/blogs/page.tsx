'use client';
import React, { useEffect, useState } from 'react'
import { jwtdecode } from '@/utils/jwt-decode';
import Errorpage from '@/components/ui/Errorpage';
import dynamic from 'next/dynamic';

// Dynamically import the AllBlogs component
const AllBlogs = dynamic(() => import('@/app/ui/dashboard/blogs/AllBlogs'), { ssr: false });

const Page = () => {
    const [role, setRole] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const { role } = jwtdecode(token);
                    setRole(role);
                } catch (e) {
                    setError("Failed to decode token.");
                }
            } else {
                setError("No token found.");
            }
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <div className='h-[100vh] w-full flex justify-center items-center text-2xl font-bold'>Loading...</div>;
    }

    if (error) {
        return (
            <Errorpage
                errorCode='400'
                errorTitle={"Error"}
                errorDescription={error}
            />
        );
    }

    if (role === null) {
        return (
            <Errorpage
                errorCode='401'
                errorTitle={"You're not authorized!!"}
                errorDescription={"You tried to access a page you did not have prior authorization for."}
            />
        );
    }

    return (
        <>
            {role === "admin" ? (
                <AllBlogs />
            ) : (
                <Errorpage
                    errorCode='401'
                    errorTitle={"You're not authorized!!"}
                    errorDescription={"You tried to access a page you did not have prior authorization for."}
                />
            )}
        </>
    );
}

export default Page;

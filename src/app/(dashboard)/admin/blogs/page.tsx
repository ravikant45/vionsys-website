'use client';
import React, { useEffect, useState } from 'react'
import { jwtdecode } from '@/utils/jwt-decode';
import Errorpage from '@/components/ui/Errorpage';
import AllBlogs from '@/app/ui/dashboard/blogs/AllBlogs';

const page = () => {
    const [role, setRole] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const { role } = jwtdecode(token);
            setRole(role);
        }
        setLoading(false); // Set loading to false after checking the token
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator while waiting
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

export default page;
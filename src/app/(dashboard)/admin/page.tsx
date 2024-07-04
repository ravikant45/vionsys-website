"use client";
import Header from '@/app/ui/dashboard/admin/Header';
import Errorpage from '@/components/ui/Errorpage';
import { jwtdecode } from '@/utils/jwt-decode';
import React, { useEffect, useState } from 'react';

const Page = () => {
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
                errorCode="401"
                errorTitle={"You're not authorized!!"}
                errorDescription={"You tried to access a page you did not have prior authorization for."}
            />
        );
    }

    return (
        <>
            {role === "admin" ? (
                <div>
                    <Header />
                    <div className='pt-20 h-screen flex justify-center items-center'>
                        Admin page
                    </div>
                </div>
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

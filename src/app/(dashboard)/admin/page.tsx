"use client";
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
                    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center md:justify-center justify-start p-2 relative w-full">

                        <div className="bg-white shadow-2xl rounded-lg md:p-10 p-1 md:max-w-3xl w-full text-center relative z-10 md:">
                            <h1 className="md:text-5xl text-2xl font-extrabold text-gray-800 mb-8">Welcome to the Admin Dashboard</h1>
                            <p className="md:text-xl text-sm text-gray-700 mb-6">
                                Efficiently manage your blogs and case studies. Keep your content organized and up-to-date with our intuitive dashboard.
                            </p>
                        </div>

                        <div className="absolute md:block hidden inset-0 overflow-hidden">
                            <svg
                                className="absolute top-0 left-0 transform -translate-y-1/3 -translate-x-1/3 opacity-25"
                                width="400"
                                height="400"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="200" cy="200" r="200" fill="white" />
                            </svg>
                            <svg
                                className="absolute bottom-0 right-0 transform translate-y-1/3 translate-x-1/3 opacity-25"
                                width="400"
                                height="400"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="0" y="0" width="400" height="400" fill="white" />
                            </svg>
                            <svg
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-25"
                                width="300"
                                height="300"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polygon points="150,0 300,300 0,300" fill="white" />
                            </svg>
                        </div>
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

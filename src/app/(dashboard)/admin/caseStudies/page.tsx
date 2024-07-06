'use client';
import AllCaseStudies from '@/app/ui/dashboard/caseStudies/AllCaseStudies';
import Errorpage from '@/components/ui/Errorpage';
import { jwtdecode } from '@/utils/jwt-decode';
import React, { useEffect, useState } from 'react'

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
                <AllCaseStudies />
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

export default page
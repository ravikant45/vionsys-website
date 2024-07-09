"use client";
import Loading from "@/app/(pages)/loading";
import AllCaseStudies from "@/app/ui/dashboard/caseStudies/AllCaseStudies";
import Errorpage from "@/components/ui/Errorpage";
import { jwtdecode } from "@/utils/jwt-decode";
import React, { useEffect, useState } from "react";

const page = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { role } = jwtdecode(token);
      setRole(role);
    }
    // Set loading to false after checking the token
  }, []);

  if (role === null) {
    return (
      <Errorpage
        errorCode="401"
        errorTitle={"You're not authorized!!"}
        errorDescription={
          "You tried to access a page you did not have prior authorization for."
        }
      />
    );
  }

  return (
    <>
      {role === "admin" ? (
        <AllCaseStudies />
      ) : (
        <Errorpage
          errorCode="401"
          errorTitle={"You're not authorized!!"}
          errorDescription={
            "You tried to access a page you did not have prior authorization for."
          }
        />
      )}
    </>
  );
};

export default page;

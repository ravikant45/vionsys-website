/* eslint-disable react/no-unescaped-entities */
"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoArrowLeft } from "react-icons/go";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import React from "react";

const ThankYouPage = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <main className="flex-grow bg-blue3 md:h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Card className="w-full py-6 max-w-xl px-4 bg-white shadow-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <CheckCircledIcon className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-3xl font-bold text-center text-blue-800">
            Thank You!
          </CardTitle>
          <CardDescription className="text-center text-lg text-green-500 font-semibold">
            Your form has been successfully submitted.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-700">
            We appreciate your interest- we'll get back to you shortly.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="bg-orange flex gap-2 text-md hover:bg-blue2 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleButtonClick}
          >
            <GoArrowLeft size={22} /> Return to Previous Page
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default ThankYouPage;

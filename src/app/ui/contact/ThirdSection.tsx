/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaSquareXTwitter } from "react-icons/fa6";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";
import third from "/public/assets/Contact/third.jpg";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  number: z.string().refine((value) => /^\d{10}$/.test(value), {
    message:
      "Contact number must be exactly 10 digits and should not contain alphabets or special characters.",
  }),
  email: z.string().email("Invalid email!!"),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

const ThirdSection = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      number: "",
      email: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      setIsPending(true);
      const response: AxiosResponse<any> = await axios.post(
        "/api/email", // Replace with your API endpoint
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsPending(false);
      toast.success("Thanks, For Connecting With Us");
      console.log("Response:", response.data);
      form.reset(); // Reset the form after successful submission
    } catch (error) {
      const err = error as AxiosError;
      console.error("Error:", err.response?.data || err.message);
      setIsPending(false);
      toast.error(err?.message || "Failed to send message");
    }

    form.reset();
  }

  return (
    <div>
      <div className="flex justify-center items-center mt-0 bg-dot-zinc-400 px-2 py-7">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            data-aos="zoom-out"
            className="shadow-md shadow-blue4 rounded-[22px] md:w-1/2 w-full px-4 py-2 bg-white lg:p-10"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <h1 className="pb-4 tracking-wide md:text-2xl text-md text-center font-medium">
                    {" "}
                    Send A Message{" "}
                  </h1>
                  <FormLabel>Enter Your name</FormLabel>
                  <FormControl>
                    <Input placeholder=" Enter your name" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter contact number" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Email id</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <Textarea
                    {...field} // Pass the field props to TextArea
                    placeholder="Type your message here."
                    id="message-2"
                  />
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!isPending ? (
              <Button type="submit" className="flex justify-center">
                Submit
              </Button>
            ) : (
              <Button type="submit" className="flex justify-center">
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Submit
              </Button>
            )}
          </form>
        </Form>
      </div>

      <div className="Location Area">
        <div className="flex flex-col h-full md:w-full md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6818.152391642604!2d73.93858737762325!3d18.546651353587574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf282419d50d%3A0x2cc71f615579ab3a!2sVionsys%20IT%20Solutions%20India%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1713765708125!5m2!1sen!2sin"
            width="screen"
            height="500"
            loading="eager"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center w-full md:h-[50vh] relative h-auto">
        {/*fourth image here */}
        <Image
          src={third}
          alt=""
          className="object-cover w-full md:h-[50vh] h-[30vh]"
        />
        <div
          className=" absolute md:py-20 py-10 text-lg lg:text-4xl md:text-3xl sm:text-2xl font-extrabold
        bg-clip-text text-transparent bg-gradient-to-r animate-pulse from-red-500 to-blue-700"
        >
          <h1 data-aos="fade-right" className="inline">
            Stay Updated With Our{" "}
            <span className="flex">Social Media Channels</span>
          </h1>
          <div className="  text-black">
            <ul>
              <li>
                <div className="flex justify-center md:justify-start mt-7 md:pl-28">
                  <Link href="https://www.facebook.com/share/j5CS6REwZ5K4WJWz/?mibextid=qi2Omg ">
                    <BsFacebook
                      size={40}
                      className="mr-3 transform hover:scale-125 transition duration-300 ease-in-out"
                      color="blue"
                    />
                  </Link>
                  <Link href="https://www.instagram.com/vionsys.it.solutions/?igsh=aXMyYzU1cjZ3M3Ux">
                    <BsInstagram
                      size={40}
                      className="mr-3 transform hover:scale-125 transition duration-300 ease-in-out"
                      color="#e1306c"
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/company/vionsys-it-solutions-ind-pvt-ltd/?originalSubdomain=in">
                    <RxLinkedinLogo
                      size={40}
                      className=" mr-3 transform hover:scale-125 transition duration-300 ease-in-out"
                      color="#0077B5"
                    />
                  </Link>
                  <Link href="https://twitter.com/vionsysit">
                    <FaSquareXTwitter
                      size={40}
                      className=" mr-3 transform hover:scale-125 transition duration-300 ease-in-out"
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdSection;

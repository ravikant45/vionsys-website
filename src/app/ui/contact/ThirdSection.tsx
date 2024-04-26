/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  contact: z.string().min(2, {
    message: "Contact must be  at least 10 digits.",
  }),
  email: z.string().min(2, {
    message: "Required field.",
  }),
  usermessage: z.string().min(2, {
    message: ".",
  }),
});

const ThirdSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      contact: "",
      email: "",
      usermessage: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <div className="flex justify-around mt-0 bg-white">
        <img
          src="https://img.freepik.com/free-vector/white-background-with-wavy-lines_23-2149124446.jpg?t=st=1713935414~exp=1713939014~hmac=4e4633f5a4e31b12fea0cdee7b3b4ffaa6423369fd539fcac49f589fc5675c5a&w=900"
          className="bg-object-cover lg:w-full lg:h-screen md:block hidden md:w-full lg:mt-0"
        ></img>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="md:mt-10 shadow-md shadow-blue-500 rounded-[22px] md:w-1/2 w-full p-8 m-4 bg-slate-100 md:absolute lg:p-10"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <h1 className="pb-4 tracking-wide md:text-2xl text-md text-center font-medium underline underline-offset-4 decoration-blue-800">
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
              name="contact"
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
              name="usermessage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <Textarea
                    placeholder="Type your message here."
                    id="message-2"
                  />
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="flex justify-center">
              Submit
            </Button>
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
      <div className="flex justify-center bg-gray-300 w-screen h-[50vh]">
        <img
          src="https://img.freepik.com/free-photo/colorful-abstract-textured-background-design_53876-108265.jpg?t=st=1714111992~exp=1714115592~hmac=038c18ae50be3d00e4092aefb8280812b6146931b746f313f723bebaa18bf4d6&w=900"
          alt=""
          className="object-cover w-full"
        ></img>
        <div
          data-aos="fade right"
          className=" absolute pt-20 lg:text-4xl md:text-3xl sm:text-2xl font-extrabold
        bg-clip-text text-transparent bg-gradient-to-r animate-pulse from-red-500 to-blue-700"
        >
          <h1 className="inline">
            Stay Updated With Our{" "}
            <span className="flex">Social Media Channels</span>
          </h1>
          <div className="  text-black">
            <ul>
              <li>
                <div className="flex justify-center md:justify-start mt-7 md:pl-28">
                  <BsFacebook
                    size={40}
                    className="mr-3 transform hover:scale-125 transition duration-300 ease-in-out"
                    color="blue"
                  />
                  <BsInstagram
                    size={40}
                    className="mr-3 transform hover:scale-125 transition duration-300 ease-in-out"
                    color="#e1306c"
                  />
                  <RxLinkedinLogo
                    size={40}
                    className=" mr-3transform hover:scale-125 transition duration-300 ease-in-out"
                    color="#0077B5"
                  />
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

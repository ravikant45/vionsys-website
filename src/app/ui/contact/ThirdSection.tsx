/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-hot-toast";
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
import { countryCodes } from "@/utils/CountryCodes";
import { MainContactFormTemplate } from "@/utils/MainContactFormTemplate";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  countryCode: z.string().min(1, {
    message: "Please select a country code.",
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
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      countryCode: "+91",
      number: "",
      email: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const template = MainContactFormTemplate(values);
    const sendTo = ["info@vionsys.com"];
    const updatedData = {
      values,
      template,
      sendTo,
    };
    try {
      setIsPending(true);
      const response: AxiosResponse<any> = await axios.post(
        "/api/email",
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsPending(false);
      form.reset(); // Reset the form after successful submission
      router.push("/thank-you");
    } catch (error) {
      const err = error as AxiosError;
      console.error("Error:", err.response?.data || err.message);
      setIsPending(false);
      toast.error(err?.message || "Failed to send message");
    }

    form.reset();
  }

  return (
    <>
      <div className="md:flex justify-evenly flex-row gap-20 items-center mt-0 px-2 md:py-7 py-2">
        <div className="flex justify-center ">
          <h1 className="py-5 md:py-10 tracking-wide md:text-5xl text-4xl text-start font-bold text-[#e57e2c]">
            {" "}
            Get In Touch{" "}
            <p className="text-xl py-5 text-black">
              Sales: info@vionsys.com
              <span className="flex py-5">Mobile: +91 9156137273</span>
            </p>
          </h1>
        </div>
        <Form {...form}>
          <motion.form
            onSubmit={form.handleSubmit(onSubmit)}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className=" rounded-[10px] md:w-1/2 w-full px-4 py-2 bg-white lg:p-10"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
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
                    <div className="flex gap-2">
                      {/* Country Code Selection */}
                      <FormField
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                          <select
                            {...field}
                            className="border w-24 border-gray-300 rounded text-gray-900 mt-1 px-1 py-[10.5px] focus:outline-none"
                          >
                            {countryCodes.map((country, index) => (
                              <option key={index} value={country.code}>
                                {country.code} {country.name}
                              </option>
                            ))}
                          </select>
                        )}
                      />

                      {/* Phone Number Input */}
                      <Input
                        placeholder="Enter phone number"
                        {...field}
                        className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </FormControl>
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
          </motion.form>
        </Form>
      </div>
    </>
  );
};
export default ThirdSection;

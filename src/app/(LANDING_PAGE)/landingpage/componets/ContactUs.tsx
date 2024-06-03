"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(5, {
    message: "Name must be at least 5 characters.",
  }),
  email: z.string().email("Invalid email address."),
  number: z.string().min(10, "Contact number must be at least 10 digits."),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

const ContactUs = () => {
  const [isPending, setIsPending] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsPending(true);
      const response = await axios.post("/api/email", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Thanks for connecting with us!");
      form.reset();
    } catch (error) {
      const err = error as AxiosError;
      //   console.error("Error:", err.response?.data || err.message);
      toast.error(err?.message || "Failed to send message");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <main>
      <div className="flex py-10 items-center justify-start bg-white">
        {/* contact us form */}
        <div className="mx-auto w-full max-w-lg p-4">
          <h1 className="text-4xl font-medium">Contact us</h1>
          <p className="mt-3">
            Email us at info@vionsys.com or message us here:
          </p>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="mt-10">
            <div className="">
              <div className="flex flex-col ">
                <div className="relative z-0 p-3">
                  <input
                    type="text"
                    {...form.register("name")}
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                    Your name
                  </label>
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>
                <div className="relative z-0 p-3">
                  <input
                    type="email"
                    {...form.register("email")}
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                    Your email
                  </label>
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <div className="relative z-0 p-3">
                  <input
                    type="text"
                    {...form.register("number")}
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                    Contact number
                  </label>
                  {form.formState.errors.number && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.number.message}
                    </p>
                  )}
                </div>
                <div className="relative z-0 col-span-2 p-3">
                  <textarea
                    {...form.register("message")}
                    rows={5}
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                    Your message
                  </label>
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 rounded-md bg-black px-10 py-2 text-white"
              >
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;

import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios, { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { CareerFormTemplate } from "@/utils/CareerFormTemplate";
import { useRouter } from "next/navigation";

const fileSchema = z.object({
  filename: z.string(),
  content: z.string(),
});

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  position: z.string().min(3, {
    message: "Position must be at least 3 characters.",
  }),
  experience: z.string().min(1, {
    message: "Experience must be at least 1 character.",
  }),
  attachments: z.array(fileSchema).optional(),
});

const Job_modal = ({
  jobTitle,
  isModalOpen,
  setisModalOpen,
}: {
  jobTitle: string;
  isModalOpen: any;
  setisModalOpen: any;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      position: jobTitle || "",
      experience: "",
      attachments: undefined,
    },
  });

  const [isPending, setIsPending] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (jobTitle) {
      form.setValue("position", jobTitle);
    }
  }, [jobTitle, form]);

  const handleClose = () => {
    setisModalOpen(false);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const template = CareerFormTemplate(values);
    const sendTo = ["hr@vionsys.com"];

    const updatedData = {
      ...values,
      template,
      sendTo,
    };

    try {
      setIsPending(true);
      const response: AxiosResponse<any> = await axios.post(
        "/api/sendEmailWithFile",
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsPending(false);
      setisModalOpen(false);
      router.push("/thank-you");
      form.reset();
    } catch (error) {
      const err = error as AxiosError;
      console.error("Error:", err.response?.data || err.message);
      setIsPending(false);
      toast.error(err?.message || "Failed to send Job Application");
    }
  };

  return (
    <div>
      {/* Job Application Modal */}
      <Modal
        title="Job Application"
        open={isModalOpen}
        onCancel={handleClose}
        footer={null}
      >
        <div className="w-full">
          <div className="p-2 border border-gray-300 sm:rounded-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* username and email */}
                <div className="flex gap-4 md:flex-row flex-col">
                  {/* username field */}
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* email field */}
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* position and years of experience */}
                <div className="flex gap-4 md:flex-row flex-col">
                  {/* position field */}
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Designation</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              readOnly={true}
                              placeholder={jobTitle}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Experience in years */}
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience in years</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Experience in years"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* attachments */}
                <FormField
                  control={form.control}
                  name="attachments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your CV</FormLabel>
                      <FormControl>
                        <Input
                          name="attachments"
                          type="file"
                          multiple
                          onChange={(e) => {
                            const files = e.target.files;
                            if (files) {
                              const filesArray = Array.from(files).map(
                                async (file) => ({
                                  filename: file.name,
                                  content: await toBase64(file), // Convert to base64
                                })
                              );
                              Promise.all(filesArray).then((result) => {
                                field.onChange(result);
                              });
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="mb-6">
                  {!isPending ? (
                    <Button type="submit" className="flex justify-center">
                      Apply
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
                        {/* Spinner */}
                      </svg>
                      Sending..
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// Convert file to base64
const toBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export default Job_modal;

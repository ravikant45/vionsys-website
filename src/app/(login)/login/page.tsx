"use client";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import { Form, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import useAuthSignin from "@/services/auth/useAuthSignin";
import Image from "next/image";

export default function LoginForm() {
  const [form] = Form.useForm();
  const router = useRouter();
  const { mutate: signIn, isPending: isSignInPending } = useAuthSignin();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = (values: { email: string; password: string }) => {
    signIn(values, {
      onSuccess: () => {
        form.resetFields();
        router.push("/admin");
      },
    });
  };

  const handleForgotPassword = () => {
    message.info("Forgot Password functionality to be implemented.");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-100 md:px-0 px-4">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className=""
          />
        </div>
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
          Welcome Back!
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
          Please sign in to your account
        </p>

        <Form form={form} className="my-8" onFinish={handleLogin}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "The input is not a valid email!" },
              ]}
            >
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="projectmayhem@fc.com"
                autoComplete="new-password"
                className="appearance-none rounded-md relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
            </Form.Item>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="appearance-none rounded-md relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                >
                  {passwordVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                </span>
              </div>
            </Form.Item>
          </LabelInputContainer>
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Forgot Password?
            </button>
          </div>

          <Form.Item>
            <Button
              loading={isSignInPending}
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] transition-all duration-300 ease-linear px-2"
              type="text"
              htmlType="submit"
            >
              &nbsp;Sign in &rarr;
              <BottomGradient />
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

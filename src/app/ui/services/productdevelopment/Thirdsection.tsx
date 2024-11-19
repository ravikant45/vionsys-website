"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Thirdsection = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-16 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.4 },
                    ease: "easeInOut",
                  }}
                  className="text-3xl font-bold text-gray-700 tracking-tighter lg:text-4xl"
                >
                  Why Choose <span className="text-blue-700">Us</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.4 },
                    ease: "easeInOut",
                  }}
                  className="max-w-[600px] text-gray-500 md:text-lg/relaxed lg:text-lg/relaxed xl:text-lg/relaxed dark:text-gray-400"
                >
                  Discover the benefits of our exceptional product or service
                  and why we are the best choice for your needs.
                </motion.p>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <RocketIcon className="h-6 w-6 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.4 },
                        ease: "easeInOut",
                      }}
                      className="text-lg font-semibold"
                    >
                      Unparalleled Performance
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.4 },
                        ease: "easeInOut",
                      }}
                      className="text-gray-500 dark:text-gray-400"
                    >
                      Our cutting-edge technology ensures lightning-fast speeds
                      and uninterrupted service, delivering an exceptional user
                      experience.
                    </motion.p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldIcon className="h-6 w-6 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.4 },
                        ease: "easeInOut",
                      }}
                      className="text-lg font-semibold"
                    >
                      Robust Security
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.4 },
                        ease: "easeInOut",
                      }}
                      className="text-gray-500 dark:text-gray-400"
                    >
                      Your data and privacy are our top priority. We employ
                      state-of-the-art security measures to protect your
                      information.
                    </motion.p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <SettingsIcon className="h-6 w-6 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.4 },
                        ease: "easeInOut",
                      }}
                      className="text-lg font-semibold"
                    >
                      Exceptional Support
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.4 },
                        ease: "easeInOut",
                      }}
                      className="text-gray-500 dark:text-gray-400"
                    >
                      We provide ongoing support and maintenance services to
                      ensure that your product continues to meet your needs and
                      perform at its best.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              alt="Product Development - Why Choose Us"
              className="mx-auto aspect-video lg:h-[60vh] overflow-hidden shadow-lg shadow-slate-500 bg-cover object-cover object-center sm:w-full lg:order-last"
              height="1000"
              src={"/assets/services/ProductDevelopment/ChooseUs.jpg"}
              width="1000"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Thirdsection;
function RocketIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
function SettingsIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ShieldIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

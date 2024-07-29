import Link from "next/link";
import React from "react";
import Edu from "../../../../../public/assets/Industries/Edu.jpeg";
import Image from "next/image";

const page = () => {
  return (
    <div className="pt-16">
      {/* Helo Section */}
      <section>
        <div className="relative h-[90vh]">
          <img
            src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative h-[90vh] bg-gray-900 bg-opacity-55 flex items-center justify-center">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-5xl sm:text-center">
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Education Sector
                  <p className="m-6 text-base font-normal tracking-wide text-gray-100 md:text-lg">
                    The education sector is rapidly evolving through the
                    integration of digital technologies, transforming how
                    education is delivered, managed and experienced. We provide
                    expert IT solutions tailored to the specific requirements of
                    educational institutions, helping them improve the learning
                    experience, improve productivity, and ensure secure online
                    learning and it is complete. Our core services include
                    learning management systems (LMS), e-learning solutions,
                    student information systems (SIS), and online assessment and
                    proctoring.
                  </p>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="flex flex-col items-center py-14">
          <h1 className="md:text-3xl text-xl font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-MainHeading to-MainHeading text-center">
            Our Services
          </h1>
        </div>
        <div className="text-center px-8">
          <div className="flex flex-wrap items-center text-left">
            <Image
              src={Edu}
              alt="gem"
              className="w-full md:w-3/5 lg:w-1/2 p-4 inline-block rounded shadow-lg border border-merino-400"
            />
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 md:text-2xl md:mt-0 text-lg">
                Learning Management Systems (LMS)
              </h3>
              <div>
                <p className="text-lg mt-6">
                  <span>
                    <span className="font-medium">Custom LMS Development</span>:{" "}
                  </span>
                  Design and build unique LMS systems tailored to your
                  organization's needs for a seamless learning experience.
                </p>
                <p className="text-lg mt-2">
                  <span>
                    <span className="font-medium">Course Models</span>:{" "}
                  </span>
                  Easily create, manage, and deliver courses with multimedia
                  content, discussion forums, and assignment submissions.
                </p>
                <p className="text-lg mt-2">
                  <span>
                    <span className="font-medium">User Roles</span>:{" "}
                  </span>
                  Manage students, faculty, and staff with role-based access and
                  permissions.
                </p>
                <p className="text-lg mt-2">
                  <span>
                    <span className="font-medium">
                      Evaluation and Reporting
                    </span>
                    :{" "}
                  </span>
                  Comprehensive tools for monitoring progress, measuring
                  outcomes, and identifying improvement areas.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-20 text-left">
            <Image
              src={Edu}
              alt="gem"
              className="w-full md:w-3/5 lg:w-1/2 p-4 inline-block rounded shadow-lg border border-merino-400"
            />
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                E-Learning Solutions
              </h3>
              <div>
                <p className="text-lg mt-6">
                  <span>
                    <span className="font-medium">Content Creation</span>:{" "}
                  </span>
                  Develop interactive, multimedia-rich e-learning materials to
                  boost engagement and outcomes.
                </p>
                <p className="text-lg mt-2">
                  <span>
                    <span className="font-medium">Virtual Classrooms</span>:{" "}
                  </span>
                  Facilitate live lectures and real-time interaction between
                  students and teachers.
                </p>
                <p className="text-lg mt-2">
                  <span>
                    <span className="font-medium">Mobile Learning</span>:{" "}
                  </span>
                  Ensure mobile compatibility for flexible, on-the-go learning.
                </p>
                <p className="text-lg mt-2">
                  <span>
                    <span className="font-medium">Gamification</span>:{" "}
                  </span>
                  Incorporate game elements to enhance motivation and engagement
                  in learning.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-20 text-left ">
            <Image
              src={Edu}
              alt="gem"
              className="w-full md:w-3/5 lg:w-1/2 p-4 inline-block rounded shadow-lg border border-merino-400"
            />
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Student Information Systems (SIS)
              </h3>
              <div>
                <p className="text-lg mt-6">
                  <span>
                    <span className="font-medium">Student Management</span>:{" "}
                  </span>
                  Manage student admissions, enrollment, attendance, grades, and
                  transcripts.
                </p>
                <p className="text-lg mt-2">
                  <span>
                    <span className="font-medium">
                      Parent and Student Portal
                    </span>
                    :{" "}
                  </span>
                  Secure access for academic information, teacher communication,
                  and school updates.
                </p>
                <p className="text-lg mt-2">
                  <span>
                    <span className="font-medium">Automation</span>:{" "}
                  </span>
                  Streamline tasks like payments, scheduling, and reporting to
                  cut errors and reduce workload.
                </p>
                <p className="text-lg mt-2">
                  <span>
                    <span className="font-medium">System Integration</span>:{" "}
                  </span>
                  Ensure SIS works seamlessly with LMS, ERP, and financial
                  systems for a unified process.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-20 text-left">
            <Image
              src={Edu}
              alt="gem"
              className="w-full md:w-3/5 lg:w-1/2 p-4 inline-block rounded shadow-lg border border-merino-400"
            />
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Online Assessment and Proctoring
              </h3>
              <div>
                <p className="text-lg mt-6">
                  <span>
                    <span className="font-medium">
                      Secure Online Assessment
                    </span>
                    :{" "}
                  </span>
                  A reliable system for delivering various tests and quizzes
                  securely online.
                </p>
                <p className="text-lg mt-2">
                  <span>
                    <span className="font-medium">Automated Proctoring</span>:{" "}
                  </span>
                  AI technology to detect and prevent cheating, ensuring
                  academic integrity.
                </p>
                <p className="text-lg mt-2">
                  <span>
                    <span className="font-medium">
                      Advanced Reporting and Analytics
                    </span>
                    :{" "}
                  </span>
                  Tools to monitor performance, identify skill gaps, and enhance
                  teaching strategies.
                </p>
                <p className="text-lg mt-2">
                  <span>
                    <span className="font-medium">
                      Accessibility and Compliance
                    </span>
                    :{" "}
                  </span>
                  Ensures assessments are accessible to all students and meet
                  educational standards and regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="container mx-auto my-10 py-8 bg-gray-200 rounded-lg text-center">
        <h3 className="text-3xl font-bold">Partner with Us!</h3>
        <p className="m-4 px-6 text-base font-normal tracking-wide md:text-lg">
          We transform your education services with Our flagship IT solutions
          empower educational institutions to drive operational efficiencies,
          inspire innovation and deliver superior learning experiences. Contact
          us today to learn how we can help your organization thrive in a
          dynamic education environment.
        </p>
        <p className="mt-4">
          <button
            type="button"
            className=" py-1 px-5 text-lg bg-teal-500 hover:bg-teal-600 rounded text-white "
          >
            <Link href="/contact">Contact Us Now</Link>
          </button>
        </p>
      </section>
    </div>
  );
};

export default page;

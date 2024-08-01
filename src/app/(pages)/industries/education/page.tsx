import Link from "next/link";
import React from "react";
import Hero from "../../../../../public/assets/Industries/Education/Hero.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const page = () => {
  const Service = [
    {
      id: 1,
      img: "/assets/Industries/Education/Edu1.jpg",
      title: "Learning Management Systems (LMS)",
      para1: "Custom LMS Development",
      Des1: "Design and build unique LMS systems tailored to your organization's needs for a seamless learning experience.",
      para2: "Course Models",
      Des2: "Easily create, manage, and deliver courses with multimedia content, discussion forums, and assignment submissions.",
      para3: "User Roles",
      Des3: "Manage students, faculty, and staff with role-based access and permissions.",
      para4: "Evaluation and Reporting",
      Des4: "Comprehensive tools for monitoring progress, measuring outcomes, and identifying improvement areas.",
      className_sec1: "order-1",
      className_sec2: "order-2",
    },
    {
      id: 2,
      img: "/assets/Industries/Education/Edu2.jpg",
      title: "E-Learning Solutions",
      para1: "Content Creation",
      Des1: " Develop interactive, multimedia-rich e-learning materials to boost engagement and outcomes.",
      para2: "Virtual Classrooms",
      Des2: "Facilitate live lectures and real-time interaction between students and teachers.",
      para3: "Mobile Learning",
      Des3: "Ensure mobile compatibility for flexible, on-the-go learning.",
      para4: "Gamification",
      Des4: "Incorporate game elements to enhance motivation and engagement in learning.",
      className_sec1: "md:order-2 order-1",
      className_sec2: "md:order-1 order-2",
    },
    {
      id: 3,
      img: "/assets/Industries/Education/Edu3.jpg",
      title: "Student Information Systems (SIS)",
      para1: "Student Management",
      Des1: "Manage student admissions, enrollment, attendance, grades, and transcripts.",
      para2: "Parent and Student Portal",
      Des2: "Secure access for academic information, teacher communication, and school updates.",
      para3: "Automation",
      Des3: "Streamline tasks like payments, scheduling, and reporting to cut errors and reduce workload.",
      para4: "System Integration",
      Des4: "Ensure SIS works seamlessly with LMS, ERP, and financial systems for a unified process.",
      className_sec1: "order-1",
      className_sec2: "order-2",
    },
    {
      id: 4,
      img: "/assets/Industries/Education/education.jpg",
      title: "Online Assessment and Proctoring",
      para1: "Secure Online Assessment",
      Des1: "A reliable system for delivering various tests and quizzes securely online.",
      para2: "Automated Proctoring",
      Des2: "AI technology to detect and prevent cheating, ensuring academic integrity.",
      para3: "Advanced Reporting and Analytics",
      Des3: "Tools to monitor performance, identify skill gaps, and enhance teaching strategies.",
      para4: "Accessibility and Compliance",
      Des4: "Ensures assessments are accessible to all students and meet educational standards and regulations.",
      className_sec1: "md:order-2 order-1",
      className_sec2: "md:order-1 order-2",
    },
  ];

  return (
    <div className="md:pt-16 pt-14">
      {/* Hero Section */}
      <section>
        <div className="relative md:h-[90vh] h-[70vh]">
          <Image
            src={Hero}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative md:h-[90vh] h-[70vh] bg-gray-900 bg-opacity-55 flex items-center justify-center">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-5xl sm:text-center">
                <h2 className="mb-6 md:text-5xl text-3xl font-extrabold text-center tracking-tight text-white sm:text-4xl sm:leading-none">
                  Education Sector
                  <p className="md:m-6 py-3 md:text-xl text-lg font-normal tracking-wide text-gray-100">
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
        <div className="flex flex-col items-center md:py-6 py-4">
          <h1 className="font-extrabold text-MainHeading text-center">
            Our Services
          </h1>
          <p className="text-SubHeading mt-2 font-bold px-4 text-center max-w-5xl">
            Empowering Education Through Innovation: Tailored IT Solutions for a
            Smarter Learning Experience.
          </p>
        </div>
        <div className="text-center md:px-8 px-6">
          {Service.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center text-left"
            >
              <div
                className={`w-full md:w-1/2 md:p-4 object-cover rounded-xl ${item.className_sec1}`}
              >
                <Image
                  src={item.img}
                  width={800}
                  height={800}
                  alt="gem"
                  className="p-4 inline-block rounded-xl shadow-lg border border-merino-400"
                />
              </div>

              <div
                className={`w-full md:w-2/5 lg:w-1/2 md:px-4 md:py-0 py-5 lg:pl-12 ${item.className_sec2}`}
              >
                <h3 className="font-extrabold mt-4 md:text-2xl md:mt-0 text-xl text-center">
                  {item.title}
                </h3>
                <div className=" text-left">
                  <p className="text-lg mt-6">
                    <span>
                      <span className="font-semibold">{item.para1}</span>:{" "}
                    </span>
                    {item.Des1}
                  </p>
                  <p className="text-lg mt-2">
                    <span>
                      <span className="font-semibold">{item.para2}</span>:{" "}
                    </span>
                    {item.Des2}
                  </p>
                  <p className="text-lg mt-2">
                    <span>
                      <span className="font-semibold">{item.para3}</span>:{" "}
                    </span>
                    {item.Des3}
                  </p>
                  <p className="text-lg mt-2">
                    <span>
                      <span className="font-semibold">{item.para4}</span>:{" "}
                    </span>
                    {item.Des4}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner */}
      <section className="md:m-3">
        <div className="mx-auto my-10 md:py-8 py-6 bg-gray-200 rounded-lg text-center">
          <h3 className="font-extrabold text-MainHeading text-center md:py-0 py-3">
            Partner with Us!
          </h3>
          <p className="md:m-4 px-6 text-base font-normal tracking-wide md:text-lg">
            We transform your education services with Our flagship IT solutions
            empower educational institutions to drive operational efficiencies,
            inspire innovation and deliver superior learning experiences.
            Contact us today to learn how we can help your organization thrive
            in a dynamic education environment.
          </p>
          <p className="mt-4 flex md:gap-4 gap-2 justify-center items-center flex-wrap">
            <Link href="/contact">
              <Button data-aos="fade-left">Contact us</Button>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;

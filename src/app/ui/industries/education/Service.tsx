import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

const Service = () => {

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
    <>
        <section>
        <motion.div className="flex flex-col items-center md:py-6 py-4">
          <h1 className="font-extrabold text-MainHeading text-center">
            Our Services
          </h1>
          <p className="text-SubHeading mt-2 font-bold px-4 text-center max-w-5xl">
            Empowering Education Through Innovation: Tailored IT Solutions for a
            Smarter Learning Experience.
          </p>
        </motion.div>
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
                <motion.h3
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }}
                 className="font-extrabold mt-4 md:text-2xl md:mt-0 text-xl text-center">
                  {item.title}
                </motion.h3>
                <div className=" text-left">
                  <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }}
                   className="text-lg mt-6">
                    <span>
                      <span className="font-semibold">{item.para1}</span>:{" "}
                    </span>
                    {item.Des1}
                  </motion.p>
                  <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }}
                   className="text-lg mt-2">
                    <span>
                      <span className="font-semibold">{item.para2}</span>:{" "}
                    </span>
                    {item.Des2}
                  </motion.p>
                  <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }} className="text-lg mt-2">
                    <span>
                      <span className="font-semibold">{item.para3}</span>:{" "}
                    </span>
                    {item.Des3}
                  </motion.p>
                  <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }} className="text-lg mt-2">
                    <span>
                      <span className="font-semibold">{item.para4}</span>:{" "}
                    </span>
                    {item.Des4}
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Service

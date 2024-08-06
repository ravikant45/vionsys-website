interface EducationServices {
    id: number;
    img: string;
    title: string;
    para1: string;
    Des1: string;
    para2: string;
    Des2: string;
    para3: string;
    Des3: string;
    para4: string;
    Des4: string;
    className_sec1: string;
    className_sec2: string;
  }

const service: EducationServices[] = [
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
      img: "/assets/Industries/Education/Edu2.jpeg",
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

  export { service }
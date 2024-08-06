// servicesData.ts

interface ServiceData {
  subheading: string;
  imageSrc: string;
  features: Feature[];
}

interface Feature {
  number: number;
  title: string;
  description: string;
}

const telecomData: ServiceData[] = [
  {
    subheading: "Network Infrastructure and Management",
    imageSrc: "/assets/Industries/Telecom/TelecomContent1.jpeg",

    features: [
      {
        number: 1,
        title: "Market Research and Analysis",
        description:
          "Identify your target audience and understand their needs, preferences, and behaviors.",
      },
      {
        number: 2,
        title: "Market Research and Analysis",
        description:
          "Identify your target audience and understand their needs, preferences, and behaviors.",
      },
      {
        number: 3,
        title: "Market Research and Analysis",
        description:
          "Identify your target audience and understand their needs, preferences, and behaviors.",
      },
    ],
  },

  {
    subheading: "Cloud and Data Center Solutions",
    imageSrc: "/assets/Industries/Telecom/TelecomContent2.jpeg",

    features: [
      {
        number: 1,
        title: "Cloud Strategy and Migration:",
        description:
          "Develop cloud strategies and manage the migration of telecom applications and data to cloud environments to increase scalability and flexibility.",
      },
      {
        number: 2,
        title: "Hybrid and Multi-Cloud Solutions:",
        description:
          "To leverage hybrid and multi-cloud solutions to optimize performance, cost and security across multiple cloud platforms.",
      },
      {
        number: 3,
        title: "Data Center Management:",
        description:
          "To provide data center management services to ensure efficiency, security and reliability.",
      },
    ],
  },

  {
    subheading: "Customer Experience Management",
    imageSrc: "/assets/Industries/Telecom/TelecomContent3.jpeg",

    features: [
      {
        number: 1,
        title: "CRM system:",
        description:
          "Develop and integrate customer relationship management (CRM) systems to improve customer engagement and streamline service delivery.",
      },
      {
        number: 2,
        title: "Customer Analytics:",
        description:
          "The use of data analytics to gain insights into customer behavior and preferences, allowing for personalized service and improved customer satisfaction.",
      },
      {
        number: 3,
        title: "All-Channel Support:",
        description:
          "Implemented an all-channel support solution to provide seamless customer service across multiple channels, including phone, email chat and social media.",
      },
    ],
  },

  {
    subheading: "Cybersecurity Solutions",
    imageSrc: "/assets/Industries/Telecom/TelecomContent4.jpeg",

    features: [
      {
        number: 1,
        title: "Threat detection and response:",
        description:
          "Implementing a comprehensive cybersecurity framework to protect telecommunications networks and data from cyber threats and attacks.",
      },
      {
        number: 2,
        title: "Identity and Access Management (IAM):",
        description:
          "Implementing IAM solutions to ensure secure and controlled access to critical systems and data.",
      },
      {
        number: 3,
        title: "Safety Audits and Compliance:",
        description:
          "Conduct comprehensive safety audits and ensure compliance with industry regulations and standards.",
      },
    ],
  },

  {
    subheading: "IoT and Smart Solutions",
    imageSrc: "/assets/Industries/Telecom/TelecomContent5.png",

    features: [
      {
        number: 1,
        title: "IoT Connectivity:",
        description:
          "Enables IoT connectivity solutions to support intelligent devices and applications, improve operational efficiency and generate additional revenue.",
      },
      {
        number: 2,
        title: "Smart Cities: ",
        description:
          "The development and implementation of smart city solutions using IoT technology to improve urban living, including smart grids, intelligent transportation and public safety.",
      },
      {
        number: 3,
        title: "IoT Security:",
        description:
          "Implement robust security measures to protect IoT networks and devices from cyber threats.",
      },
    ],
  },

  {
    subheading: "Digital Transformation",
    imageSrc: "/assets/Industries/Telecom/TelecomContent6.jpeg",

    features: [
      {
        number: 1,
        title: "Automation and AI:",
        description:
          "Integrating automation and artificial intelligence (AI) technologies to streamline operations, improve decision-making and reduce costs.",
      },
      {
        number: 2,
        title: "Big data and analytics:",
        description:
          "Using big data analytics to provide insights, improve network performance, and improve customer experience.",
      },
      {
        number: 3,
        title: "Blockchain Technology:",
        description:
          "Exploring blockchain technology for secure, transparent transactions and secure management of digital identities and data",
      },
    ],
  },

  {
    subheading: "Managed Services",
    imageSrc: "/assets/Industries/Telecom/TelecomContent7.png",

    features: [
      {
        number: 1,
        title: "IT Support and Maintenance:",
        description:
          "To provide comprehensive IT support and maintenance to ensure the smooth running of telecommunications systems.",
      },
      {
        number: 2,
        title: "    Outsourcing Solutions:",
        description:
          "Provides managed IT services and outsourcing solutions for telecom organizations to reduce operating costs and focus on core business activities.",
      },
      {
        number: 3,
        title: "Disaster Recovery and Business Continuity:",
        description:
          "Implemented aggressive disaster recovery and business continuity measures to reduce downtime and maintain service flexibility.",
      },
    ],
  },
];

export default telecomData;

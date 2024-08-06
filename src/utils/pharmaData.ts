export interface Feature {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  imageSrc: string;
  features: Feature[];
}

export const pharmaData: Service[] = [
  {
    title: "Supervision of Clinical Trials",
    imageSrc: "/assets/Industries/Pharma/PharmaContent1.jpg",
    features: [
      {
        title: "Clinical Data Management:",
        description:
          "Implement a robust management system to safely and effectively manage large amounts of clinical trial data.",
      },
      {
        title: "Electronic Data Capture (EDC):",
        description:
          "EDC systems used to facilitate the collection and management of clinical trial data.",
      },
      {
        title: "Test Management Solutions:",
        description:
          "Provide end-to-end test management solutions that improve communication, tracking and reporting throughout the test lifecycle.",
      },
    ],
  },
  {
    title: "Research and Development (R&D):",
    imageSrc: "/assets/Industries/Pharma/PharmaContent2.jpg",
    features: [
      {
        title: "Laboratory Information Management Systems (LIMS):",
        description:
          "Use of LIMS to improve data management, specimen tracking, and compliance in research laboratories.",
      },
      {
        title: "Data Analytics and AI:",
        description:
          "Using Data Analytics and Artificial Intelligence to Accelerate Drug Discovery, Improve Outcomes, and Enhance Research.",
      },
      {
        title: "Implementation:",
        description:
          "Implementing improvements to streamline the work of researchers, improve communication and innovation.",
      },
    ],
  },
  {
    title: "Supply Chain Management",
    imageSrc: "/assets/Industries/Pharma/PharmaContent3.jpg",
    features: [
      {
        title: "Inventory Management:",
        description:
          "Implement advanced inventory management to optimize inventory levels, reduce waste, and ensure availability of raw materials and finished goods at in due course of time.",
      },
      {
        title: "Logistics Optimization: ",
        description:
          "The use of technology to optimize logistics, reduce costs and improve delivery times.",
      },
      {
        title: "Track and Trace Solutions:",
        description:
          "Develops track and trace systems to monitor processes throughout the supply chain, ensuring transparency and compliance.",
      },
    ],
  },
  {
    title: "Patient engagement and support",
    imageSrc: "/assets/Industries/Pharma/PharmaContent4.jpg",
    features: [
      {
        title: "Patient access:",
        description:
          "Creating safe patient access to improve communication, access medical information, and improve patient engagement.",
      },
      {
        title: "Telemedicine solutions: ",
        description:
          "Using telemedicine platforms to facilitate remote consultations, improving access to care and patient convenience.",
      },
      {
        title: "Mobile Health Applications:",
        description:
          "Building mobile health applications to support patient care, deliver educational resources, and enable remote monitoring.",
      },
    ],
  },
  {
    title: "Data Protection and Privacy",
    imageSrc: "/assets/Industries/Pharma/PharmaContent5.jpg",
    features: [
      {
        title: "HIPAA Compliance:",
        description:
          "Ensure all systems and processes are compliant with HIPAA and other relevant data privacy regulations.",
      },
      {
        title: "Data privacy:",
        description:
          "Use advanced encryption technologies to protect sensitive patient and research data.",
      },
      {
        title: "Cybersecurity solutions: ",
        description:
          "Implementing a comprehensive cybersecurity strategy to protect against data breaches and cyber threats.",
      },
    ],
  },
];

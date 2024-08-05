interface Point {
    heading: string;
    description: string;
  }
  
  interface Service {
    title: string;
    image: string;
    points: Point[];
  }
  
  export  const InsuranceServices: Service[] = [
    {
      title: "Risk Management",
      image: "/assets/Industries/insuranceSector/RiskManagement.jpg",
      points: [
        {
          heading: "Comprehensive Risk Analysis",
          description: "Modern analytics and machine learning are used to effectively assess and predict risks",
        },
        {
          heading: "Risk reduction strategies",
          description: "Plan to improve decision-making processes to mitigate and manage potential risks",
        },
        {
          heading: "Compliance",
          description: "Implement automated compliance and reporting systems, ensuring compliance with local and global regulations",
        },
        {
          heading: "Real-time risk management",
          description: "Providing tools to continuously assess and manage risks across the enterprise",
        },
      ],
    },
    {
      title: "Fraud Detection",
      image: "/assets/Industries/insuranceSector/FraudeImage.jpg",
      points: [
        {
          heading: "Advanced Analytics",
          description: "Using big data analytics to identify telling patterns and anomalies in fraudulent activity",
        },
        {
          heading: "Machine Learning Models",
          description: "When machine learning algorithms are used to evolve and improve over time, the accuracy of fraud detection increases",
        },
        {
          heading: "Real-time alerts",
          description: "Automated compliance and reporting systems ensure adherence to regulations.",
        },
        {
          heading: "Detailed Reporting",
          description: "Implement a real-time alarm system that notifies key stakeholders as soon as suspicious activity is detected",
        },
      ],
    },{
      title: "Data Management and Analytics",
      image: "/assets/Industries/insuranceSector/DataManagement.jpg",
      points: [
        {
          heading: "Data warehousing",
          description: "Designing robust data warehousing solutions to efficiently generate and manage large amounts of ubiquitous data",
        },
        {
          heading: "Data Governance",
          description: "Developing systems to ensure data quality, integrity and security",
        },
        {
          heading: "Predictive Analytics",
          description: "Predictive analytics is used to predict trends, identify potential threats, and make informed decisions",
        },
        {
          heading: "Business intelligence ",
          description: "Providing BI solutions for real-time insights into business performance, customer behavior and market trends",
        },
      ],
    },{
      title:"Customer Insights",
      image: "/assets/Industries/insuranceSector/CoustemersInsights.jpg",
      points: [
        {
          heading: "CRM system",
          description: "Implementing a modern CRM system to better manage customer interactions, increase engagement and improve service delivery",
        },
        {
          heading: "Customer Research",
          description: "The process of analyzing customer data to gain deeper insights into their behaviors, interests, and needs, allowing for more personalized service delivery",
        },
        {
          heading: "Omni-Channel Support",
          description: "Provide omni-channel support solutions that ensure consistent customer service across multiple channels such as phone, email, chat, and social media",
        },
        {
          heading: "Customer Journey Mapping",
          description: "Creating a comprehensive customer journey map to identify problems and potential areas for improvement",
        },
      ],
    },{
      title: "Cloud Services",
      image: "/assets/Industries/insuranceSector/CloudServices.jpg",
      points: [
        {
          heading: "Cloud Strategy and Migration",
          description: "Develop comprehensive cloud strategies and manage migration of insurance applications and data to cloud environments to increase scalability and flexibility",
        },
        {
          heading: "Hybrid and Multi-Cloud Solutions",
          description: "To implement hybrid and multi-cloud solutions to improve performance, cost and security across multiple cloud platforms",
        },
        {
          heading: "Cloud security",
          description: "Implement strong cloud security measures to protect sensitive data and meet regulatory standards",
        },
        {
          heading: "Cloud Infrastructure Management",
          description: "Provision of comprehensive cloud infrastructure management services to ensure efficiency, security and reliability",
        },
      ],
    },
  ];
  
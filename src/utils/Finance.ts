interface Finance {
    id: number;
    heading: string;
    subheading1: string;
    para1: string;
    subheading2: string;
    para2: string;
    subheading3: string;
    para3: string;
}

const Finances:Finance[] = [
    {
        id: 1,
        heading: "Core Banking Solutions",
        subheading1: "Integrated development",
        para1: "Development and integration of key banking systems that facilitate operations, improve efficiency and improve service delivery.",
        subheading2: "Mobile and Internet Banking",
        para2: "To develop secure and easy-to-use mobile and online banking solutions to provide consumers with convenient access to financial services.",
        subheading3: "Payment Systems",
        para3: "Implement robust payment processing systems that support a variety of services, including real-time payments, cross-border transactions and digital wallets."
    }, 
    {
        id: 2,
        heading: "Risk Management and Compliance",
        subheading1: "Regulatory Compliance",
        para1: "Ensure that local and international regulatory requirements are met through automated compliance solutions.",
        subheading2: "Fraud Detection and Prevention",
        para2: "Use advanced analytics and machine learning to detect and prevent fraudulent activities, protecting financial assets.",
        subheading3: "Risk assessment tools",
        para3: "Developing comprehensive risk assessment and management tools, to help organizations effectively mitigate potential risks."
    }, 
    {
        id: 3,
        heading: "Data Analytics and Business Intelligence",
        subheading1: "Predictive Analytics",
        para1: "Enables proactive decision making through the use of predictive analytics to anticipate market trends, customer behavior and financial risk.",
        subheading2: "Customer insights",
        para2: "Using data analytics to gain deeper insights into customer preferences and behaviors, allowing for personalized service delivery.",
        subheading3: "Performance Analytics",
        para3: "The use of business intelligence solutions that provide real-time insights into organizational performance and productivity."
    }, 
    {
        id: 4,
        heading: "Cybersecurity Solutions",
        subheading1: "Threat Management",
        para1: "Implementing a comprehensive cyber security strategy to protect sensitive financial information from cyber threats and attacks.",
        subheading2: "Identity and Access Management (IAM)",
        para2: "An IAM solution was implemented to ensure secure and controlled access to critical systems and data.",
        subheading3: "Security Audit",
        para3: "Performing a comprehensive security audit to identify vulnerabilities and implement necessary improvements."
    }, 
    {
        id: 5,
        heading: "Digital Transformation and Innovation",
        subheading1: "Blockchain technology",
        para1: "The quest for blockchain solutions for secure and transparent transactions, smart contracts, and improved data integrity.",
        subheading2: "Artificial Intelligence (AI) and Machine Learning (ML)",
        para2: "Integrating AI and ML technologies to automate manufacturing processes, improve decision-making, and improve customer experience.",
        subheading3: "Robotic Process Automation (RPA)",
        para3: "Using RPA to automate routine tasks, reduce operating costs, and increase productivity."
    }, 
    {
        id: 6,
        heading: "Customer Relationship Management",
        subheading1: "CRM Systems",
        para1: "To integrate CRM systems that help financial institutions manage customer relationships effectively and improve customer satisfaction.",
        subheading2: "Customer engagement",
        para2: "Using advanced CRM tools to increase customer engagement through personalized communications and services.",
        subheading3: "Marketing Automation",
        para3: "Use marketing automation solutions to streamline marketing campaigns and manage customer interactions."
    }
]
export {Finances};
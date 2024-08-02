interface Solution {
    id: number;
    heading: string;
    subheading1: string;
    para1: string;
    subheading2: string;
    para2: string;
    subheading3: string;
    para3: string;
    subheading4: string;
    para4: string;
}

const Solutions:Solution[] = [
    {
        id: 1,
        heading: "Healthcare Cloud Solutions",
        subheading1: "Cloud Strategy and Migration",
        para1: "Develop comprehensive cloud strategies and manage the transition to a healthcare app and data cloud environment to improve scalability and flexibility.",
        subheading2: "Implementing hybrid and multi-cloud solutions",
        para2: "To improve performance, cost and security across multiple cloud platforms.",
        subheading3: "Cloud-based data storage",
        para3: "We provide secure and compliant cloud storage solutions to ensure patient data is securely managed and accessible.",
        subheading4: "Disaster Recovery and Business Continuity",
        para4: "Implemented aggressive disaster recovery and business continuity measures to reduce downtime and maintain service flexibility."
    }, 
    {
        id: 2,
        heading: "Electronic Health Records (EHR) Systems",
        subheading1: "EHR Implementation",
        para1: "Develop and implement a comprehensive EHR system to improve patient information management and care coordination.",
        subheading2: "Connectivity Solutions",
        para2: "Ensure seamless integration and data communication between EHR systems and other healthcare applications.",
        subheading3: "Patient Portal Development",
        para3: "Create a secure patient portal that allows patients to view their health history, schedule appointments and communicate with health care providers.",
        subheading4: "Compliance and Reporting",
        para4: "Ensure EHR systems comply with HIPAA and other regulatory requirements as well as support accurate reporting of care quality and reimbursement."
    }, 
    {
        id: 3,
        heading: "Data Management and Analytics",
        subheading1: "Healthcare Data Warehouse",
        para1: "Building a robust data warehouse solution to efficiently integrate and manage large amounts of healthcare data.",
        subheading2: "Predictive analytics",
        para2: "Predictive analytics is used to identify trends, predict patient outcomes, and inform clinical decisions.",
        subheading3: "Clinical Decision Support System",
        para3: "Using a CDSS to provide evidence-based treatment guidelines and recommendations to healthcare professionals.",
        subheading4: "Business Intelligence Solutions",
        para4: "We provide BI solutions that provide real-time insights into business performance, patient care, and financial data."
    }, 
    {
        id: 4,
        heading: "Cybersecurity Solutions",
        subheading1: "Advanced Threat Protection",
        para1: "Implementing advanced cybersecurity techniques to protect sensitive healthcare information from cyber threats and attacks.",
        subheading2: "Identity and Access Management",
        para2: "Establishing IAM solutions to enable secure and authorized access to healthcare and sensitive data.",
        subheading3: "Compliance and Risk Management",
        para3: "Ensure compliance with HIPAA and other industry standards and standards, as well as completion of rigorous security risk assessments.",
        subheading4: "Data Encryption and Secure Transactions",
        para4: "Ensuring data privacy and secure practices is essential to protecting patient information and maintaining trust."
    }, 
    {
        id: 5,
        heading: "Telemedicine Solutions",
        subheading1: "Telehealth Platform Development",
        para1: "Building telehealth platforms that enable remote access, diagnosis and treatment.",
        subheading2: "Integrating EHR systems",
        para2: "Ensure that telemedicine solutions integrate seamlessly with existing EHR systems, enabling effective information sharing and collaboration.",
        subheading3: "Video conferencing and communication solutions",
        para3: "Implement secure and reliable video conferencing and communication solutions to improve patient-provider communication.",
        subheading4: "Remote Disease Management",
        para4: "To develop a remote disease management solution that tracks patient health information in real time and provides timely intervention."
    }
]
export {Solutions};
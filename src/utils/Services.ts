interface Service {
    id: number;
    img: string;
    heading: string;
    subheading1: string;
    para1: string;
    subheading2: string;
    para2: string;
    subheading3: string;
    para3: string;
    className1: string;
    className2: string;
}

const Services:Service[] = [
    {
        id: 1,
        img: "/assets/Industries/construction/Project Management Solutions.jpg",
        heading: "Project Management Solutions",
        subheading1: "Integrated Project Management Software",
        para1: "A comprehensive project management software for planning, executing, and managing construction projects.",
        subheading2: "Distribution and scheduling",
        para2: "Utilize advanced tools to optimize distribution, track progress, and ensure timely completion.",
        subheading3: "Discussion forums",
        para3: "Developing discussion channels to facilitate communication and communication between project stakeholders.",
        className1: "order-1",
        className2: "order-2"
    }, {
        id: 2,
        img: "/assets/Industries/construction/Building Information Modeling (BIM).jpg",
        heading: "Building Information Modeling (BIM)",
        subheading1: "BIM Implementation",
        para1: "Support the adoption and integration of BIM technology to improve design, construction, and operational processes.",
        subheading2: "3D Modeling and Visualization",
        para2: "Create detailed 3D models to visualize projects and identify potential issues before construction begins.",
        subheading3: "Data Management",
        para3: "Organize and maintain BIM data to ensure accuracy and availability throughout the project lifecycle.",
        className1: "order-1 md:order-2",
        className2: "order-2 md:order-1"
    }, {
        id: 3,
        img: "/assets/Industries/construction/Mobile solutions for field personnel.jpg",
        heading: "Field Service Management",
        subheading1: "Mobile solutions for field personnel",
        para1: "Develop mobile applications that allow field personnel to access project information, report progress, and communicate with the facility in real time.",
        subheading2: "Property and Equipment Management",
        para2: "Implements a system for tracking and managing construction equipment and property, assuring proper use and maintenance.",
        subheading3: "Business process management",
        para3: "The process of automating business processes to increase productivity and reduce operating costs.",
        className1: "order-1",
        className2: "order-2"
    }, {
        id: 4,
        img: "/assets/Industries/construction/Smart site management.jpg",
        heading: "IoT and Smart Construction",
        subheading1: "IoT integration",
        para1: "The use of IoT devices and sensors to monitor construction sites, equipment, and environmental conditions in real time.",
        subheading2: "Smart site management",
        para2: "Using smart technology to improve site safety, track employee performance, and monitor energy consumption.",
        subheading3: "Predictive maintenance",
        para3: "Predictive maintenance systems will be used to identify potential equipment failures and schedule repairs in a timely manner.",
        className1: "order-1 md:order-2",
        className2: "order-2 md:order-1"
    }, {
        id: 5,
        img: "/assets/Industries/construction/Cloud Services.jpg",
        heading: "Cloud Services",
        subheading1: "Cloud-based Project Management",
        para1: "Provides cloud-based project management solutions that allow users to access project data from anywhere, anytime.",
        subheading2: "Data Storage and Backup",
        para2: "We provide secure cloud storage solutions to protect project data and maintain business continuity.",
        subheading3: "Scalability and Flexibility",
        para3: "Using scalable cloud solutions that can expand with your organization and adapt to changing business requirements.",
        className1: "order-1",
        className2: "order-2"
    }, {
        id: 6,
        img: "/assets/Industries/construction/Data Analytics and Business Intelligence.jpg",
        heading: "Data Analytics and Business Intelligence",
        subheading1: "Project Performance Analysis",
        para1: "Use data analytics to track project progress, identify challenges, and improve implementation.",
        subheading2: "Cost and Control",
        para2: "Using analytics to improve the accuracy of cost estimates and keep costs in check.",
        subheading3: "Business Intelligence (BI) solutions",
        para3: "BI solutions that provide real-time insights into business data, allowing you to make more educated decisions.",
        className1: "order-1 md:order-2",
        className2: "order-2 md:order-1"
    }, {
        id: 7,
        img: "/assets/Industries/construction/Security and Compliance.jpg",
        heading: "Security and Compliance",
        subheading1: "Cybersecurity Measures",
        para1: "Implementing robust cybersecurity solutions to protect sensitive business information and remain in compliance with industry regulations.",
        subheading2: "Data Encryption and Secure Access",
        para2: "Ensure project management systems and applications are encrypted and accessible securely.",
        subheading3: "Regulatory Compliance",
        para3: "Assistance with safety, environmental and technical compliance requirements.",
        className1: "order-1",
        className2: "order-2"
    }, {
        id: 8,
        img: "/assets/Industries/construction/Inventory Management.jpg",
        heading: "Supply Chain Management",
        subheading1: "Procurement solutions",
        para1: "The use of procurement strategies to optimize the acquisition and purchase of goods and services.",
        subheading2: "Inventory Management",
        para2: "Uses systems to track consumption, prevent waste, and ensure timely availability.",
        subheading3: "Vendor collaboration",
        para3: "Creating areas for improved communication and collaboration between suppliers and subcontractors.",
        className1: "order-1 md:order-2",
        className2: "order-2 md:order-1"
    }
]
export {Services};
import { StaticImageData } from "next/image";

type Faq = {
    qid: number;
    question: string;
    answer: string;
};

type Card = {
    title: string;
    message: string;
    image: StaticImageData; // Path to image
};

export type BiAndAnalyticsDataType = {
    mainTitle: string;
    subTitle: string;
    secondSectionImage: StaticImageData; // Path to image
    secondTitle: string;
    secondSubTitle: string;
    cardsTitle: string;
    cards: Card[];
    faqs: Faq[];
};

import BigDataCollectionImage from "../../../../../public/assets/services/BigData/DataCollection.jpg";
import DataQualityImage from "../../../../..//public/assets/services/BigData/qualityAssurance.jpg";
import DataScalabilityImage from "../../../../../public/assets/services/BigData/qualityScalability.jpg";
import DataAnalyticalImage from "../../../../../public/assets/services/BigData/dataAnalysis.jpg";
import DataInsightsImage from "../../../../../public/assets/services/BigData/dataInsights.jpg";
import DataVisualizationImage from "../../../../../public/assets/services/BigData/visualization.jpg";
import DataCiAndCdImage from "../../../../../public/assets/services/BigData/devOps.jpg";

export const BigData: BiAndAnalyticsDataType = {
    mainTitle: "Big Data Analytics",
    subTitle: "Explore the power of our Big Data Analytics service, which is optimized to turn random data into actionable insights. With our tailored methodology, we seamlessly integrate data collecting, analytics, and visualization to find hidden potential for growth within your firm. Our customized solutions empower businesses to maximize efficiency and navigate the path to ongoing success in today’s ever-changing landscape.",
    secondSectionImage: BigDataCollectionImage,
    secondTitle: "Unveiling Insights with Big Data Analytics",
    secondSubTitle: "Building a rich data ecosystem, our approach to collecting and integrating data is a careful orchestration of collecting and reconciling data sets from myriad sources Through systematic access, organization and standardization and we ensure not only exact consistency but seamless fusion. Integrating these types of data enables organizations to gain a comprehensive view of their operations, customer behavior and market dynamics This holistic approach is the cornerstone of, and provides, informed decision making and strategic planning businesses move to faster and future-ready processes.",
    cardsTitle: "benefits in our big data analytics service spectrum",
    cards: [
        {
            title: "Data Quality Assurance",
            message: "Prioritize accurate, complete and relevant data to provide reliable insights.",
            image: DataQualityImage
        },
        {
            title: "Scalability",
            message: "Select tools and services that can handle the project’s increasing data volumes and increase processing requirements.",
            image: DataScalabilityImage
        },
        {
            title: "Advanced Research Methods",
            message: "Use machine learning and predictive analytics to unlock deep insights in the data.",
            image: DataAnalyticalImage
        },
        {
            title: "Applicable search",
            message: "Translate analytical findings into tangible strategies and decisions that benefit the organization.",
            image: DataInsightsImage
        },
        {
            title: "Effective Graphic Design",
            message: "Communicate insights through data visualization techniques, contributing to understanding and decision-making across the organization.",
            image: DataVisualizationImage
        },
        {
            title: "Integration and Development",
            message: "Implement practices to ensure smooth data operations and adapt to changing business needs and data environments.",
            image: DataCiAndCdImage
        }
    ],
    faqs: [
        {
            qid: 1,
            question: "What is Big Data Analytics, and How Does It Benefit Businesses?",
            answer: "Big Data Analytics involves analyzing large and varied datasets to uncover insights. It benefits businesses by informing decision-making, identifying trends, optimizing operations and enhancing customer experiences."
        },
        {
            qid: 2,
            question: "What Types of Data Sources Can be Analyzed in Big Data Analytics?",
            answer: "Big Data Analytics can analyze structured, semi-structured, and unstructured data including databases, spreadsheets, text documents, social media posts, images, videos, IoT devices and sensors."
        },
        {
            qid: 3,
            question: "What Tools and Technologies are Used in Big Data Analytics?",
            answer: "Tools and technologies include programming languages like Python, R and SQL, platforms like Hadoop and Apache Spark for distributed computing, machine learning frameworks like TensorFlow and visualization tools such as Tableau and Power BI."
        },
        {
            qid: 4,
            question: "How Does Big Data Analytics Ensure Data Security and Privacy?",
            answer: "Big Data Analytics employs encryption, access controls, anonymization and compliance with data protection regulations like GDPR and CCPA. Secure data storage and transmission practices are also implemented."
        },
        {
            qid: 5,
            question: "What Challenges are Associated with Big Data Analytics Implementation?",
            answer: "Challenges include managing large data volumes, ensuring data quality, integrating disparate data sources, selecting analytical techniques, addressing security and privacy concerns, talent acquisition, training and cultural adoption of data-driven decision-making."
        }
    ]
}
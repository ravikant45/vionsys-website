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
    subTitle: "Discover the power of our Big Data Analytics services, meticulously designed to transform raw data into actionable insights. With our tailored approach, we seamlessly integrate data collection, analysis and visualization, unveiling hidden opportunities for growth within your organization. Our bespoke solutions empower businesses to optimize operations and navigate towards sustained success in today's ever-evolving landscape.",
    secondSectionImage: BigDataCollectionImage,
    secondTitle: "Unveiling Insights with Big Data Analytics",
    secondSubTitle: "Cultivating a rich data ecosystem, our approach to data collection and integration is a meticulous orchestration of gathering and harmonizing diverse datasets from a myriad of sources. Through a systematic process of acquisition, organization and standardization, we ensure not just consistency and accuracy but a seamless fusion that illuminates insights previously hidden in the data's complexity. By integrating these disparate datasets, organizations are empowered with a panoramic view of their operations, customer behaviors and market dynamics. This holistic perspective becomes the cornerstone for informed decision-making and strategic planning, propelling businesses towards agile and future-ready strategies.",
    cardsTitle: "benefits in our big data analytics service spectrum",
    cards: [
        {
            title: "Data Quality Assurance",
            message: "Prioritize accuracy, completeness and relevance of data for generating reliable insights.",
            image: DataQualityImage
        },
        {
            title: "Scalability",
            message: "Choose tools and infrastructure capable of handling large data volumes and increasing processing demands as the business grows.",
            image: DataScalabilityImage
        },
        {
            title: "Advanced Analytical Techniques",
            message: "Utilize machine learning and predictive analytics to uncover deep insights within the data.",
            image: DataAnalyticalImage
        },
        {
            title: "Actionable Insights",
            message: " Translate analysis findings into tangible strategies and decisions that benefit the organization.",
            image: DataInsightsImage
        },
        {
            title: "Effective Visualization",
            message: "Communicate insights through data visualization techniques, aiding understanding and decision-making across the organization.",
            image: DataVisualizationImage
        },
        {
            title: "Integration and Development",
            message: "Implement practices to ensure smooth data workflows and adaptability to changing business needs and data environments.",
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
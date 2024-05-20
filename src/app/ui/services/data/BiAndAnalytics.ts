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

import { StaticImageData } from "next/image";
import DataCollectionImage from "../../../../../public/assets/services/AIBigDataAnalysisBi/BiAndAnalytics.jpg";
import DataDrivenImage from "../../../../../public/assets/services/AIBigDataAnalysisBi/dataDrivenDecision.jpg";
import OperationalEfficency from "../../../../../public/assets/services/AIBigDataAnalysisBi/operationalEfficency.jpg";
import PerformanceMonitoring from "../../../../../public/assets/services/AIBigDataAnalysisBi/performanceMonitoring.jpg";
import InnovationImage from "../../../../../public/assets/services/AIBigDataAnalysisBi/innovation.jpg";
import ResourceAllocation from "../../../../../public/assets/services/AIBigDataAnalysisBi/resourceAllocation.jpg";
import ScalableSolutions from "../../../../../public/assets/services/AIBigDataAnalysisBi/ScalableSolutions.jpg";

export const BiAndAnalyticsData: BiAndAnalyticsDataType = {
    mainTitle: "Business Intelligence & Analytics Services",
    subTitle: "Our tailored Business Intelligence and Analytics Services seamlessly convert data into strategic assets, empowering proactive decision-making. Through meticulous data collection, analysis and visualization, we unveil hidden insights and growth opportunities within your organization. With our bespoke solutions, businesses optimize operations and propel towards sustained success in today's dynamic landscape.",
    secondSectionImage: DataCollectionImage,
    secondTitle: "Unlock Insights with Advanced Analytics",
    secondSubTitle: "Leverage our cutting-edge analytics solutions to extract valuable insights from your data. Our advanced techniques and expertise help you uncover hidden trends, predict future outcomes and make data-driven decisions with confidence. Whether you are aiming to optimize operations, enhance customer experiences or drive innovation, our analytics services provide the competitive edge you need in today's dynamic business landscape.",
    cardsTitle: "benefits in our bi and analytics service spectrum",
    cards: [
        {
            title: "Data-Driven Decision Making",
            message: "Data-driven decision making harnesses the power of data analysis to inform strategic choices and drive organizational success.",
            image: DataDrivenImage
        },
        {
            title: "Improved Operational Efficiency",
            message: "Improved operational efficiency optimizes workflows and resource allocation, leading to streamlined processes and cost savings.",
            image: OperationalEfficency
        },
        {
            title: "Enhanced Performance Monitoring",
            message: "Enhanced performance monitoring provides insights key metrics, enabling adjustments and improved business outcomes.",
            image: PerformanceMonitoring
        },
        {
            title: "Innovation and Product Development",
            message: "Data insights fuel innovation, guiding the development of new products and strategies for market success.",
            image: InnovationImage
        },
        {
            title: "Efficient Resource Allocation",
            message: "Efficient resource allocation optimizes utilization and minimizes waste, enhancing overall productivity and profitability.",
            image: ResourceAllocation
        },
        {
            title: "Scalable Solutions",
            message: "Adapt and grow with flexible BI and analytics solutions that scale with your business needs.",
            image: ScalableSolutions
        }
    ],
    faqs: [
        {
            qid: 1,
            question: "What is business intelligence (BI) and analytics, and how do they differ?",
            answer: "Business intelligence (BI) involves the use of a data analysis tools and techniques to transform raw data into actionable insights for informed decision-making. Analytics, on the other hand, refers to the process of analyzing data to uncover patterns, trends and correlations that can drive strategic business decisions. While BI focuses on reporting past and present data, analytics involves predictive and prescriptive analysis to anticipate future outcomes and optimize strategies."
        },
        {
            qid: 2,
            question: "What are the benefits of implementing BI and analytics in an organization?",
            answer: "Implementing BI and analytics enables organizations to gain valuable insights from their data, improve decision-making, optimize operations, enhance customer satisfaction, identify new opportunities for growth and gain a competitive edge in the market. By leveraging data-driven insights, organizations can achieve better business outcomes and drive innovation."
        },
        {
            qid: 3,
            question: "How does data visualization contribute to BI and analytics initiatives?",
            answer: "Data visualization plays a crucial role in BI and analytics initiatives by presenting complex data in a visually intuitive format such as charts, graphs and dashboards. Visualization makes it easier for users to interpret and understand data trends, patterns and relationships, enabling faster and more effective decision-making. Visualizations also facilitate communication of insights across different stakeholders, enhancing collaboration and alignment within the organization."
        },
        {
            qid: 4,
            question: "What are some common challenges organizations face when implementing BI and analytics solutions?",
            answer: "Some common challenges organizations face when implementing BI and analytics solutions include data silos and integration issues, ensuring data quality and accuracy, lack of skilled personnel, selecting the right tools and technologies, managing security and compliance and aligning BI initiatives with business objectives. Overcoming these challenges requires careful planning, investment in training and resources and collaboration across different departments."
        },
        {
            qid: 5,
            question: "What role does artificial intelligence (AI) and machine learning (ML) play in BI and analytics?",
            answer: "AI and ML technologies play a significant role in BI and analytics by automating data analysis processes, uncovering hidden patterns and insights in large datasets and enabling predictive and prescriptive analytics. AI-powered analytics solutions can help organizations extract actionable insights from unstructured data sources such as text and images and improve the accuracy and efficiency of decision-making. ML algorithms can also be used to develop predictive models for forecasting trends and outcomes, optimizing resource allocation and mitigating risks."
        }
    ]
};

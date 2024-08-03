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
    subTitle: "Our business intelligence and well-designed analytics services transform data into strategic assets that empower proactive decision-making. Through careful data collection, analysis, and visualization, we uncover hidden insights and growth opportunities within your organization. With our bespoke solutions, businesses optimize productivity and continue to thrive in today’s dynamic environment.",
    secondSectionImage: DataCollectionImage,
    secondTitle: "Unlock Insights with Advanced Analytics",
    secondSubTitle: "Extract valuable insights from your data by leveraging our state-of-the-art analytics solutions. Our advanced methods and expertise help you uncover hidden trends, predict future results, and make data-driven decisions with confidence. Whether you are aiming to improve efficiency, enhance customer experience, or drive innovation, our research activities will provide the competitive edge you need in today’s dynamic business environment.",
    cardsTitle: "benefits in our bi and analytics service spectrum",
    cards: [
        {
            title: "Data-Driven Decision Making",
            message: "Data-driven decision making uses the power of data analytics to inform strategic choices and drive organizational success.",
            image: DataDrivenImage
        },
        {
            title: "Improve Productivity",
            message: "Improved operational efficiencies improve operational and distribution efficiencies, resulting in smooth scheduling and cost reduction.",
            image: OperationalEfficency
        },
        {
            title: "Enhanced Performance Management",
            message: "Enhanced performance management provides key metrics to be analyzed, providing flexibility and improved business results.",
            image: PerformanceMonitoring
        },
        {
            title: "Innovation and Product Development",
            message: "Data insights fuel innovation, guide innovation and strategic market success.",
            image: InnovationImage
        },
        {
            title: "Distribution of efficiencies",
            message: "Efficient resource allocation leads to better utilization and reduced waste, increasing both efficiency and profitability.",
            image: ResourceAllocation
        },
        {
            title: "Scalable Solutions",
            message: "Adapt and grow with flexible BI and analytics solutions that match your business needs.",
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

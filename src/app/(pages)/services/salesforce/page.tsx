import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import SalesforcePage from "@/app/ui/services/salesforce/SalesforcePage";



export const metadata: Metadata = {
  title: "Salesforce Services in Kharadi - Vionsys IT Solutions India",
  description:
    "Salesforce service is the core service of Vionsys IT Solution India Pvt. Ltd. Experts provide customized solutions that help implement, modify, and integrate.",
  alternates: {
    canonical: `${BaseUrl}/services/salesforce`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "With experienced Salesforce services from Vionsys IT Solutions India Pvt Ltd, you can transform your customer engagement and drive growth. We provide complete solutions, from Salesforce setup and customization to continuous support and maintenance. Our team guarantees that your Salesforce platform is fully matched with your business requirements, providing seamless integration and advanced analytics to improve performance. Experience the Vionsys edge with Salesforce solutions today.",
  },
};

const Salesforce: React.FC = () => {
  return (
    <div>
      <SalesforcePage />
    </div>
  );
};

export default Salesforce;

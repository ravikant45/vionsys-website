import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";

import ClientsServices from "@/utils/ClientsServices";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Hero = dynamic(
  () => import("@/app/ui/services/productdevelopment/Hero"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Secondsection = dynamic(
  () => import("@/app/ui/services/productdevelopment/Secondsection"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Thirdsection = dynamic(
  () => import("@/app/ui/services/productdevelopment/Thirdsection"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Faq = dynamic(() => import("@/app/ui/services/productdevelopment/Faq"), {
  loading: () => <DynamicLoader />,
});
const ScheduleMeetAndContactCTA = dynamic(
  () => import("@/utils/ScheduleMeetAndContactCTA"),
  {
    loading: () => <DynamicLoader />,
  }
);

export const metadata: Metadata = {
  title: "Vionsys IT Company - Product Development Services in Pune",
  description:
    "Vionsys IT Solutions India Pvt Ltd is a professional software development company that offers product development services to help bring unique ideas to life.",
  alternates: {
    canonical: `${BaseUrl}/services/product-development`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd provides experienced product development services geared to your specific company requirements. Our team specializes in developing cutting-edge products that appeal to your target audience and match market demands. From early planning and prototyping to final deployment and maintenance, we offer a full development lifecycle to ensure your product stands out in the competitive marketplace. Vionsys' creative solutions can help you succeed in the marketplace.",
  },
};

const Page: React.FC = () => {
  return (
    <main className="pt-16 overflow-x-hidden">
      <Hero />
      <Secondsection />
      <Thirdsection />
      <ClientsServices />
      <Faq />
      {/* CTA */}
      <section className="bg-gray-100">
        <ScheduleMeetAndContactCTA />
      </section>
    </main>
  );
};

export default Page;

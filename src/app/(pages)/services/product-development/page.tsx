import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
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
  title: "Product Development Services",
  description:
    "Vionsys IT Solutions India Pvt Ltd offers comprehensive product development services to help you bring your creative ideas to life. Our skilled team offers complete solutions from concept to launch, including market research, design, development, and testing. Whether you require software, mobile apps, or corporate solutions, we guarantee a smooth development process that produces excellent outcomes. Partner with Vionsys to make your vision a reality.",
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
      <Faq />
      {/* CTA */}
      <section className="bg-gray-100">
        <ScheduleMeetAndContactCTA />
      </section>
    </main>
  );
};

export default Page;

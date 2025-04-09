import Image from "next/image";
import Link from "next/link";

export default function OverviewSection() {
  return (
    <div id="Overview" className="h-full mx-auto px-4 py-16 max-w-6xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Salesforce image */}
          <div className="flex justify-center items-center">
            <Image
              src="/assets/services/Salesforce/Salesforce-Consulting.jpg"
              alt="Salesforce Logo"
              width={800}
              height={800}
              className="object-contain rounded-xl"
            />
          </div>

          {/* Right side - Text content */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-600 mb-2">
              OVERVIEW
            </p>
            <h2 className="text-4xl font-bold text-orange mb-6">
              Salesforce Expertise & Consulting
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                We are the leading providers of Salesforce Consulting
                Services, Salesforce Development, Outsourcing Services and
                professional Salesforce consulting expertise in the USA, Middle East & India.
                We are the top-rated Salesforce consultants, our expertise enables us to
                add value to your business by creating industry-specific CRM
                tools that drive revenue growth and enhance the overall success
                of your business.
              </p>

              <p className="font-medium">
                We help you achieve your goals –
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Expertise in both Sales Cloud and Service Cloud.</li>
                <li>Custom Force.com Applications.</li>
                <li>
                  Our certified and skilled Salesforce consultants will guide
                  you throughout the process.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

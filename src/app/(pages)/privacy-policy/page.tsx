import { BaseUrl } from "@/app/sitemap";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy - Vionsys IT Solutions",
  description:
    "At Vionsys IT Solutions, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.",
  alternates: {
    canonical: `${BaseUrl}/privacy-policy`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "We provide premium IT services such as custom software, cloud solutions, and cybersecurity. Our devoted staff provides organizations with innovative technologies, assuring a competitive advantage and operational efficiency. Vionsys offers transformational IT skills.",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className=" bg-gray-900 text-white py-20 text-center">
        <div className=" max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-300">
            Your privacy is important to us. Learn how we collect, use, and
            protect your information.
          </p>
          <Link
            className="inline-block py-4 px-8 mt-6 leading-none text-white bg-blue-600 hover:bg-blue1 rounded shadow text-sm font-bold transition-all"
            href={"/contact"}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6 py-12 text-gray-800">
        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-blue1">
            1. Information We Collect
          </h2>
          <p className="text-gray-600">
            We may collect personal and non-personal information when you visit
            our website.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>
              <strong>Personal Data:</strong> Name, Email, Phone number, etc.
            </li>
            <li>
              <strong>Non-Personal Data:</strong> IP address, browser type,
              cookies, etc.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-blue1">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>To operate and maintain our website</li>
            <li>To respond to your inquiries</li>
            <li>To send newsletters and promotional updates</li>
            <li>To improve user experience</li>
          </ul>
        </section>

        {/* Sharing Your Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-blue1">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-600">
            We do not sell your personal information. However, we may share data
            with third parties for services such as:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>Hosting and analytics providers</li>
            <li>Legal compliance purposes</li>
            <li>Business acquisitions or mergers</li>
          </ul>
        </section>

        {/* Cookies and Tracking */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-blue1">
            4. Cookies and Tracking
          </h2>
          <p className="text-gray-600">
            We use cookies and similar tracking technologies. You can manage
            your cookie preferences in your browser settings.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-blue1">
            5. Data Security
          </h2>
          <p className="text-gray-600">
            We implement security measures to protect your personal data from
            unauthorized access, modification, or disclosure.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-blue1">
            6. Your Rights
          </h2>
          <p className="text-gray-600">
            Depending on your location, you may have rights such as:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>Accessing, correcting, or deleting your data</li>
            <li>Withdrawing consent for data processing</li>
            <li>Filing a complaint with a data protection authority</li>
          </ul>
        </section>

        {/* Third-Party Links */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-blue1">
            7. Third-Party Links
          </h2>
          <p className="text-gray-600">
            Our website may contain links to external websites. We are not
            responsible for their privacy policies.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-blue1">
            8. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, reach us at:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>
              <strong>Email:</strong>{" "}
              <Link href="mailto:info@vionsys.com" className="text-blue-500">
                info@vionsys.com
              </Link>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <Link
                href="https://www.vionsys.com"
                target="_blank"
                className="text-blue-500"
              >
                www.vionsys.com
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

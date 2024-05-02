"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import LinkedIn from "../../../../public/assets/socialicons/linkedin.png";
import Instagram from "../../../../public/assets/socialicons/instagram.png";
import Facebook from "../../../../public/assets/socialicons/facebook.png";
import Image from "next/image";
import { motion } from "framer-motion";


const Footer = () => {
  const columnStyle: React.CSSProperties = {
    textAlign: "left",
    marginBottom: "1rem",
  };
  return (
    <footer className="px-2 w-[100vw] overflow-hidden bg-blue5 text-white z-10">
      {/* <div className="w-full absolute overflow-x-hidden -z-10">
        <svg
          id="svg"
          viewBox="0 0 1320 325"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="transition duration-300 ease-in-out delay-150 overflow-x-hidden"
        >
          <defs>
            <linearGradient id="gradient" x1="46%" y1="0%" x2="54%" y2="100%">
              <stop offset="5%" stopColor="#8ed1fc"></stop>
              <stop offset="95%" stopColor="#8ed1fc"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 L 0,100 C 36.08416575323302,122.68028169762307 72.16833150646605,145.36056339524615 120,142 C 167.83166849353395,138.63943660475385 227.41083972736885,109.23802811663853 276,102 C 324.58916027263115,94.76197188336147 362.1883095840586,109.68732413819971 403,107 C 443.8116904159414,104.31267586180029 487.83592193639674,84.01267533056262 528,92 C 568.1640780636033,99.98732466943738 604.4680026703546,136.26197453954975 652,144 C 699.5319973296454,151.73802546045025 758.2920673821847,130.93942651123834 806,128 C 853.7079326178153,125.06057348876166 890.3637278009063,139.98031941549692 927,145 C 963.6362721990937,150.01968058450308 1000.25302141419,145.139295826774 1050,123 C 1099.74697858581,100.860704173226 1162.6241865423335,61.46249727740701 1202,58 C 1241.3758134576665,54.53750272259299 1257.2502324164761,87.01071506359798 1293,100 C 1328.7497675835239,112.98928493640202 1384.374883791762,106.49464246820101 1440,100 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 200)"
          ></path>
          <path
            d="M 0,400 L 0,233 C 45.72437619417799,238.9956615591117 91.44875238835598,244.99132311822342 138,254 C 184.55124761164402,263.0086768817766 231.92936664075404,275.03036908621806 277,282 C 322.07063335924596,288.96963091378194 364.8337810486277,290.8872005369042 404,271 C 443.1662189513723,251.11279946309583 478.73550916473505,209.42082876616513 522,192 C 565.264490835265,174.57917123383487 616.2241822924321,181.4294843984353 655,196 C 693.7758177075679,210.5705156015647 720.3677616655364,232.86123364009364 761,252 C 801.6322383344636,271.13876635990636 856.3047710454227,287.1255810411904 904,282 C 951.6952289545773,276.8744189588096 992.4131541527731,250.63644219514484 1037,227 C 1081.5868458472269,203.36355780485516 1130.042612343484,182.32865017823022 1172,195 C 1213.957387656516,207.67134982176978 1249.4163964732902,254.04895709193426 1293,266 C 1336.5836035267098,277.95104290806574 1388.291801763355,255.47552145403287 1440,233 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-1 overflow-x-hidden"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
      </div> */}

      {/* Footer Content */}
      <div className="bg-transparent py-5 overflow-hidden">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Logo */}
            <div className="text-center md:text-left flex justify-center items-center">
              <img src="https://www.vionsys.com/public/assets/img/logo_3.png" alt="" />
            </div>

            {/* About Us */}
            <div className="text-center md:text-left col-span-2 flex flex-col gap-2">
              <motion.h3 initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }} className="text-lg text-white font-bold mb-2 underline   ">
                {" "}
                <Link href='/about'>About Us</Link>
              </motion.h3>
              <motion.p initial={{ opacity: 0, y: 100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}>
                Vionsys IT solutions INDIA Pvt. Ltd. is a comprehensive IT
                company offering end-to-end technology solutions. With expertise
                in software development, network infrastructure, cybersecurity,
                cloud services, and IT consulting, we empower businesses to
                thrive in the digital era.{" "}
              </motion.p>
              <div className="flex gap-2 md:justify-start justify-center">
                <Link href="/"><Image src={Facebook} alt="" quality={100} /></Link>
                <Link href={"/"}><Image src={Instagram} alt="" quality={100} /></Link>
                <Link href={"/"}><Image src={LinkedIn} alt="" quality={100} /></Link>
              </div>
            </div>

            {/* Our Services */}
            <div className="text-center md:text-left flex flex-col  gap-2">
              <motion.h3 initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }} className="text-lg text-white font-bold mb-2 underline">
                Our Services
              </motion.h3>
              <div className="flex flex-col gap-1">
                <Link href="/services/softwareDevelopement">Software Development</Link>
                <Link href="/services/webDevelopment">Web Development</Link>
                <Link href="/services/crm">CRM</Link>
                <Link href="/services/salesforce">Salesforce</Link>
                <Link href="/services/devops">DevOps</Link>
              </div>
            </div>



            {/* Contact Info */}
            <div className="text-center md:text-left col-span-2 flex flex-col  gap-2">
              <motion.h3 initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }} className="text-lg text-white font-bold mb-2 underline">
                <Link href='/contact'>Contact Info</Link>
              </motion.h3>
              <div className="flex flex-col justify-center gap-2">
                <div className="flex  gap-3">
                  <div><FiPhoneCall size={19} className="mr-2" /></div>
                  <span> Phone: 8766613742</span>
                </div>
                <div className="flex gap-3">
                  <div> <MdOutlineMail size={22} className="mr-2" /></div>
                  <span> Email: hr@vionsys.com</span>
                </div>
                <div className="flex  gap-3">
                  <div><GrLocation className="w-6 h-6 flex-shrink-0 mr-2" /></div>
                  <span>Address: 6th floor office no.504 Stellar Spaces, opposite
                    Zensar it park, Kharadi, pune</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center  relative flex justify-center items-center py-2">
        <p className=" text-slate-200">
          {" "}
          Copyright &#169; 2017 Vionsys IT Solutions India Pvt. Ltd . - All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ROISection() {
  const router = useRouter();
  
  return (
    <div className="bg-black px-4 py-10 md:px-10 lg:px-16">
      <div className="w-full">
        <div className="bg-zinc-800 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
            
            {/* Left Content */}
            <div className="p-6 md:px-8 md:py-6 lg:w-2/3 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                The Only Fixed Goal Of Our Custom Services Is Your ROI
              </h2>
              <p className="text-gray-300 text-sm md:text-lg mb-6">
                Understand all the benefits, timelines, costs, and opportunities for your custom requirements.
              </p>
             <div>
             <button
                className="bg-blue-600 w-fit hover:bg-blue-700 text-white px-6 py-2 md:px-8 rounded-lg font-medium transition-colors"
                onClick={() => {
                  router.push(
                    "https://calendly.com/vionsysit/30min?back=1&month=2025-01"
                  );
                }}
              >
                Schedule Consultation
              </button>
             </div>
            </div>

            {/* Right Image - Full Cover on Large Screens */}
            <div className="lg:w-1/3 w-full flex justify-center">
              <div className="relative w-full h-fit md:h-80 lg:h-full">
                <Image
                  src="/assets/LandingPage/SoftwareDevelopment/ROI.jpg"
                  width={400} // ✅ Explicit width on small screens
                  height={300} // ✅ Explicit height on small screens
                  layout="intrinsic" // ✅ Better performance on mobile
                  objectFit="cover"
                  alt="ROI Growth Visualization"
                  className="w-full h-auto rounded-r-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

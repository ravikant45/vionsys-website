import { motion } from "framer-motion";
import HeroContactForm from "../HeroContactForm";

type HeroProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hero: React.FC<HeroProps> = ({ showModal, setShowModal }) => {
  return (
    <div className="relative">
      <div className="relative w-full h-screen">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* Ensure the video is placed inside the public/assets directory */}
          <source src="/assets/DigitalMarketing.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Absolute positioning for the content */}
      <div className="absolute inset-0 flex items-center justify-center p-2 md:p-5">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="md:max-w-[50rem] w-full flex flex-col gap-2 space-y-3 z-10"
        >
          <h1 className="loop_video_title text-4xl md:text-6xl text-[#215CBC] font-bold">
            Empower Your Brand with Digital Innovation
          </h1>
          <p className="loop_video_desc md:text-4xl font-semibold text-orange">
            Unleash the Power of Digital Marketing to Drive Success.
          </p>
          <div className="flex items-center pb-3">
            <button
              className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
              onClick={() => setShowModal(!showModal)}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff8c00_0%,#ffa500_50%,#1e90ff_100%)]"></span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium bg-[#F0F0EE] text-blue1 backdrop-blur-3xl gap-2">
                Get in Touch with Our Experts Today
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div>
            <h1 className="text-[#215CBC] text-2xl font-semibold mb-2">
              Highlights:
            </h1>
            <ul className="list-disc mb-2 font-medium text-xl px-4 text-start">
              <li className="mb-2">
                Streamlined processes for greater efficiency
              </li>
              <li className="mb-2">Enhance customer relationships</li>
              <li className="mb-2">Optimize overall business performance</li>
            </ul>
          </div>
        </motion.div>

        <HeroContactForm
          title={"Digital Marketing Landing Page"}
          heading="Contact our digital marketing experts to grow your brand."
        />
      </div>
    </div>
  );
};

export default Hero;

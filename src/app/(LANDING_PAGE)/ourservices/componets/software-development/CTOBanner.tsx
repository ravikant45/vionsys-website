import React from "react";
import banner from "../../images/SoftwareDevelopment/banner.jpg";

interface PopUpProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const CTOBanner: React.FC<PopUpProps> = ({ showModal, setShowModal }) => {
  return (
    <div className="md:h-[60vh] md:w-screen mx-5 md:mx-0 md:px-8 flex items-center justify-center">
      <div
        className="md:h-[80%] md:w-[95%] rounded-2xl bg-cover flex md:space-y-4 space-y-4 py-3 justify-center items-start flex-col bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${banner.src})`,
        }}
      >
        <h3 className="md:text-4xl text-white font-bold px-6">
          Collaborate on Your Vision!
        </h3>
        
        <p className="text-base text-slate-100 px-6">
          Share your vision with us, and let’s work together to transform your ideas into reality.  
          Whether you&apos;re building an innovative startup, scaling an enterprise, or enhancing an existing product, our team is dedicated  
          to delivering cutting-edge solutions that align with your business goals and technological needs.
        </p>

        <div className="px-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 animate-pulse text-white px-6 py-2 md:px-8 rounded-lg font-medium transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTOBanner;

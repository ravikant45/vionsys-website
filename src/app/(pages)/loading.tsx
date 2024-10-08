import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
      <div className="h-8 w-8 bg-[#0444b1] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-[#e57e2c] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-[#0444b1] rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loading;

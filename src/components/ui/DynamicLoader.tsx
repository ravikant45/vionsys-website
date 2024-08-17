import React from "react";

const DynamicLoader = () => {
  return (
    <div className="flex gap-2 w-full h-[20rem] justify-center items-center bg-transparent">
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
    </div>
  );
};

export default DynamicLoader;

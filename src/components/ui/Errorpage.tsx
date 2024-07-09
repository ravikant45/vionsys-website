import React from "react";

const Errorpage = ({
  errorCode,
  errorTitle,
  errorDescription,
}: {
  errorCode: string;
  errorTitle: string;
  errorDescription: string;
}) => {
  return (
    <div className="bg-gray-100 px-2 overflow-hidden text-center">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-extrabold text-red-500">{errorCode}</h1>
        <p className="text-4xl font-medium text-gray-800">{errorTitle}</p>
        <p className="text-xl text-gray-800 mt-4">{errorDescription}</p>
      </div>
    </div>
  );
};

export default Errorpage;

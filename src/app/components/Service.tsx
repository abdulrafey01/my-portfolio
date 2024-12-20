import React from "react";

type Props = {};

const Service = (props: Props) => {
  return (
    <div className="bg-transparent border-gray-500 border backdrop-blur-lg rounded-2xl h-40 w-80">
      <div className="absolute -z-10 bg-white opacity-10 w-full h-full rounded-2xl"></div>
      <p className="text-xl  py-4 px-4">UI/UX Design </p>
      {/* underline */}
      <hr />
    </div>
  );
};

export default Service;

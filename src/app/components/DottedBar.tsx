import React from "react";

type Props = {};

const DottedBar = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center ">
      {/* Circle */}
      <div className="w-6 h-6  flex justify-center items-center rounded-full border-dashed border-2 border-black">
        <div className="w-4 h-4 rounded-full bg-primary"></div>
      </div>
      {/* Line */}
      <div className="h-[8.5rem]  border-dashed border-l-[2px] border-black bg-red-500"></div>
      {/* Circle */}
      <div className="w-6 h-6  flex justify-center items-center rounded-full border-dashed border-2 border-black">
        <div className="w-4 h-4 rounded-full bg-black"></div>
      </div>
      {/* Line */}
      <div className="h-[8.5rem]  border-dashed border-l-[2px] border-black bg-red-500"></div>
      {/* Circle */}

      <div className="w-6 h-6  flex justify-center items-center rounded-full border-dashed border-2 border-black">
        <div className="w-4 h-4 rounded-full bg-primary"></div>
      </div>
    </div>
  );
};

export default DottedBar;

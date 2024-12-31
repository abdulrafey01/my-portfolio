import React from "react";

type Props = {};

const ScrollDots = (props: Props) => {
  return (
    <div className="flex justify-center items-center mt-8 gap-2">
      <div className="h-3 w-9 rounded-full bg-primary"></div>
      <div className="h-3 w-3 rounded-full bg-[#E4E7EC]"></div>
      <div className="h-3 w-3 rounded-full bg-[#E4E7EC]"></div>
      <div className="h-3 w-3 rounded-full bg-[#E4E7EC]"></div>
      <div className="h-3 w-3 rounded-full bg-[#E4E7EC]"></div>
    </div>
  );
};

export default ScrollDots;

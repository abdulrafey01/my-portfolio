import React from "react";

type Props = {
  title: string;
};

const Tag = ({ title }: Props) => {
  return (
    <div className="cursor-default py-2 px-4 text-black text-sm  rounded-full bg-[#F2F4F7]">
      {title}
    </div>
  );
};

export default Tag;

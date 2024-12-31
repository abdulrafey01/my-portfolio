import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const ExpTextContainer = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col text-left  w-96  h-28">
      <p className="text-2xl font-medium">{title}</p>
      <p className="text-gray-300 ">{subtitle}</p>
    </div>
  );
};

export default ExpTextContainer;

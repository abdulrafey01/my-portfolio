import React from "react";

type Props = {
  className: string;
};

const MarqueStar = ({ className }: Props) => {
  return (
    <svg
      className={className}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3832 0.391283L21.6154 12.4744L34.1086 16.6336L22.0254 21.8658L17.8663 34.3589L12.6341 22.2758L0.140944 18.1166L12.2241 12.8845L16.3832 0.391283Z"
        fill="#FD853A"
      />
    </svg>
  );
};

export default MarqueStar;

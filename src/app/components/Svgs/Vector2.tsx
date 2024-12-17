import React from "react";
type Props = {
  className: string;
};

const Vector2 = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="74"
      height="85"
      viewBox="0 0 74 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.3108 36.2315C69.6285 43.8915 58.6038 57.5291 61.2168 82.1914M54.1236 23.089C40.7226 31.2978 12.4005 52.1993 6.3202 70.1346M50.3891 3.53331C43.5802 2.0379 24.5813 1.61233 3.05698 11.8734"
        stroke="#FEB273"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Vector2;

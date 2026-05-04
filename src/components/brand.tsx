import React from "react";

type ClaraMarkProps = {
  accent?: string;
  color?: string;
  size?: number;
};

export const ClaraMark: React.FC<ClaraMarkProps> = ({
  size = 28,
  color = "currentColor",
  accent,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 9.5a10.5 10.5 0 1 0 0 13"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="25.5" cy="9.5" r="2.6" fill={accent || color} />
    </svg>
  );
};

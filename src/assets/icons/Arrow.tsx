import React from "react";

interface ArrowIconProps {
    width?: number,
    height?: number,
    color?: string
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
    width = 35, height = 60, color = "#FFF"
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.24451 28.4455C-0.261107 30.0621 -0.171137 32.5931 1.44547 34.0987L27.7895 58.6342C29.4061 60.1399 31.9372 60.0499 33.4428 58.4333C34.9484 56.8167 34.8585 54.2856 33.2419 52.78L9.82491 30.9707L31.6342 7.55373C33.1399 5.93713 33.0499 3.40606 31.4333 1.90045C29.8167 0.394826 27.2856 0.484796 25.78 2.1014L1.24451 28.4455ZM4.31373 35.1691L9.1421 34.9975L8.8579 27.0025L4.02954 27.1742L4.31373 35.1691Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowIcon;

import React from "react";

export const LoadingSpinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        display: "block",
        shapeRendering: "auto",
        animationPlayState: "running",
        animationDelay: "0s",
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#9b9b9b"
        strokeWidth="7"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        style={{ animationPlayState: "running", animationDelay: "0s" }}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        ></animateTransform>
      </circle>
    </svg>
  );
};

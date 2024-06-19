import React from "react";

export const Container = ({ className = "", children }) => {
  return (
    <div
      className={`2xl:px-[20%] xl:px-[10%] lg:px-[7.5%] md:px-16 sm:px-8 px-4 ${className}`}
    >
      {children}
    </div>
  );
};

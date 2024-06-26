import React from "react";

const HorizontalLine = ({ className, accent = false }) => {
  return (
    <div
      className={`relative bg-dark-blue w-full h-[0.125rem] rounded-sm mx-auto ${className} ${
        accent
          ? "before:absolute before:left-1/2 before:top-1/2 before:bg-dark-blue before:h-[0.5rem] before:aspect-square before:-translate-y-1/2 before:-translate-x-[calc(50%+2rem)] before:rotate-45 after:absolute after:left-1/2 after:top-1/2 after:bg-dark-blue after:h-[0.5rem] after:aspect-square after:-translate-y-1/2 after:-translate-x-[calc(50%-2rem)] after:rotate-45 before:rounded-full after:rounded-full"
          : ""
      }`}
    >
      {accent && (
        <div
          className={
            "absolute left-1/2 top-1/2 bg-dark-blue h-[0.75rem] aspect-square -translate-y-1/2 -translate-x-1/2 rotate-45 rounded-full "
          }
        />
      )}
    </div>
  );
};

export default HorizontalLine;

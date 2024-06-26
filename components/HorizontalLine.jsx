import React from "react";
import { Icon } from "./Icon";

const HorizontalLine = ({ className, accent = false }) => {
  return (
    <div
      className={`relative bg-dark-blue h-[0.125rem] rounded-sm mx-auto ${className}`}
    >
      {accent && (
        <div
          className={
            "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl"
          }
        >
          <Icon.Logo />
        </div>
      )}
    </div>
  );
};

export default HorizontalLine;

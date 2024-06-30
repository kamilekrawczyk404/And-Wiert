import React from "react";
import { Icon } from "./Icon";

const Warning = ({ title }) => {
  return (
    <div
      className={"h-[calc(100vh-8rem)] w-full flex items-center justify-center"}
    >
      <div
        className={"flex bg-white rounded-sm p-4 md:gap-3 gap-1 items-center"}
      >
        <Icon.Warning className={"text-3xl text-dark-orange"} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Warning;

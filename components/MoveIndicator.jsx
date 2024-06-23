import React from "react";
import useUserScrollPage from "../hooks/useUserScrolledPage";
import { Icon } from "./Icon";

const MoveIndicator = () => {
  const { userScrolledPage } = useUserScrollPage();

  return (
    <div
      className={`pointer-events-none flex w-full z-20 ${
        userScrolledPage
          ? "sticky right-0 bottom-2"
          : "absolute left-1/2 -translate-x-1/2 bottom-[2rem] animate-bounce"
      }`}
    >
      <a
        href={userScrolledPage ? "#" : "#hero"}
        className={`text-2xl text-dark-blue pointer-events-auto ${
          userScrolledPage ? "ml-auto" : "self-center"
        }`}
      >
        {userScrolledPage ? (
          <Icon.AnglesUp
            className={"w-6 aspect-square bg-dark-orange rounded-full p-2 mr-2"}
          />
        ) : (
          <Icon.AnglesDown
            className={`w-6 aspect-square bg-dark-orange rounded-full p-2`}
          />
        )}
      </a>
    </div>
  );
};

export default MoveIndicator;

import React from "react";
import useUserScrollPage from "../hooks/useUserScrolledPage";
import { Icon } from "./Icon";
import { motion } from "framer-motion";

const MoveIndicator = () => {
  const { userScrolledPage } = useUserScrollPage();

  const scroll = () => {
    userScrolledPage
      ? window.scrollTo(0, 0)
      : window.scrollBy(0, window.innerHeight - 32);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.5,
      }}
      className={`pointer-events-none flex z-50 ${
        userScrolledPage
          ? "sticky md:flex hidden md:bottom-2 mb-1 w-screen"
          : "absolute left-1/2 -translate-x-1/2 md:bottom-[2rem] bottom-[1rem] flex items-center justify-center"
      }`}
    >
      <button
        onClick={scroll}
        className={`text-2xl text-dark-blue pointer-events-auto  ${
          userScrolledPage ? "ml-auto" : "animate-bounce"
        }`}
        title={userScrolledPage ? "Przewiń do góry" : "Przewiń w dół"}
      >
        {userScrolledPage ? (
          <Icon.AnglesUp
            className={
              "w-12 h-6 aspect-square bg-dark-orange rounded-full p-2 md:mr-2 "
            }
          />
        ) : (
          <Icon.AnglesDown
            className={`w-12 h-6 aspect-square bg-dark-orange rounded-full p-2`}
          />
        )}
      </button>
    </motion.div>
  );
};

export default MoveIndicator;

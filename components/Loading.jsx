import React from "react";
import { Icon } from "./Icon";
import { motion } from "framer-motion";

const Loading = ({ title, screen = true }) => {
  return (
    <div
      className={`${
        screen ? "h-[calc(100vh-8rem)]" : "h-fit"
      } flex items-center justify-center text-dark-blue`}
    >
      <div
        className={
          "relative bg-white py-4 px-8 flex items-center gap-4 rounded-sm"
        }
      >
        <motion.span
          className={
            "absolute left-2 overflow-hidden text-2xl flex justify-between w-[calc(100%-1rem)]"
          }
          initial={{ top: "-100%" }}
          animate={{ top: "125%" }}
          transition={{
            type: "spring",
            damping: 30,
            duration: 0.25,
            delay: -1,
            repeatType: "loop",
            repeat: Infinity,
          }}
        >
          <Icon.Logo />
          <Icon.Logo />
        </motion.span>

        <p className={"text-2xl"}>{title}</p>
      </div>
    </div>
  );
};

export default Loading;

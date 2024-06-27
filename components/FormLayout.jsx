import React from "react";
import { motion } from "framer-motion";

const FormLayout = ({ triedSending, isSuccess, title, children, ...props }) => {
  return (
    <motion.form
      {...props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${
        !triedSending ? "md:gap-4 gap-2 " : "gap-1"
      } flex flex-col relative w-full border-[0.125rem] rounded-sm p-4 h-fit ${
        !triedSending
          ? "border-dark-orange"
          : `${isSuccess ? "border-lime-500" : "border-red-500"}`
      }
         
      }`}
    >
      <span
        className={
          "absolute -top-4 left-2 text-xl px-2 bg-white text-dark-orange"
        }
      >
        {title}
      </span>
      {children}
    </motion.form>
  );
};

export default FormLayout;

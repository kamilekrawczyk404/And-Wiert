"use client";
import React from "react";
import { motion } from "framer-motion";

const MotionContainer = ({ className = "", children, ...props }) => {
  return (
    <motion.div
      {...props}
      className={`2xl:px-[20%] xl:px-[10%] lg:px-[7.5%] md:px-16 sm:px-8 px-4 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;

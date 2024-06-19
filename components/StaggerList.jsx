import React from "react";
import { motion } from "framer-motion";

const StaggerList = ({
  className = "",
  items = [],
  inView = false,
  children,
}) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariant = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      viewport={{ once: true }}
      variants={variants}
      initial={"hidden"}
      animate={inView ? "" : "show"}
      whileInView={inView ? "show" : ""}
      className={className}
    >
      {items.map((item, key) => (
        <motion.div key={key} variants={itemVariant}>
          {item}
        </motion.div>
      ))}
      {children}
    </motion.div>
  );
};

export default StaggerList;

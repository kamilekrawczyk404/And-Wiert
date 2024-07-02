import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { motion } from "framer-motion";

const Counter = ({ from, to, duration = 1, options }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    const element = nodeRef.current;

    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        speed: 100,
        damping: 1000,
        delay: 0.5,
        onUpdate: (value) => {
          element.textContent = value.toFixed(2);
        },
        onComplete: () => {
          element.textContent = parseInt(element.textContent).toFixed(0);
        },
      });

      return () => {
        controls.stop();
      };
    }
  }, [isInView, from, to]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: "full" }}
      className={
        "flex w-full flex-row items-center lg:gap-14 md:gap-12 gap-8 lg:p-6 p-4 bg-white shadow-xl [&>div]:hover:scale-[1.025] rounded hover:cursor-pointer"
      }
      transition={{
        delay: 0.25,
      }}
      title={options.title}
    >
      <div
        className={
          "relative transition lg:ml-[2.5rem] md:ml-[2rem] ml-[1.5rem]"
        }
      >
        <div
          className={
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center lg:w-[5rem] md:w-[4rem] w-[3rem] aspect-square rounded-full opacity-25 bg-dark-blue"
          }
        ></div>
        {options.icon}
      </div>

      <div
        className={
          "transition flex md:flex-col md:gap-0 gap-2 md:ml-0 ml-1 w-full sm:items-start items-center"
        }
      >
        <div
          className={
            "flex  self-start lg:text-4xl text-2xl text-dark-orange font-bold"
          }
        >
          <span ref={nodeRef} />
          <span>{options?.percentage ? "%" : "+"}</span>
        </div>
        <span className={"lg:text-lg md:text-base text-lg text-dark-blue"}>
          {options.title}
        </span>
      </div>
    </motion.div>
  );
};

export default Counter;

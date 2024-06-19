"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";

export const Carousel = () => {
  const INTERVAL_TIME = 5000;
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageNames = ["main1.webp", "main2.webp", "main3.webp"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (imageNames.length - 1 == prev ? 0 : prev + 1));
    }, INTERVAL_TIME);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={"relative h-[calc(100vh-8.5rem)] min-h-fit"}>
      <div className={"h-[calc(100vh-8.5rem)]"}>
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            exit={{ opacity: 0, x: 100 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.25,
            }}
            src={`/images/hero/${imageNames[currentIndex]}`}
            className={"left-0 top-0 bg-no-repeat bg-cover w-full h-full"}
          />
        </AnimatePresence>

        {/*shadow from bottom*/}
        <div
          className={
            "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.3)] to-transparent"
          }
        ></div>
      </div>

      <Hero currentIndex={currentIndex} />
    </div>
  );
};

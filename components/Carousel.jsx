"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Image from "next/image";

export const Carousel = () => {
  const INTERVAL_TIME = 5000;
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageNames = ["main1.webp", "main2.webp", "main3.webp"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        imageNames.length - 1 === prev ? 0 : prev + 1,
      );
    }, INTERVAL_TIME);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={"relative h-[calc(100vh-8.5rem)] min-h-fit"}>
      <div className={"relative h-[calc(100vh-8.5rem)] overflow-hidden"}>
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            exit={{ opacity: 0, x: 100 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={"relative w-full h-full"}
          >
            <Image
              fill
              objectFit={"cover"}
              src={`/images/hero/${imageNames[currentIndex]}`}
              alt={"And-Wiert - zdjęcie w tle sekcji Hero"}
            />
          </motion.div>
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

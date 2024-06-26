"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const City = ({ props, point, isShown }) => {
  const [isHover, setHover] = useState(false);

  const padding = 10,
    rectWidth = point.cityName.length * 10 + padding,
    rectHeight = 20 + padding,
    offset = 10,
    triangleSize = 10,
    moveBy = 5,
    cornerRadius = 2;

  return (
    <>
      <motion.circle
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        cx={point.cx}
        cy={point.cy}
        r={props.pointRadius}
        fill={props.pointFill}
        stroke={props.pointStrokeColor}
        strokeWidth={props.regionStrokeWidth}
        cursor="pointer"
        data-region={point.region}
        className={"transition duration-500"}
      />

      <motion.g
        className={"pointer-events-none select-none"}
        animate={{
          opacity: isShown || isHover ? 1 : 0,
          translateY: isShown || isHover ? -moveBy : 0,
          display: isShown || isHover ? "block" : "hidden",
        }}
      >
        <rect
          rx={cornerRadius}
          x={point.cx - triangleSize / 2}
          y={point.cy - triangleSize / 2 - offset}
          width={triangleSize}
          height={triangleSize}
          fill={"white"}
          transform={`rotate(45 ${point.cx} ${point.cy - offset})`}
        />
        <rect
          rx={cornerRadius}
          height={rectHeight}
          x={point.cx - rectWidth / 2}
          y={point.cy - offset - rectHeight}
          width={rectWidth}
          fill="white"
        />
        <text
          x={point.cx - rectWidth / 2 + padding / 2}
          y={point.cy - offset - rectHeight / 2 + padding / 2}
          className={"fill-dark-blue font-mono"}
        >
          {point.cityName}
        </text>
      </motion.g>
    </>
  );
};

export default City;

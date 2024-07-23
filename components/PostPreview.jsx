"use client";

import Link from "next/link";
import Image from "next/image";
import PostBasicInfo from "./PostBasicInfo";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export const PostPreview = ({
  inColumn,
  className,
  postProperties,
  ...props
}) => {
  return (
    <motion.div
      className={`relative w-full bg-gray-100 rounded-sm shadow-sm overflow-hidden flex group border-2 border-dark-blue ${
        inColumn ? "flex-col-reverse" : "md:flex-row flex-col-reverse"
      } ${className}`}
      {...props}
    >
      <div
        className={`flex flex-col ${
          inColumn ? "gap-4 w-full" : "md:gap-8 gap-4 md:w-3/5"
        } p-4`}
      >
        <div className={"space-y-2"}>
          <Link
            className={`text-dark-orange text-2xl underline font-semibold justify-self-start ${
              inColumn && "line-clamp-2"
            }`}
            href={`/blog/${postProperties.title}`}
          >
            {postProperties.titleAsString}
          </Link>
          <PostBasicInfo
            props={postProperties}
            className={
              inColumn ? "!flex-col gap-2" : "!md:flex-row flex-col gap-4"
            }
          />
        </div>

        <p className={"w-full line-clamp-3 overflow-ellipsis text-dark-blue"}>
          {postProperties.description}
        </p>
        <Link
          href={`/blog/${postProperties.title}`}
          className={
            "bg-light-orange md:w-fit w-full text-center p-2 text-dark-blue hover:bg-dark-orange transition rounded-sm shadow-sm"
          }
        >
          Czytaj dalej
        </Link>
      </div>

      <div
        className={`relative ${
          inColumn ? "w-full h-[10rem]" : "md:w-2/5 w-full md:h-auto h-[10rem]"
        } overflow-hidden`}
      >
        <Image
          className={"group-hover:scale-[1.15] transition duration-800"}
          layout={"fill"}
          objectFit={"cover"}
          src={postProperties.imageSrc}
          alt={postProperties.titleAsString}
        />
      </div>
    </motion.div>
  );
};

"use client";

import React, { useContext } from "react";
import StaggerList from "./StaggerList";
import Link from "next/link";
import { SiteDetailsContext } from "../utils/providers/SiteDetailsProvider";

const SocialsList = ({ className = "" }) => {
  const { socials } = useContext(SiteDetailsContext);

  return (
    <StaggerList
      className={`flex gap-4 justify-between ${className}`}
      items={socials.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          title={item.title}
          className={"flex items-center justify-center gap-x-2 text-2xl"}
        >
          {item.icon}
        </Link>
      ))}
    />
  );
};

export default SocialsList;

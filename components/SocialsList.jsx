import React, { useContext } from "react";
import StaggerList from "./StaggerList";
import { useQuery } from "@tanstack/react-query";
import { getSocials } from "../app/api/actions";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { SiteDetailsContext } from "../utils/providers/SiteDetailsProvider";
import { Icon } from "./Icon";

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

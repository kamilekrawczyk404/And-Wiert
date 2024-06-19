import React, { useContext } from "react";
import StaggerList from "./StaggerList";
import { useQuery } from "@tanstack/react-query";
import { getSocials } from "../app/api/actions";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { SiteDetailsContext } from "../utils/providers/SiteDetailsProvider";

const SocialsList = ({ className = "" }) => {
  const { socials } = useContext(SiteDetailsContext);

  const attributes = {
    facebook: {
      icon: faFacebook,
      title: "Facebook",
    },
  };

  return (
    <StaggerList
      className={`flex gap-4 justify-between ${className}`}
      items={socials.map((item, key) => (
        <Link
          key={key}
          href={item.url}
          title={attributes[item.name].title}
          className={"flex items-center justify-center gap-x-2 text-2xl"}
        >
          <FontAwesomeIcon icon={attributes[item.name].icon} />
        </Link>
      ))}
    />
  );
};

export default SocialsList;

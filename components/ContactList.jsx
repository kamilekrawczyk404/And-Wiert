import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getContact } from "../app/api/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import StaggerList from "./StaggerList";
import { SiteDetailsContext } from "../utils/providers/SiteDetailsProvider";

const ContactList = ({ className = "" }) => {
  const { contactDetails } = useContext(SiteDetailsContext);

  const attributes = {
    telephone: {
      icon: faPhone,
      title: "Zadzwoń do nas!",
      href: "tel:+48",
    },
    email: {
      icon: faEnvelope,
      title: "Napisz do nas!",
      href: "mailto:",
    },
    location: {
      icon: faLocationDot,
      title: "Nasza lokalizacja",
      href: "https://and-wiert.pl",
    },
  };

  return (
    <StaggerList
      className={`flex items-center justify-center ${className}`}
      items={Object.entries(contactDetails).map(([item, value]) => (
        <Link
          key={item}
          href={`${attributes[item].href}${item !== "location" ? value : ""}`}
          title={attributes[item].title}
          className={"flex items-center justify-center gap-2"}
        >
          <FontAwesomeIcon
            icon={attributes[item].icon}
            className={"text-dark-orange text-xl"}
          />
          <span className={"sm:inline hidden"}>{value}</span>
        </Link>
      ))}
    />
  );
};

export default ContactList;

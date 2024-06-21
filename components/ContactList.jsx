import React, { useContext } from "react";
import Link from "next/link";
import StaggerList from "./StaggerList";
import { SiteDetailsContext } from "../utils/providers/SiteDetailsProvider";
import { Icon } from "./Icon";

const ContactList = ({ className = "", iconsTextStyling = "" }) => {
  const { contact } = useContext(SiteDetailsContext);

  return (
    <StaggerList
      className={`flex items-center justify-center ${className}`}
      items={Object.entries(contact).map(([item, values]) => (
        <Link
          key={item}
          href={values.href}
          title={values.title}
          className={"flex items-center justify-center gap-2"}
        >
          <span className={"text-xl text-dark-orange"}>{values.icon}</span>
          <span className={iconsTextStyling}>{values.value}</span>
        </Link>
      ))}
    />
  );
};

export default ContactList;

import React from "react";
import { faEnvelope, faLocation } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = ({ items, orientation = "x" }) => {
  const icons = {
    email: faEnvelope,
    telephone: faPhone,
    facebook: faFacebook,
    location: faLocationDot,
  };

  return (
    <ul
      className={`flex gap-2 ${orientation === "x" ? "flex-row" : "flex-col"}`}
    >
      {Object.entries(items).map(([key, value]) => {
        return (
          <li key={key} className={"text-md flex space-x-3 items-center"}>
            {orientation.toLowerCase() === "x" ? (
              <a href={value}>
                <FontAwesomeIcon
                  icon={icons[key]}
                  className={`${
                    orientation.toLowerCase() === "x" ? "text-3xl" : "text-xl"
                  }`}
                />
              </a>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={icons[key]}
                  className={`${
                    orientation.toLowerCase() === "x" ? "text-3xl" : "text-xl"
                  }`}
                />
                <span>{value}</span>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default List;

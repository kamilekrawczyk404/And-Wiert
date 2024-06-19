import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";

const PostBasicInfo = ({ props, className = "" }) => {
  return (
    <div
      className={`flex gap-2 *:flex *:gap-1 *:items-center text-dark-blue ${className}`}
    >
      <p>
        <FontAwesomeIcon icon={faCalendar} />
        {props.createdAt}
      </p>
      <p>
        <FontAwesomeIcon icon={faClock} />
        {props.readingTime}
      </p>
    </div>
  );
};

export default PostBasicInfo;

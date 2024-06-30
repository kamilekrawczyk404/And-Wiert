import React from "react";
import FormatDate from "./FormatDate";
import { Icon } from "./Icon";

const PostBasicInfo = ({ props, className = "" }) => {
  return (
    <div
      className={`flex md:flex-row flex-col *:flex *:gap-1 *:items-center text-dark-blue ${className}`}
    >
      <p>
        <Icon.Calendar />
        <FormatDate dateAsString={props.createdAt} />
      </p>
      <p>
        <Icon.Clock />
        {props.readingTime}
      </p>
      <p>
        <Icon.User />
        Admin
      </p>
    </div>
  );
};

export default PostBasicInfo;

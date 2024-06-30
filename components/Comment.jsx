import React from "react";
import { Icon } from "./Icon";
import FormatDate from "./FormatDate";

const Comment = ({ comment }) => {
  return (
    <div className={"space-y-4 bg-gray-50 w-full rounded-sm md:p-4 p-2"}>
      <section className={"flex md:gap-4 gap-2"}>
        <div
          className={
            "relative h-12 aspect-square bg-dark-blue rounded-full flex items-center justify-center"
          }
        >
          <Icon.User className={"text-3xl text-white"} />
        </div>
        <div>
          <p className={"text-dark-orange font-semibold"}>{comment.username}</p>
          <FormatDate dateAsString={comment.createdAt} />
        </div>
      </section>
      <p
        className={
          "relative before:absolute before:rounded-sm before:top-0 before:h-full before:left-0 before:w-1 before:bg-dark-blue pl-4 break-words"
        }
      >
        {comment.message}
      </p>
    </div>
  );
};

export default Comment;

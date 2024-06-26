import React from "react";

const PostTitle = ({ title, className = "" }) => {
  return (
    <h2
      className={`relative text-dark-orange font-semibold md:text-3xl text-2xl before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[0.5rem] before:aspect-square before:rounded-full before:bg-dark-blue after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-dark-blue after:h-[0.5rem] after:aspect-square after:rounded-full my-2 px-4 mx-auto w-fit ${className}`}
    >
      {title}
    </h2>
  );
};

export default PostTitle;

import React from "react";

const PostTitle = ({ title, className = "" }) => {
  return (
    <h2
      className={`relative text-dark-orange font-semibold text-3xl before:absolute before:top-0 before:left-0 before:h-3 before:w-1 before:bg-dark-blue after:absolute after:left-0 after:top-0 after:bg-dark-blue after:w-5 after:h-1 mb-2 mt-6 indent-1 p-2 ${className}`}
    >
      {title}
    </h2>
  );
};

export default PostTitle;

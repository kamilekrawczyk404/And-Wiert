import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";

export const Link = forwardRef(
  (
    { children, className = "", underlineColor = "bg-dark-blue", ...props },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        className={
          "relative flex items-center justify-center gap-2 hover:cursor-pointer " +
          className
        }
        {...props}
      >
        {children}
      </a>
    );
  },
);
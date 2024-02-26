import { forwardRef } from "react";

export const Anchor = forwardRef(
  (
    {
      children,
      animated = false,
      className = "",
      underlineColor = "bg-dark-blue",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={
          "relative flex items-center justify-center gap-2 hover:cursor-pointer " +
          (animated ? " [&>span]:hover:w-full " : "") +
          className
        }
        {...props}
      >
        {children}
        {animated && (
          <span
            className={
              "absolute rounded-md bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[.2rem] transition-[width] " +
              underlineColor
            }
          ></span>
        )}
      </button>
    );
  },
);
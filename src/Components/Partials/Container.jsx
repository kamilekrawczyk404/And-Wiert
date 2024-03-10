import { forwardRef, useEffect, useState } from "react";

export const Container = forwardRef(
  (
    { className = "", paddings = true, asLayoutComponent = false, children },
    ref,
  ) => {
    const [isMinHeight, setIsMinHeight] = useState(false);

    const checkWindowHeight = () => {
      if (window.innerHeight < 600) {
        setIsMinHeight(true);
      } else {
        setIsMinHeight(false);
      }
    };

    useEffect(() => {
      if (asLayoutComponent) {
        window.addEventListener("resize", checkWindowHeight);

        return () => {
          window.removeEventListener("resize", checkWindowHeight);
        };
      }
    }, []);

    return (
      <div
        ref={ref}
        className={
          (paddings
            ? "xl:px-[10%] lg:px-[7.5%] md:px-16 sm:px-8 px-4 h-auto "
            : "") +
          (asLayoutComponent
            ? isMinHeight
              ? "lg:h-[200vh] "
              : "lg:h-screen "
            : "") +
          className
        }
      >
        {children}
      </div>
    );
  },
);
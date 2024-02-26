import { forwardRef } from "react";

export const Container = forwardRef(({ className = "", children }, ref) => {
  return (
    <div ref={ref} className={"lg:px-32 md:px-16 px-8  " + className}>
      {children}
    </div>
  );
});
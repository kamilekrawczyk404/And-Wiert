import { forwardRef } from "react";

export const Container = forwardRef(({ className = "", paddings = true, children }, ref) => {
  return (
    <div ref={ref} className={(paddings ? "lg:px-32 md:px-16 sm:px-8 px-4 " : "") + className}>
      {children}
    </div>
  );
});
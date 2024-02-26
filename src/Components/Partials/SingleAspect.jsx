import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";

export const SingleAspect = forwardRef(({ icon, title }, ref) => {
  return (
    <div ref={ref} className={"opacity-0 -translate-x-12"}>
      <p
        className={
          "flex gap-2 justify-start hover:cursor-pointer transition hover:-translate-x-[.5rem]"
        }
      >
        <FontAwesomeIcon
          icon={faAnglesRight}
          className={"text-light-orange text-lg font-semibold"}
        />
        {title}
      </p>
    </div>
  );
});
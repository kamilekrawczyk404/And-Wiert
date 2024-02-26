import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export const SlideDownIndicator = ({ handleScroll }) => {
  return (
    <div
      className={
        "absolute left-1/2 -translate-x-1/2 bottom-[10%] animate-bounce rounded-full"
      }
    >
      <button
        onClick={() => handleScroll(0)}
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 -translate-y-[100%] bg-light-orange w-[3rem] aspect-square rounded-full hover:bg-dark-orange transition"
        }
      >
        <FontAwesomeIcon
          icon={faAnglesDown}
          className={
            "text-2xl text-dark-blue z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          }
        />
      </button>
    </div>
  );
};
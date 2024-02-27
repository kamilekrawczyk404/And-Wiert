import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

export const SlideUpIndicator = ({ handleScrollToTop }) => {
  return (
    <div
      className={
        "fixed sm:bottom-[2.5rem] sm:right-[2.5rem] bottom-[2rem] right-[2rem] rounded-full z-50"
      }
    >
      <button
        onClick={() => handleScrollToTop()}
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-orange w-[3rem] aspect-square rounded-full hover:bg-dark-orange transition"
        }
        title={"Przewiń w górę"}
      >
        <FontAwesomeIcon
          icon={faAnglesUp}
          className={
            "text-2xl text-dark-blue z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          }
        />
      </button>
    </div>
  );
};
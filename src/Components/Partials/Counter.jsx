import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export const Counter = ({ achievement }) => {
  const [current, setCurrent] = useState(0);
  const [canAnimate, setCanAnimate] = useState(false);
  const fastMode = achievement.count >= 30;
  const [time, setTime] = useState(achievement.time);
  const magicElement = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];

      // Start counting when user's scrolled to the element
      if (entry.isIntersecting) setCanAnimate(true);
    });

    observer.observe(magicElement.current);
  }, []);

  useEffect(() => {
    let adding;

    if (canAnimate && achievement.count > current) {
      if (current >= achievement.count / 2) {
        setTime((prev) => prev + (fastMode ? 3 : 25));
      }
      adding = setTimeout(() => {
        setCurrent((prev) => prev + (fastMode ? 2 : 1));
      }, time);
    }

    return () => {
      clearTimeout(adding);
    };
  }, [current, canAnimate]);

  return (
    <div
      className={
        "flex w-full flex-row items-center lg:gap-14 md:gap-12 gap-8 lg:p-6 p-4 bg-white shadow-xl [&>div]:hover:scale-105 rounded hover:cursor-pointer"
      }
      title={achievement.title}
    >
      <div
        className={
          "relative transition lg:ml-[2.5rem] md:ml-[2rem] ml-[1.5rem]"
        }
      >
        <div
          className={
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center lg:w-[5rem] md:w-[4rem] w-[3rem] aspect-square rounded-full opacity-25 bg-dark-blue"
          }
        ></div>
        <FontAwesomeIcon
          icon={achievement.icon}
          className={
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-4xl text-2xl text-dark-blue transition"
          }
        />
      </div>

      <div className={"transition"}>
        <span className={"lg:text-4xl text-2xl text-dark-orange font-bold"}>
          {current}
        </span>
        <span className={"lg:text-4xl text-2xl text-dark-orange font-bold"}>
          {achievement?.percentage ? "%" : "+"}
        </span>
        <p
          ref={magicElement}
          className={"lg:text-lg md:text-base text-xs text-dark-blue"}
        >
          {achievement.title}
        </p>
      </div>
    </div>
  );
};
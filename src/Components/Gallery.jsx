import { Article } from "./Partials/Article.jsx";
import { Container } from "./Partials/Container.jsx";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { forwardRef, useEffect, useRef } from "react";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
export const Gallery = forwardRef(({ ...props }, ref) => {
  const mainRef = useRef();
  const thumbsRef = useRef();

  useEffect(() => {
    mainRef.current.sync(thumbsRef.current.splide);
  }, []);
  const images = [
    // "gallery1.jpg",
    "gallery2.webp",
    "gallery3.webp",
    "gallery4.webp",
    "zdj1.webp",
    "zdj2.webp",
  ];

  const mainOptions = {
    type: "loop",
    drag: true,
    gap: "2rem",
    perPage: 3,
    perMove: 1,
    autoplay: true,
    pagination: false,
    pauseOnHover: true,
    resetProgress: false,
    rewindSpeed: 800,
    rewind: true,
    contain: true,
    width: "auto",
    height: "auto",
    breakpoints: {
      640: {
        perPage: 1,
        perMove: 1,
        width: "auto",
        height: "60vh",
      },
      1280: {
        perPage: 2,
        perMove: 1,
        gap: "2rem",
      },
    },
  };

  const thumbnailsOptions = {
    type: "slide",
    rewind: true,
    gap: ".25em",
    pagination: false,
    fixedWidth: "10rem",
    fixedHeight: "6rem",
    cover: true,
    focus: "center",
    isNavigation: true,
    arrows: false,
  };

  const renderImages = () => {
    return images.map((image, key) => (
      <SplideSlide key={key} className={"rounded-md overflow-hidden"}>
        <img
          className={"rounded-md"}
          src={`./gallery/${image}`}
          alt={""}
        />
      </SplideSlide>
    ));
  };

  return (
    <Container
      ref={ref}
      className={
        "relative md:mx-h-screen h-auto xl:flex items-center justify-center"
      }
    >
      <Article
        title={"Przykładowe realizacje"}
        className={"items-center sm:gap-4 gap-2"}
      >
        <Splide
          ref={mainRef}
          options={mainOptions}
          className={"w-full cursor-grab active:cursor-grabbing relative "}
          hasTrack={false}
        >
          <SplideTrack>{renderImages()}</SplideTrack>
          <div className="splide__progress bg-white h-[.5rem] rounded mt-4">
            <div className="splide__progress__bar bg-dark-blue h-[.5rem] rounded" />
          </div>
          <div className="splide__arrows absolute left-0 w-full flex items-center justify-between top-1/2 -translate-y-1/2">
            <button className="splide__arrow--prev relative lg:w-[3rem] w-[2.5rem] aspect-square bg-light-orange hover:bg-dark-orange  rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faAngleRight}
                className={"text-2xl font-bold text-dark-blue"}
              />
            </button>{" "}
            <button className="splide__arrow--next relative lg:w-[3rem] w-[2.5rem] aspect-square bg-light-orange hover:bg-dark-orange rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faAngleRight}
                className={"text-2xl font-bold text-dark-blue"}
              />
            </button>
          </div>
        </Splide>
        <Splide
          hasTrack={false}
          ref={thumbsRef}
          options={thumbnailsOptions}
          className={
            "w-full md:w-2/3 sm:w-1/2 bg-dark-blue p-2 rounded thumbnails"
          }
        >
          <SplideTrack>{renderImages()}</SplideTrack>
        </Splide>
      </Article>
    </Container>
  );
});
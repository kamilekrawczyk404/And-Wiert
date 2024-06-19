"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useContext, useEffect, useRef } from "react";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { SiteDetailsContext } from "../utils/providers/SiteDetailsProvider";
import { Container } from "./Container";
import { ArticleSection } from "./ArticleSection";
import { motion } from "framer-motion";

export const Gallery = () => {
  const { alt, motionVariants } = useContext(SiteDetailsContext);

  const mainRef = useRef();
  const thumbsRef = useRef();

  useEffect(() => {
    mainRef.current.sync(thumbsRef.current.splide);
  }, []);
  const images = [
    "gallery2.webp",
    "gallery3.webp",
    "gallery4.webp",
    "gallery5.webp",
    "zdj1.webp",
    "zdj2.webp",
  ];

  const mainOptions = {
    type: "loop",
    drag: true,
    gap: "1rem",
    perPage: 3,
    perMove: 1,
    autoplay: true,
    pagination: false,
    pauseOnHover: true,
    resetProgress: false,
    rewindSpeed: 800,
    rewind: true,
    contain: true,
    center: true,
    width: "auto",
    height: "auto",
    breakpoints: {
      640: {
        perPage: 1,
        perMove: 1,
      },
      1028: {
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
      <SplideSlide
        key={key}
        className={
          "rounded-md overflow-hidden flex justify-center items-center"
        }
      >
        <motion.img
          initial={motionVariants.hidden}
          animate={motionVariants.visible}
          className={"rounded-md h-full w-full"}
          src={`./images/gallery/${image}`}
          alt={alt}
        />
      </SplideSlide>
    ));
  };

  return (
    <Container
      ref={(element) => pageRefs.current.push(element)}
      className={"relative xl:flex items-center justify-center"}
    >
      <ArticleSection
        title={"Przykładowe realizacje studni głebinowych"}
        className={"justify-center items-center sm:gap-2 gap-1"}
      >
        <Splide
          ref={mainRef}
          options={mainOptions}
          className={"w-full cursor-grab active:cursor-grabbing relative "}
          hasTrack={false}
        >
          <SplideTrack>{renderImages()}</SplideTrack>
          <div className="splide__progress bg-dark-orange flex items-center h-[1rem] rounded mt-4">
            <div className="splide__progress__bar !bg-dark-blue mx-1 !h-[0.5rem] rounded" />
          </div>
          <div className="splide__arrows absolute left-0 w-full flex items-center justify-between top-1/2 -translate-y-1/2">
            <button
              className="splide__arrow--prev relative lg:w-[3rem] w-[2.5rem] aspect-square bg-light-orange hover:bg-dark-orange  rounded-full flex items-center justify-center"
              title={"Przewiń wstecz"}
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                className={"text-2xl font-bold text-dark-blue"}
              />
            </button>
            <button
              className="splide__arrow--next relative lg:w-[3rem] w-[2.5rem] aspect-square bg-light-orange hover:bg-dark-orange rounded-full flex items-center justify-center"
              title={"Przewiń w przód"}
            >
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
      </ArticleSection>
    </Container>
  );
};

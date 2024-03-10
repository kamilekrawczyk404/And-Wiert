import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { Link } from "./Partials/Link.jsx";
import { SlideDownIndicator } from "./Partials/SlideDownIndicator.jsx";
import { Container } from "./Partials/Container.jsx";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Animation from "../Classes/Animation.js";
import { ComponentContext } from "../Providers/ComponentContext.jsx";

export const Hero = () => {
  const { contactDetails, userScrolled, scrollToTheElement, alternativeText } =
    useContext(ComponentContext);

  const TIMEOUT = 5000;
  const images = ["main1.webp", "main2.webp", "main3.webp"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesRefs = useRef([]);
  const containerRef = useRef(null);

  const changeImage = new Animation(imagesRefs.current);

  useEffect(() => {
    let changeIndex = setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

      changeImage.animateHeroImage(
        currentIndex,
        currentIndex + 1 === images.length ? 0 : currentIndex + 1,
      );
    }, TIMEOUT);

    return () => {
      clearTimeout(changeIndex);
    };
  }, [currentIndex]);

  useLayoutEffect(() => {
    const animateContainer = new Animation([containerRef.current]);

    animateContainer.animateAll("", "-.2");
  }, []);

  return (
    <main
      className={"relative sm:h-[calc(100vh-9rem)] h-[calc(100vh-8rem)] w-full"}
    >
      <div
        className={
          "relative sm:h-[calc(100vh-9rem)] h-[calc(100vh-8rem)] w-full"
        }
      >
        {images.map((image, index) => (
          <img
            key={index}
            ref={(element) => (imagesRefs.current[index] = element)}
            src={`./images/hero/${image}`}
            className={
              "hero-image absolute top-0 left-0 h-full w-full " +
              (index === 0 ? "opacity-100" : "opacity-0")
            }
            alt={
              alternativeText.text +
              ", czysta kropla wody, czysta woda, błekitna woda, nieskazitelnie czysta woda"
            }
          />
        ))}
        <div
          className={
            "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.3)] to-transparent"
          }
        ></div>
      </div>

      <Container
        ref={containerRef}
        className={
          "absolute lg:top-1/3 md:top-[40%] top-1/2 lg:-translate-y-1/3 md:-translate-y-[40%] -translate-y-1/2 flex justify-center items-center opacity-0 -translate-x-12"
        }
      >
        <div className={"relative h-[50vh]"}>
          <div
            className={
              "absolute top-0 left-0 lg:w-20 md:w-20 w-16 h-[50vh] bg-dark-blue rounded-sm"
            }
          ></div>
          <div
            className={
              "absolute left-0 bottom-1/4 translate-y-1/4 w-fit md:h-[5rem] h-[4rem] bg-dark-blue flex flex-row items-center justify-center rounded-r-sm"
            }
          >
            <div
              className={
                "bg-dark-orange md:h-[5rem] h-[4rem] aspect-square flex items-center justify-center"
              }
            >
              <Link
                href={`mailto:${contactDetails.telephone}`}
                title={"Napisz do nas!"}
              >
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className={"text-dark-blue md:text-3xl text-2xl"}
                />
              </Link>
            </div>
            <Link
              href={`tel:+48${contactDetails.telephone}`}
              title={"Zadzwoń do nas!"}
            >
              <p
                className={
                  "text-gray-100 md:text-3xl sm:text-2xl text-xl whitespace-nowrap md:px-8 sm:px-4 px-2 flex sm:flex-row flex-col sm:p-0 p-2 justify-center items-center"
                }
              >
                <span>Zadzwoń do nas </span>
                <span
                  className={
                    "md:ml-6 sm:ml-4 ml-0 text-dark-orange font-semibold"
                  }
                >
                  {contactDetails.telephone}
                </span>
              </p>
            </Link>
          </div>
        </div>

        <div className={"relative md:left-6 left-4 -translate-y-1/2"}>
          <div
            className={
              "relative z-10 flex flex-col gap-4 bg-gradient-to-r from-gray-100 via-80% via-[rgba(255,255,255,0.9)] rounded p-4 w-full"
            }
          >
            <h1
              className={
                "text-dark-blue lg:text-5xl md:text-4xl text-3xl font-bold"
              }
            >
              Studnie głębinowe<p className={"text-dark-orange"}>And-Wiert</p>
            </h1>
            <p
              className={
                "text-dark-blue z-10 lg:text-xl md:text-lg sm:text-md text-sm lg:w-[80%] md:w-[90%] w-full"
              }
            >
              Doświadczona firma, specjalizującą się w dostarczaniu
              profesjonalnych usług z zakresu pozyskiwania wody.
            </p>
          </div>
        </div>
      </Container>
      {!userScrolled && (
        <SlideDownIndicator handleScroll={scrollToTheElement} />
      )}
    </main>
  );
};
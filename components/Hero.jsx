import React, { useContext } from "react";
import { Container } from "./Container";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { SiteDetailsContext } from "../utils/providers/SiteDetailsProvider";
import { Icon } from "./Icon";

const Hero = ({ currentIndex }) => {
  const heroTexts = [
    "Doświadczona firma, specjalizującą się w dostarczaniu profesjonalnych usług z zakresu pozyskiwania wody.",
    "Zaufaj ekspertom w wydobywaniu krystalicznie czystej wody – nasza firma specjalizuje się w precyzyjnym i efektywnym wierceniu studni głębinowych.",
    "Zapewnij sobie dostęp do naturalnej wody ze sprawdzonych źródeł – nasze nowoczesne metody wiercenia studni głębinowych gwarantują satysfakcję i bezpieczeństwo!",
  ];

  const { contact } = useContext(SiteDetailsContext);
  const barsWidth = "lg:w-32 md:w-28 w-20";
  const barsHeight = "lg:h-32 md:h-28 h-20";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: "-10%",
        y: "0%",
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        opacity: 1,
        x: "0%",
        translateX: "-50%",
      }}
      transition={{
        type: "spring",
        duration: 0.25,
        stiffness: 50,
      }}
      className={
        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-full h-full"
      }
    >
      <Container
        className={
          "relative h-full  w-full flex flex-col justify-center gap-12"
        }
      >
        <div
          className={`absolute top-0 h-full bg-dark-blue rounded-sm ${barsWidth} `}
        />

        <div
          className={
            "z-10 flex flex-col justify-between gap-4 bg-gradient-to-r from-gray-100 to-gray-100 sm:bg-gradient-to-r sm:from-gray-100 sm:via-80% sm:via-[rgba(255,255,255,0.9)] lg:p-8 md:p-6 p-4 xl:w-[90%] w-full"
          }
        >
          <h1
            className={
              "text-dark-blue xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold"
            }
          >
            Studnie głębinowe<p className={"text-dark-orange"}>And-Wiert</p>
          </h1>
          <AnimatePresence>
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: 10,
                position: "absolute",
                transition: { duration: 0 },
              }}
              className={
                "text-dark-blue z-10 xl:text-xl sm:text-lg text-sm lg:w-[80%] md:w-[90%] w-full"
              }
            >
              {heroTexts[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div
          className={`w-full bg-dark-blue flex flex-row items-center rounded-r-sm z-10 ${barsHeight}`}
        >
          <div
            className={`w-fit justify-self-start bg-dark-orange aspect-square flex items-center justify-center ${barsHeight} `}
          >
            <Link href={contact.email.href} title={"Zadzwoń do nas!"}>
              <Icon.RingingPhone
                className={"text-dark-blue lg:text-4xl md:text-3xl text-2xl"}
              />
            </Link>
          </div>

          <Link
            href={contact.phone.href}
            title={"Zadzwoń do nas!"}
            className={
              "h-full mx-auto bg-dark-orange text-dark-blue md:text-3xl sm:text-2xl text-xl md:px-8 sm:px-4 px-2 flex sm:p-0 justify-center items-center whitespace-nowrap gap-2"
            }
          >
            <span>Zadzwoń do nas</span>
            <span className={"bg-gray-100 p-2 rounded-sm font-semibold w-full"}>
              {contact.phone.value}
            </span>
          </Link>
        </div>
      </Container>
    </motion.div>
  );
};

export default Hero;

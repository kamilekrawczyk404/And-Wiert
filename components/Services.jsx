import React from "react";
import { ArticleSection } from "./ArticleSection";
import { Container } from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const services = [
    { title: "Fachowe doradztwo" },
    { title: "Indywidualne podejście do każdego klienta" },
    { title: "Oględziny i badanie terenu" },
    { title: "Wykonanie odwiertu" },
    { title: "Montaż rur studziennych" },
    { title: "Dobór odpowiedniej pompy głębinowej" },
    { title: "Czyszczenie i serwis studni" },
    { title: "Wykonanie przyłącza wodociągowego do budynku" },
  ];

  return (
    <Container
      className={
        "relative xl:h-screen min-h-fit flex lg:flex-row flex-col items-center justify-between lg:gap-[15%] xl:gap-[20%] bg-white"
      }
    >
      <motion.aside
        initial={{ opacity: 0, translateX: "-2rem" }}
        whileInView={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{
          delay: 0.5,
          type: "spring",
        }}
        viewport={{
          once: true,
        }}
        className={
          "xl:w-1/2 w-full xl:-translate-y-[15%] self-center translate-y-0 xl:block hidden justify-around"
        }
      >
        <div
          className={
            "hover:border-dark-orange border-dark-blue border-[.5rem] absolute top-0 left-0 w-[18vw] h-[50vh] block rounded transition-all hover:z-20 hover:scale-105 hover:cursor-pointer"
          }
        >
          <Image
            src={"/images/gallery/zdj2.webp"}
            alt={""}
            layout={"fill"}
            objectFit={"cover"}
            title={"Przykładowa realizacja u klienta"}
          />
        </div>
        <div
          className={
            "translate-x-1/3 translate-y-[20%] border-[.5rem] transition-all border-white hover:border-dark-orange rounded w-[18vw] h-[50vh] hover:z-20 hover:scale-105 hover:cursor-pointer"
          }
        >
          <Image
            src={"/images/gallery/zdj1.webp"}
            alt={""}
            layout={"fill"}
            objectFit={"cover"}
            title={"Przykładowa realizacja u klienta"}
          />
        </div>
      </motion.aside>
      <ArticleSection
        title={"Czym się zajmujemy?"}
        header={
          "Jesteśmy zespołem doświadczonych specjalistów, gotowych dostarczyć Państwu najwyższej jakości usług."
        }
        description={
          "Oferujemy Państwu profesjonalne wykonanie prac, dzięki którym zostaną spełnione Wasze wszystkie oczekiwania. Wykonujemy odwierty na obrębie całego województwa małopolskiego oraz podkaparckiego. Działamy z pasją, aby zapewnić dostęp do czystej i zdrowej wody dla domów, gospodarstw rolnych oraz firm. Zapewniamy Państwu:"
        }
        aspects={services}
      />
    </Container>
  );
};

export default Services;

import { Article } from "./Partials/Article.jsx";
import { Container } from "./Partials/Container.jsx";
import { forwardRef, useContext, useLayoutEffect, useRef } from "react";
import Animation from "../Classes/Animation.js";
import { ComponentContext } from "../Providers/ComponentContext.jsx";

export const Services = () => {
  const { pageRefs, alternativeText } = useContext(ComponentContext);
  const imagesRef = useRef(null);

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

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      // Start counting when user's scrolled to the element
      if (entry.isIntersecting) {
        const imagesAnimation = new Animation([imagesRef.current]);
        imagesAnimation.animateAll("", "-.2");
      }
    });

    observer.observe(imagesRef.current);
  }, []);

  return (
    <Container
      ref={(element) => pageRefs.current.push(element)}
      className={
        "relative xl:h-screen flex lg:flex-row flex-col items-center justify-between lg:gap-[15%] xl:gap-[20%]"
      }
    >
      <aside
        ref={imagesRef}
        className={
          "xl:w-1/2 w-full xl:-translate-y-[15%] self-center translate-y-0 xl:block hidden justify-around opacity-0 -translate-x-12"
        }
      >
        <img
          className={
            "hover:border-dark-orange border-dark-blue border-[.5rem] absolute top-0 left-0 max-w-[18vw] block rounded transition-all h-auto hover:z-20 hover:scale-105 hover:cursor-pointer"
          }
          src="./images/gallery/zdj2.webp"
          alt={alternativeText.text}
          title={"Przykładowa realizacja u klienta"}
        />
        <img
          className={
            "translate-x-1/3 translate-y-[40%] border-[.5rem] transition-all border-white hover:border-dark-orange rounded max-w-[18vw] h-auto hover:z-20 hover:scale-105 hover:cursor-pointer"
          }
          src="./images/gallery/zdj1.webp"
          alt={alternativeText.text}
          title={"Przykładowa realizacja u klienta"}
        />
      </aside>
      <Article
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
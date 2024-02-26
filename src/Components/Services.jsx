import { Article } from "./Partials/Article.jsx";
import { Container } from "./Partials/Container.jsx";
import { forwardRef, useLayoutEffect, useRef } from "react";
import Animation from "../Classes/Animation.js";

export const Services = forwardRef(({ ...props }, ref) => {
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

  const imagesRef = useRef(null);

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
      ref={ref}
      className={
        "relative xl:h-screen flex lg:gap-48 gap-8 lg:flex-row flex-col items-center justify-center"
      }
      {...props}
    >
      <aside
        ref={imagesRef}
        className={
          "lg:w-1/2 w-full lg:-translate-y-[15%] self-center translate-y-0 xl:block hidden justify-around opacity-0 -translate-x-12"
        }
      >
        <img
          className={
            "hover:border-dark-orange border-dark-blue border-[.5rem] absolute top-0 left-0 max-w-[18rem] block rounded transition-all h-auto hover:z-20 hover:scale-105"
          }
          src="./zdj2.jpg"
          alt="zdj"
        />
        <img
          className={
            "translate-x-1/3 translate-y-[40%] border-[.5rem] transition-all border-white hover:border-dark-orange rounded max-w-[18rem] h-auto hover:z-20 hover:scale-105 "
          }
          src="./zdj1.jpg"
          alt="zdj"
        />
      </aside>
      <Article
        title={"Czym się zajmujemy?"}
        header={
          "Jesteśmy zespołem doświadczonych specjalistów, gotowych dostarczyć Państwu najwyższej jakości usługi."
        }
        description={
          "Oferujemy Państwu profesjonalne wykonanie prac, dzięki którym zostaną spełnione Wasze wszystkie oczekiwania. Wykonujemy odwierty na obrębie całego województwa małopolskiego oraz podkaparckiego. Działamy z pasją, aby zapewnić dostęp do czystej i zdrowej wody dla domów, gospodarstw rolnych oraz firm. Zapewniamy Państwu:"
        }
        aspects={services}
      />
    </Container>
  );
});
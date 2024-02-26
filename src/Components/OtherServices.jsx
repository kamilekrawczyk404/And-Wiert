import { Container } from "./Partials/Container.jsx";
import { Article } from "./Partials/Article.jsx";
import { forwardRef, useLayoutEffect, useRef } from "react";
import Animation from "../Classes/Animation.js";

export const OtherServices = forwardRef(({ ...props }, ref) => {
  const aspects = [
    {
      title:
        "Nasza auto laweta to efektywny sposób na transport większych ilości sprzętu w jednym przejeździe,",
    },
    {
      title: "Oferujemy konkurencyjne ceny, dostosowane do Twoich potrzeb,",
    },
    {
      title:
        "Nasz pojazd wyposażony jest w odpowiednie zabezpieczenia, aby każdy element został dostarczony w nienaruszonym stanie",
    },
    {
      title:
        "Przewieziemy wszelkiego rodzaju pojazdy, rzeczy (samochody osobowe, rolnicze, inne ciężkie urządzenia)",
    },
  ];

  const imagesRef = useRef(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        const animation = new Animation([imagesRef.current]);
        animation.animateAll("", "-.2");
      }
    });
    observer.observe(imagesRef.current);
  });
  return (
    <Container
      ref={ref}
      className={
        "relative lg:h-screen md:max-h-screen flex flex-col 2xl:gap-[25%] xl:gap-[20%] h-auto xl:flex-row"
      }
      {...props}
    >
      <Article
        className={"xl:w-4/5 2xl:w-full"}
        title={"Usługi transportowe - Auto Laweta"}
        header={"Zapewnij wygodny transport z naszą Auto Lawetą"}
        description={
          "Oferujemy kompleksowe usługi transportowe realizowane auto lawetą, zapewniającą nie tylko bezpieczny przewóz, ale także pełen profesjonalizm i komfort. Dlaczego warto skorzystać z naszej usługi transportowej?"
        }
        aspects={aspects}
      />
      <div
        ref={imagesRef}
        className={
          "relative h-full w-full xl:block flex items-center justify-center opacity-0 translate-x-12"
        }
      >
        <img
          className={
            "xl:absolute xl:-left-2/3 xl:top-[30%] xl:border-[.5rem] xl:border-dark-blue xl:hover:border-dark-orange xl:max-w-[30vw] xl:block hidden rounded h-auto hover:z-10 hover:scale-[1.025] transition-all hover:cursor-pointer"
          }
          src="./carTransport/car_transport2.jpg"
          alt="zdj"
        />
        <img
          className={
            "xl:absolute xl:top-1/2 xl:-left-1/3 xl:hover:border-dark-orange xl:border-[.5rem] lg:border-white rounded xl:max-w-[35vw] lg:max-w-[50vw] sm:max-w-[75vw] h-auto hover:z-10 sm:hover:scale-105 hover:scale-[1.025] transition-all lg:mx-0 mx-auto md:mb-12 mb-4 hover:cursor-pointer"
          }
          src="./carTransport/car_transport1.jpg"
          alt="zdj"
        />
      </div>
    </Container>
  );
});
import { Container } from "./Partials/Container.jsx";
import { Article } from "./Partials/Article.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import Animation from "../Classes/Animation.js";
import { ComponentContext } from "../Providers/ComponentContext.jsx";

export const DiggingStages = () => {
  const { pageRefs, alternativeText } = useContext(ComponentContext);

  const [active, setActive] = useState(0);

  const stages = [
    {
      title: "Analiza Terenu",
      description: [
        {
          text: "Zanim przystąpimy do wiercenia, dokładnie analizujemy teren pod kątem geologicznym i hydrogeologicznym,",
        },
        {
          text: "Te szczegółowe badania pozwalają nam zidentyfikować warstwy wodonośne, określić rodzaj gruntu oraz uniknąć ewentualnych trudności podczas wiercenia.",
        },
        {
          text: "To pozwala nam określić optymalną lokalizację studni, minimalizując ryzyko problemów z jakością wody czy trudnościami w procesie wiercenia,",
        },
      ],
    },
    {
      title: "Wiercenie Studni Głębinowej",
      description: [
        {
          text: "Wykorzystujemy nowoczesny sprzęt wiertniczy, który umożliwia precyzyjne wiercenie studni o różnych średnicach i głębokościach,",
        },
        {
          text: "Pracujemy zgodnie z najwyższymi standardami, dbając o ochronę środowiska i zapewniając bezpieczeństwo wykonawcze,",
        },
        {
          text: "Dbamy o to, aby studnia była wywiercona na odpowiednią głębokość, zapewniającą dostęp do zdatnej do spożycia wody.",
        },
      ],
    },
    {
      title: "Przyłącze wodociągowe",
      description: [
        {
          text: "Zapewniamy kompleksową budowę instalacji wodociągowej, łącznie z pompami, zbiornikami i systemami uzdatniania wody.",
        },
      ],
    },
    {
      title: "Naprawa i Konserwacja Studni",
      description: [
        {
          text: "Po zakończeniu prac, oferujemy usługi monitoringu oraz regularnej konserwacji, aby zapewnić długotrwałą i niezawodną eksploatację studni.",
        },
      ],
    },
  ];

  const stagesRefs = useRef([]);

  useLayoutEffect(() => {
    stagesRefs.current.forEach((stage) => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const animation = new Animation([stage]);
          animation.animateAll("", "-.2");
        }
      });
      observer.observe(stage);
    });
  }, []);

  return (
    <Container
      asLayoutComponent={true}
      ref={(element) => pageRefs.current.push(element)}
      className={"relative flex items-center justify-center"}
    >
      <Article title={"Etapy wykonywania studni głebinowej"}>
        {stages.map((stage, index) => (
          <div
            ref={(element) => (stagesRefs.current[index] = element)}
            key={index}
            className={"relative opacity-0 -translate-x-24 overflow-hidden"}
          >
            <button
              className={
                "bg-dark-blue text-gray-100 rounded p-2 flex items-center gap-2 w-full"
              }
              onClick={() => {
                setActive((prev) => (prev === index ? -1 : index));
              }}
              title={"Kliknij by rozwinąć okno"}
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                className={
                  "text-xl transform transition origin-center " +
                  (active === index ? "rotate-90" : "rotate-0")
                }
              />
              <h2 className={"md:text-xl text-lg font-bold"}>{stage.title}</h2>
            </button>

            <div
              className={
                "flex items-center justify-center relative transition-all duration-[.75s] ease-in-out " +
                (active === index
                  ? "h-auto opacity-1 p-4 "
                  : "h-0 overflow-hidden opacity-0 p-0 ") +
                (index === 1 || index === 0
                  ? "flex-col mx-auto"
                  : "flex-col lg:flex-row")
              }
            >
              <ul
                className={
                  "text-gray-700 list-disc list-inside md:w-1/2 w-full space-y-2  " +
                  (index === 1 ? "hidden" : "block")
                }
              >
                {stage.description.map((element, index) => (
                  <li key={index}>{element.text}</li>
                ))}
              </ul>

              {index !== 1 ? (
                <img
                  className={
                    "rounded h-auto sm:w-[100vw] " +
                    (index === 0
                      ? "xl:w-[50vw] lg:w-[70vw] md:w-[80vw]"
                      : "xl:w-[30vw] lg:w-[50vw] md:w-[60vw]")
                  }
                  src={`./images/diggingStages/stages${index + 1}.webp`}
                  alt={alternativeText.text}
                />
              ) : (
                <video
                  className={"xl:h-[48vh] h-auto rounded"}
                  src={`./images/diggingStages/stages${index + 1}.mp4`}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  controls={true}
                  title={
                    "Wideo prezentujące przykładową realizacje wykonania studni głębinowej"
                  }
                />
              )}
            </div>
          </div>
        ))}
      </Article>
    </Container>
  );
};
import { Container } from "./Partials/Container.jsx";
import { Article } from "./Partials/Article.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useLayoutEffect, useRef, useState } from "react";
import Animation from "../Classes/Animation.js";

export const DiggingStages = forwardRef(({ ...props }, ref) => {
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
      title: "Badanie Wód Podziemnych",
      description: [
        {
          text: "Przeprowadzamy precyzyjne badania jakości wód podziemnych, analizując ich skład chemiczny i mikrobiologiczny,",
        },
        {
          text: "Oceniamy poziom zanieczyszczeń, aby zagwarantować, że woda spełnia wszystkie normy i jest bezpieczna do spożycia.",
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
      title: "Projektowanie i Budowa Systemów Wodociągowych",
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
      ref={ref}
      className={
        "relative lg:h-screen md:max-h-screen h-auto flex items-center"
      }
      {...props}
    >
      <Article title={"Etapy wykonywania studni głebinowej"}>
        {stages.map((stage, index) => (
          <div
            ref={(element) => (stagesRefs.current[index] = element)}
            key={index}
            className={"relative opacity-0 -translate-x-24"}
          >
            <button
              className={
                "bg-dark-blue text-gray-100 rounded p-2 flex items-center gap-2 w-full"
              }
              onClick={() => {
                setActive((prev) => (prev === index ? -1 : index));
              }}
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                className={
                  "text-xl transform transition origin-center " +
                  (active === index ? "rotate-90" : "rotate-0")
                }
              />
              <h1 className={"md:text-xl text-lg font-bold"}>{stage.title}</h1>
            </button>

            <div
              className={
                "transition-all duration-[.75s] ease-in-out flex items-center " +
                (active === index
                  ? "h-[50vh] opacity-1"
                  : "h-0 overflow-hidden opacity-0")
              }
            >
              <div
                className={
                  "p-4 flex items-start justify-around gap-4 " +
                  (index === 2 ? "flex-row" : "flex-col md:flex-row")
                }
              >
                <ul
                  className={
                    "text-gray-700 list-disc list-inside md:w-1/2 w-full space-y-2"
                  }
                >
                  {stage.description.map((element, index) => (
                    <li key={index}>{element.text}</li>
                  ))}
                </ul>

                {index !== 2 ? (
                  <img
                    className={"rounded md:w-[40vw] w-[75vw] h-auto mx-auto"}
                    src={`public/diggingStages/stages${index + 1}.jpg`}
                    alt={`Stage_${index}`}
                  />
                ) : (
                  <video
                    className={"h-[48vh] rounded"}
                    src={`public/diggingStages/stages${index + 1}.mp4`}
                    autoPlay={true}
                    muted={true}
                    loop={true}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </Article>
    </Container>
  );
});
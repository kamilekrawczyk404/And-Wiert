"use client";
import { Container } from "../../../components/Container";
import { usePathname } from "next/navigation";
import { blogPosts } from "../../../utils/blogPosts";
import Image from "next/image";
import { useEffect, useState } from "react";
import PostBasicInfo from "../../../components/PostBasicInfo";
import PostTitle from "../../../components/PostTitle";
import StaggerList from "../../../components/StaggerList";
import { motion } from "framer-motion";
import HorizontalLine from "../../../components/HorizontalLine";

export default function Page({ params }) {
  const [post, setPost] = useState({});
  const pathname = usePathname();
  const id = pathname.toString().substring(pathname.lastIndexOf("/") + 1);

  const diggingStages = [
    {
      title: "Analiza terenu",
      descriptions: [
        "Zanim przystąpimy do wiercenia, dokładnie analizujemy teren pod kątem geologicznym i hydrogeologicznym,",
        "Zazwyczaj wiercone są na głębokość od kilkudziesięciu do kilkuset metrów, co pozwala na dotarcie do warstw wodonośnych, które są chronione przed zanieczyszczeniami powierzchniowymi. Woda z takich głębokości jest często bardzo czysta i ma stabilną jakość przez cały rok,",
        "Te szczegółowe badania pozwalają nam zidentyfikować warstwy wodonośne, określić rodzaj gruntu oraz uniknąć ewentualnych trudności podczas wiercenia.",
      ],
      imageSrc: "terrainAnalyze.webp",
    },
    {
      title: "Wiercenie studni głębinowej",
      descriptions: [
        "Wykorzystujemy nowoczesny sprzęt wiertniczy, który umożliwia precyzyjne wiercenie studni o różnych średnicach i głębokościach,",
        "Pracujemy zgodnie z najwyższymi standardami, dbając o ochronę środowiska i zapewniając bezpieczeństwo wykonawcze,",
        "Dbamy o to, aby studnia była wywiercona na odpowiednią głębokość, zapewniającą dostęp do zdatnej do spożycia wody.",
      ],
      imageSrc: "wellDigging.mp4",
    },
    {
      title: "Przyłącze wodociągowe",
      descriptions: [
        "Po osiągnięciu odpowiedniej głębokości i warstwy wodonośnej, studnię obudowuje się rurami osłonowymi, które zapobiegają osypywaniu się ścian otworu oraz chronią wodę przed zanieczyszczeniami z powierzchni",
        "Zapewniamy kompleksową budowę instalacji wodociągowej, łącznie z pompami, zbiornikami i systemami uzdatniania wody,",
        "Po zakończeniu wiercenia studnię poddaje się testom wydajnościowym, które mają na celu określenie jej zdolności do dostarczania wody. Następnie instaluje się pompę oraz inne niezbędne wyposażenie, takie jak zbiorniki na wodę i systemy filtracyjne.",
      ],
      imageSrc: "waterSupplyConnection.webp",
    },
    {
      title: "Naprawa i konserwacja studni",
      descriptions: [
        "Po zakończeniu prac, oferujemy usługi monitoringu oraz regularnej konserwacji, aby zapewnić długotrwałą i niezawodną eksploatację studni.",
      ],
      imageSrc: "repairingAndConservation.webp",
    },
  ];

  // Korzyści z Posiadania Studni Głębinowej
  // Niezależność od Publicznej Sieci Wodociągowej: Posiadanie własnej studni daje niezależność od miejskich dostaw wody, co jest szczególnie cenne w obszarach o niestabilnym zaopatrzeniu w wodę.
  //     Lepsza Jakość Wody: Woda z głębin jest zazwyczaj wolna od zanieczyszczeń chemicznych i mikrobiologicznych, co sprawia, że jest zdrowsza i smaczniejsza.
  //     Oszczędności Finansowe: Choć wiercenie studni wymaga początkowych inwestycji, w dłuższej perspektywie może przynieść znaczne oszczędności, eliminując comiesięczne rachunki za wodę.

  const postBody = [
    {
      title: "Wstęp",
      content:
        "Wiercenie studni głębinowej to proces, który może wydawać się skomplikowany i pełen wyzwań, ale dla wielu osób jest to kluczowy krok w zapewnieniu sobie dostępu do czystej i niezawodnej wody. Niezależnie od tego, czy planujesz wiercić studnię na własnej posesji, czy chcesz zgłębić wiedzę na temat najnowszych technologii w tej dziedzinie, nasz dzisiejszy wpis dostarczy Ci niezbędnych informacji.",
      imageSrc: "",
    },
    {
      title: "Czym są studnie głębinowe?",
      content:
        "Studnie głębinowe to ujęcia wody podziemnej, które sięgają znacznie głębiej niż tradycyjne studnie kopane. Zazwyczaj wiercone są na głębokość od kilkudziesięciu do kilkuset metrów, co pozwala na dotarcie do warstw wodonośnych, które są chronione przed zanieczyszczeniami powierzchniowymi. Woda z takich głębokości jest często bardzo czysta i ma stabilną jakość przez cały rok.",
      imageSrc: "",
    },
    {
      title: "Etapy wykonywania studni głębinowej",
      content: diggingStages.map((stage, index) => (
        <div
          className={"relative flex flex-col gap-4 my-4 w-full overflow-hidden"}
          key={index}
        >
          <h3 className={"text-3xl text-dark-orange"}>
            {index + 1 + "# "}
            {stage.title}
          </h3>
          <section
            className={`relative flex md:flex-row flex-col-reverse gap-8 min-h-[25rem] md:p-8 p-0 w-full backdrop-filter ${
              index % 2 === 0 && "flex-row-reverse"
            }`}
          >
            <div className={"relative md:w-1/2 w-full md:h-[30rem] h-[15rem]"}>
              {stage.imageSrc !== "wellDigging.mp4" ? (
                <Image
                  layout={"fill"}
                  objectFit={"cover"}
                  loading={"lazy"}
                  className={"rounded h-[20rem]]"}
                  src={`/images/diggingStages/${stage.imageSrc}`}
                  alt={stage.title}
                  title={stage.title}
                />
              ) : (
                <video
                  preload={"none"}
                  className={"rounded h-full mx-auto"}
                  src={`/images/diggingStages/${stage.imageSrc}`}
                  autoPlay={true}
                  muted={true}
                  controls={true}
                  title={
                    "Wideo prezentujące przykładową realizacje wykonania studni głębinowej"
                  }
                />
              )}
            </div>

            <StaggerList
              inView={true}
              className={
                "md:w-1/2 w-full flex flex-col md:gap-4 gap-2 self-center"
              }
              items={stage.descriptions.map((description, index) => (
                <p
                  key={index}
                  className={
                    "relative before:absolute before:left-0 before:top-2 before:w-2 before:aspect-square before:bg-dark-orange before:rounded indent-4"
                  }
                >
                  {description}
                </p>
              ))}
            />
          </section>
          <HorizontalLine />
        </div>
      )),
    },
    {
      title: "Wyzwania i Uwagi",
      content:
        "Wiercenie studni głębinowej to proces skomplikowany i wymagający, który może napotkać na różne trudności, takie jak twarde skały czy nieprzewidywalne warunki geologiczne. Ważne jest, aby współpracować z doświadczonymi specjalistami, którzy posiadają odpowiednią wiedzę i sprzęt, aby skutecznie przeprowadzić cały proces.",
    },
    {
      title: "Podsumowanie",
      content:
        "Wiercenie studni głębinowej to inwestycja, która może przynieść liczne korzyści, takie jak niezależność wodna, lepsza jakość wody oraz oszczędności. Choć proces ten jest skomplikowany i wymaga starannego planowania, korzyści płynące z posiadania własnego źródła czystej wody są bezcenne. Współpraca z doświadczonymi fachowcami oraz dokładne badania geologiczne to klucz do sukcesu każdej studni głębinowej.",
    },
  ];

  useEffect(() => {
    setPost(...blogPosts.filter((post) => post.id === id));
  }, []);

  return (
    Object.keys(post).length && (
      <>
        <div className={"relative h-[30rem] group overflow-hidden"}>
          <Image
            className={
              "absolute group-hover:scale-[1.05] transition duration-800 brightness-50"
            }
            layout={"fill"}
            objectFit={"cover"}
            src={post.imageSrc}
            alt={post.title}
          />
          <div
            className={
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-sm shadow-md p-8 w-full "
            }
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -10,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className={
                "flex items-center justify-center flex-col gap-4 w-fit mx-auto"
              }
            >
              <PostBasicInfo props={post} className={"self-start"} />
              <h1 className={"z-10 text-5xl font-semibold text-dark-orange"}>
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
        <Container
          className={
            "bg-white py-8 text-dark-blue flex flex-col md:gap-8 gap-4"
          }
        >
          {postBody.map((item, index) => (
            <motion.div
              viewport={{ once: true }}
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ delay: 0.25 }}
            >
              <PostTitle title={item.title} />
              <div
                className={typeof item.content === "string" ? "md:w-1/2" : ""}
              >
                {item.content}
              </div>
            </motion.div>
          ))}
          <HorizontalLine />
          <PostTitle title={"Tagi"} />
          <StaggerList
            className={"flex flex-wrap gap-4"}
            inView={true}
            items={post.tags.map((tag, index) => (
              <span
                key={index}
                className={"bg-dark-blue p-2 -mx-1 rounded text-white"}
              >
                {tag}
              </span>
            ))}
          />
        </Container>
      </>
    )
  );
}

import Image from "next/image";
import StaggerList from "../components/StaggerList";
import PostList from "../components/PostList";

const diggingStages = [
  {
    title: "Analiza terenu",
    descriptions: [
      "Zanim przystąpimy do wiercenia, dokładnie analizujemy teren pod kątem geologicznym i hydrogeologicznym,",
      "Zazwyczaj wiercone są na głębokość od kilkudziesięciu do kilkuset metrów, co pozwala na dotarcie do warstw wodonośnych, które są chronione przed zanieczyszczeniami powierzchniowymi. Woda z takich głębokości jest często bardzo czysta i ma stabilną jakość przez cały rok,",
      "Te szczegółowe badania pozwalają nam zidentyfikować warstwy wodonośne, określić rodzaj gruntu oraz uniknąć ewentualnych trudności podczas wiercenia.",
    ],
    imageSrc: "/images/diggingStages/terrainAnalyze.webp",
  },
  {
    title: "Wiercenie studni głębinowej",
    descriptions: [
      "Wykorzystujemy nowoczesny sprzęt wiertniczy, który umożliwia precyzyjne wiercenie studni o różnych średnicach i głębokościach,",
      "Pracujemy zgodnie z najwyższymi standardami, dbając o ochronę środowiska i zapewniając bezpieczeństwo wykonawcze,",
      "Dbamy o to, aby studnia była wywiercona na odpowiednią głębokość, zapewniającą dostęp do zdatnej do spożycia wody.",
    ],
    imageSrc: "/images/diggingStages/wellDigging.mp4",
  },
  {
    title: "Przyłącze wodociągowe",
    descriptions: [
      "Po osiągnięciu odpowiedniej głębokości i warstwy wodonośnej, studnię obudowuje się rurami osłonowymi, które zapobiegają osypywaniu się ścian otworu oraz chronią wodę przed zanieczyszczeniami z powierzchni",
      "Zapewniamy kompleksową budowę instalacji wodociągowej, łącznie z pompami, zbiornikami i systemami uzdatniania wody,",
      "Po zakończeniu wiercenia studnię poddaje się testom wydajnościowym, które mają na celu określenie jej zdolności do dostarczania wody. Następnie instaluje się pompę oraz inne niezbędne wyposażenie, takie jak zbiorniki na wodę i systemy filtracyjne.",
    ],
    imageSrc: "/images/diggingStages/waterSupplyConnection.webp",
  },
  {
    title: "Naprawa i konserwacja studni",
    descriptions: [
      "Po zakończeniu prac, oferujemy usługi monitoringu oraz regularnej konserwacji, aby zapewnić długotrwałą i niezawodną eksploatację studni.",
    ],
    imageSrc: "/images/diggingStages/repairingAndConservation.webp",
  },
];

export const blogPosts = [
  {
    id: "jak-wiercimy-studnie",
    title: "Jak Wiercimy Studnie Głębinowe?",
    tags: [
      "#StudnieGłębinowe",
      "#WiercenieStudni",
      "#WodaPodziemna",
      "#CzystaWoda",
      "#ZasobyWodne",
      "#Geologia",
      "#PompyWodne",
      "#ZrównoważonyRozwój",
      "#NiezależnośćWodna",
      "#InwestycjaWZasobyWodne",
    ],
    createdAt: "11.06.2024",
    readingTime: "2min",
    description:
      "Wiercenie studni głębinowej to proces, który może wydawać się skomplikowany i pełen wyzwań, ale dla wielu osób jest to kluczowy krok w zapewnieniu sobie dostępu do czystej i niezawodnej wody. Niezależnie od tego, czy planujesz wiercić studnię na własnej posesji, czy chcesz zgłębić wiedzę na temat najnowszych technologii w tej dziedzinie, nasz dzisiejszy wpis dostarczy Ci niezbędnych informacji.",
    imageSrc: "/images/gallery/gallery6.webp",
    imageAlt: "Zdjęcie główne posta - jak wiercimy studnie głebinowe",
    body: [
      {
        title: "Wstęp",
        content:
          "Wiercenie studni głębinowej to proces, który może wydawać się skomplikowany i pełen wyzwań, ale dla wielu osób jest to kluczowy krok w zapewnieniu sobie dostępu do czystej i niezawodnej wody. Niezależnie od tego, czy planujesz wiercić studnię na własnej posesji, czy chcesz zgłębić wiedzę na temat najnowszych technologii w tej dziedzinie, nasz dzisiejszy wpis dostarczy Ci niezbędnych informacji.",
      },
      {
        title: "Czym są studnie głębinowe?",
        content:
          "Studnie głębinowe to ujęcia wody podziemnej, które sięgają znacznie głębiej niż tradycyjne studnie kopane. Zazwyczaj wiercone są na głębokość od kilkudziesięciu do kilkuset metrów, co pozwala na dotarcie do warstw wodonośnych, które są chronione przed zanieczyszczeniami powierzchniowymi. Woda z takich głębokości jest często bardzo czysta i ma stabilną jakość przez cały rok.",
        imageSrc: "/images/gallery/zdj2.webp",
        imageAlt:
          "Zdjęcie przedstawiające końcową fazę wykonywania studni głębinowej. Za pomocą odpowiednio dobranej pompy głębinowej jesteśmy w stanie wydobyć wodę z jej głęboko osadzoncyh złóż.",
      },
      {
        title: "Etapy wykonywania studni głębinowej",
        content: (
          <PostList
            aspects={diggingStages}
            // items={diggingStages.map((stage, index) => (
            //
            // ))}
          />
        ),
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
    ],
  },
  {
    id: "jak-wybrac-odpowiednia-lokalizacje-odwiertu-metoda-oporowa",
    title: "Jak wybrać odpowiednią lokalizację dla odwiertu - metoda oporowa",
    tags: [
      "#StudnieGłębinowe",
      "#WiercenieStudni",
      "#WodaPodziemna",
      "#CzystaWoda",
      "#ZasobyWodne",
      "#Geologia",
      "#PompyWodne",
      "#ZrównoważonyRozwój",
      "#NiezależnośćWodna",
      "#InwestycjaWZasobyWodne",
    ],
    createdAt: "20.06.2024",
    readingTime: "5min",
    description:
      "Wykonanie studni głębinowej to inwestycja na lata, dlatego kluczowym etapem tego procesu jest znalezienie odpowiedniego miejsca na działce, gdzie występują zasoby wodne na odpowiedniej głębokości i w odpowiedniej ilości. Jedną z najbardziej skutecznych metod badania podłoża i identyfikacji najlepszych lokalizacji do wiercenia studni jest metoda oporowa, znana również jako metoda geofizyczna. W tym wpisie szczegółowo omówimy, jak działa metoda oporowa, jakie są jej zalety oraz jak przeprowadza się takie badania.",
    imageSrc: "/images/diggingStages/terrainAnalyze.webp",
    body: [
      {
        title: "Wstęp",
        content:
          "Wykonanie studni głębinowej to inwestycja na lata, dlatego kluczowym etapem tego procesu jest znalezienie odpowiedniego miejsca na działce, gdzie występują zasoby wodne na odpowiedniej głębokości i w odpowiedniej ilości. Jedną z najbardziej skutecznych metod badania podłoża i identyfikacji najlepszych lokalizacji do wiercenia studni jest metoda oporowa, znana również jako metoda geofizyczna. W tym wpisie szczegółowo omówimy, jak działa metoda oporowa, jakie są jej zalety oraz jak przeprowadza się takie badania.",
      },
      {
        title: "Czym jest metoda oporowa?",
        content:
          "Metoda oporowa polega na pomiarze oporu elektrycznego gruntu, który zależy od jego wilgotności i struktury geologicznej. Dzięki tej metodzie można określić, na jakiej głębokości znajdują się warstwy wodonośne. Woda, jako dobry przewodnik prądu elektrycznego, znacząco zmniejsza opór elektryczny gruntu, co pozwala na identyfikację miejsc, gdzie występują zasoby wodne.",
        imageSrc: "/images/diggingStages/terrainAnalyze.webp",
        imageAlt:
          "Grafika przedstawiająca wynik metody oporowej. Kolorem czerwonym zostały zaznaczone obszary wodonośne, w obrębie których wykonujemy odwiert pod studnie głębinową.",
      },
      {
        title: "Jak działa metoda oporowa?",
        content:
          "Metoda oporowa polega na wprowadzeniu prądu elektrycznego do gruntu za pomocą dwóch elektrod prądowych oraz mierzeniu różnicy potencjałów pomiędzy dwiema elektrodami pomiarowymi. Otrzymane dane pozwalają na stworzenie profilu oporu gruntu, co umożliwia zlokalizowanie warstw wodonośnych. Dzięki temu jesteśmy w stanie ustalić najlepsze umiejscowienie odwiertu na Państwa działce.",
      },
      {
        title: "Podsumowanie",
        content:
          "Metoda oporowa to zaawansowane narzędzie geofizyczne, które znacząco zwiększa szanse na znalezienie odpowiedniego miejsca do wiercenia studni głębinowej. Dzięki precyzyjnym pomiarom oporu elektrycznego gruntu, można skutecznie zidentyfikować warstwy wodonośne, co przekłada się na oszczędność czasu i kosztów. Jeśli planujesz wykonanie studni na swojej działce, rozważ skorzystanie z tej metody, aby zapewnić sobie dostęp do czystej i obfitej wody.",
      },
    ],
  },
];

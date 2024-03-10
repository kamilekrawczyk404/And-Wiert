import { createContext, useEffect, useRef, useState } from "react";

export const ComponentContext = createContext();

export const ComponentProvider = ({ children }) => {
  const [userScrolled, setUserScrolled] = useState(false);
  const pageRefs = useRef([]);

  const altAttributeText = {
    text: "przykładowa realizacja studni głębinowej u klienta, studnia głębinowa, małopolska, podkarpacie, Ciężkowice, Bobowa, Gromnik, Gorlice, Stróże, Nowy Sącz, Grybów, Korzenna, Tarnów, Oświęcim, Chrzanów, Nowy Targ, Olkusz, Bochnia, Wieliczka, Zakopane, Skawina, Trzebina, Andrychów, Kęty, Myślenice, Wadowice, Niepołomice, Libiąż, Brzesko, Limanowa, Rabka-Zdrój, Dąbrowa Tarnowska, Miechów, Brzeszcze, Krzeszowice, Krynica-Zdrój, Bukowno, Sucha Beskidzka, Stary Sącz, Chełmek, Wolbrom, Mszana Dolna, Sułkowice, Tuchów, Dobczyce, Proszowice, Piwniczna-Zdrój, Szczawnica, Muszyna, Biecz, Żabno, Szczucin, Zator, Wojnicz, Ryglice, Radłów, Czchów, Zakliczyn, Koszyce, Rzeszów, Przemyśl, Stalowa Wola, Mielec, Tarnobrzeg, Krosno, Jarosław, Łańcut, Dębica, Sanok, Jasło, Leżajsk, Nowa Dęba, Kolbuszowa, Ustrzyki Dolne, Nisko, Brzozów, Ropczyce, Dynów, Głogów Małopolsk, czysta woda, ujęcie wody, studnie głębinowe firma, autolaweta, przewóz rzeczy, samochodów Usługi wiercenia studni, Studnie głębinowe, Wiercenie studni wodnych, Firmy wiercące studnie, Koszty wiercenia studni, Techniki wiercenia studni, Sprzęt do wiercenia studni, Studnie głębinowe - porady, Lokalne firmy wiercące studnie",
  };

  const links = [
    { anchor: 0, title: "O nas" },
    { anchor: 1, title: "Etapy wykonywania studni" },
    { anchor: 2, title: "Galeria" },
    { anchor: 3, title: "Lokalizacja" },
    { anchor: 4, title: "Usługi auto lawetą" },
  ];
  const contact = {
    telephone: "500327556",
    email: "studnie@and-wiert.pl",
    facebook: "https://www.facebook.com/andrzej.wolski.37201",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToTheElement = (id) => {
    window.scrollTo({
      top: pageRefs.current[id].offsetTop - (!userScrolled ? 108 : 56),
      behavior: "smooth",
    });
  };

  const checkOffset = () => {
    if (window.scrollY >= 10) {
      setUserScrolled(true);
    } else {
      setUserScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkOffset);

    return () => {
      window.removeEventListener("scroll", checkOffset);
    };
  }, []);

  const value = {
    pageRefs: pageRefs,
    alternativeText: altAttributeText,
    contactDetails: contact,
    pageLinks: links,
    userScrolled: userScrolled,
    scrollToTop: scrollToTop,
    scrollToTheElement: scrollToTheElement,
  };

  return (
    <ComponentContext.Provider value={value}>
      {children}
    </ComponentContext.Provider>
  );
};
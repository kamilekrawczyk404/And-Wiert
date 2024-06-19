"use client";

import { createContext } from "react";

export const SiteDetailsContext = createContext();

export const SiteDetailsProvider = ({ children }) => {
  const values = {
    contactDetails: {
      telephone: "500327556",
      location: "Gromnik, Jana Pawła II 47",
      email: "studnie@and-wiert.pl",
    },
    socials: [
      {
        name: "facebook",
        url: "https://www.facebook.com/andrzej.wolski.37201",
      },
    ],
    alt: "przykładowa realizacja studni głębinowej u klienta, studnia głębinowa, małopolska, podkarpacie, Ciężkowice, Bobowa, Gromnik, Gorlice, Stróże, Nowy Sącz, Grybów, Korzenna, Tarnów, Oświęcim, Chrzanów, Nowy Targ, Olkusz, Bochnia, Wieliczka, Zakopane, Skawina, Trzebina, Andrychów, Kęty, Myślenice, Wadowice, Niepołomice, Libiąż, Brzesko, Limanowa, Rabka-Zdrój, Dąbrowa Tarnowska, Miechów, Brzeszcze, Krzeszowice, Krynica-Zdrój, Bukowno, Sucha Beskidzka, Stary Sącz, Chełmek, Wolbrom, Mszana Dolna, Sułkowice, Tuchów, Dobczyce, Proszowice, Piwniczna-Zdrój, Szczawnica, Muszyna, Biecz, Żabno, Szczucin, Zator, Wojnicz, Ryglice, Radłów, Czchów, Zakliczyn, Koszyce, Rzeszów, Przemyśl, Stalowa Wola, Mielec, Tarnobrzeg, Krosno, Jarosław, Łańcut, Dębica, Sanok, Jasło, Leżajsk, Nowa Dęba, Kolbuszowa, Ustrzyki Dolne, Nisko, Brzozów, Ropczyce, Dynów, Głogów Małopolsk, czysta woda, ujęcie wody, studnie głębinowe firma, autolaweta, przewóz rzeczy, samochodów Usługi wiercenia studni, Studnie głębinowe, Wiercenie studni wodnych, Firmy wiercące studnie, Koszty wiercenia studni, Techniki wiercenia studni, Sprzęt do wiercenia studni, Studnie głębinowe - porady, Lokalne firmy wiercące studnie",
    motionVariants: {
      visible: {
        opacity: 1,
      },
      hidden: {
        opacity: 0,
      },
    },
  };

  return (
    <SiteDetailsContext.Provider value={values}>
      {children}
    </SiteDetailsContext.Provider>
  );
};

"use client";

import { createContext } from "react";
import { Icon } from "../../components/Icon";

export const SiteDetailsContext = createContext();

export const SiteDetailsProvider = ({ children }) => {
  const values = {
    contact: {
      phone: {
        value: "500327556",
        href: "tel:+48500327556",
        icon: <Icon.Phone />,
        title: "Zadzwoń do nas!",
      },
      location: {
        value: "Gromnik, Jana Pawła II 47",
        href: "/#location",
        icon: <Icon.Location />,
        title: "Znajdź nas na mapach!",
      },
      email: {
        value: "studnie@and-wiert.pl",
        href: "mailto:studnie@and-wiert.pl",
        icon: <Icon.Email />,
        title: "Napisz do nas wiadomość!",
      },
    },
    socials: [
      {
        name: "Facebook",
        icon: <Icon.Facebook />,
        url: "https://www.facebook.com/andrzej.wolski.37201",
        title: "Odwiedź nas na Facebook'u!",
      },
    ],
    pageMap: [
      { href: "/", title: "Strona główna" },
      { href: "/realizations", title: "Realizacje" },
      { href: "/blog", title: "Blog" },
      { href: "/contact", title: "Kontakt" },
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

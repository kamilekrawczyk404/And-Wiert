import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactQueryProvider from "../utils/providers/ReactQueryProvider";
import { SiteDetailsProvider } from "../utils/providers/SiteDetailsProvider";
import { Icon } from "../components/Icon";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "And-Wiert studnie głębinowe",
  description:
    "And-Wiert - profesjonalna firma specjalizująca się w Wierceniu Studni Głębinowych. Zapewniamy kompleksowe usługi z zakresu budowy i konserwacji studni wodnych, gwarantując wysoką jakość, sprawność oraz bezpieczeństwo. Skorzystaj z naszego doświadczenia i zapewnij sobie niezawodne źródło czystej wody.",
  keywords:
    "wiercenie studni głębinowych małopolskie, wiercenie studni głębinowych podkarpackie, studnie głębinowe Małopolska, studnie głębinowe Podkarpacie, usługi wiercenia studni Małopolska, usługi wiercenia studni Podkarpacie, profesjonalne wiercenie studni Małopolska, profesjonalne wiercenie studni Podkarpacie, autolaweta Małopolska, autolaweta Podkarpacie, usługi autolawety Małopolska, usługi autolawety Podkarpacie, przewóz pojazdów Małopolska, przewóz pojazdów Podkarpacie, pomoc drogowa autolaweta Małopolska, pomoc drogowa autolaweta Podkarpacie, transport pojazdów Małopolska, transport pojazdów Podkarpacie, laweta Małopolska, laweta Podkarpacie",
  icon: "https://and-wiert.pl/images/favicon.png",
};

// export const contact = {
//   phone: {
//     value: "500327556",
//     href: "tel:+48500327556",
//     icon: <Icon.Phone />,
//     title: "Zadzwoń do nas!",
//   },
//   location: {
//     value: "Gromnik, Jana Pawła II 47",
//     href: "/#location",
//     icon: <Icon.Location />,
//     title: "Znajdź nas na mapach!",
//   },
//   email: {
//     value: "studnie@and-wiert.pl",
//     href: "mailto:studnie@and-wiert.pl",
//     icon: <Icon.Email />,
//     title: "Napisz do nas wiadomość!",
//   },
// };
//
// export const socials = [
//   {
//     name: "Facebook",
//     icon: <Icon.Facebook />,
//     url: "https://www.facebook.com/andrzej.wolski.37201",
//     title: "Odwiedź nas na Facebook'u!",
//   },
// ];
//
// export const pageMap = [
//   { href: "/", title: "Strona główna" },
//   { href: "/realizations", title: "Realizacje" },
//   { href: "/blog", title: "Blog" },
//   { href: "/contact", title: "Kontakt" },
// ];
//
// export const alternativeText =
//   "przykładowa realizacja studni głębinowej u klienta, studnia głębinowa, małopolska, podkarpacie, Ciężkowice, Bobowa, Gromnik, Gorlice, Stróże, Nowy Sącz, Grybów, Korzenna, Tarnów, Oświęcim, Chrzanów, Nowy Targ, Olkusz, Bochnia, Wieliczka, Zakopane, Skawina, Trzebina, Andrychów, Kęty, Myślenice, Wadowice, Niepołomice, Libiąż, Brzesko, Limanowa, Rabka-Zdrój, Dąbrowa Tarnowska, Miechów, Brzeszcze, Krzeszowice, Krynica-Zdrój, Bukowno, Sucha Beskidzka, Stary Sącz, Chełmek, Wolbrom, Mszana Dolna, Sułkowice, Tuchów, Dobczyce, Proszowice, Piwniczna-Zdrój, Szczawnica, Muszyna, Biecz, Żabno, Szczucin, Zator, Wojnicz, Ryglice, Radłów, Czchów, Zakliczyn, Koszyce, Rzeszów, Przemyśl, Stalowa Wola, Mielec, Tarnobrzeg, Krosno, Jarosław, Łańcut, Dębica, Sanok, Jasło, Leżajsk, Nowa Dęba, Kolbuszowa, Ustrzyki Dolne, Nisko, Brzozów, Ropczyce, Dynów, Głogów Małopolsk, czysta woda, ujęcie wody, studnie głębinowe firma, autolaweta, przewóz rzeczy, samochodów Usługi wiercenia studni, Studnie głębinowe, Wiercenie studni wodnych, Firmy wiercące studnie, Koszty wiercenia studni, Techniki wiercenia studni, Sprzęt do wiercenia studni, Studnie głębinowe - porady, Lokalne firmy wiercące studnie";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-dark-blue"}>
        <ReactQueryProvider>
          <SiteDetailsProvider>
            <Navbar />
            {children}
            <Footer />
          </SiteDetailsProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

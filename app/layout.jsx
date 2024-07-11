import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactQueryProvider from "../utils/providers/ReactQueryProvider";
import { SiteDetailsProvider } from "../utils/providers/SiteDetailsProvider";
import { Icon } from "../components/Icon";
import GoogleAds from "../components/GoogleAds";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const contact = {
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
};

export const metadata = {
  title: {
    template: "%s | And-Wiert Wiercenie Studni Głębinowych",
    default: "And-Wiert | Wiercenie Studni Głębinowych",
  },
  keywords:
    "wiercenie studni głębinowych małopolskie, wiercenie studni głębinowych podkarpackie, studnie głębinowe Małopolska, studnie głębinowe Podkarpacie, usługi wiercenia studni Małopolska, usługi wiercenia studni Podkarpacie, profesjonalne wiercenie studni Małopolska, profesjonalne wiercenie studni Podkarpacie, autolaweta Małopolska, autolaweta Podkarpacie, usługi autolawety Małopolska, usługi autolawety Podkarpacie, przewóz pojazdów Małopolska, przewóz pojazdów Podkarpacie, pomoc drogowa autolaweta Małopolska, pomoc drogowa autolaweta Podkarpacie, transport pojazdów Małopolska, transport pojazdów Podkarpacie, laweta Małopolska, laweta Podkarpacie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-dark-blue overflow-x-hidden"}>
        <ReactQueryProvider>
          <GoogleAds gTagId={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID} />
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

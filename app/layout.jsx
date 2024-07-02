import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactQueryProvider from "../utils/providers/ReactQueryProvider";
import { SiteDetailsProvider } from "../utils/providers/SiteDetailsProvider";

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

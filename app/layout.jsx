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
  description: "",
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

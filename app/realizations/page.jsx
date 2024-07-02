import { Gallery } from "../../components/Gallery";
import Seo from "../../components/Seo";

const metadataContent = {
  title: "Realizacje Studni Głębinowych",
  url: "https://and-wiert.pl/realizations",
  imageSrc: "https://and-wiert.pl/images/gallery/gallery3.webp",
  description:
    "And-Wiert - profesjonalna firma specjalizująca się w Wierceniu Studni Głębinowych. Zapewniamy kompleksowe usługi z zakresu budowy i konserwacji studni wodnych, gwarantując wysoką jakość, sprawność oraz bezpieczeństwo. Skorzystaj z naszego doświadczenia i zapewnij sobie niezawodne źródło czystej wody.",
};

export const metadata = {
  title: metadataContent.title,
  description: metadataContent.description,
  twitter: {
    title: metadataContent.title,
    images: [metadataContent.imageSrc],
    description: metadataContent.description,
    url: metadataContent.url,
  },
  openGraph: {
    title: metadataContent.title,
    images: [metadataContent.imageSrc],
    description: metadataContent.description,
    url: metadataContent.url,
  },
  canonicalUrl: {
    context: "https://schema.org",
    type: "Organization",
    name: metadataContent.title,
    url: metadataContent.url,
    logo: "https://and-wiert.pl/images/favicon.png",
  },
};

export default async function Realizations() {
  return (
    <>
      <Seo
        title={"And-Wiert - Przykładowe Realizacje"}
        image={"https://and-wiert.pl/images/gallery/gallery3.webp"}
        url={"https://and-wiert.pl/realizations"}
      />
      <Gallery />
    </>
  );
}

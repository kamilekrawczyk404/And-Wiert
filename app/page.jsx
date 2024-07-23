import React from "react";
import { Carousel } from "../components/Carousel";
import Services from "../components/Services";
import { Counters } from "../components/Counters";
import { CallReminder } from "../components/CallReminder";
import { VoivodeshipMap } from "../components/VoivodeshipMap";
import MoveIndicator from "../components/MoveIndicator";
import BlogPostsCarousel from "../components/BlogPostsCarousel";

const metadataContent = {
  title: "And-Wiert | Wiercenie Studni Głębinowych",
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

export default function Home() {
  return (
    <>
      <Carousel />
      <Services />
      <Counters />
      <CallReminder />
      <VoivodeshipMap />
      <BlogPostsCarousel />
      <MoveIndicator />
    </>
  );
}

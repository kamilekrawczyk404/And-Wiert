import { Container } from "../../components/Container";
import PostsList from "../../components/PostsList";

const metadataContent = {
  title: "Blog",
  url: "https://and-wiert.pl/blog",
  imageSrc: "https://and-wiert.pl/images/gallery/gallery6.webp",
  description:
    "And-Wiert - profesjonalna firma specjalizująca się w Wierceniu Studni Głębinowych. Zapewniamy kompleksowe usługi z zakresu budowy i konserwacji studni wodnych, gwarantując wysoką jakość, sprawność oraz bezpieczeństwo. Skorzystaj z naszego doświadczenia i zapewnij sobie niezawodne źródło czystej wody.",
};

export const metadata = {
  default: "%s | Blog",
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

export default function Blog() {
  return (
    <>
      <Container className={"md:my-8 my-4 flex flex-col md:gap-8 gap-4"}>
        <p className={"text-3xl text-dark-orange font-bold"}>
          Nasze Ostatnie Wpisy
        </p>
        <PostsList />
      </Container>
    </>
  );
}

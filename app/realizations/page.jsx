import { Gallery } from "../../components/Gallery";
import Seo from "../../components/Seo";

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

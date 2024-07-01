import React from "react";
import Head from "next/head";

const Seo = ({ title, image, url }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "And-Wiert - Studnie Głębinowe",
    url: "https://and-wiert.pl/",
    logo: "https://and-wiert.pl/images/favicon.png",
  };

  const meta = {
    description:
      "And-Wiert - profesjonalna firma specjalizująca się w Wierceniu Studni Głębinowych. Zapewniamy kompleksowe usługi z zakresu budowy i konserwacji studni wodnych, gwarantując wysoką jakość, sprawność oraz bezpieczeństwo. Skorzystaj z naszego doświadczenia i zapewnij sobie niezawodne źródło czystej wody.",
    keywords:
      "wiercenie studni głębinowych małopolskie, wiercenie studni głębinowych podkarpackie, studnie głębinowe Małopolska, studnie głębinowe Podkarpacie, usługi wiercenia studni Małopolska, usługi wiercenia studni Podkarpacie, profesjonalne wiercenie studni Małopolska, profesjonalne wiercenie studni Podkarpacie, autolaweta Małopolska, autolaweta Podkarpacie, usługi autolawety Małopolska, usługi autolawety Podkarpacie, przewóz pojazdów Małopolska, przewóz pojazdów Podkarpacie, pomoc drogowa autolaweta Małopolska, pomoc drogowa autolaweta Podkarpacie, transport pojazdów Małopolska, transport pojazdów Podkarpacie, laweta Małopolska, laweta Podkarpacie",
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={url} />
      {
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      }
    </Head>
  );
};

export default Seo;

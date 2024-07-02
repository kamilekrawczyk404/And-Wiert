import SinglePost from "../../../components/SinglePost";
import { blogPosts } from "../../../utils/blogPosts";

export async function generateMetadata({ params }) {
  const { title } = params;

  const post = blogPosts.filter((post) => post.title === title)[0];

  const metadataContent = {
    title: `${post.titleAsString} | Blog`,
    description: post.body[0].content[0],
    imageSrc: `https://and-wiert.pl${post.imageSrc}`,
    url: `https://and-wiert.pl/blog/${title}`,
  };

  return {
    title: metadataContent.title,
    description: metadataContent.description,
    twitter: {
      title: metadataContent.title,
      images: [metadataContent.imageSrc],
      description: post.body[0].content[0],
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
}

export default function Post({ params }) {
  const { title } = params;

  return <SinglePost title={title} />;
}

import { blogPosts } from "../utils/blogPosts";

export default function sitemap() {
  const postsTitles = blogPosts.map((post) => post.title);

  const posts = postsTitles.map((title) => ({
    url: `https://and-wiert.pl/blog/${title}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 0.9,
    changeFrequency: "weekly",
  }));

  const links = ["/", "/realizations", "/contact", "/blog"];

  const routes = links.map((link, index) => ({
    url: `https://and-wiert.pl${link}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: !index ? 1 : 0.9,
    changeFrequency: "monthly",
  }));

  return [...routes, ...posts];
}

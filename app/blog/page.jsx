"use client";
import { blogPosts } from "../../utils/blogPosts";
import { Container } from "../../components/Container";
import { PostPreview } from "../../components/PostPreview";
import StaggerList from "../../components/StaggerList";

export default function Blog() {
  return (
    <Container className={"md:my-8 my-4 flex flex-col md:gap-8 gap-4"}>
      <p className={"text-3xl text-dark-orange font-bold"}>
        Nasze Ostatnie Wpisy
      </p>
      <StaggerList
        className={"flex flex-col md:gap-8 gap-4"}
        items={blogPosts.map((post, index) => (
          <PostPreview postProperties={post} key={index} />
        ))}
      ></StaggerList>
    </Container>
  );
}

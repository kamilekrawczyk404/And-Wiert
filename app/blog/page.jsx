"use client";
import { blogPosts } from "../../utils/blogPosts";
import { Container } from "../../components/Container";
import { PostPreview } from "../../components/PostPreview";
import StaggerList from "../../components/StaggerList";
import { createPost, getPosts } from "../api/actions";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Seo from "../../components/Seo";

export default function Blog() {
  const { data, isPending, isError } = getPosts();
  const { newPost, isSuccess, mutate } = createPost();

  const [posts, setPosts] = useState(blogPosts);

  useEffect(() => {
    if (!isPending && !isError) {
      // there's remaining post, add it to the db
      if (data.length !== blogPosts.length) {
        blogPosts.forEach((post) => {
          if (
            data.findIndex((element) => element.title === post.title) === -1
          ) {
            mutate({ title: post.title });

            if (isSuccess) {
              setPosts([...newPost]);
            }
          }
        });
      }

      setPosts((prev) =>
        prev.map((post, index) => ({
          ...post,
          createdAt: data[index].createdAt,
        })),
      );
    }
  }, [isPending, newPost, isSuccess]);

  return (
    <>
      <Seo
        title={"And-Wiert - Blog"}
        image={"https://and-wiert.pl/images/gallery/gallery6.webp"}
        url={"https://and-wiert.pl/blog"}
      />
      <Container className={"md:my-8 my-4 flex flex-col md:gap-8 gap-4"}>
        <p className={"text-3xl text-dark-orange font-bold"}>
          Nasze Ostatnie Wpisy
        </p>
        {isPending ? (
          <Loading title={"Ładowanie postów"} />
        ) : (
          <StaggerList
            className={"flex flex-col md:gap-8 gap-4"}
            items={posts.map((post, index) => (
              <PostPreview postProperties={post} key={index} />
            ))}
          ></StaggerList>
        )}
      </Container>
    </>
  );
}

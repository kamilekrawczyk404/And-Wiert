"use client";

import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import StaggerList from "./StaggerList";
import { PostPreview } from "./PostPreview";
import { createPost, getPosts } from "../app/api/actions";
import { blogPosts } from "../utils/blogPosts";

const PostsList = () => {
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

  return isPending ? (
    <Loading title={"Ładowanie postów"} />
  ) : (
    <StaggerList
      className={"flex flex-col md:gap-8 gap-4"}
      items={posts.map((post, index) => (
        <PostPreview postProperties={post} key={index} />
      ))}
    ></StaggerList>
  );
};

export default PostsList;

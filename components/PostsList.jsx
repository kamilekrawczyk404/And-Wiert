"use client";

import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import StaggerList from "./StaggerList";
import { PostPreview } from "./PostPreview";
import { createPost, getPosts, sortPostsByDate } from "../app/api/actions";
import { blogPosts } from "../utils/blogPosts";

const PostsList = () => {
  const POSTS_PER_PAGE = 10;

  const { data, isPending, isError } = getPosts(POSTS_PER_PAGE);

  const { newPost, isSuccess, mutate } = createPost();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!isPending && !isError) {
      // there's remaining post, add it to the database
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

      setPosts(sortPostsByDate(data));
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

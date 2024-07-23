import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { blogPosts } from "../../utils/blogPosts";

export const getPosts = (take = 0) => {
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: ["posts", take],
    queryFn: async (data) => {
      const response = await fetch(
        `/api/post${take !== 0 ? `?take=${take}` : ""}`,
        {
          method: "GET",
        },
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    },
    placeholderData: keepPreviousData,
  });

  return { data, isPending, isSuccess, isError };
};

export const createPost = () => {
  const { data, isSuccess, mutate } = useMutation({
    mutationFn: async (data) => {
      const response = await fetch("/api/post/", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Unable to create post!");
      }

      return response.json();
    },
  });

  return { newPost: data, mutate, isSuccess };
};

export const sortPostsByDate = (posts) => {
  return (
    posts
      // include created at date form database table
      .map((post) => ({
        ...blogPosts[blogPosts.findIndex((p) => post.title === p.title)],
        ...post,
      }))
      // sort posts by created at date
      .sort((a, b) => {
        const first = new Date(a.createdAt).getTime();
        const second = new Date(b.createdAt).getTime();

        return second - first;
      })
  );
};

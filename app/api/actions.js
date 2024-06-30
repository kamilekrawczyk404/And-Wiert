import { useMutation, useQuery } from "@tanstack/react-query";

export const getPosts = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(`/api/post/`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Unable to get posts!");
      }

      return response.json();
    },
  });

  return { data, isPending, isError };
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

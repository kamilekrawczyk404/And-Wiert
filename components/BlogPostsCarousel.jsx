"use client";
import React, { useEffect, useState } from "react";
import { blogPosts } from "../utils/blogPosts";
import { PostPreview } from "./PostPreview";
import { ArticleSection } from "./ArticleSection";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { getPosts, sortPostsByDate } from "../app/api/actions";
import Loading from "./Loading";

const BlogPostsCarousel = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [posts, setPosts] = useState([]);

  const POSTS_PER_PAGE = 3;
  const { data, isPending, isSuccess, isError } = getPosts(POSTS_PER_PAGE);

  useEffect(() => {
    if (hasEntered && !isPending && isSuccess) {
      setPosts(sortPostsByDate(data));
    }
  }, [hasEntered, isPending, data]);

  return (
    <Container className={`relative bg-white`}>
      <ArticleSection
        className={`relative overflow-x-hidden`}
        title={"Nasze ostatnie wpisy"}
        header={"Sprawdź o czym piszemy na naszym blogu!"}
      >
        {isPending ? (
          <Loading title={"Ładowanie postów"} screen={false} />
        ) : (
          <motion.div
            // start fetching when user scrolls down the page
            onViewportEnter={() => setHasEntered(true)}
            className={`flex gap-4 !w-[200vw]`}
            animate={{
              translateX: [0, "-100%", 0],
              transition: {
                duration: blogPosts.length * 12,
                repeat: Infinity,
                repeatType: "mirror",
                type: "linear",
                times: [0, 0.95, 1],
              },
            }}
          >
            {posts.map((blogPost, index) => (
              <PostPreview
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                key={index}
                postProperties={blogPost}
                className={`border-none md:w-[200/${posts.length}vw] w-full`}
              />
            ))}
          </motion.div>
        )}
      </ArticleSection>
    </Container>
  );
};

export default BlogPostsCarousel;

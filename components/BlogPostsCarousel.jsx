"use client";
import React, { useEffect, useState } from "react";
import { blogPosts } from "../utils/blogPosts";
import { PostPreview } from "./PostPreview";
import { ArticleSection } from "./ArticleSection";
import { Container } from "./Container";
import {
  animate,
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValue,
} from "framer-motion";
import { getPosts, sortPostsByDate } from "../app/api/actions";
import Loading from "./Loading";

const BlogPostsCarousel = () => {
  // has entered on component viewport, start fetching data
  const [hasEntered, setHasEntered] = useState(false);
  const [posts, setPosts] = useState([]);
  const translateX = useMotionValue(0);

  const initialDuration = 8;
  const [duration, setDuration] = useState(initialDuration);

  const POSTS_PER_PAGE = 4;
  const { data, isPending } = getPosts(POSTS_PER_PAGE);

  useEffect(() => {
    if (hasEntered && !isPending) {
      setPosts(sortPostsByDate(data));
    }
  }, [hasEntered, isPending, data]);

  useEffect(() => {
    const controls = animate(
      translateX,
      -((blogPosts.length - 1) / blogPosts.length) * 2 * window.innerWidth,
      {
        duration: blogPosts.length * duration,
        repeat: Infinity,
        repeatType: "loop",
        type: "linear",
        times: [0, 0.95, 1],
      },
    );

    return () => controls.stop();
  }, [duration, isPending]);

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
            style={{
              translateX,
            }}
            onHoverStart={() => setDuration(initialDuration * 2)}
            onHoverEnd={() => setDuration(initialDuration)}
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
                viewport={{ once: true }}
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

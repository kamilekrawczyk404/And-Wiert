"use client";

import { blogPosts } from "../../../utils/blogPosts";
import { useEffect, useState } from "react";
import { Container } from "../../../components/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import PostBasicInfo from "../../../components/PostBasicInfo";
import PostTitle from "../../../components/PostTitle";
import HorizontalLine from "../../../components/HorizontalLine";
import StaggerList from "../../../components/StaggerList";
import { PostPreview } from "../../../components/PostPreview";

export default function Post({ params }) {
  const { id } = params;
  const [post, setPost] = useState({});

  useEffect(() => {
    setPost(...blogPosts.filter((post) => post.id === id));
  }, []);

  return (
    Object.keys(post).length && (
      <>
        <div className={"relative h-[30rem] group overflow-hidden"}>
          <Image
            className={
              "absolute group-hover:scale-[1.05] transition duration-800 brightness-50"
            }
            layout={"fill"}
            objectFit={"cover"}
            src={post.imageSrc}
            alt={post.title}
          />
          <div
            className={
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-sm shadow-md p-8 w-full "
            }
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -10,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className={
                "flex items-center justify-center flex-col gap-4 w-fit mx-auto"
              }
            >
              <PostBasicInfo props={post} className={"self-start"} />
              <h1 className={"z-10 text-5xl font-semibold text-dark-orange"}>
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
        <Container
          className={
            "bg-white py-8 text-dark-blue flex flex-col md:gap-8 gap-4"
          }
        >
          {post.body.map((item, index) => (
            <>
              <motion.div
                viewport={{ once: true }}
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ delay: 0.25 }}
                className={`${
                  typeof item.content === "string"
                    ? `${!item.imageSrc ? "md:w-1/2 even:ml-auto" : "w-full"}`
                    : ""
                }`}
              >
                <PostTitle title={item.title} />

                <div
                  className={"relative flex items-center justify-between gap-8"}
                >
                  {item.hasOwnProperty("imageSrc") && (
                    <div className={"relative w-1/2 h-[20rem]"}>
                      <Image
                        src={item.imageSrc}
                        className={"object-contain"}
                        alt={""}
                        fill
                      />
                    </div>
                  )}
                  <div
                    className={`${
                      item.imageSrc ? "md:w-1/2 even:ml-auto" : "w-full"
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              </motion.div>
              <HorizontalLine className={"w-1/2 mt-8"} accent />
            </>
          ))}
          <PostTitle title={"Komentarze"} />

          <PostTitle title={"Tagi"} />
          <StaggerList
            className={"flex flex-wrap gap-4"}
            inView={true}
            items={post.tags.map((tag, index) => (
              <span
                key={index}
                className={"bg-dark-blue p-2 -mx-1 rounded text-white"}
              >
                {tag}
              </span>
            ))}
          />
          <PostTitle title={"Zobacz również nasze inne posty"} />
          <div className={"grid md:grid-cols-2 gap-2"}>
            {blogPosts
              .filter((post) => post.id != params.id)
              .map((post) => (
                <PostPreview postProperties={post} />
              ))}
          </div>
        </Container>
      </>
    )
  );
}

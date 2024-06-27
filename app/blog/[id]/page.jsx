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
import MotionContainer from "../../../components/MotionContainer";
import CommentForm from "../../../components/CommentForm";

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
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-sm shadow-md md:py-8 py-4 w-full"
            }
          >
            <MotionContainer
              initial={{
                opacity: 0,
                x: -10,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className={
                "gap-4 flex flex-col mx-auto items-center justify-center relative md:w-3/4"
              }
            >
              <PostBasicInfo props={post} className={"self-start"} />
              <h1
                className={
                  "z-10 md:text-5xl text-3xl font-semibold text-dark-orange"
                }
              >
                {post.title}
              </h1>
            </MotionContainer>
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
                className={"md:w-2/3 mx-auto space-y-6"}
              >
                <PostTitle title={item.title} />

                <div
                  className={"flex items-center flex-col justify-center gap-8"}
                >
                  <div className={"initial-letter"}>{item.content}</div>

                  {item.hasOwnProperty("imageSrc") && (
                    <div
                      className={
                        "relative w-full flex flex-col items-center gap-2"
                      }
                    >
                      <div className={"relative w-full h-[30vh]"}>
                        <Image
                          src={item.imageSrc}
                          className={"object-contain"}
                          alt={item.imageAlt}
                          title={item.imageAlt}
                          fill
                        />
                      </div>
                      <p className={"italic md:w-2/3"}>{item.imageAlt}</p>
                    </div>
                  )}
                </div>
              </motion.div>
              <HorizontalLine className={"mt-8 md:w-2/3 w-full"} accent />
            </>
          ))}

          <div className={"md:w-2/3 mx-auto flex flex-col md:gap-8 gap-4"}>
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
          </div>

          <HorizontalLine accent className={"w-full md:mt-8 mt-4"} />
          <PostTitle title={"Komentarze"} />
          <div className={"grid md:grid-cols-2"}>
            <div className={"w-full flex items-center"}>
              <p>Bądź pierwszą osobą, która skomentuje ten post!</p>
            </div>
            <CommentForm commentId={id} />
          </div>

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

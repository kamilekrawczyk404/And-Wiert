import React from "react";
import StaggerList from "./StaggerList";
import Image from "next/image";

const PostList = ({ aspects }) => {
  return (
    <div
      className={
        "relative flex flex-col md:gap-8 gap-4 my-4 w-full overflow-hidden"
      }
    >
      {aspects.map((aspect, index) => (
        <>
          <h3 className={"text-2xl text-dark-orange"}>
            {index + 1 + "# "}
            {aspect.title}
          </h3>
          <section
            key={index}
            className={`flex gap-8 ${
              index % 2 === 0 && "md:flex-row-reverse"
            } md:flex-row flex-col`}
          >
            {aspect.hasOwnProperty("imageSrc") && (
              <div className={"relative md:w-1/2 w-full h-[30rem]"}>
                {aspect.imageSrc.substring(aspect.imageSrc.lastIndexOf(".")) !==
                ".mp4" ? (
                  <Image
                    fill
                    className={"rounded h-full w-auto object-cover"}
                    src={aspect.imageSrc}
                    alt={aspect.title}
                    title={aspect.title}
                    priority={false}
                  />
                ) : (
                  <video
                    preload={"none"}
                    className={"rounded h-full mx-auto"}
                    src={aspect.imageSrc}
                    autoPlay={true}
                    muted={true}
                    controls={true}
                    title={
                      "Wideo prezentujące przykładową realizacje wykonania studni głębinowej"
                    }
                  />
                )}
              </div>
            )}

            <StaggerList
              inView={true}
              className={
                "md:w-1/2 w-full flex flex-col md:gap-4 gap-2 self-center"
              }
              items={aspect.descriptions.map((description, index) => (
                <p
                  key={index}
                  className={
                    "relative before:absolute before:left-0 before:top-2 before:w-2 before:aspect-square before:bg-dark-orange before:rounded indent-4"
                  }
                >
                  {description}
                </p>
              ))}
            />
          </section>
        </>
      ))}
    </div>
  );
};

export default PostList;

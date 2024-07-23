"use client";

import ArticleAspect from "./ArticleAspect";

export const ArticleSection = ({
  title = "",
  header = "",
  description = "",
  aspects = [],
  children,
  darkTheme = false,
  className = "",
  ...props
}) => {
  return (
    <section
      {...props}
      className={
        "relative flex flex-col justify-center gap-4 text-gray-700 lg:py-16 py-8"
      }
    >
      <h2 className={"text-dark-orange font-semibold sm:text-3xl text-2xl"}>
        {title}
      </h2>
      <h3
        className={
          " sm:text-4xl text-2xl font-bold " +
          (header ? "block" : "hidden") +
          (darkTheme ? " text-gray-100" : " text-dark-blue")
        }
      >
        {header}
      </h3>
      <article
        className={
          "flex flex-col gap-4 justify-center text-dark-blue " + className
        }
      >
        <p className={description ? "block" : "hidden"}>{description}</p>
        <div
          className={
            "grid sm:grid-cols-2 grid-cols-1 gap-4 sm:mt-8 " +
            (aspects.length ? "block" : "hidden")
          }
        >
          {aspects.map((aspect, index) => (
            <ArticleAspect key={index} title={aspect.title} className />
          ))}
        </div>
        {children}
      </article>
    </section>
  );
};

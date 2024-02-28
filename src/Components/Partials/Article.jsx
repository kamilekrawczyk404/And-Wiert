import { SingleAspect } from "./SingleAspect.jsx";
import { useEffect, useRef } from "react";
import Animation from "../../Classes/Animation.js";

export const Article = ({
  title = "",
  header = "",
  description = "",
  aspects = [],
  children,
  darkTheme = false,
  className = "",
}) => {
  const servicesRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      // Start counting when user's scrolled to the element
      if (entry.isIntersecting) {
        const imagesAnimation = new Animation([servicesRefs.current]);
        imagesAnimation.animateAll("", "-.2");
      }
    });

    observer.observe(containerRef.current);
  }, []);

  return (
    <section
      className={
        "relative flex flex-col justify-center text-gray-700 lg:py-16 py-8"
      }
    >
      <h1
        className={
          "text-dark-orange font-semibold sm:text-2xl text-lg underline mb-2"
        }
      >
        {title}
      </h1>
      <article className={"flex flex-col gap-4 justify-center " + className}>
        <h1
          className={
            " sm:text-4xl text-2xl font-bold " +
            (header ? "block" : "hidden") +
            (darkTheme ? " text-gray-100" : " text-dark-blue")
          }
        >
          {header}
        </h1>
        <p className={description ? "block" : "hidden"}>{description}</p>
        <div
          ref={containerRef}
          className={
            "grid sm:grid-cols-2 grid-cols-1 gap-4 sm:mt-8 " +
            (aspects.length ? "block" : "hidden")
          }
        >
          {aspects.map((aspect, index) => (
            <SingleAspect
              ref={(element) => (servicesRefs.current[index] = element)}
              key={index}
              title={aspect.title}
            />
          ))}
        </div>
        {children}
      </article>
    </section>
  );
};
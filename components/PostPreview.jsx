import Link from "next/link";
import Image from "next/image";
import PostBasicInfo from "./PostBasicInfo";

export const PostPreview = ({
  postProperties,
  inColumn = false,
  className = "",
}) => {
  return (
    <div
      className={`relative w-full bg-gray-100 rounded-sm shadow-sm overflow-hidden flex group b border-2 border-dark-blue ${
        inColumn ? "flex-col-reverse" : "md:flex-row"
      } ${className}`}
    >
      <div
        className={`flex flex-col ${
          inColumn ? "gap-4 w-full" : "gap-8 md:w-3/5"
        } p-4`}
      >
        <div className={"space-y-2"}>
          <Link
            className={
              "text-dark-orange text-2xl underline font-semibold justify-self-start"
            }
            href={`/blog/${postProperties.title}`}
          >
            {postProperties.titleAsString}
          </Link>
          <PostBasicInfo
            props={postProperties}
            className={inColumn ? "!flex-col gap-2" : "!flex-row gap-4"}
          />
        </div>

        <p
          className={
            "w-full md:line-clamp-3 line-clamp-6 overflow-ellipsis text-dark-blue"
          }
        >
          {postProperties.description}
        </p>
        <Link
          href={`/blog/${postProperties.title}`}
          className={
            "bg-light-orange md:w-fit w-full text-center p-2 text-dark-blue hover:bg-dark-orange transition rounded-sm shadow-sm"
          }
        >
          Czytaj dalej
        </Link>
      </div>

      <div
        className={`relative ${
          inColumn ? "w-full h-[10rem] " : "md:w-2/5 md:h-auto"
        }  overflow-hidden`}
      >
        <Image
          className={"group-hover:scale-[1.15] transition duration-800"}
          layout={"fill"}
          objectFit={"cover"}
          src={postProperties.imageSrc}
          alt={postProperties.titleAsString}
        />
      </div>
    </div>
  );
};

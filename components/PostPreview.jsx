import Link from "next/link";
import Image from "next/image";
import PostBasicInfo from "./PostBasicInfo";

export const PostPreview = ({ postProperties }) => {
  return (
    <div
      className={
        "relative w-full bg-gray-100 rounded-sm shadow-sm overflow-hidden flex group md:flex-row flex-col-reverse"
      }
    >
      <div className={"flex flex-col gap-8 p-4 md:w-3/5 w-full"}>
        <div className={"space-y-2"}>
          <Link
            className={
              "text-dark-orange text-2xl underline font-semibold justify-self-start"
            }
            href={`/blog/${postProperties.id}`}
          >
            {postProperties.title}
          </Link>
          <PostBasicInfo props={postProperties} />
        </div>

        <p
          className={
            "w-full md:line-clamp-3 line-clamp-6 overflow-ellipsis text-dark-blue"
          }
        >
          {postProperties.description}
        </p>
        <Link
          p-2
          href={`/blog/${postProperties.id}`}
          className={
            "bg-light-orange md:w-fit w-full text-center p-2 text-dark-blue hover:bg-dark-orange transition rounded-sm shadow-sm"
          }
        >
          Czytaj dalej
        </Link>
      </div>

      <div
        className={
          "relative md:w-2/5 w-full md:h-auto h-[10rem] overflow-hidden"
        }
      >
        <Image
          className={"group-hover:scale-[1.15] transition duration-800"}
          layout={"fill"}
          objectFit={"cover"}
          src={postProperties.imageSrc}
          alt={postProperties.title}
        />
      </div>
    </div>
  );
};

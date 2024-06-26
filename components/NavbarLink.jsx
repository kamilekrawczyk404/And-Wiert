"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavbarLink = ({
  href = "",
  title = "",
  className = "",
  ...props
}) => {
  const pathname = usePathname();

  // if nested routes, get parent route
  const isActive =
    pathname.indexOf("/") !== pathname.lastIndexOf("/")
      ? pathname.substring(0, pathname.lastIndexOf("/")) === href
      : pathname === href;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const styling = `relative font-medium flex items-center gap-2 hover:cursor-pointer w-fit py-[0.125rem] ${
    isActive ? "[&>span]:w-full" : "[&>span]:hover:w-full"
  } ${className}`;

  return href === "/" && pathname === "/" ? (
    <button
      className={styling}
      onClick={href === "/" && scrollToTop}
      {...props}
    >
      {title}
      <span
        className={
          "absolute rounded-md bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[.25rem] transition-[width] bg-dark-orange"
        }
      ></span>
    </button>
  ) : (
    <Link href={href} onClick={scrollToTop} className={styling} {...props}>
      {title}
      <span
        className={
          "absolute rounded-md bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[.25rem] transition-[width] bg-dark-orange"
        }
      ></span>
    </Link>
  );
};

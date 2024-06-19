"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavbarLink = ({ href = "", title = "", className = "" }) => {
  const pathname = usePathname();

  // if nested routes, get parent route
  const isActive =
    pathname.indexOf("/") !== pathname.lastIndexOf("/")
      ? pathname.substring(0, pathname.lastIndexOf("/")) === href
      : pathname === href;

  return (
    <Link
      href={href}
      className={
        "relative font-medium flex items-center gap-2 hover:cursor-pointer " +
        (isActive ? "[&>span]:w-full " : "[&>span]:hover:w-full ") +
        className
      }
    >
      {title}
      <span
        className={
          "absolute rounded-md bottom-[0.25rem] left-1/2 transform -translate-x-1/2 w-0 h-[.2rem] transition-[width] bg-dark-orange"
        }
      ></span>
    </Link>
  );
};

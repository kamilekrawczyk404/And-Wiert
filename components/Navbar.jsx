"use client";
import { ContactNavbar } from "@/components/ContactNavbar";
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import MotionContainer from "./MotionContainer";
import { NavbarLink } from "./NavbarLink";
import { SiteDetailsContext } from "../utils/providers/SiteDetailsProvider";
import { Icon } from "./Icon";
import useUserScrolledPage from "../hooks/useUserScrolledPage";

export const Navbar = () => {
  const { pageMap } = useContext(SiteDetailsContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const { userScrolledUp } = useUserScrolledPage();

  const [mobileNavRef, animate] = useAnimate();

  useEffect(() => {
    if (menuOpen) {
      const openAnimation = async () => {
        await animate(
          mobileNavRef.current,
          {
            width: "100vw",
            display: "block",
          },
          { ease: "easeIn", transitionDuration: 0.25 },
        );

        await animate("div", { opacity: 1, display: "flex" }, { delay: 0.15 });
      };

      openAnimation();
    } else {
      const closeAnimation = async () => {
        await animate("div", { opacity: 0, display: "hidden" });

        await animate(
          mobileNavRef.current,
          { width: "0vw", display: "hidden" },
          { ease: "easeOut", transitionDuration: 0.25, delay: -0.15 },
        );
      };

      closeAnimation();
    }
  }, [menuOpen]);

  return (
    <motion.nav
      variants={{
        scrollingDown: { y: "-100%" },
        scrollingUp: { y: 0 },
      }}
      transition={{ duration: 0.25 }}
      initial={"scrollingUp"}
      animate={!userScrolledUp ? "scrollingUp" : "scrollingDown"}
      className={"sticky top-0 left-0 flex flex-col z-50 shadow-lg w-full"}
    >
      <ContactNavbar />
      <MotionContainer
        className={
          "bg-white flex flex-row gap-16 text-lg lg:justify-between text-dark-blue py-6"
        }
      >
        <Link
          className={
            "text-dark-blue flex items-center text-3xl font-semibold space-x-2 whitespace-nowrap relative w-fit"
          }
          href={"https://and-wiert.pl"}
        >
          <Icon.Logo />
          <span className={"whitespace-nowrap inline-block"}>And-Wiert</span>
        </Link>

        <div className={"xl:gap-16 lg:gap-8 whitespace-nowrap lg:flex hidden"}>
          {pageMap.map((link, index) => (
            <NavbarLink key={index} href={link.href} title={link.title} />
          ))}
        </div>

        <button
          className={
            "absolute lg:hidden inline-block text-3xl md:right-16 sm:right-8 right-4 z-10"
          }
          onClick={() => setMenuOpen((prev) => !prev)}
          title={`${menuOpen ? "Zamknij" : "Otwórz"} menu`}
        >
          <Icon.Bars className={"text-dark-blue"} />
        </button>

        {/*mobile layout*/}
        <div
          ref={mobileNavRef}
          className={`absolute top-0 flex flex-col justify-center pb-36 gap-8 text-2xl lg:hidden left-0 bg-white border-dark-blue transition-all p-0 text-dark-blue h-screen`}
        >
          <div
            className={
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col justify-center gap-4 hidden"
            }
          >
            {pageMap.map((link, index) => (
              <NavbarLink
                onClick={() => setMenuOpen(false)}
                href={link.href}
                key={index}
                title={link.title}
                className={"text-4xl whitespace-nowrap"}
              />
            ))}
          </div>
        </div>
      </MotionContainer>
    </motion.nav>
  );
};

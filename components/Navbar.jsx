"use client";
import { ContactNavbar } from "@/components/ContactNavbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion, useAnimate, useScroll } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import MotionContainer from "./MotionContainer";
import { NavbarLink } from "./NavbarLink";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { SiteDetailsContext } from "../utils/providers/SiteDetailsProvider";
import { Icon } from "./Icon";
import StaggerList from "./StaggerList";

export const Navbar = () => {
  const { pageMap } = useContext(SiteDetailsContext);
  const { scrollYProgress } = useScroll();

  const [menuOpen, setMenuOpen] = useState(false);
  const [userScrolledUp, setUserScrolledUp] = useState(false);
  const [userScrolledPage, setUserScrolledPage] = useState(false);

  useEffect(() => {
    scrollYProgress.on("change", (y) => {
      setUserScrolledPage(y > 0);

      // prevent a situation when user scrolls down and the window starts shrinking
      setUserScrolledUp(
        y * window.innerHeight < window.innerHeight - 25 &&
          userScrolledPage &&
          scrollYProgress.getVelocity() < 0,
      );
    });
  }, [scrollYProgress, userScrolledPage]);

  const [mobileNavRef, animate] = useAnimate();

  useEffect(() => {
    if (menuOpen) {
      const openAnimation = async () => {
        // await animate("", { display: "block" });

        await animate(
          mobileNavRef.current,
          {
            width: "100vw",
            display: "block",
          },
          { ease: "easeIn", transitionDuration: 0.25 },
        );

        await animate("div", { opacity: 1 });
      };

      openAnimation();
    } else {
      const closeAnimation = async () => {
        await animate("div", { opacity: 0 });

        // await animate("div", { display: "hidden" });

        await animate(
          mobileNavRef.current,
          { width: "0vw", display: "hidden" },
          { ease: "easeOut", transitionDuration: 0.25 },
        );
      };

      closeAnimation();
    }
  }, [menuOpen]);

  // const showOrHideMenu = () => {
  //   setMenuOpen((prev) => !prev);
  // };

  return (
    <nav className={"sticky top-0 left-0 flex flex-col z-10 shadow-lg w-full"}>
      <ContactNavbar />
      <MotionContainer
        className={"h-fit bg-white"}
        initial={{
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
        }}
        animate={{
          paddingTop: !userScrolledUp && userScrolledPage ? "0.5rem" : "1.5rem",
          paddingBottom:
            !userScrolledUp && userScrolledPage ? "0.5rem" : "1.5rem",
        }}
      >
        <div
          className={"flex gap-16 text-lg lg:justify-between text-dark-blue"}
        >
          <Link
            className={
              "text-dark-blue flex items-center text-3xl font-semibold space-x-2 whitespace-nowrap relative w-fit"
            }
            href={"https://and-wiert.pl"}
          >
            <motion.span
              initial={{ fontSize: "1.875rem" }}
              animate={{
                fontSize:
                  !userScrolledUp && userScrolledPage ? "1.5rem" : "1.875rem",
              }}
            >
              <Icon.Logo />
            </motion.span>
            <motion.span
              initial={{ fontSize: "1.875rem" }}
              animate={{
                fontSize:
                  !userScrolledUp && userScrolledPage ? "1.75rem" : "2rem",
              }}
              className={"whitespace-nowrap inline-block"}
            >
              And-Wiert
            </motion.span>
          </Link>

          <div
            className={"xl:gap-16 lg:gap-8 whitespace-nowrap lg:flex hidden"}
          >
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
            <FontAwesomeIcon icon={faBars} className={"text-dark-blue"} />
          </button>
        </div>

        {/*mobile layout*/}
        <div
          ref={mobileNavRef}
          className={`absolute top-0 flex flex-col justify-center pb-36 gap-8 text-2xl lg:hidden left-0 bg-white border-dark-blue transition-all p-0 text-dark-blue h-screen`}
        >
          <AnimatePresence>
            {menuOpen && (
              <StaggerList
                inView={true}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-4`}
                items={pageMap.map((link, index) => (
                  <NavbarLink
                    href={link.href}
                    key={index}
                    title={link.title}
                    className={"text-4xl"}
                  />
                ))}
              />
            )}
          </AnimatePresence>
        </div>
      </MotionContainer>
    </nav>
  );
};

// {
//     userScrolled && !menuClicked && (
//         <SlideUpIndicator handleScrollToTop={scrollToTop}/>
//     )
// }

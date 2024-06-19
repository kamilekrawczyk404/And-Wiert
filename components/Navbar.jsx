"use client";
import { ContactNavbar } from "@/components/ContactNavbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import MotionContainer from "./MotionContainer";
import { NavbarLink } from "./NavbarLink";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

export const Navbar = () => {
  const links = [
    { href: "/", title: "Strona główna" },
    { href: "/realizations", title: "Realizacje" },
    { href: "/blog", title: "Blog" },
    { href: "/contact", title: "Kontakt" },
  ];
  const { scrollYProgress } = useScroll();
  const [userScrolledUp, setUserScrolledUp] = useState(false);
  const [userScrolledPage, setUserScrolledPage] = useState(false);

  useEffect(() => {
    scrollYProgress.on("change", (y) => {
      setUserScrolledPage(y > 0);

      // console.log(, window.innerHeight);
      // prevent a situation when user scrolls down and the window starts shrinking
      setUserScrolledUp(
        y * window.innerHeight < window.innerHeight - 25 &&
          userScrolledPage &&
          scrollYProgress.getVelocity() < 0,
      );
    });
  }, [scrollYProgress, userScrolledPage]);

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
        <section
          className={"flex gap-16 text-lg lg:justify-between text-dark-blue"}
        >
          <Link
            className={
              "text-dark-blue flex items-center text-3xl font-semibold space-x-2 whitespace-nowrap relative md:w-fit w-full"
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
              <FontAwesomeIcon icon={faDroplet} />
            </motion.span>
            <motion.span
              initial={{ fontSize: "1.875rem" }}
              animate={{
                fontSize:
                  !userScrolledUp && userScrolledPage ? "1.5rem" : "1.875rem",
              }}
              className={"whitespace-nowrap inline-block"}
            >
              And-Wiert
            </motion.span>
          </Link>

          <div
            className={"xl:gap-16 lg:gap-8 whitespace-nowrap lg:flex hidden"}
          >
            {links.map((link, index) => (
              <NavbarLink key={index} href={link.href} title={link.title} />
            ))}
          </div>

          <button
            className={
              "absolute lg:hidden inline-block text-3xl md:right-16 sm:right-8 right-4"
            }
            onClick={() => {
              setMenuClicked((prev) => !prev);
            }}
            title={"Otwórz/zamknij menu"}
          >
            <FontAwesomeIcon icon={faBars} className={"text-dark-blue"} />
          </button>
        </section>
        {/*    className={*/}
        {/*        "absolute flex flex-col justify-center pb-36 gap-8 text-2xl lg:hidden left-0 sm:top-[9rem] bg-white border-t-[.2rem] border-dark-blue transition-all p-0 text-dark-blue h-screen " +*/}
        {/*        (menuClicked ? "w-full " : "w-0 ") +*/}
        {/*        (userScrolled ? "md:top-[6rem] top-[5.5rem]  " : "top-[8.5rem]")*/}
        {/*    }*/}
        {/*>*/}
        {/*    {pageLinks.map((link, index) => (*/}
        {/*        <Anchor*/}
        {/*            key={index}*/}
        {/*            className={*/}
        {/*                "text-dark-blue text-semibold text-2xl w-fit " +*/}
        {/*                (!menuClicked && "hidden")*/}
        {/*            }*/}
        {/*            animated={true}*/}
        {/*            onClick={() => {*/}
        {/*                setMenuClicked(false);*/}
        {/*                scrollToTheElement(index);*/}
        {/*            }}*/}
        {/*            title={link.title}*/}
        {/*        >*/}
        {/*            {link.title}*/}
        {/*        </Anchor>*/}
        {/*    ))}*/}
        {/*</Container>*/}
        {/*</Container>*/}
      </MotionContainer>
    </nav>
  );
};

// {
//     userScrolled && !menuClicked && (
//         <SlideUpIndicator handleScrollToTop={scrollToTop}/>
//     )
// }

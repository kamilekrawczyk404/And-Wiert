import { NavContact } from "./NavContact.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDroplet } from "@fortawesome/free-solid-svg-icons";
import { useLayoutEffect, useRef, useState } from "react";
import Animation from "../Classes/Animation.js";
import { Container } from "./Partials/Container.jsx";
import { Anchor } from "./Partials/Anchor.jsx";

export const Nav = ({
  contact,
  handleScrollToTop,
  handleScroll,
  userScrolled,
  links,
}) => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const burgerRef = useRef(null);

  const [menuClicked, setMenuClicked] = useState(false);

  useLayoutEffect(() => {
    const navAnimation = new Animation(
      [navRef.current, logoRef.current, burgerRef.current],
      !userScrolled,
    );
    navAnimation.hideNav();
  }, [userScrolled]);

  return (
    <nav className={"sticky top-0 flex flex-col z-10 shadow-lg"}>
      <NavContact contact={contact} />
      <Container ref={navRef} className={"bg-white py-8"}>
        <section
          className={"flex gap-16 text-lg lg:justify-start justify-between"}
        >
          <Anchor
            ref={logoRef}
            className={"text-dark-blue text-3xl font-semibold"}
            onClick={() => handleScrollToTop()}
          >
            <FontAwesomeIcon icon={faDroplet} />
            <span className={"whitespace-nowrap"}>And-Wiert</span>
          </Anchor>
          <div
            className={
              "flex-row xl:gap-16 lg:gap-8 lg:flex hidden whitespace-nowrap"
            }
          >
            {links.map((link, index) => (
              <Anchor
                key={index}
                onClick={() => handleScroll(index)}
                animated={true}
              >
                {link.title}
              </Anchor>
            ))}
          </div>
          <button
            ref={burgerRef}
            className={"lg:hidden inline-block"}
            onClick={() => {
              setMenuClicked((prev) => !prev);
            }}
          >
            <FontAwesomeIcon icon={faBars} className={" text-dark-blue" + ""} />
          </button>
        </section>
        <div
          className={
            "absolute flex items-center flex-col justify-center gap-16 text-2xl lg:hidden left-0 sm:top-[9rem] bg-white border-t-[.2rem] border-dark-blue transition-[width] z-20 " +
            (menuClicked ? "w-full " : "w-0 ") +
            (userScrolled
              ? "md:top-[6rem] top-[5.5rem] md:h-[calc(100vh-3rem)] h-[calc(100vh-5rem)]"
              : "top-[8.5rem] h-[calc(100vh-8rem)]")
          }
        >
          {links.map((link, index) => (
            <Anchor
              key={index}
              className={!menuClicked && "hidden"}
              animated={true}
              onClick={() => {
                setMenuClicked(false);
                handleScroll(index);
              }}
            >
              {link.title}
            </Anchor>
          ))}
        </div>
      </Container>
    </nav>
  );
};
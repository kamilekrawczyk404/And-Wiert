import { NavContact } from "./NavContact.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDroplet } from "@fortawesome/free-solid-svg-icons";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import Animation from "../Classes/Animation.js";
import { Container } from "./Partials/Container.jsx";
import { Anchor } from "./Partials/Anchor.jsx";
import { Link } from "./Partials/Link.jsx";
import { ComponentContext } from "../Providers/ComponentContext.jsx";
import { SlideUpIndicator } from "./Partials/SlideUpIndicator.jsx";

export const Nav = () => {
  const {
    contactDetails,
    scrollToTheElement,
    scrollToTop,
    userScrolled,
    pageLinks,
  } = useContext(ComponentContext);

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
    <>
      <nav className={"sticky top-0 flex flex-col z-10 shadow-lg"}>
        <NavContact contact={contactDetails} />
        <Container ref={navRef} className={"bg-white py-8"}>
          <section
            className={
              "flex gap-16 text-lg lg:justify-start justify-between text-dark-blue "
            }
          >
            <Link
              ref={logoRef}
              className={"text-dark-blue text-3xl font-semibold"}
              href={"https://and-wiert.pl"}
              title={"And-Wiert"}
            >
              <FontAwesomeIcon icon={faDroplet} />
              <span className={"whitespace-nowrap"}>And-Wiert</span>
            </Link>
            <div
              className={
                "flex-row xl:gap-16 lg:gap-8 lg:flex hidden whitespace-nowrap"
              }
            >
              {pageLinks.map((link, index) => (
                <Anchor
                  key={index}
                  onClick={() => scrollToTheElement(index)}
                  animated={true}
                  title={link.title}
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
              title={"Otwórz/zamknij menu"}
            >
              <FontAwesomeIcon
                icon={faBars}
                className={" text-dark-blue" + ""}
              />
            </button>
          </section>
          <Container
            paddings={menuClicked}
            className={
              "absolute flex flex-col justify-center gap-8 text-2xl lg:hidden left-0 sm:top-[9rem] bg-white border-t-[.2rem] border-dark-blue transition-all p-0 text-dark-blue " +
              (menuClicked ? "w-full " : "w-0 ") +
              (userScrolled
                ? "md:top-[6rem] top-[5.5rem] md:h-[calc(100vh-3rem)] h-[calc(100vh-5rem)]"
                : "top-[8.5rem] h-[calc(100vh-8rem)]")
            }
          >
            {pageLinks.map((link, index) => (
              <Anchor
                key={index}
                className={
                  "text-dark-blue text-semibold text-2xl w-fit " +
                  (!menuClicked && "hidden")
                }
                animated={true}
                onClick={() => {
                  setMenuClicked(false);
                  handleScroll(index);
                }}
                title={link.title}
              >
                {link.title}
              </Anchor>
            ))}
          </Container>
        </Container>
      </nav>
      {userScrolled && <SlideUpIndicator handleScrollToTop={scrollToTop} />}
    </>
  );
};
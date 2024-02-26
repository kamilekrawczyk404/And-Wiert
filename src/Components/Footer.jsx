import { Container } from "./Partials/Container.jsx";
import { Link } from "./Partials/Link.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faSadTear } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Anchor } from "./Partials/Anchor.jsx";

export const Footer = ({ contact, links, handleScroll }) => {
  return (
    <Container className={"bg-dark-blue"}>
      <footer className={"flex gap-8 justify-between py-8"}>
        <div className={"flex gap-16 text-gray-100"}>
          <section className={"space-y-4"}>
            <h1 className={"text-gray-100 text-3xl font-bold"}>
              <FontAwesomeIcon icon={faDroplet} className={"mr-1"} />
              And-Wiert
            </h1>
            <div>
              <p>Studnie głębinowe</p>
              <p>Ciężkowice 33-190 ul. Leśna 8</p>
              <p>Tel: {contact.telephone}</p>
              <p>E-mail: {contact.email}</p>
            </div>
          </section>

          <div
            className={
              "md:flex hidden flex-col items-start justify-between text-lg text-gray-100"
            }
          >
            {links.map((link, index) => (
              <Anchor
                key={index}
                className={"transition hover:text-dark-orange"}
                underlineColor={"bg-dark-orange"}
                animated={true}
                onClick={() => handleScroll(index)}
              >
                {link.title}
              </Anchor>
            ))}
          </div>
        </div>

        <div className={"text-gray-100 text-lg space-y-4"}>
          <p>Znajdź nas:</p>
          <div>
            <Link className={"flex items-center justify-center"}>
              <FontAwesomeIcon icon={faFacebook} className={"text-2xl mr-1"} />
              Facebook
            </Link>
          </div>
        </div>
      </footer>
      <div
        className={
          "flex md:flex-row flex-col  md:justify-between items-center border-t-[.1rem] border-gray-100 sm:py-4 py-2"
        }
      >
        <div className={"flex items-center"}>
          <div className={"text-dark-orange"}>
            Copyright © 2024 <span className={"text-gray-100"}>And-Wiert</span>
          </div>
        </div>
        <div className={"text-dark-orange flex items-center"}>
          <span className={"mr-1"}>Realizacja -</span>
          <Link href={"mailto:kamilekkrawczyk404@gmail.com"}>
            Kamil Krawczyk
          </Link>
        </div>
      </div>
    </Container>
  );
};
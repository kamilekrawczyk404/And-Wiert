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
              <h3 className={'sm:text-xl text-lg '}>Studnie głębinowe</h3>
              {/*<p>Ciężkowice 33-190 ul. Leśna 8</p>*/}
              <p className={'sm:text-base text-sm'}>Tel: {contact.telephone}</p>
              <p className={'sm:text-base text-sm'}>E-mail: {contact.email}</p>
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
                title={link.title}
              >
                {link.title}
              </Anchor>
            ))}
          </div>
        </div>

        <div className={"text-gray-100 text-lg space-y-4"}>
          <h3>Znajdź nas:</h3>
          <div>
            <Link href={contact.facebook} title={"Odwiedź nas na Facebook'u"} className={"flex items-center justify-center"}>
              <FontAwesomeIcon icon={faFacebook} className={"text-2xl mr-1"} />
              Facebook
            </Link>
          </div>
        </div>
      </footer>
      <div
        className={
          "flex md:flex-row flex-col md:justify-between items-center border-t-[.1rem] border-gray-100 sm:py-4 py-2"
        }
      >
        <div className={"flex items-center"}>
          <div className={"text-dark-orange"}>
            Copyright © <span>{new Date().getFullYear()}</span> <span className={"text-gray-100"}>And-Wiert</span>
          </div>
        </div>
        <div className={"text-dark-orange flex items-center"}>
          <span className={"mr-1"}>Realizacja -</span>
          <Link href={"mailto:kamilekkrawczyk404@gmail.com"} title={"Realizacja - Kamil Krawczyk"}>
            Kamil Krawczyk
          </Link>
        </div>
      </div>
    </Container>
  );
};
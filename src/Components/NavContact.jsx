import { Link } from "./Partials/Link.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Container } from "./Partials/Container.jsx";

export const NavContact = ({ contact }) => {
  return (
    <Container
      className={"flex justify-between bg-dark-blue text-gray-200 py-2 text-sm"}
    >
      <div className={"flex md:gap-8 gap-4 items-center justify-center"}>
        <span className={"text-lg sm:inline hidden"}>Kontakt:</span>
        <Link href={`tel:+48${contact.telephone}`} title={"Zadzwoń do nas!"}>
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className={"text-dark-orange text-xl"}
          />
          <span className={"sm:inline hidden"}>{contact.telephone}</span>
        </Link>
        <Link href={`mailto:${contact.email}`} title={"Napisz do nas mail'a!"}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={"text-dark-orange text-xl"}
          />
          <span className={"sm:inline hidden"}>{contact.email}</span>
        </Link>
      </div>
      <div className={"flex md:gap-8 gap-4 items-center justify-center"}>
        <span className={"text-lg sm:inline hidden"}>Obserwuj nas:</span>
        <Link
          href={contact.facebook}
          target={"_blank"}
          title={"Odwiedź nas na Facebook'u"}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className={"text-xl text-gray-200"}
          />
        </Link>
      </div>
    </Container>
  );
};
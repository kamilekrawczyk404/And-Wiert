import { GapContainer } from "./Partials/GapContainer.jsx";
import { Link } from "./Partials/Link.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export const CallService = ({ contact }) => {
  return (
    <GapContainer
      className={
        "mt-4 lg:flex-row flex-col items-center justify-center md:gap-8 gap-4 self-center w-full"
      }
    >
      <div className={"text-gray-100 md:text-4xl text-2xl"}>
        Masz jakieś pytania?{" "}
        <span className={"text-dark-orange underline"}>Nie wahaj się!</span>
      </div>
      <Link
        href={`tel:+48${contact.telephone}`}
        className={
          "bg-gray-100 p-4 rounded md:text-3xl text-2xl text-dark-blue hover:bg-gray-200 transition animate-pulse"
        }
        title={"Zadzwoń do nas już teraz!"}
      >
        <FontAwesomeIcon icon={faPhoneVolume} />
        Zadzwoń!
      </Link>
    </GapContainer>
  );
};
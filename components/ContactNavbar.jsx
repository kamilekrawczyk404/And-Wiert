import { Container } from "./Container";
import ContactList from "./ContactList";
import SocialsList from "./SocialsList";

export const ContactNavbar = () => {
  return (
    <Container
      className={
        "bg-dark-blue flex justify-between py-4 text-white min-h-[3.5rem]"
      }
    >
      <ContactList className={"text-white bg-dark-blue md:gap-8 gap-4"} />
      <SocialsList className={"text-white bg-dark-blue"} />
    </Container>
  );
};

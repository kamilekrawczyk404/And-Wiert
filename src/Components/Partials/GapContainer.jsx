import { Container } from "./Container.jsx";

export const GapContainer = ({ children, className = "" }) => {
  return (
    <Container
      className={
        "flex sm:flex-row flex-col justify-between lg:p-16 md:py-12 py-8 shadow-lg bg-dark-blue gap-2 " + className
      }
    >
      {children}
    </Container>
  );
};
import { Container } from "./Container.jsx";

export const GapContainer = ({ children, className = "" }) => {
  return (
    <Container
      className={
        "flex justify-between md:p-16 p-12 shadow-lg bg-dark-blue " + className
      }
    >
      {children}
    </Container>
  );
};
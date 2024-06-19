import {
  faCheck,
  faFaucetDrip,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Counter from "./Counter";
import { Container } from "./Container";

export const Counters = () => {
  const achievements = [
    {
      title: "zadowolonych klientów",
      icon: faUsers,
      to: 100,
      percentage: true,
    },
    {
      title: "lat doświadczenia",
      icon: faCheck,
      to: 10,
    },
    {
      title: "wykonanych usług rocznie",
      icon: faFaucetDrip,
      to: 50,
    },
  ];

  return (
    <Container
      className={"relative flex md:flex-row flex-col bg-dark-blue p-4 gap-4"}
    >
      {achievements.map((achievement, index) => (
        <Counter
          key={index}
          from={0}
          to={achievement.to}
          duration={2}
          options={achievement}
        />
      ))}
    </Container>
  );
};

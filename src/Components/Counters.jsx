import {
  faCheck,
  faFaucetDrip,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Counter } from "./Partials/Counter.jsx";
import { GapContainer } from "./Partials/GapContainer.jsx";

export const Counters = () => {
  const achievements = [
    {
      title: "zadowolonych klientów ",
      icon: faUsers,
      count: 100,
      percentage: true,
      time: 30,
    },
    {
      title: "lat doświadczenia",
      icon: faCheck,
      count: 10,
      time: 175,
    },
    {
      title: "wykonanych usług rocznie",
      icon: faFaucetDrip,
      count: 50,
      time: 100,
    },
  ];

  return (
    <GapContainer className={"sm:flex-row flex-col"}>
      {achievements.map((achievement, index) => (
        <Counter key={index} achievement={achievement} />
      ))}
    </GapContainer>
  );
};
"use client";

import Counter from "./Counter";
import { Container } from "./Container";
import React from "react";
import { Icon } from "./Icon";

export const Counters = () => {
  const iconClassName =
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-4xl text-2xl text-dark-blue transition";

  const achievements = [
    {
      title: "zadowolonych klientów",
      icon: <Icon.Users className={iconClassName} />,
      to: 100,
      percentage: true,
    },
    {
      title: "lat doświadczenia",
      icon: <Icon.Checked className={iconClassName} />,
      to: 10,
    },
    {
      title: "wykonanych usług rocznie",
      icon: <Icon.FaucetDrip className={iconClassName} />,
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

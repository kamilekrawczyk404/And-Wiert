"use client";
import React from "react";
import { Carousel } from "../components/Carousel";
import { VoivodeshipMap } from "../components/voivodeshipMap";
import Services from "../components/Services";
import { Counters } from "../components/Counters";
import { CallReminder } from "../components/CallReminder";
import MoveIndicator from "../components/MoveIndicator";

export default function Home() {
  return (
    <>
      <Carousel />
      <Services />
      <Counters />
      <CallReminder />
      <VoivodeshipMap />
      <MoveIndicator />
    </>
  );
}

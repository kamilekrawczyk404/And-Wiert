"use client";

import React, from "react";
import { Carousel } from "../components/Carousel";
import { VoivodeshipMap } from "../components/voivodeshipMap";
import Services from "../components/Services";
import { Counters } from "../components/Counters";
import { CallReminder } from "../components/CallReminder";
import MoveIndicator from "../components/MoveIndicator";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title={"And-Wiert - Wiercenie Studni Głębinowych"}
        image={"https://and-wiert.pl/images/hero/main1.webp"}
        url={"https://and-wiert.pl"}
      />
      <Carousel />
      <Services />
      <Counters />
      <CallReminder />
      <VoivodeshipMap />
      <MoveIndicator />
    </>
  );
}

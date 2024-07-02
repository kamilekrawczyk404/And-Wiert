"use client";

import { useContext } from "react";
import { Container } from "./Container";
import { SiteDetailsContext } from "../utils/providers/SiteDetailsProvider";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "./Icon";

export const CallReminder = () => {
  const { contact, motionVariants } = useContext(SiteDetailsContext);

  return (
    <Container
      className={
        "lg:flex-row flex-col items-center justify-center md:gap-4 gap-2 self-center w-full bg-white flex md:py-12 py-8 z-10"
      }
    >
      <motion.div
        initial={{ ...motionVariants.hidden, x: -50 }}
        whileInView={{ ...motionVariants.visible, x: 0 }}
        viewport={{ once: true, amount: "full" }}
        transition={{ delay: 0.25 }}
        className={
          "text-dark-blue md:text-4xl text-2xl gap-1 flex flex-col items-center"
        }
      >
        <span>Masz jakieś pytania?</span>
        <span className={"text-dark-orange"}>Nie wahaj się!</span>
      </motion.div>

      <motion.div
        initial={{ ...motionVariants.hidden, x: -50 }}
        whileInView={{ ...motionVariants.visible, x: 0 }}
        viewport={{ once: true, amount: "full" }}
        transition={{ animate: { delay: 0.25 } }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className={
          "bg-light-orange p-4 rounded md:text-3xl text-2xl text-dark-blue hover:bg-dark-orange transition"
        }
      >
        <Link
          href={`tel:+48${contact.phone.value}`}
          title={"Zadzwoń do nas już teraz!"}
        >
          <span className={"space-x-4 inline-block"}>
            <Icon.RingingPhone />
            <span>Zadzwoń!</span>
          </span>
        </Link>
      </motion.div>
    </Container>
  );
};

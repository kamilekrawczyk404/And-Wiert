import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Container } from "./Container";
import { SiteDetailsContext } from "../utils/providers/SiteDetailsProvider";
import Link from "next/link";
import { motion } from "framer-motion";

export const CallReminder = () => {
  const { contactDetails, motionVariants } = useContext(SiteDetailsContext);
  return (
    <Container
      className={
        "lg:flex-row flex-col items-center justify-center md:gap-8 gap-6 self-center w-full bg-white flex py-12"
      }
    >
      <motion.div
        initial={{ ...motionVariants.hidden, x: -50 }}
        whileInView={{ ...motionVariants.visible, x: 0 }}
        viewport={{ once: true, amount: "full" }}
        transition={{ delay: 0.25 }}
        className={"text-dark-blue md:text-4xl text-2xl space-x-2"}
      >
        <span>Masz jakieś pytania?</span>
        <span className={"text-dark-orange underline"}>Nie wahaj się!</span>
      </motion.div>

      <motion.div
        initial={{ ...motionVariants.hidden, x: -50 }}
        whileInView={{ ...motionVariants.visible, x: 0 }}
        viewport={{ once: true, amount: "full" }}
        transition={{ animate: { delay: 0.5 } }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        <Link
          href={`tel:+48${contactDetails.telephone}`}
          className={
            "bg-light-orange p-4 rounded md:text-3xl text-2xl text-dark-blue hover:bg-dark-orange transition "
          }
          title={"Zadzwoń do nas już teraz!"}
        >
          <span className={"space-x-4 inline-block"}>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <span>Zadzwoń!</span>
          </span>
        </Link>
      </motion.div>
    </Container>
  );
};

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";

const SubmitButton = ({
  isPending,
  isSuccess,
  isError,
  triedSending,
  successInfo,
  title,
}) => {
  return (
    <div
      className={
        "flex md:flex-row flex-col items-center justify-center md:gap-4 relative sm:w-fit w-full"
      }
    >
      <AnimatePresence>
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          disabled={isPending || isSuccess || isError}
          type={"submit"}
          className={`py-6 px-4 rounded-sm shadow-sm font-semibold transition-all flex items-center justify-center gap-2 h-[2.5rem]  
            ${
              !triedSending && isPending
                ? "bg-dark-orange brightness-75 w-full"
                : ""
            }
            ${
              !triedSending && !isPending
                ? "bg-light-orange hover:bg-dark-orange w-full"
                : ""
            }
            ${
              triedSending && isSuccess
                ? "bg-lime-600 !w-10 !aspect-square !rounded-full !py-0"
                : ""
            }  
            ${
              isError && triedSending
                ? "bg-red-600 !aspect-square !rounded-full !py-0"
                : ""
            }`}
        >
          {isPending && !triedSending && (
            <motion.span
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                repeatType: "mirror",
              }}
            >
              <motion.span
                className={"absolute"}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  repeatType: "loop",
                  repeat: Infinity,
                  duration: 1,
                }}
              >
                <Icon.HourGlassHalf />
              </motion.span>
              <span className={"ml-6"}>Wysyłanie</span>
            </motion.span>
          )}{" "}
          {!isPending && !triedSending && (
            <>
              <Icon.Plane />
              <span>{title}</span>
            </>
          )}
          {isSuccess && triedSending && (
            <Icon.Checked className={"text-white text-xl"} />
          )}
          {isError && triedSending && (
            <Icon.Exclamation className={"text-white text-xl"} />
          )}
        </motion.button>

        {triedSending && isSuccess && (
          <motion.span
            key={"successInfo"}
            initial={{ opacity: 0, translateY: "0.5rem" }}
            animate={{ opacity: 1, translateY: 0 }}
            className={"text-lime-600"}
          >
            {successInfo}
          </motion.span>
        )}
        {triedSending && isError && (
          <motion.span
            key={"failInfo"}
            initial={{ opacity: 0, translateY: "0.5rem" }}
            animate={{ opacity: 1, translateY: 0 }}
            className={"text-red-600"}
          >
            Coś poszło nie tak.
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubmitButton;

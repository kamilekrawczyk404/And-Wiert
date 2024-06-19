"use client";
import React, { useRef, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { set, useForm } from "react-hook-form";
import { ReCAPTCHA } from "react-google-recaptcha";
import {
  faCheck,
  faExclamation,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";

const MessageForm = () => {
  const [triedSending, setTriedSending] = useState(false);

  const recaptchaRef = useRef(null);

  const [validFields, setValidFields] = useState({
    name: false,
    email: false,
    title: false,
    emailMessage: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      title: "",
      emailMessage: "",
    },
  });

  const isFieldValid = (name) => {
    const result = trigger(name);
    setValidFields((prev) => ({ ...prev, [name]: result }));
  };

  const { mutate, isPending, isError, isSuccess } = useMutation({
    // send an email and change the sending state

    mutationFn: async (data) => {
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },

    // change flag for success or error state
    onSettled: () => {
      setTriedSending(true);
    },
  });

  const onSubmit = async (data) => {
    mutate(data);
  };

  const onRecaptchaChange = (value) => {
    setValue("recaptcha", value, { shouldValidate: true });
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit(onSubmit)}
      className={`${
        !triedSending ? "md:gap-4 gap-2 " : "gap-1"
      } flex flex-col relative w-full border-[0.125rem] rounded-sm p-4 h-fit ${
        !triedSending
          ? "border-dark-orange"
          : `${isSuccess ? "border-lime-500" : "border-red-500"}`
      }
         
      }`}
    >
      <span
        className={
          "absolute -top-4 left-2 text-xl px-2 bg-white text-dark-orange"
        }
      >
        Formularz
      </span>
      <AnimatePresence>
        {!triedSending && (
          <motion.div
            className={"flex flex-col gap-4"}
            key={"formInputs"}
            exit={{
              opacity: 0,
              height: 0,
            }}
          >
            <div className={"flex gap-4 w-full 2xl:flex-row flex-col"}>
              <Input
                validFields={validFields}
                errors={errors}
                type={"text"}
                text={"Imię"}
                className={"w-full"}
                {...register("name", {
                  required: {
                    value: true,
                    message: "To pole jest wymagane",
                  },
                })}
                onBlur={() => isFieldValid("name")}
              />

              <Input
                validFields={validFields}
                errors={errors}
                type={"email"}
                text={"Email"}
                className={"w-full"}
                {...register("email", {
                  required: {
                    value: true,
                    message: "To pole jest wymagane",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Nieprawidłowy adres email",
                  },
                })}
                onBlur={() => isFieldValid("email")}
              />
            </div>

            <Input
              validFields={validFields}
              errors={errors}
              type={"text"}
              text={"Temat"}
              className={"w-full"}
              {...register("title", {
                required: {
                  value: true,
                  message: "To pole jest wymagane",
                },
              })}
              onBlur={() => isFieldValid("title")}
            />
            <Textarea
              validFields={validFields}
              errors={errors}
              title={"Wiadomość"}
              className={"w-full"}
              {...register("emailMessage", {
                required: {
                  value: true,
                  message: "To pole jest wymagane",
                },
              })}
              onBlur={() => isFieldValid("emailMessage")}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/*<ReCAPTCHA*/}
      {/*  ref={recaptchaRef}*/}
      {/*  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}*/}
      {/*  onChange={onRecaptchaChange}*/}
      {/*/>*/}

      <div
        className={
          "flex md:flex-row flex-col items-center justify-center gap-4 relative w-full"
        }
      >
        <AnimatePresence>
          <motion.button
            whileTap={{
              scale: 0.95,
            }}
            disabled={isPending || isSuccess || isError}
            type={"submit"}
            className={`py-6 px-4 rounded-sm shadow-sm font-semibold transition-all flex items-center justify-center gap-2  h-[2.5rem]  
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
              triedSending && isSuccess ? "bg-lime-600 md:w-[10rem] w-full" : ""
            }  
            ${isError && triedSending ? "bg-red-600 md:w-[10rem] w-full" : ""}`}
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
                  <FontAwesomeIcon icon={faHourglassHalf} />
                </motion.span>
                <span className={"ml-6"}>Wysyłanie</span>
              </motion.span>
            )}{" "}
            {!isPending && !triedSending && (
              <>
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Wyślij</span>
              </>
            )}
            {isSuccess && triedSending && (
              <FontAwesomeIcon
                icon={faCheck}
                className={"text-white text-xl"}
              />
            )}
            {isError && triedSending && (
              <FontAwesomeIcon
                icon={faExclamation}
                className={"text-white text-xl"}
              />
            )}
          </motion.button>

          {triedSending && isSuccess && (
            <motion.span
              key={"successInfo"}
              initial={{ opacity: 0, translateY: "0.5rem" }}
              animate={{ opacity: 1, translateY: 0 }}
              className={"text-lime-600"}
            >
              Wiadomość została wysłana.
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
    </motion.form>
  );
};

export default MessageForm;

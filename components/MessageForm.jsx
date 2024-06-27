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
import SubmitButton from "./SubmitButton";

const MessageForm = () => {
  const [triedSending, setTriedSending] = useState(false);
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

      <SubmitButton
        isError={isError}
        isPending={isPending}
        isSuccess={isSuccess}
        successInfo={"Wiadomość została wysłana"}
        triedSending={triedSending}
      />
    </motion.form>
  );
};

export default MessageForm;

"use client";
import React, { useRef, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { AnimatePresence, motion } from "framer-motion";
import SubmitButton from "./SubmitButton";
import useHandleSending from "../hooks/useHandleSending";
import FormLayout from "./FormLayout";

const MessageForm = () => {
  const {
    register,
    triedSending,
    dirtyFields,
    isSuccess,
    isError,
    isPending,
    onSubmit,
    errors,
    handleSubmit,
    touchedFields,
  } = useHandleSending(
    {
      name: "",
      email: "",
      title: "",
      emailMessage: "",
    },
    "/api/email",
  );

  return (
    <FormLayout
      title={"Formularz"}
      isSuccess={isSuccess}
      triedSending={triedSending}
      onSubmit={handleSubmit(onSubmit)}
    >
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
                touchedFields={touchedFields}
                dirtyFields={dirtyFields}
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
              />

              <Input
                touchedFields={touchedFields}
                dirtyFields={dirtyFields}
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
              />
            </div>

            <Input
              touchedFields={touchedFields}
              dirtyFields={dirtyFields}
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
            />
            <Textarea
              touchedFields={touchedFields}
              dirtyFields={dirtyFields}
              errors={errors}
              text={"Wiadomość"}
              className={"w-full"}
              {...register("emailMessage", {
                required: {
                  value: true,
                  message: "To pole jest wymagane",
                },
              })}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <SubmitButton
        isError={isError}
        isPending={isPending}
        isSuccess={isSuccess}
        successInfo={"Wiadomość została wysłana"}
        title={"Wyślij"}
        triedSending={triedSending}
      />
    </FormLayout>
  );
};

export default MessageForm;

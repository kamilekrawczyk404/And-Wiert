"use client";
import React from "react";
import useHandleSending from "../hooks/useHandleSending";
import Input from "./Input";
import Textarea from "./Textarea";
import SubmitButton from "./SubmitButton";
import { motion } from "framer-motion";
import FormLayout from "./FormLayout";

const CommentForm = ({ commentId }) => {
  const {
    onSubmit,
    isFieldValid,
    register,
    handleSubmit,
    triedSending,
    validFields,
    isPending,
    isError,
    isSuccess,
    errors,
  } = useHandleSending(["username", "message"], "/api/comment", {
    id: commentId,
  });

  return (
    <FormLayout
      triedSending={triedSending}
      isSuccess={isSuccess}
      onSubmit={handleSubmit(onSubmit)}
      title={"Napisz komentarz"}
    >
      <Input
        text={"Imię"}
        validFields={validFields}
        {...register("username", {
          required: {
            value: true,
            message: "To pole jest wymagane",
          },
        })}
        type={"text"}
        errors={errors}
        onBlur={() => isFieldValid("name")}
      />
      <Textarea
        text={"Wiadomość"}
        validFields={validFields}
        errors={errors}
        {...register("message", {
          required: { value: true, message: "To pole jest wymagane" },
        })}
        onBlur={() => isFieldValid("name")}
      />
      <SubmitButton
        triedSending={triedSending}
        isError={isError}
        isPending={isPending}
        successInfo={"Komentarz został dodany."}
        isSuccess={isSuccess}
      />
    </FormLayout>
  );
};

export default CommentForm;

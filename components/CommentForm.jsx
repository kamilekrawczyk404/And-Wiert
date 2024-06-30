"use client";
import React from "react";
import useHandleSending from "../hooks/useHandleSending";
import Input from "./Input";
import Textarea from "./Textarea";
import SubmitButton from "./SubmitButton";
import FormLayout from "./FormLayout";

const CommentForm = ({ postId }) => {
  const {
    onSubmit,
    register,
    handleSubmit,
    triedSending,
    isPending,
    isError,
    isSuccess,
    errors,
    touchedFields,
    dirtyFields,
  } = useHandleSending({ username: "", message: "" }, "/api/comment", {
    postId: postId,
  });

  return (
    <FormLayout
      triedSending={triedSending}
      isSuccess={isSuccess}
      onSubmit={handleSubmit(onSubmit)}
      title={"Napisz komentarz"}
    >
      {!triedSending && (
        <>
          <Input
            text={"Imię"}
            touchedFields={touchedFields}
            dirtyFields={dirtyFields}
            {...register("username", {
              required: {
                value: true,
                message: "To pole jest wymagane",
              },
            })}
            type={"text"}
            errors={errors}
          />
          <Textarea
            text={"Wiadomość"}
            touchedFields={touchedFields}
            dirtyFields={dirtyFields}
            errors={errors}
            {...register("message", {
              required: { value: true, message: "To pole jest wymagane" },
            })}
          />
        </>
      )}

      <SubmitButton
        triedSending={triedSending}
        isError={isError}
        isPending={isPending}
        successInfo={"Komentarz został dodany."}
        title={"Dodaj komentarz"}
        isSuccess={isSuccess}
      />
    </FormLayout>
  );
};

export default CommentForm;

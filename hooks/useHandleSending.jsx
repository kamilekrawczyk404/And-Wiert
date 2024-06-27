import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

const useHandleSending = (fields, endpoint, parameters = {}) => {
  const [triedSending, setTriedSending] = useState(false);

  const [validFields, setValidFields] = useState(
    ...fields.map((field) => ({ [field]: false })),
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    defaultValues: {
      ...fields.map((field) => ({ [field]: "" })),
    },
  });

  const isFieldValid = (name) => {
    const result = trigger(name);
    setValidFields((prev) => ({ ...prev, [name]: result }));
  };

  const { mutate, isPending, isError, isSuccess } = useMutation({
    // send an email and change the sending state

    mutationFn: async (data) => {
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ ...parameters, data }),
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

  return {
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
  };
};

export default useHandleSending;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

const useHandleSending = (fields, endpoint, parameters = {}) => {
  const [triedSending, setTriedSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields },
  } = useForm({
    defaultValues: fields,
  });

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data) => {
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ ...parameters, ...data }),
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
    register,
    handleSubmit,
    triedSending,
    isPending,
    isError,
    isSuccess,
    errors,
    touchedFields,
    dirtyFields,
  };
};

export default useHandleSending;

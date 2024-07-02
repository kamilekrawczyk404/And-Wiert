"use client";
import React, { forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";

const Input = forwardRef(
  (
    { className = "", text = "", errors, touchedFields, dirtyFields, ...props },
    ref,
  ) => {
    const inputStates = {
      hasError: errors.hasOwnProperty(props.name),
      wasTouched: touchedFields[props.name],
      isDirty: dirtyFields[props.name],
    };

    return (
      <div className={`relative ${className}`}>
        <input
          ref={ref}
          {...props}
          className={`relative bg-transparent border-light-blue focus:outline-none text-gray-700 placeholder:text-transparent peer border-[0.125rem] p-2 rounded-sm focus:border-dark-orange transition-all w-full ${
            inputStates.wasTouched && inputStates.isDirty
              ? inputStates.hasError
                ? "border-red-500"
                : "border-lime-500"
              : "border-light-blue"
          }`}
          type={"text"}
          placeholder={"Imię"}
        />
        <label
          className={`absolute text-lg text-dark-blue transition-all -translate-y-1/2 left-2 peer-placeholder-shown:top-1/2 peer-[:not(:placeholder-shown):focus]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-focus:top-0 peer-focus:text-sm bg-white mx-1 px-1 peer-focus:text-dark-orange pointer-events-none ${
            inputStates.wasTouched && inputStates.isDirty
              ? inputStates.hasError
                ? "text-red-500"
                : "text-lime-500"
              : "text-light-blue"
          }`}
        >
          {text}
        </label>

        {errors.hasOwnProperty(props.name) && (
          <ErrorMessage
            name={props.name}
            errors={errors}
            render={({ message }) => (
              <span
                className={
                  "absolute whitespace-nowrap -top-[0.65rem] right-0 mx-2 bg-white text-red-500 text-sm px-2"
                }
              >
                {message}
              </span>
            )}
          />
        )}
      </div>
    );
  },
);

export default Input;

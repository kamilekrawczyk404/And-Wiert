import React, { forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";

// eslint-disable-next-line react/display-name
const Textarea = forwardRef(
  (
    { className = "", text = "", errors, touchedFields, dirtyFields, ...props },
    ref,
  ) => {
    const inputStates = {
      hasError: errors.hasOwnProperty(props.name),
      wasTouched: touchedFields[props.name],
      isDirty: dirtyFields[props.name],
    };

    console.log(props);

    return (
      <div className={`relative ${className}`}>
        <textarea
          {...props}
          ref={ref}
          placeholder={text}
          className={`relative bg-transparent focus:outline-none text-gray-700 placeholder:text-transparent peer border-[0.125rem]  p-2 rounded-sm focus:border-dark-orange transition-all resize-none w-full h-[20vh] ${
            inputStates.wasTouched && inputStates.isDirty
              ? inputStates.hasError
                ? "border-red-500"
                : "border-lime-500"
              : "border-light-blue"
          }`}
        ></textarea>
        <label
          className={`absolute text-lg transition-all -translate-y-1/2 left-2 peer-placeholder-shown:top-6 peer-[:not(:placeholder-shown):focus]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-focus:top-0 peer-focus:text-sm bg-white mx-1 px-1 peer-focus:text-dark-orange pointer-events-none text-dark-blue peer-[not(:focus)]:text-lime-500  ${
            inputStates.wasTouched && inputStates.isDirty
              ? inputStates.hasError
                ? "text-red-500"
                : "text-lime-500"
              : "text-light-blue"
          }`}
        >
          {text}
        </label>
        {inputStates.hasError && (
          <ErrorMessage
            name={props.name}
            errors={errors}
            render={({ message }) => (
              <span
                className={
                  "absolute whitespace-nowrap -top-2 right-0 mx-2 bg-white text-red-500 text-sm px-2"
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

export default Textarea;

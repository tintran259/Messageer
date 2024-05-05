"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  name: string;
  options?: RegisterOptions<FieldValues>;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  name,
  options,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-600"
    >
      {label}
    </label>
    <div className="mt-2 relative">
      <input
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        {...register(name, {
          required,
          ...options,
        })}
        className={clsx(
          `
      form-input
      block
      w-full
      rounded-md
      border-0
      py-1.5
      text-gray-900
      shadow-sm
      ring-1
      ring-inset
      ring-gray-300
      placeholder:text-gray-400
      focus:ring-2
      focus:ring-inset
      focus:ring-sky-600
      sm:text-sm
      sm:leading-6
      `,
          errors[name] &&
            "focus:ring-rose-400 border-rose-400 border ring-rose-400",
          disabled && "opacity-50 cursor-default"
        )}
      />
      {errors[name] && (
        <span className="absolute top-0 right-2 mt-2 text-sm text-rose-400 flex items-center">
          <AiOutlineExclamationCircle className="inline-block mr-1" />
          {(errors[name]?.message as ReactNode) || "This field is required"}
        </span>
      )}
    </div>
  </div>
);

export default Input;

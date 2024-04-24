"use client";
// libs
import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button = ({
  type,
  fullWidth,
  secondary,
  danger,
  disabled,
  onClick,
  children,
}: ButtonProps) => (
  <button
    onClick={onClick}
    type={type}
    disabled={disabled}
    className={clsx(
      `
    flex
    justify-center
    py-2
    px-3
    border
    border-transparent
    text-sm
    font-semibold
    rounded-md
    focus-visible:outline
    focus-visible:outline-2
    focus-visible:outline-offset-2`,
      disabled && "opacity-50 cursor-default",
      fullWidth && "w-full",
      secondary ? "text-gray-90" : "text-white",
      danger
        ? "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600"
        : "bg-sky-600 hover:bg-sky-700",
      !secondary &&
        !danger &&
        "bg-sky-600 hover:bg-sky-700 focus-visible:outline-sky-700"
    )}
  >
    {children}
  </button>
);

export default Button;

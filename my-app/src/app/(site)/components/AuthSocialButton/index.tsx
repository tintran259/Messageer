"use client";
// libs
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick?: () => void;
}

const AuthSocialButton = ({ icon: Icon, onClick }: AuthSocialButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full justify-center py-2 px-3 border border-gray-200 text-sm font-semibold rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white hover:bg-gray-50 focus-visible:outline-sky-600"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;

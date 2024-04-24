"use client";

// libs
import axios from "axios";
import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
// components
import Input from "@/components/Input";
import Button from "@/components/Button";
import AuthSocialButton from "../AuthSocialButton";
import toast from "react-hot-toast";

type IVariant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<IVariant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleVariant = () => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    if (variant === "LOGIN") {
      // login
    }
    if (variant === "REGISTER") {
      try {
        const res = await axios.post("/api/register", data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("Something went wrong");
      }
      // register
    }
  };

  const socialAction = (value: string) => {};

  return (
    <div
      className="
  mt-8
  sm:mx-auto
  sm:w-full
  sm:max-w-md"
    >
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {variant === "REGISTER" && (
            <Input
              label="Name"
              id="name"
              name="name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            label="Email"
            id="email"
            name="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            label="Password"
            id="password"
            name="password"
            register={register}
            errors={errors}
            disabled={isLoading}
            type="password"
          />
          <div>
            <Button fullWidth disabled={isLoading} type="submit">
              {variant === "REGISTER" ? "Register" : "Sign in"}
            </Button>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div
                className="absolute
              inset-0
              flex
              items-center"
              >
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => socialAction("github")}
              />
              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialAction("google")}
              />
            </div>
            <div
              className="flex
            gap-2
            justify-center
            text-xs
            mt-6
            px-2
            text-gray-500
            "
            >
              <div>
                {variant === "LOGIN"
                  ? "New to Messenger?"
                  : "Already have an account?"}
              </div>
              <div onClick={toggleVariant} className="cursor-pointer underline">
                {variant === "LOGIN" ? "Create an account" : "Login"}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;

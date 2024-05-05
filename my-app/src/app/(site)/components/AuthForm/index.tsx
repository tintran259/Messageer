"use client";

// libs
import axios, { AxiosError } from "axios";
import { use, useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// components
import Input from "@/components/Input";
import Button from "@/components/Button";
import AuthSocialButton from "../AuthSocialButton";
// others
import { MAIN_PAGE } from "@/constants";

type IVariant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const router = useRouter();
  const section = useSession();
  const [variant, setVariant] = useState<IVariant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  useEffect(() => {
    if (section?.status === "authenticated") {
      router.push(MAIN_PAGE);
    }
  }, [section?.status, router]);

  const toggleVariant = () => {
    clearErrors();
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  };

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    if (variant === "LOGIN") {
      // login
      try {
        const response = await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
        });

        if (response?.error) {
          setIsLoading(false);
          toast.error(response.error);
        }

        router.push(MAIN_PAGE);
      } catch (error) {
        setIsLoading(false);
        toast.error("Something went wrong");
      }
    }
    if (variant === "REGISTER") {
      try {
        await axios.post("/api/register", data);
        setIsLoading(false);
        toast.success("Register successfully");
        router.push(MAIN_PAGE);
      } catch (error) {
        const message =
          ((error as AxiosError)?.response?.data as string) ||
          "Something went wrong";

        setIsLoading(false);
        toast.error(message);
      }
      // register
    }
  };

  const socialAction = async (value: string) => {
    setIsLoading(true);
    try {
      await signIn(value);
      setIsLoading(false);
      router.push(MAIN_PAGE);
    } catch (error) {
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };

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
              options={{
                required: "Name is required",
              }}
            />
          )}
          <Input
            label="Email"
            id="email"
            name="email"
            register={register}
            errors={errors}
            disabled={isLoading}
            options={{
              validate: (value) => {
                if (
                  !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)
                ) {
                  return "Invalid email format";
                }
                return true;
              },
              required: "Email is required",
            }}
          />
          <Input
            label="Password"
            id="password"
            name="password"
            register={register}
            errors={errors}
            disabled={isLoading}
            type="password"
            options={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
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

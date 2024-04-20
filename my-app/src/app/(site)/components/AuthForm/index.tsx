"use client";

import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
// components
import Input from "@/app/components/Input";

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

  const onSubmit = (data: FieldValues) => {
    setIsLoading(true);
    if (variant === "LOGIN") {
      // login
    }
    if (variant === "REGISTER") {
      // register
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
          <Input
            label="Email"
            id="email"
            name="email"
            register={register}
            errors={errors}
          />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;

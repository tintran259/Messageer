import Image from "next/image";

const LogoForm = () => {
  return (
    <>
      <Image
        width={48}
        height={48}
        src={"/images/logo.png"}
        alt="Messenger Clone Logo"
        className="mx-auto w-auto"
      />
      <h2 className=" mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </>
  );
};

export default LogoForm;

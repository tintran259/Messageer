// components
import AuthForm from "./components/AuthForm";
import LogoForm from "./components/Logo";

const HomePage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm  mx-3">
        <LogoForm />
        <AuthForm />
      </div>
    </div>
  );
};

export default HomePage;

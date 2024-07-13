import React, { useState } from "react";
import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
import { useNavigate } from "react-router-dom";
import Footer from "components/footer/FooterAuthDefault";
import authImg from "assets/img/auth/auth.png";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const validation = (name, value) => {
    let error = "";
    if (name === "email") {
      error = !value?.trim()
        ? "Email is required"
        : !validateEmail(value)
        ? "Please enter a valid email address."
        : "";
    } else if (name === "password") {
      error = !value?.trim()
        ? "Password is required"
        : value?.length < 8
        ? "Password must be at least 8 characters long."
        : "";
    } else {
      error = "";
    }
    console.log(name, value);
    return error;
  };

  const handleEmailChange = (e) => {
    const { value, name } = e.target;
    setEmail(value);
    const emailError = validation(name, value);
    setError({
      ...error,
      [name]: emailError,
    });
  };

  const handlePasswordChange = (e) => {
    const { value, name } = e.target;
    setPassword(value);
    const passwordError = validation(name, value);
    console.log(passwordError);
    setError({
      ...error,
      [name]: passwordError,
    });
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validation("email", email);
    const passwordError = validation("password", password);
    setError({
      ...error,
      password: passwordError,
      email: emailError,
    });
    if (emailError || passwordError) {
      return;
    }

    localStorage.setItem("authUser", email);
  };

  return (
    <>
      <div>
        <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
          <FixedPlugin />
          <main className={`mx-auto min-h-screen`}>
            <div className="relative flex">
              <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
                <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                  <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
                    {/* Sign in section */}
                    <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                      <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                        Sign In
                      </h4>
                      <p className="mb-9 ml-1 text-base text-gray-600">
                        Enter your email and password to sign in!
                      </p>

                      <InputField
                        variant="auth"
                        extra="mb-3"
                        label="Email*"
                        placeholder="mail@simmmple.com"
                        id="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {console.log(error)}
                      {error?.email && (
                        <div className="mb-4 text-sm text-red-500">
                          {error?.email}
                        </div>
                      )}
                      {/* Password */}
                      <InputField
                        variant="auth"
                        extra="mb-3"
                        label="Password*"
                        placeholder="Min. 8 characters"
                        id="password"
                        password="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {error?.password && (
                        <div className="mb-4 text-sm text-red-500">
                          {error?.password}
                        </div>
                      )}
                      {/* Error message */}

                      {/* Checkbox */}
                      <div className="mb-4 flex items-center justify-between px-2">
                        <div className="flex items-center">
                          <Checkbox />
                          <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                            Keep me logged In
                          </p>
                        </div>
                        <a
                          className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                          href=" "
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <button
                        className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                        onClick={handleSubmit}
                      >
                        Sign In
                      </button>
                      <div className="mt-4">
                        <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                          Not registered yet?
                        </span>
                        <a
                          href=" "
                          className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                        >
                          Create an account
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
                    <div
                      className="absolute flex h-full w-full items-end justify-center bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]"
                      style={{ backgroundImage: `url(${authImg})` }}
                    />
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

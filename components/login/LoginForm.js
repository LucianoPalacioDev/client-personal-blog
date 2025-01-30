"use client";
import { useState } from "react";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import CustomEmailInput from "@/components/shared/CustomEmailInput";
import CustomPasswordInput from "@/components/shared/CustomPasswordInput";
import { validateEmail } from "@/helpers/utils";
import CustomSecondaryButton from "@/components/shared/CustomSecondaryButton";
import Link from "next/link";
import { loginUserFetch } from "@/services/users";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import LoadingIcon from "@/components/shared/icons/LoadingIcon";

export default function LoginForm() {
  const [emailText, setEmailText] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const cookies = useCookies();
  const router = useRouter();

  const handleEmailTextChange = (e) => {
    setEmailText(e.target.value);
    setEmailErrorText("");
  };

  const handlePasswordTextChange = (e) => {
    setPasswordText(e.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    if (!validateEmail(emailText)) {
      setEmailErrorText("Please, enter a valid email address!");
      return;
    }

    try {
      setIsFetching(true);
      const signUpData = {
        email: emailText,
        password: passwordText,
      };

      const response = await loginUserFetch({ data: signUpData });

      const jsonResponse = await response.json();
      const { success, message, token, userId } = jsonResponse || {};
      if (!success) {
        setErrorMessage(message);
      } else {
        cookies.set("token", token, { expires: 30 });
        router.push(`/profile/${userId}`);
      }
      setIsFetching(false);
    } catch (error) {
      console.log("Error trying to sign up: ", error);
      setErrorMessage("Error trying to sign up. Please, try again!");
      setIsFetching(false);
    }
  };

  return (
    <div className="flex flex-col justify-center w-1/2 gap-3">
      <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-5">
          <CustomEmailInput
            value={emailText}
            handleChange={handleEmailTextChange}
            labelText={"Email"}
            labelId={"email"}
            placeholder={"Email"}
            isRequired
            errorMessage={emailErrorText}
          />
          <CustomPasswordInput
            value={passwordText}
            handleChange={handlePasswordTextChange}
            labelText={"Password"}
            labelId={"password"}
            placeholder={"Password"}
            isRequired
          />
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <CustomPrimaryButton
            text={
              isFetching? (
                <div className="w-full flex justify-center items-center">
                  <LoadingIcon size="1rem" />
                </div>
              ) : (
                "Login"
              )
            }
            type="submit"
          />
        </div>
      </form>
      <Link href="/sign-up">
        <CustomSecondaryButton text="Sign Up" type="button" />
      </Link>
    </div>
  );
}

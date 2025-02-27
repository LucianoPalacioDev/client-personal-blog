"use client";
import { useState } from "react";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import CustomEmailInput from "@/components/shared/CustomEmailInput";
import CustomTextInput from "@/components/shared/CustomTextInput";
import CustomPasswordInput from "@/components/shared/CustomPasswordInput";
import CustomSecondaryButton from "@/components/shared/CustomSecondaryButton";
import { validateEmail, validatePassword } from "@/helpers/utils";
import Link from "next/link";
import { registerUserFetch } from "@/services/users";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import LoadingIcon from "@/components/shared/icons/LoadingIcon";
import {setToken} from '@/services/requestService';

export default function SignUpForm() {
  const [usernameText, setUsernameText] = useState("");
  const [usernameErrorText, setUsernameErrorText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [confirmPasswordText, setConfirmPasswordText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const cookies = useCookies();
  const router = useRouter();

  const handleUsernameTextChange = (e) => {
    setUsernameText(e.target.value);
    setUsernameErrorText("");
  };

  const handleEmailTextChange = (e) => {
    setEmailText(e.target.value);
    setEmailErrorText("");
  };

  const handlePasswordTextChange = (e) => {
    setPasswordText(e.target.value);
    setPasswordErrorText("");
  };

  const handleConfirmPasswordTextChange = (e) => {
    setConfirmPasswordText(e.target.value);
    setPasswordErrorText("");
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    if (passwordText !== confirmPasswordText) {
      setPasswordErrorText("Passwords do not match!");
      return;
    }
    if (!validatePassword(passwordText)) {
      setPasswordErrorText("Please, enter a valid password!");
      return;
    }
    if (!validateEmail(emailText)) {
      setEmailErrorText("Please, enter a valid email address!");
      return;
    }

    try {
      setIsFetching(true);
      const signUpData = {
        username: usernameText,
        email: emailText,
        password: passwordText,
      };

      const response = await registerUserFetch({ data: signUpData });

      const jsonResponse = await response.json();
      const { success, message, token, userId } = jsonResponse || {};
      if (!success) {
        setErrorMessage(message);
      } else {
        cookies.set("token", token, { expires: 30 });
        setToken(token);
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
    <div className="flex flex-col justify-center w-5/6 sm:w-1/2 gap-3">
      <form onSubmit={handleSignUp}>
        <div className="flex flex-col gap-5">
          <CustomTextInput
            value={usernameText}
            handleChange={handleUsernameTextChange}
            labelText={"Username"}
            labelId={"username"}
            placeholder={"Username"}
            isRequired
            errorMessage={usernameErrorText}
          />
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
            errorMessage={passwordErrorText}
          />
          <CustomPasswordInput
            value={confirmPasswordText}
            handleChange={handleConfirmPasswordTextChange}
            labelText={"Confirm Password"}
            labelId={"confirm-password"}
            placeholder={"Confirm Password"}
            isRequired
            errorMessage={passwordErrorText}
          />
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <CustomPrimaryButton
            text={
              isFetching ? (
                <div className="w-full flex justify-center items-center">
                  <LoadingIcon size="1rem" />
                </div>
              ) : (
                "Sign Up"
              )
            }
            type="submit"
          />
        </div>
      </form>
      <Link href="/login">
        <CustomSecondaryButton text="Login" type="button" />
      </Link>
    </div>
  );
}

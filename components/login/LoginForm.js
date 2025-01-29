"use client";
import { useState } from "react";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import CustomEmailInput from "@/components/shared/CustomEmailInput";
import CustomPasswordInput from "@/components/shared/CustomPasswordInput";
import { validateEmail } from "@/helpers/utils";
import CustomSecondaryButton from "@/components/shared/CustomSecondaryButton";
import Link from "next/link";

export default function LoginForm() {
  const [emailText, setEmailText] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const handleEmailTextChange = (e) => {
    setEmailText(e.target.value);
    setEmailErrorText("");
  };

  const handlePasswordTextChange = (e) => {
    setPasswordText(e.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (!validateEmail(emailText)) {
      setEmailErrorText("Please, enter a valid email address!");
      return;
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
          <CustomPrimaryButton text="Login" type="submit" />
        </div>
      </form>
      <Link href="/sign-up">
        <CustomSecondaryButton
          text="Sign Up"
          type="button"
        />
      </Link>
    </div>
  );
}

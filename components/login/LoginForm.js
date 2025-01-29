"use client";
import { useState } from "react";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import CustomTextInput from "@/components/shared/CustomTextInput";
import CustomPasswordInput from "@/components/shared/CustomPasswordInput";

export default function LoginForm() {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const handleEmailTextChange = (e) => {
    setEmailText(e.target.value);
  };

  const handlePasswordTextChange = (e) => {
    setPasswordText(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center w-1/2 gap-3">
      <form>
        <div className="flex flex-col gap-5">
          <CustomTextInput
            value={emailText}
            handleChange={handleEmailTextChange}
            labelText={"Email"}
            labelId={"email"}
            placeholder={"Email"}
            isRequired
          />
          <CustomPasswordInput
            value={passwordText}
            handleChange={handlePasswordTextChange}
            labelText={"Password"}
            labelId={"password"}
            placeholder={"Password"}
            isRequired
          />
          <CustomPrimaryButton
            text="Login"
            type="submit"
            handleClick={() => {}}
          />
        </div>
      </form>
    </div>
  );
}

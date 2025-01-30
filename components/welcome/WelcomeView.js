"use client";
import CustomTitle from "@/components/shared/CustomTitle";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import CustomSecondaryButton from "@/components/shared/CustomSecondaryButton";
import CustomContainer from "@/components/shared/CustomContainer";
import Link from "next/link";

export default function WelcomeView() {
  return (
    <div className="w-full h-full flex flex-1 justify-center items-center">
      <CustomContainer>
        <div className="w-full h-full flex flex-col justify-center items-center gap-12">
          <div className="w-full flex justify-center items-center">
            <CustomTitle text="Personal Blog Page" />
          </div>
          <div className="flex flex-col justify-center w-5/6 sm:w-1/2 gap-3">
            <Link href="/login">
              <CustomPrimaryButton text="Login" type="button" />
            </Link>
            <Link href="/sign-up">
              <CustomSecondaryButton text="Sign Up" type="button" />
            </Link>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
}

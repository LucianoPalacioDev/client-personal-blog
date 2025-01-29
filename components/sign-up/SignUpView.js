"use client";
import CustomTitle from "@/components/shared/CustomTitle";
import CustomContainer from "@/components/shared/CustomContainer";
import SignUpForm from "@/components/sign-up/SignUpForm";

export default function SignUpView() {
  return (
    <div className="w-full h-full flex flex-1 justify-center items-center">
      <div className="w-1/2 h-3/4 flex justify-center">
        <CustomContainer>
          <div className="w-full h-full flex flex-col justify-center items-center gap-12">
            <div className="w-full flex justify-center items-center">
              <CustomTitle text="Sign Up" />
            </div>
            <SignUpForm />
          </div>
        </CustomContainer>
      </div>
    </div>
  );
}

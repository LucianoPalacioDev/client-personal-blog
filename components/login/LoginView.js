"use client";
import CustomTitle from "@/components/shared/CustomTitle";
import CustomContainer from "@/components/shared/CustomContainer";
import LoginForm from "@/components/login/LoginForm";

export default function LoginView() {
  return (
    <div className="w-full h-full flex flex-1 justify-center items-center">
      <CustomContainer>
        <div className="w-full h-full flex flex-col justify-center items-center gap-12">
          <div className="w-full flex justify-center items-center">
            <CustomTitle text="Login" />
          </div>
          <LoginForm />
        </div>
      </CustomContainer>
    </div>
  );
}

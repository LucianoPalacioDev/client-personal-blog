"use client";
import { useState } from "react";
import CustomTitle from "@/components/shared/CustomTitle";
import CustomSearchInput from "@/components/shared/CustomSearchInput";
import PostsList from "@/components/profile/PostsList";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import CustomDangerButton from "@/components/shared/CustomDangerButton";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import LogoutModal from "@/components/profile/modals/LogoutModal";
import BlogModal from "@/components/profile/modals/PostModal";

const PROFILE_DATA_TEST = {
  username: "Luciano Developer",
  email: "lucianopalacio@gmail.com",
};

export default function ProfileView() {
  const [searchText, setSearchText] = useState("");
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);

  const cookies = useCookies();
  const router = useRouter();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleLogout = () => {
    cookies.set("token", "", { expires: new Date(0) });
    router.push(`/`);
  };

  const handleOpenLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleOpenBlogModal = () => {
    setIsBlogModalOpen(true);
  };

  const handleCloseBlogModal = () => {
    setIsBlogModalOpen(false);
  };

  return (
    <div className="w-full h-full flex">
      {/* Profile Section */}
      <div className="w-1/3 bg-blue-300 h-full flex justify-center items-center rounded-xl">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-10/12">
            <CustomTitle text={PROFILE_DATA_TEST.username} />
            <hr className="h-px my-8 bg-gray-200 border-0" />
            <h5 className="text-xl font-bold text-center">
              {PROFILE_DATA_TEST.email}
            </h5>
            <div className="mt-8">
              <CustomDangerButton
                text="Logout"
                type="button"
                handleClick={handleOpenLogoutModal}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Posts Section */}
      <div className="w-2/3 h-full flex flex-col justify-center items-center">
        <div className="w-10/12 h-full pt-20 flex flex-col gap-10">
          <div className="w-full flex justify-between items-center gap-5">
            <CustomSearchInput
              value={searchText}
              handleChange={handleSearchTextChange}
              placeholder={"Search posts"}
              isRequired={false}
              errorMessage={""}
            />
            <div className="w-1/6 flex items-center">
              <CustomPrimaryButton
                text="Add New Post"
                type="button"
                handleClick={handleOpenBlogModal}
              />
            </div>
          </div>
          <PostsList />
        </div>
      </div>
      {/* Modals */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={handleCloseLogoutModal}
        handleLogout={handleLogout}
      />
      <BlogModal
        isOpen={isBlogModalOpen}
        onClose={handleCloseBlogModal}
        isBlogEditing={false}
      />
    </div>
  );
}

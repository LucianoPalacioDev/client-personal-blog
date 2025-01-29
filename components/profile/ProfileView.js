"use client";
import { useState } from "react";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import LogoutModal from "@/components/profile/modals/LogoutModal";
import BlogModal from "@/components/profile/modals/PostModal";
import ProfileDataSection from "@/components/profile/sections/ProfileDataSection";
import PostSection from "@/components/profile/sections/PostSection";

export default function ProfileView({ userId }) {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);

  const cookies = useCookies();
  const router = useRouter();

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
      <ProfileDataSection
        handleOpenLogoutModal={handleOpenLogoutModal}
        userId={userId}
      />
      <PostSection handleOpenBlogModal={handleOpenBlogModal} />
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

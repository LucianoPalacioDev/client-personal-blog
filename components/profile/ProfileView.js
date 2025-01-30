"use client";
import { useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import LogoutModal from "@/components/profile/modals/LogoutModal";
import PostModal from "@/components/profile/modals/PostModal";
import ProfileDataSection from "@/components/profile/sections/ProfileDataSection";
import PostSection from "@/components/profile/sections/PostSection";

export default function ProfileView({ userId }) {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [alertSuccessText, setAlertSuccessText] = useState("");
  const [alertErrorText, setAlertErrorText] = useState("");
  const [areNewPosts, setAreNewPosts] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  const cookies = useCookies();
  const router = useRouter();

  useEffect(() => {
    if (alertSuccessText) {
      setTimeout(() => {
        setAlertSuccessText("");
      }, 2000);
    }
  }, [alertSuccessText]);

  useEffect(() => {
    if (alertErrorText) {
      setTimeout(() => {
        setAlertErrorText("");
      }, 2000);
    }
  }, [alertErrorText]);

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

  const handleOpenBlogModal = ({ post }) => {
    setIsBlogModalOpen(true);
    setSelectedPost(post);
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
      <PostSection
        handleOpenBlogModal={handleOpenBlogModal}
        setAlertSuccessText={setAlertSuccessText}
        alertSuccessText={alertSuccessText}
        alertErrorText={alertErrorText}
        setAlertErrorText={setAlertErrorText}
        areNewPosts={areNewPosts}
        setAreNewPosts={setAreNewPosts}
        userId={userId}
      />
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={handleCloseLogoutModal}
        handleLogout={handleLogout}
      />
      <PostModal
        isOpen={isBlogModalOpen}
        onClose={handleCloseBlogModal}
        selectedPost={selectedPost}
        setAlertSuccessText={setAlertSuccessText}
        setAreNewPosts={setAreNewPosts}
      />
    </div>
  );
}

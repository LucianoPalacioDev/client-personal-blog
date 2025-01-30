"use client";
import { useEffect, useState } from "react";
import PostModal from "@/components/profile/modals/PostModal";
import ProfileDataSection from "@/components/profile/sections/ProfileDataSection";
import PostSection from "@/components/profile/sections/PostSection";

export default function ProfileView({ userId }) {
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [alertSuccessText, setAlertSuccessText] = useState("");
  const [alertErrorText, setAlertErrorText] = useState("");
  const [areNewPosts, setAreNewPosts] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

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

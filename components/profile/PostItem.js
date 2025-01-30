"use client";
import { useEffect, useRef, useState } from "react";
import ThreeDotsIcon from "@/components/shared/icons/ThreeDotsIcon";
import PostOptionsMenu from "@/components/profile/menus/PostOptionsMenu";
import PostDeletionModal from '@/components/profile/modals/PostDeletionModal';

export default function PostItem({ post, isPostsOwner, handleDeletePost, handleEditPost }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeletionPostModalOpen, setIsDeletionPostModalOpen] = useState(false);

  const menuRef = useRef();

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleOpenDeletionPostModal = () => {
    setIsDeletionPostModalOpen(true);
  };

  const handleCloseDeletionPostModal = () => {
    setIsDeletionPostModalOpen(false);
  };

  const handleClickMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickMenuOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickMenuOutside);
    };
  }, []);

  const handleDeletePostAndCloseMenu = async () => {
    await handleDeletePost({ id: post?.id });
    handleCloseDeletionPostModal();
  };

  const handleEditPostAndCloseMenu = async () => {
    await handleEditPost({ post });
    handleCloseMenu();
  };

  return (
    <div className="p-3 border border-gray-200 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {post.title}
        </h5>
        {isPostsOwner && (
          <div className="relative">
            <button
              onClick={isMenuOpen ? handleCloseMenu : handleOpenMenu}
              aria-label="post-options"
            >
              <ThreeDotsIcon />
            </button>
            {isMenuOpen && (
              <PostOptionsMenu
                menuRef={menuRef}
                handleEditPost={handleEditPostAndCloseMenu}
                handleDeletePost={handleOpenDeletionPostModal}
              />
            )}
          </div>
        )}
      </div>
      <p className="font-normal text-gray-700">{post.content}</p>
      <PostDeletionModal 
        isOpen={isDeletionPostModalOpen}
        onClose={handleCloseDeletionPostModal}
        handleDeletePostAndCloseMenu={handleDeletePostAndCloseMenu}
      />
    </div>
  );
}

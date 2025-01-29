"use client";
import { useEffect, useRef, useState } from "react";
import ThreeDotsIcon from "@/components/shared/icons/ThreeDotsIcon";
import PostOptionsMenu from "@/components/profile/menus/PostOptionsMenu";

export default function PostItem({ post }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
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

  const handleEditPost = () => {
    console.log("Edit post");
  };

  const handleDeletePost = () => {
    console.log("Delete post");
  };

  return (
    <div className="p-3 border border-gray-200 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {post.title}
        </h5>
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
              handleEditPost={handleEditPost}
              handleDeletePost={handleDeletePost}
            />
          )}
        </div>
      </div>
      <p className="font-normal text-gray-700">{post.content}</p>
    </div>
  );
}

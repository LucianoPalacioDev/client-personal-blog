"use client";
import { useEffect, useState } from "react";
import CustomSearchInput from "@/components/shared/CustomSearchInput";
import PostsList from "@/components/profile/PostsList";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import { getAllPostsByUserFetch } from "@/services/posts";

export default function PostSection({
  handleOpenBlogModal,
  alertSuccessText,
  areNewPosts,
  setAreNewPosts,
  userId
}) {
  const [searchText, setSearchText] = useState("");
  const [currentPosts, setCurrentPosts] = useState([]);
  const [isLoadingPost, setIsLoadingPost] = useState(true);

  useEffect(() => {
    if (!areNewPosts || !setAreNewPosts) return;
    const fetchPostsData = async () => {
      try {
        const response = await getAllPostsByUserFetch({ id: userId });
        const jsonResponse = await response.json();
        const { success, posts } = jsonResponse || {};
        if (success) {
          setCurrentPosts(posts);
          setAreNewPosts(false);
        }
        setIsLoadingPost(false);
      } catch (error) {
        console.log("Error trying to get the posts data: ", error);
        setIsLoadingPost(false);
      }
    };

    fetchPostsData();
  }, [areNewPosts, setAreNewPosts, userId]);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
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
        {!!alertSuccessText && (
          <div className="p-4 text-sm text-green-800 rounded-lg bg-green-50 flex justify-center">
            <span className="font-medium">{alertSuccessText}</span>
          </div>
        )}
        <PostsList posts={currentPosts} isLoadingPost={isLoadingPost}/>
      </div>
    </div>
  );
}

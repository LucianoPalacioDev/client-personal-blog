"use client";
import { useEffect, useState } from "react";
import CustomSearchInput from "@/components/shared/CustomSearchInput";
import PostsList from "@/components/profile/PostsList";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import { getAllPostsByUserFetch } from "@/services/posts";
import { deletePostFetch } from "@/services/posts";
import CustomAlertSuccess from "@/components/shared/CustomAlertSuccess";
import CustomAlertDanger from "@/components/shared/CustomAlertDanger";

export default function PostSection({
  handleOpenBlogModal,
  setAlertSuccessText,
  alertSuccessText,
  alertErrorText,
  setAlertErrorText,
  areNewPosts,
  setAreNewPosts,
  userId,
}) {
  const [searchText, setSearchText] = useState("");
  const [currentPosts, setCurrentPosts] = useState([]);
  const [isPostsOwner, setIsPostsOwner] = useState(false);
  const [isLoadingPost, setIsLoadingPost] = useState(true);

  useEffect(() => {
    if (!areNewPosts || !setAreNewPosts) return;
    const fetchPostsData = async () => {
      try {
        const response = await getAllPostsByUserFetch({ id: userId });
        const jsonResponse = await response.json();
        const { success, posts, isOwner } = jsonResponse || {};
        if (success) {
          setCurrentPosts(posts);
          setAreNewPosts(false);
          setIsPostsOwner(isOwner);
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

  const handleDeletePost = async ({ id }) => {
    try {
      const response = await deletePostFetch({ id });
      const jsonResponse = await response.json();
      const { success } = jsonResponse || {};
      if (success) {
        setAlertSuccessText("Post deleted successfully!");
        setAreNewPosts(true);
        return;
      }
      throw new Error("Something went wrong trying to delete the post");
    } catch (error) {
      console.log("Error trying to delete the post: ", error);
      setAlertErrorText("Something went wrong trying to delete the post");
    }
  };

  const handleEditPost = async ({ post }) => {
    handleOpenBlogModal({ post });
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
          {isPostsOwner && (
            <div className="w-1/6 flex items-center">
              <CustomPrimaryButton
                text="Add New Post"
                type="button"
                handleClick={() => handleOpenBlogModal({ post: null })}
              />
            </div>
          )}
        </div>
        {!!alertSuccessText && <CustomAlertSuccess text={alertSuccessText} />}
        {!!alertErrorText && <CustomAlertDanger text={alertErrorText} />}
        <PostsList
          posts={currentPosts}
          isLoadingPost={isLoadingPost}
          isPostsOwner={isPostsOwner}
          setAlertSuccessText={setAlertSuccessText}
          handleDeletePost={handleDeletePost}
          handleEditPost={handleEditPost}
        />
      </div>
    </div>
  );
}

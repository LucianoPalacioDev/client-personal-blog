"use client";
import { useEffect, useState } from "react";
import CustomModal from "@/components/shared/CustomModal";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import CustomSecondaryButton from "@/components/shared/CustomSecondaryButton";
import CustomTextInput from "@/components/shared/CustomTextInput";
import CustomTextAreaInput from "@/components/shared/CustomTextAreaInput";
import { createPostFetch, updatePostFetch } from "@/services/posts";
import LoadingIcon from "@/components/shared/icons/LoadingIcon";
import { isEmptyObj } from "@/helpers/utils";

export default function PostModal({
  isOpen,
  onClose,
  setAlertSuccessText,
  setAreNewPosts,
  selectedPost,
}) {
  const [titleText, setTitleText] = useState("");
  const [titleErrorText, setTitleErrorText] = useState("");
  const [contentText, setContentText] = useState("");
  const [contentErrorText, setContentErrorText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const isBlogEditing = !isEmptyObj(selectedPost);

  useEffect(() => {
    if (isBlogEditing) {
      setTitleText(selectedPost?.title);
      setContentText(selectedPost?.content);
    }
  }, [isBlogEditing, selectedPost]);

  const resetValues = () => {
    setTitleText("");
    setTitleErrorText("");
    setContentText("");
    setContentErrorText("");
    setErrorMessage("");
  };

  const handleTitleTextChange = (e) => {
    setTitleText(e.target.value);
    setTitleErrorText("");
  };

  const handleContentTextChange = (e) => {
    setContentText(e.target.value);
    setContentErrorText("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    if (!titleText) {
      setTitleErrorText("Please, enter a not empty title!");
      return;
    }
    if (!contentText) {
      setContentErrorText("Please, enter a not empty content!");
      return;
    }

    try {
      setIsFetching(true);
      const postData = {
        title: titleText,
        content: contentText,
      };

      const response = isBlogEditing
        ? await updatePostFetch({ id: selectedPost?.id, data: postData })
        : await createPostFetch({ data: postData });

      const jsonResponse = await response.json();
      const { success, message } = jsonResponse || {};
      if (!success) {
        setErrorMessage(message);
      } else {
        setAreNewPosts(true);
        setAlertSuccessText(
          `Post ${isBlogEditing ? "edited" : "created"} successfully!`
        );
        resetValues();
        onClose();
      }
      setIsFetching(false);
    } catch (error) {
      console.log(
        `Error trying to ${isBlogEditing ? "edit" : "create"} the post.`,
        error
      );
      setErrorMessage(
        `Error trying to ${
          isBlogEditing ? "edit" : "create"
        } the post. Please, try again!`
      );
      setIsFetching(false);
    }
  };

  const handleCloseModal = () => {
    resetValues();
    onClose();
  };

  return (
    <CustomModal isOpen={isOpen} onClose={handleCloseModal}>
      <div className="w-full h-full p-5 flex flex-col justify-between items-center gap-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {`${isBlogEditing ? "Edit" : "Create New"} Post`}
        </h5>
        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col gap-5">
            <CustomTextInput
              value={titleText}
              handleChange={handleTitleTextChange}
              labelText={"Title"}
              labelId={"title"}
              placeholder={"Title"}
              isRequired
              errorMessage={titleErrorText}
            />
            <CustomTextAreaInput
              value={contentText}
              handleChange={handleContentTextChange}
              labelText={"Content"}
              labelId={"content"}
              placeholder={"Content"}
              isRequired
              errorMessage={contentErrorText}
            />
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}
          </div>
          <div className="w-full flex flex-row justify-between gap-10">
            <CustomSecondaryButton
              text="Close"
              type="button"
              handleClick={handleCloseModal}
            />
            <CustomPrimaryButton
              text={
                isFetching ? (
                  <div className="w-full flex justify-center items-center">
                    <LoadingIcon size="1rem" />
                  </div>
                ) : isBlogEditing ? (
                  "Edit"
                ) : (
                  "Create"
                )
              }
              type="submit"
            />
          </div>
        </form>
      </div>
    </CustomModal>
  );
}

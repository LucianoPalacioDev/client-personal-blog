"use client";
import { useState } from "react";
import CustomModal from "@/components/shared/CustomModal";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";
import CustomSecondaryButton from "@/components/shared/CustomSecondaryButton";
import CustomTextInput from "@/components/shared/CustomTextInput";
import CustomTextAreaInput from "@/components/shared/CustomTextAreaInput";
import { createPostFetch } from "@/services/posts";

export default function BlogModal({
  isOpen,
  onClose,
  isBlogEditing,
}) {
  const [titleText, setTitleText] = useState("");
  const [titleErrorText, setTitleErrorText] = useState("");
  const [contentText, setContentText] = useState("");
  const [contentErrorText, setContentErrorText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
      const postData = {
        title: titleText,
        content: contentText,
      };

      const response = await createPostFetch({ data: postData });

      const jsonResponse = await response.json();
      const { success, message } = jsonResponse || {};
      if (!success) {
        setErrorMessage(message);
      } else {
        console.log("Post creado!")
      }
    } catch (error) {
      console.log(`Error trying to ${isBlogEditing ? "edit" : "create"} the post.`, error);
      setErrorMessage(
        `Error trying to ${
          isBlogEditing ? "edit" : "create"
        } the post. Please, try again!`
      );
    }

  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
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
          <div className="w-full flex flex-row justify-end">
            <div className="w-1/2 flex flex-row gap-3">
              <CustomSecondaryButton
                text="Close"
                type="button"
                handleClick={onClose}
              />
              <CustomPrimaryButton
                text={isBlogEditing ? "Edit" : "Create"}
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </CustomModal>
  );
}

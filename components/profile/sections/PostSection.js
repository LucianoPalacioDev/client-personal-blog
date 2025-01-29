"use client";
import { useState } from "react";
import CustomSearchInput from "@/components/shared/CustomSearchInput";
import PostsList from "@/components/profile/PostsList";
import CustomPrimaryButton from "@/components/shared/CustomPrimaryButton";

export default function PostSection({ handleOpenBlogModal }) {
  const [searchText, setSearchText] = useState("");

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
        <PostsList />
      </div>
    </div>
  );
}

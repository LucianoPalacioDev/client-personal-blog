"use client";
import { useEffect, useState } from "react";
import CustomTitle from "@/components/shared/CustomTitle";
import CustomDangerButton from "@/components/shared/CustomDangerButton";
import { getUserDataByIdFetch } from "@/services/users";

export default function ProfileDataSection({ handleOpenLogoutModal, userId }) {
  const [profileUsername, setProfileUsername] = useState("");
  const [profileEmail, setProfileEmail] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserDataByIdFetch({ id: userId });
        const jsonResponse = await response.json();
        const { success, user } = jsonResponse || {};
        if (success) {
          const { username, email } = user || {};
          setProfileUsername(username);
          setProfileEmail(email);
        } else {
          setProfileUsername('Not Found!')
          setProfileEmail('Not Found!')
        }
      } catch (error) {
        console.log("Error trying to get the user data: ", error);
        setProfileUsername('Not Found!')
        setProfileEmail('Not Found!')
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="w-1/3 bg-blue-300 h-full flex justify-center items-center rounded-xl">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-10/12">
          <CustomTitle text={profileUsername} />
          <hr className="h-px my-8 bg-gray-200 border-0" />
          <h5 className="text-xl font-bold text-center">
            {profileEmail}
          </h5>
          <div className="mt-8">
            <CustomDangerButton
              text="Logout"
              type="button"
              handleClick={handleOpenLogoutModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

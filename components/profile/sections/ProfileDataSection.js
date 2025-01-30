"use client";
import { useEffect, useState } from "react";
import CustomTitle from "@/components/shared/CustomTitle";
import CustomDangerButton from "@/components/shared/CustomDangerButton";
import LogoutModal from "@/components/profile/modals/LogoutModal";
import { getUserDataByIdFetch } from "@/services/users";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";

export default function ProfileDataSection({ userId }) {
  const [profileUsername, setProfileUsername] = useState("Loading...");
  const [profileEmail, setProfileEmail] = useState("Loading...");
  const [isOwner, setIsOwner] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const cookies = useCookies();
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserDataByIdFetch({ id: userId });
        const jsonResponse = await response.json();
        const { success, user, isOwner } = jsonResponse || {};
        if (success) {
          const { username, email } = user || {};
          setProfileUsername(username);
          setProfileEmail(email);
          setIsOwner(isOwner);
        } else {
          setProfileUsername("Not Found!");
          setProfileEmail("Not Found!");
          setIsOwner(false);
        }
      } catch (error) {
        console.log("Error trying to get the user data: ", error);
        setProfileUsername("Not Found!");
        setProfileEmail("Not Found!");
      }
    };

    fetchUserData();
  }, [userId]);

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

  return (
    <div className="w-1/3 bg-blue-300 h-full flex justify-center items-center rounded-xl">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-10/12">
          <CustomTitle text={profileUsername} />
          <hr className="h-px my-8 bg-gray-200 border-0" />
          <h5 className="text-xl font-bold text-center">{profileEmail}</h5>
          {isOwner && (
            <div className="mt-8">
              <CustomDangerButton
                text="Logout"
                type="button"
                handleClick={handleOpenLogoutModal}
              />
            </div>
          )}
        </div>
      </div>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={handleCloseLogoutModal}
        handleLogout={handleLogout}
      />
    </div>
  );
}

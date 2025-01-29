import CustomModal from "@/components/shared/CustomModal";
import CustomDangerButton from "@/components/shared/CustomDangerButton";
import CustomSecondaryButton from "@/components/shared/CustomSecondaryButton";

export default function LogoutModal({ isOpen, onClose, handleLogout }) {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div className="w-full h-full p-5 flex flex-col justify-between items-center gap-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          Are you sure you want to logout?
        </h5>
        <div className="w-full flex flex-row justify-end">
          <div className='w-1/2 flex flex-row gap-3'>
            <CustomSecondaryButton
              text="Close"
              type="button"
              handleClick={onClose}
            />
            <CustomDangerButton
              text="Logout"
              type="button"
              handleClick={handleLogout}
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
}

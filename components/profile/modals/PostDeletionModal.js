import CustomModal from "@/components/shared/CustomModal";
import CustomDangerButton from "@/components/shared/CustomDangerButton";
import CustomSecondaryButton from "@/components/shared/CustomSecondaryButton";

export default function PostDeletionModal({
  isOpen,
  onClose,
  handleDeletePostAndCloseMenu,
}) {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div className="w-full h-full p-5 flex flex-col justify-between items-center gap-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-center">
          Are you sure you want to delete the post?
        </h5>
        <div className="w-full flex flex-row justify-between gap-10">
            <CustomSecondaryButton
              text="Close"
              type="button"
              handleClick={onClose}
            />
            <CustomDangerButton
              text="Confirm"
              type="button"
              handleClick={handleDeletePostAndCloseMenu}
            />
        </div>
      </div>
    </CustomModal>
  );
}

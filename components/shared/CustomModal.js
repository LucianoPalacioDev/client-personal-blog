const DEFAULT_MODAL_ID = "custom-modal";

export default function CustomModal({ isOpen, children, onClose }) {
  const handleOutsideClick = (e) => {
    if (e.target.id === DEFAULT_MODAL_ID) {
      onClose();
    }
  };

  return (
    <div
      id={DEFAULT_MODAL_ID}
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        isOpen ? "flex" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      onClick={handleOutsideClick}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm">{children}</div>
      </div>
    </div>
  );
}

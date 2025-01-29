import EditIcon from "@/components/shared/icons/EditIcon";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";

export default function PostOptionsMenu({
  menuRef,
  handleEditPost,
  handleDeletePost,
}) {
  return (
    <div
      ref={menuRef}
      className="absolute right-0 w-48 bg-white rounded-md shadow-lg z-50"
    >
      <ul className="">
        <li>
          <button className="w-full flex items-center space-x-3 p-4 hover:bg-gray-100" onClick={handleEditPost}>
            <EditIcon />
            <span>Edit</span>
          </button>
        </li>
        <li>
          <button className="w-full flex items-center space-x-3 p-4 hover:bg-gray-100" onClick={handleDeletePost}>
            <DeleteIcon />
            <span>Delete</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

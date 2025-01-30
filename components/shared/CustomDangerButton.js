"use client";

export default function CustomDangerButton({
  text,
  type = "button",
  handleClick = () => {},
}) {
  return (
    <button
      onClick={handleClick}
      type={type}
      className="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-nowrap"
    >
      {text}
    </button>
  );
}

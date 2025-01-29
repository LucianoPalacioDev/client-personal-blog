"use client";

export default function CustomPrimaryButton({
  text,
  type = "button",
  handleClick = () => {},
}) {
  return (
    <button
      onClick={handleClick}
      type={type}
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 text-nowrap"
    >
      {text}
    </button>
  );
}

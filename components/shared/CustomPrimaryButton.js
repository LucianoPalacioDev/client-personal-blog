'use client';

export default function CustomPrimaryButton({text, handleClick}) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      {text}
    </button>
  );
}

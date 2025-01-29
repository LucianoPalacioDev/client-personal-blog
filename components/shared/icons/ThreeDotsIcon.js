export default function ThreeDotsIcon() {
  return (
    <div className="flex items-center pointer-events-none">
      <svg
        className="h-5 w-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,12.5A1.5,1.5 0 1,1 8.5,11 A1.5,1.5 0 0,1 10,12.5M10,6.5A1.5,1.5 0 1,1 8.5,5 A1.5,1.5 0 0,1 10,6.5M10,18.5A1.5,1.5 0 1,1 8.5,17 A1.5,1.5 0 0,1 10,18.5"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}
export default function CustomContainer({ children }) {
  return (
    <div className="w-full sm:w-3/4 md:w-1/2 h-full sm:h-3/4 flex justify-center items-center overflow-y-auto" >
      <div className="w-full h-full block p-6 bg-white border-none sm:border-solid sm:border sm:border-gray-200 rounded-lg shadow-none sm:shadow-sm ">
        {children}
      </div>
    </div>
  );
}

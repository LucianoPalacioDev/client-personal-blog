export default function CustomContainer({ children }) {
  return (
    <div className="w-full block p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      {children}
    </div>
  );
}

export default function CustomAlertDanger({ text }) {
  return (
    <div
      className="p-4 text-sm text-red-800 rounded-lg bg-red-50 flex justify-center"
    >
      <span className="font-medium">{text}</span>
    </div>
  );
}

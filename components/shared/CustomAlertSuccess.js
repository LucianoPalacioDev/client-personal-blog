export default function CustomAlertSuccess({ text }) {
  return (
    <div className="p-4 text-sm text-green-800 rounded-lg bg-green-50 flex justify-center">
      <span className="font-medium">{text}</span>
    </div>
  );
}

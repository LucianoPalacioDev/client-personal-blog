export default function CustomTextAreaInput({
  value,
  handleChange,
  labelText,
  labelId,
  placeholder,
  isRequired = false,
  errorMessage,
  rows = 4,
}) {
  return (
    <div className="w-full">
      {!!labelText && (
        <label
          htmlFor={labelId}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {labelText}
        </label>
      )}
      <textarea
        id={labelId}
        className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        rows={rows}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={handleChange}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}

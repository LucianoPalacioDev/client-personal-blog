export default function CustomEmailInput({
  value,
  handleChange,
  labelText,
  labelId,
  placeholder,
  isRequired = false,
  errorMessage,
}) {
  return (
    <div>
      {!!labelText && (
        <label
          htmlFor={labelId}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {labelText}
        </label>
      )}
      <input
        type="email"
        id={labelId}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

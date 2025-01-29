import SearchIcon from "@/components/shared/icons/SearchIcon";

export default function CustomSearchInput({
  value,
  handleChange,
  labelText,
  labelId,
  placeholder,
  isRequired = false,
  errorMessage,
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
      <div className="relative">
        <input
          type="text"
          id={labelId}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
          placeholder={placeholder}
          required={isRequired}
          value={value}
          onChange={handleChange}
        />
        <SearchIcon />
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}

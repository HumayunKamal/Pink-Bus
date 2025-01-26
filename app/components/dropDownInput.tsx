import { useId } from "react";

interface DropDownInputProps<T extends string | number> {
  selectedValue: T;
  setSelectedValue: (value: T) => void;
  options: T[];
  label: string;
  className?: string;
  disabled?: boolean;
}

const DropDownInput = <T extends string | number>({
  selectedValue,
  setSelectedValue,
  options,
  label,
  className = "",
  disabled = false,
}: DropDownInputProps<T>) => {
  const labelId = useId();
  return (
    <div className={`flex flex-row justify-between text-primary ${className}`}>
      <label htmlFor={labelId}>{label}:</label>
      <select
        id={labelId}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value as T)}
        disabled={disabled}
        className="cursor-pointer"
        required
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownInput;

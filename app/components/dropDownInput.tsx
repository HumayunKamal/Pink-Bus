import { useId } from "react";

interface DropDownInputProps<T extends string | number> {
  selectedValue: T;
  setSelectedValue: (value: T) => void;
  options: T[];
  label?: string;
  className?: string;
  selectClassName?: string;
  disabled?: boolean;
}

const DropDownInput = <T extends string | number>({
  selectedValue,
  setSelectedValue,
  options,
  label,
  className = "",
  selectClassName = "",
  disabled = false,
}: DropDownInputProps<T>) => {
  const labelId = useId();
  return (
    <div className={`text-primary flex flex-row justify-between ${className}`}>
      {label && <label htmlFor={labelId}>{label} :</label>}
      <select
        id={labelId}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value as T)}
        disabled={disabled}
        className={`cursor-pointer ${selectClassName}`}
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

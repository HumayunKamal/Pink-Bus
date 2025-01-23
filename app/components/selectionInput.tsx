import React from "react";

type timeValue = "morning" | "afternoon";

interface InputProps {
  name: string;
  labelText: string;
  value: timeValue;
  selectedTime: timeValue | "";
  onChange: (time: timeValue) => void;
}

const SelectionInput: React.FC<InputProps> = ({
  name,
  labelText,
  value,
  selectedTime,
  onChange,
}) => (
  <label
    className={`${selectedTime === value ? "scale-105 text-primary" : "cursor-pointer text-primary/80"} transition-all duration-300 ease-out hover:text-primary`}
  >
    <input
      className="mr-1"
      type="radio"
      name={name}
      value={value}
      checked={selectedTime === value}
      onChange={(e) => onChange(e.target.value as timeValue)}
    />
    <span className="text-[22px]">{labelText}</span>
  </label>
);

export default SelectionInput;

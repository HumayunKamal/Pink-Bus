interface InputProps<T> {
  name: string;
  labelText: string;
  value: T;
  selectedValue: T | "";
  onChange: (value: T) => void;
  className?: string;
  labelClassName?: string;
}

const SelectionInput = <T extends string | number | boolean>({
  name,
  labelText,
  value,
  selectedValue,
  onChange,
  className = "",
  labelClassName = "",
}: InputProps<T>) => {
  const IsSelected = selectedValue === value;
  return (
    <label
      className={`${IsSelected ? "text-primary" : "cursor-pointer text-primary/80"} hover:text-primary ${labelClassName}`}
    >
      <input
        className={`mr-1 ${className}`}
        type="radio"
        name={name}
        value={String(value)}
        checked={IsSelected}
        onChange={(e) => onChange(value)}
        required
      />
      <span className="text-[20px]">{labelText}</span>
    </label>
  );
};

export default SelectionInput;

// Example usage:
// Time selection (original use case)
// const [selectedTime, setSelectedTime] = useState<"morning" | "afternoon" | "">("");
// <SelectionInput
//   name="time"
//   labelText="Morning"
//   value="morning"
//   selectedValue={selectedTime}
//   onChange={setSelectedTime}
// />

// Other potential use cases:
// Numeric value selection
// const [selectedAge, setSelectedAge] = useState<number | "">("");
// <SelectionInput
//   name="age"
//   labelText="18-25"
//   value={25}
//   selectedValue={selectedAge}
//   onChange={setSelectedAge}
// />

// Boolean value selection
// const [isSubscribed, setIsSubscribed] = useState<boolean | "">("");
// <SelectionInput
//   name="subscription"
//   labelText="Subscribe"
//   value={true}
//   selectedValue={isSubscribed}
//   onChange={setIsSubscribed}
// />

import type { City } from "~/constantData";
import DropDownInput from "./dropDownInput";

interface CitySelectionInputProps {
  SvgIcon: React.ReactNode;
  label: string;
  description: string;
  selectedCity: City;
  cityOptions: City[];
  setSelectedCity: (value: City) => void;
}
const CitySelectionInput: React.FC<CitySelectionInputProps> = ({
  SvgIcon,
  label,
  description,
  selectedCity,
  cityOptions,
  setSelectedCity,
}) => (
  <div className="flex gap-2">
    <div className="bg-primary flex h-[38px] w-[38px] items-center justify-center rounded-full fill-white">
      {SvgIcon}
    </div>
    <div>
      <p className="text-grey text-[12px]">{description}</p>
      {/* Selection: City to*/}
      <DropDownInput
        selectedValue={selectedCity}
        options={cityOptions}
        className="text-secondary"
        selectClassName="focus:outline-none! appearance-none! px-2 text-primary"
        label={label}
        setSelectedValue={setSelectedCity}
      />
    </div>
  </div>
);

export default CitySelectionInput;

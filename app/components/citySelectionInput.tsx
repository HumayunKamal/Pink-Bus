import type { City } from "~/constantData";
import DropDownInput from "./dropDownInput";

interface CitySelectionInputProps {
  SvgIcon: React.ReactNode;
  description: string;
  selectedCity: City;
  cityOptions: City[];
  setSelectedCity: (value: City) => void;
}
const CitySelectionInput: React.FC<CitySelectionInputProps> = ({
  SvgIcon,
  description,
  selectedCity,
  cityOptions,
  setSelectedCity,
}) => (
  <div className="flex gap-2">
    <div className="bg-primary fill-secondary-text flex h-[38px] w-[38px] items-center justify-center rounded-full">
      {SvgIcon}
    </div>
    <div>
      <p className="text-grey dark:text-secondary-text text-[12px] font-medium">
        {description}
      </p>
      {/* Selection: City to*/}
      <DropDownInput
        selectedValue={selectedCity}
        options={cityOptions}
        className="text-secondary font-light"
        selectClassName="focus:outline-none! appearance-none! dark:text-primary-light dark:bg-dark-mode lg:px-[1px]"
        setSelectedValue={setSelectedCity}
      />
    </div>
  </div>
);

export default CitySelectionInput;

import { useState } from "react";
import {
  Dialog,
  DropDownInput,
  IconButtonPrimary,
  SelectionInput,
} from "~/components";
import { AfternoonSun, MorningSvg, Submit } from "~/components/svgs";

import type { MotionValue } from "motion/react";
import { City } from "~/constantData";
import { getDefaultMaxDate } from "~/utils";

const BookingSection = ({
  smoothYProgress,
}: {
  smoothYProgress: MotionValue<number>;
}) => {
  const scrollValue = [0.05, 0.1];

  const [selectedTime, setSelectedTime] = useState<"morning" | "afternoon">(
    "morning",
  );
  const [selectedCityFrom, setSelectedCityFrom] = useState<City>(City.Chakwal);
  const [selectedCityTo, setSelectedCityTo] = useState<City>(City.Faizabad);
  const cityOptions = Object.values(City);
  const [journeyDate, setJourneyDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );

  const [error, setError] = useState("");

  const maxJourneyDate = getDefaultMaxDate();

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (selectedCityFrom === selectedCityTo) {
      setError("Both cities can't be same");
      const timeoutId = setTimeout(() => {
        setError("");
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
    console.log(selectedCityFrom, selectedCityTo, journeyDate, selectedTime);
  };

  return (
    <div
      id="bookingSection"
      className="min-w-[260px] max-w-[800px] rounded-[20px] translate-y-[-20%] sm:max-lg:min-w-[360px] col-span-full mx-auto bg-secondary-bg p-4 drop-shadow-pink sm:-translate-y-1/4! sm:p-6 lg:h-[250px] lg:w-[768px] lg:-translate-y-1/2! lg:p-4 bookingSectionBg"

    >
      {/* Code for Mobile  */}
      <div className="flex flex-col items-center gap-2 py-2 lg:hidden">
        {/* Selection : Timing */}
        <div className="flex w-full flex-row justify-around">
          <SelectionInput
            name="timing"
            labelText="Morning"
            value="morning"
            selectedValue={selectedTime}
            onChange={setSelectedTime}
          />
          <SelectionInput
            name="timing"
            labelText="Afternoon"
            value="afternoon"
            selectedValue={selectedTime}
            onChange={setSelectedTime}
          />
        </div>

        {/* Selection Inputs */}
        <div className="h-auto w-full space-y-2 rounded-xl border-[0.1px] border-primary px-2 py-4">
          {/* Selection: City from */}
          <DropDownInput
            selectedValue={selectedCityFrom}
            options={cityOptions}
            label="City From"
            setSelectedValue={setSelectedCityFrom}
          />

          {/* Selection: City to*/}
          <DropDownInput
            selectedValue={selectedCityTo}
            options={cityOptions}
            label="City to"
            setSelectedValue={setSelectedCityTo}
          />

          {/* Selction : Date */}
          <div className="flex cursor-pointer justify-between text-primary">
            <label htmlFor="journeyDate">Journey Date</label>
            <input
              type="date"
              id="journeyDate"
              min={journeyDate}
              max={maxJourneyDate}
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
              className="w-[55%] cursor-pointer"
              required
            />
          </div>
        </div>

        <Dialog error={error} />

        {/* Submit Button */}
        <button
          type="submit"
          onClick={submitHandler}
          disabled={Boolean(error)}
          className="mt-2 flex h-[50px] w-1/2 cursor-pointer flex-row items-center justify-center gap-1 self-start rounded-[10px] bg-primary text-secondary-text drop-shadow-pink duration-300 ease-in hover:-translate-y-1 hover:drop-shadow-pink"
        >
          <p className="text-xl font-medium">Book</p>
          <Submit className="h-[22px] w-[22px] stroke-secondary-text stroke-3" />
        </button>
      </div>

      {/* Code for Tab and Laptop  */}
      <div className="hidden flex-col items-center lg:flex">
        <div className="">
          <IconButtonPrimary title="Morning">
            <MorningSvg className="h-[22px] w-[22px] stroke-secondary-text" />
          </IconButtonPrimary>
          <IconButtonPrimary title="Morning">
            <AfternoonSun className="h-[22px] w-[22px] stroke-secondary-text" />
          </IconButtonPrimary>
        </div>

        <div className=" ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          sunt soluta, deleniti architecto animi, iste quis voluptas qui aliquid
          ipsum explicabo modi eum nobis ea tenetur eos similique autem
          doloribus?
        </div>
      </div>
    </div>
  );
};
export default BookingSection;

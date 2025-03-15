import { useState } from "react";
import {
  CitySelectionInput,
  DropDownInput,
  IconButtonPrimary,
  SelectionInput,
} from "~/components";
import { BusStop, Calender, Location, Submit, SunSvg } from "~/components/svgs";

import { motion } from "motion/react";
import { City, Timing } from "~/constantData";
import { useAppContext } from "~/context/AppContext";
import { getMonthMaxDate } from "~/utils";

const BookingSection = ({}) => {
  // States
  const [selectedTime, setSelectedTime] = useState<Timing>(Timing.Morning);
  const [selectedCityFrom, setSelectedCityFrom] = useState<City>(City.Chakwal);
  const [selectedCityTo, setSelectedCityTo] = useState<City>(City.Faizabad);
  const cityOptions = Object.values(City);
  const todayDay = new Date().toISOString().split("T")[0];
  const [journeyDate, setJourneyDate] = useState<string>(todayDay);
  const maxJourneyDate = getMonthMaxDate(1);
  const { globalState, handleChange } = useAppContext();

  // Handlers
  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Later I will move error to global state...
    if (selectedCityFrom === selectedCityTo) {
      handleChange({ name: "error", value: "Both cities can't be same" });
    }

    if (journeyDate < todayDay || journeyDate > maxJourneyDate) {
      handleChange({
        name: "error",
        value:
          "Date should be between today and next 30 days or use the calender icon.",
      });
    }
    console.log(selectedCityFrom, selectedCityTo, journeyDate, selectedTime);
  };

  return (
    <motion.div
      id="bookingSection"
      className="bg-secondary-bg dark:bg-dark-mode bookingSectionBg z-10 col-span-full mx-auto max-w-[800px] -translate-y-1/3 rounded-[20px] p-4 shadow-white sm:-translate-y-1/4! sm:p-6 sm:max-lg:min-w-[360px] lg:h-[250px] lg:w-[754px] lg:-translate-y-1/2! lg:p-4"
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.5 }}
      variants={{
        initial: {
          y: 20,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, ease: "easeOut" },
        },
      }}
    >
      {/* Code for Mobile  */}
      <div className="flex flex-col items-center gap-2 py-2 lg:hidden">
        {/* Selection : Timing Morning or Afternoon */}
        <div className="flex w-full flex-row justify-around">
          <SelectionInput
            name="timing"
            labelText="Morning"
            value={Timing.Morning}
            selectedValue={selectedTime}
            onChange={setSelectedTime}
          />
          <SelectionInput
            name="timing"
            labelText="Afternoon"
            value={Timing.Afternoon}
            selectedValue={selectedTime}
            onChange={setSelectedTime}
          />
        </div>

        {/* Selection Inputs */}
        <div className="border-primary h-auto w-full space-y-2 rounded-xl border-[0.1px] px-2 py-4">
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
          <div className="text-primary flex cursor-pointer justify-between">
            <label htmlFor="journeyDate">Journey Date</label>
            <input
              type="date"
              id="journeyDate"
              value={journeyDate}
              min={todayDay}
              max={maxJourneyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
              className="w-[55%] cursor-pointer"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={submitHandler}
          disabled={Boolean(globalState.error)}
          className="bg-primary text-secondary-text dark:text-dark-mode shadow-pink mt-2 flex h-[50px] w-1/2 cursor-pointer flex-row items-center justify-center gap-1 self-start rounded-[10px] duration-300 ease-in hover:-translate-y-[2px]"
        >
          <p className="text-xl font-medium">Book</p>
          <Submit className="stroke-secondary-text dark:stroke-dark-mode h-[22px] w-[22px] stroke-3" />
        </button>
      </div>

      {/* Code for Tab and Laptop  */}
      <div className="mt-1 hidden flex-col lg:flex">
        {/* Timing Selection */}
        <div className="ml-1 flex gap-5">
          <IconButtonPrimary
            title="Morning"
            isActive={selectedTime === "morning"}
            onClick={() => setSelectedTime(Timing.Morning)}
          >
            <SunSvg
              className={`${selectedTime === "morning" ? "stroke-secondary-text dark:stroke-dark-mode" : "stroke-primary-text"} h-[22px] w-[22px] duration-200 ease-linear`}
            />
          </IconButtonPrimary>
          <IconButtonPrimary
            title="Afternoon"
            isActive={selectedTime === "afternoon"}
            onClick={() => setSelectedTime(Timing.Afternoon)}
          >
            <SunSvg
              className={`${selectedTime === "afternoon" ? "stroke-secondary-text dark:stroke-dark-mode" : "stroke-primary-text"} h-[22px] w-[22px] rotate-90 duration-200 ease-linear`}
            />
          </IconButtonPrimary>
        </div>

        <div className="ml-1 flex">
          {/* Cities and Date */}
          <div className="border-primary mt-[48px] flex w-fit gap-15 rounded-2xl border px-[40px] py-5">
            {/* City from */}
            <CitySelectionInput
              SvgIcon={<Location className="dark:stroke-dark-mode" />}
              cityOptions={cityOptions}
              description="From City"
              selectedCity={selectedCityFrom}
              setSelectedCity={setSelectedCityFrom}
            />

            {/* City to */}
            <CitySelectionInput
              SvgIcon={
                <BusStop className="stroke-secondary-text dark:stroke-dark-mode" />
              }
              cityOptions={cityOptions}
              description="To City"
              selectedCity={selectedCityTo}
              setSelectedCity={setSelectedCityTo}
            />

            {/* Selction : Date */}
            <div className="flex gap-2">
              <div className="bg-primary dark:fill-dark-mode flex h-[38px] w-[38px] items-center justify-center rounded-full fill-white">
                <Calender />
              </div>
              <div>
                <p className="text-grey dark:text-secondary-text text-[12px] font-medium">
                  Journey Date
                </p>
                <input
                  type="date"
                  id="journeyDate"
                  min={todayDay}
                  max={maxJourneyDate}
                  value={journeyDate}
                  onChange={(e) => setJourneyDate(e.target.value)}
                  className="text-primary dark:text-primary-light dark:bg-dark-mode cursor-pointer font-light"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={submitHandler}
            disabled={Boolean(globalState.error)}
            className="bg-primary hover:shadow-pink mx-auto mt-[48px] flex w-[80px] cursor-pointer place-items-center justify-center rounded-[15px] duration-300 ease-out hover:scale-102"
          >
            <Submit className="stroke-secondary-text dark:stroke-dark-mode h-[40px] w-[40px] stroke-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default BookingSection;

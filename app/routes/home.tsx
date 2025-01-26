import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useState } from "react";
import { heroBackground } from "~/assets";
import {
  ButtonPrimary,
  Dialog,
  DropDownInput,
  IconButtonPrimary,
  SelectionInput,
} from "~/components";
import { AfternoonSun, MorningSvg, Submit } from "~/components/svgs";
import { City, heroData } from "~/constantData";
import { getDefaultMaxDate } from "~/utils";
import type { Route } from "./+types/home";
import classes from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pink Bus" },
    { name: "description", content: "Pink Bus service for girls." },
  ];
}

export default function Home() {
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

  const { scrollYProgress } = useScroll();

  /* Spring for smooth scrolling */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const scrollValue = [0.05, 0.1];
  const display = useTransform(smoothProgress, scrollValue, ["none", "block"]);

  /* Stagger Effects */
  const staggerChildForButton = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
      },
    },
  };
  const staggerChild = {
    initial: { opacity: 0, y: 10, filter: "blur(2px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: [0.55, 0.085, 0.68, 0.53],
      },
    },
  };

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
    <>
      {/* Hero Section */}
      <div className="col-span-full row-start-1 -mx-[2rem] h-dvh sm:-mx-[7.5rem]">
        <video
          ref={(video) => {
            if (video) {
              video.playbackRate = 0.5; // Set playback rate directly
            }
          }}
          src={heroBackground}
          className="absolute h-full w-full object-cover object-center"
          autoPlay
          muted
          // controls
          // loop
        ></video>

        {/* overlay */}
        <div className="absolute inset-0 bg-secondary/50" />

        {/* Hero Section Description */}
        <AnimatePresence>
          <motion.div
            className="absolute left-[10%] top-[30%] space-y-2 text-secondary-text xl:space-y-3 3xl:space-y-4"
            initial="initial"
            whileInView="animate"
            style={{
              display,
              transitionDuration: "0.3s",
              transitionTimingFunction: "ease-in",
            }}
            variants={{
              animate: {
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                  staggerChildren: 0.6,
                },
              },
            }}
          >
            <motion.h1
              variants={staggerChild}
              className="heading bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text text-transparent"
            >
              {heroData.title}
            </motion.h1>

            <motion.p
              variants={staggerChild}
              className="ml-1 w-[260px] 2xl:w-[400px] 2xl:text-2xl"
            >
              {heroData.description}
            </motion.p>

            <motion.div
              className="ml-1 pt-6 2xl:pt-10"
              variants={staggerChildForButton}
            >
              <ButtonPrimary title="Book Now" to="#bookingSection" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Booking Section */}
      <div
        id="bookingSection"
        className={`${classes.bookingSection} col-span-full mx-auto bg-secondary-bg p-4 drop-shadow-pink sm:!-translate-y-1/4 lg:h-[250px] lg:w-[768px] lg:!-translate-y-1/2`}
      >
        {/* Code for Mobile  */}
        <div className="flex flex-col items-center gap-2 py-2 md:hidden">
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
            <Submit className="h-[22px] w-[22px] stroke-secondary-text stroke-[3]" />
          </button>
        </div>

        {/* Code for Tab and Laptop  */}
        <div className="hidden flex-col items-center md:flex">
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
            sunt soluta, deleniti architecto animi, iste quis voluptas qui
            aliquid ipsum explicabo modi eum nobis ea tenetur eos similique
            autem doloribus?
          </div>
        </div>
      </div>
    </>
  );
}

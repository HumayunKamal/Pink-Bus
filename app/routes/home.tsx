import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { heroBackground } from "~/assets";
import { ButtonPrimary } from "~/components";
import type { Route } from "./+types/home";
import classes from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pink Bus" },
    { name: "description", content: "Pink Bus service for girls." },
  ];
}

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Spring for smooth scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const scrollValue = [0.05, 0.1];

  const display = useTransform(smoothProgress, scrollValue, ["none", "block"]);

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
              Pink Bus
            </motion.h1>

            <motion.p
              variants={staggerChild}
              className="ml-1 w-[260px] 2xl:w-[400px] 2xl:text-2xl"
            >
              Transport for girls. Bus service where girl can book ride and
              travel safely without wasting time.
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
        <div className="">
          <div className="">
            Booking Section Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Aliquid quis pariatur, est tempora officia, saepe itaque dicta
            unde debitis eveniet
          </div>

          <div className=" ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            sunt soluta, deleniti architecto animi, iste quis voluptas qui
            aliquid ipsum explicabo modi eum nobis ea tenetur eos similique
            autem doloribus?
          </div>
        </div>
      </div>
      <div className="col-span-full">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        sunt soluta, deleniti architecto animi, iste quis voluptas qui aliquid
        ipsum explicabo modi eum nobis ea tenetur eos similique autem doloribus?
      </div>
    </>
  );
}

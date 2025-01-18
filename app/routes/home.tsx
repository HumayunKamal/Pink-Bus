import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Link } from "react-router";
import { heroBackground } from "~/assets";
import type { Route } from "./+types/home";

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

  const staggerChild = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
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
            className="3xl:space-y-4 absolute left-[10%] top-[30%] space-y-2 text-secondary-text xl:space-y-3"
            initial="initial"
            whileInView="animate"
            style={{
              display,
              transitionDuration: "0.5s",
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
              className="heading text-primary-text"
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

            <motion.div className="ml-1 pt-6 2xl:pt-10" variants={staggerChild}>
              <Link to="#bookingSection">
                <button className="title button-effect-1 h-[50px] w-[120px] rounded-xl bg-primary font-normal text-secondary-text drop-shadow-pink lg:h-[55px] lg:w-[160px] lg:rounded-[20px] 2xl:h-[80px] 2xl:w-[200px]">
                  Book Now
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div id="bookingSection">Booking Section</div>
    </>
  );
}

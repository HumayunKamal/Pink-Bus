import {
  AnimatePresence,
  motion,
  MotionValue,
  useTransform,
} from "motion/react";
import { heroBackground } from "~/assets";
import { ButtonPrimary } from "~/components";
import { heroData } from "~/constantData";
const HeroSection = ({
  smoothYProgress,
}: {
  smoothYProgress: MotionValue<number>;
}) => {
  const scrollValue = [0.05, 0.1];
  const display = useTransform(smoothYProgress, scrollValue, ["none", "block"]);

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
  return (
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
            className="heading bg-linear-to-r from-primary-text to-secondary-text bg-clip-text text-transparent"
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
  );
};
export default HeroSection;

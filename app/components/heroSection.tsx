import { AnimatePresence, motion } from "motion/react";
import { heroBackground, heroBanner } from "~/assets";
import { ButtonPrimary } from "~/components";
import { heroData } from "~/constantData";

const HeroSection = ({}) => {
  /* Stagger Effects */
  const staggerChild = {
    initial: { opacity: 0, y: 10, filter: "blur(2px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const staggerChildForButton = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="col-span-full row-start-1 -mx-[2rem] h-svh sm:-mx-[7.5rem]">
      {/* For Desktop */}
      <video
        className="absolute hidden h-full w-full object-cover object-center lg:block"
        autoPlay
        muted
        // loop
      >
        <source
          src={heroBackground}
          type="video/mp4"
          media="(min-width: 1024px)" /* only load on above this viewport */
        />
      </video>

      {/* For Mobile */}
      <img
        src={heroBanner}
        alt="Hero Banner"
        className="absolute h-full w-full object-cover object-center lg:hidden"
      />

      {/* overlay */}
      <div className="bg-secondary/50 absolute inset-0" />

      {/* Hero Section Description */}
      <AnimatePresence>
        <motion.div
          className="text-secondary-text 3xl:space-y-4 absolute top-[30%] left-[10%] space-y-2 sm:max-lg:left-[18%] xl:space-y-3"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                ease: "easeOut",
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            variants={staggerChild}
            className="heading from-primary-text to-secondary-text bg-linear-to-r bg-clip-text text-transparent"
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

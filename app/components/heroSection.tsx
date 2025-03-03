import { AnimatePresence, motion } from "motion/react";
import { heroBackground, heroBanner } from "~/assets";
// import { ButtonPrimary } from "~/components";
import { heroData } from "~/constantData";

const HeroSection = ({}) => {
  /* Stagger Effects */
  const staggerChild = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
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
          className="text-secondary-text absolute top-[30%] left-[12%] sm:max-lg:left-[18%]"
          initial="initial"
          whileInView="animate"
          variants={{
            animate: {
              transition: {
                ease: "easeOut",
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.p
            variants={staggerChild}
            className="text-primary-light font-bold lg:text-xl"
          >
            {heroData.subTitle}
          </motion.p>

          <motion.h1
            variants={staggerChild}
            className="heading"
          >
            {heroData.title}
          </motion.h1>

          <motion.p variants={staggerChild} className="mt-1 ml-1 xl:text-xl">
            {heroData.description}
          </motion.p>

          {/* <motion.div className="ml-1 pt-6 2xl:pt-10" variants={staggerChild}>
            <ButtonPrimary title="Book Now" to="#bookingSection" />
          </motion.div> */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default HeroSection;

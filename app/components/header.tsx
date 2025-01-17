import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { animationVariants } from "~/utils";

const Header = () => {
  const { scrollYProgress } = useScroll();

  // Spring for smooth scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const scrollValue = [0, 0.002];

  const opacity = useTransform(smoothProgress, scrollValue, [0, 1]);
  const moveY = useTransform(smoothProgress, scrollValue, [-120, 0]);
  const opacityReverse = useTransform(smoothProgress, scrollValue, [1, 0]);
  const moveYReverse = useTransform(smoothProgress, scrollValue, [0, 120]);

  return (
    <>
      {/* Top Header */}
      <motion.div
        style={{
          opacity,
          y: moveY,
          transitionDuration: "0.5s",
        }}
        className="z-10 col-span-full row-start-1 mt-10 flex h-10 items-center justify-around rounded-xl bg-primary/60 text-secondary-text backdrop-blur-[3px] lg:mt-12 lg:h-20 lg:rounded-3xl 2xl:h-24"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.4 },
            },
          }}
        >
          header
        </motion.div>
      </motion.div>

      {/* Bottom Header */}
      <motion.div
        // initial="initial"
        // animate="animate"
        // variants={animationVariants.fadeUp}
        style={{
          y: moveYReverse,
          opacity: opacityReverse,
          transitionDuration: "0.5s",
        }}
        className="absolute bottom-0 left-1/2 z-10 my-5 flex h-12 -translate-x-1/2 items-center justify-around rounded-xl bg-primary/60 text-secondary-text backdrop-blur-[3px] 2xl:h-20"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.4 },
            },
          }}
        >
          header
        </motion.div>
      </motion.div>
    </>
  );
};

export default Header;

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { MdLightMode } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { whiteLogo } from "~/assets";
import { navLinks } from "~/constantData";

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
        className="z-10 col-span-full row-start-1 mt-10 flex h-10 items-center justify-center rounded-xl bg-primary/60 text-secondary-text backdrop-blur-[3px] lg:mt-12 lg:h-20 lg:rounded-3xl 2xl:col-span-10 2xl:col-start-2 2xl:h-24"
      >
        <motion.div
          initial="initial"
          className="flex w-full items-center justify-evenly px-4"
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
          {/* Logo */}
          <Link to="/" className="mr-auto">
            <img
              src={whiteLogo}
              className="h-auto w-[30px] sm:w-[40px] 2xl:w-[50px]"
              alt="Logo"
            />
          </Link>

          {/* NavLinks */}
          <NavigationLinks />

          {/* Light mode */}
          <MdLightMode className="ml-auto h-auto w-[24px] cursor-pointer rounded-full bg-primary-light fill-primary p-2 sm:w-[34px] 2xl:w-[34px]" />
        </motion.div>
      </motion.div>

      {/* Bottom Header */}
      <motion.div
        style={{
          y: moveYReverse,
          opacity: opacityReverse,
          transitionDuration: "0.5s",
        }}
        className="absolute bottom-0 left-1/2 z-10 mb-5 flex h-[50px] w-4/6 !-translate-x-1/2 items-center justify-center rounded-xl bg-primary/60 text-secondary-text backdrop-blur-[3px] sm:h-[55px] sm:w-auto 2xl:h-16 2xl:w-[20%] 2xl:rounded-2xl"
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
          className="flex w-full items-center justify-around sm:mx-2 sm:gap-2 lg:space-x-4"
        >
          <Link to="/">
            <img
              src={whiteLogo}
              className="h-auto w-[40px] 2xl:w-[50px]"
              alt="Logo"
            />
          </Link>

          {/* NavLinks */}
          <NavigationLinks />

          <MdLightMode className="h-auto w-[24px] cursor-pointer rounded-full bg-primary-light fill-primary p-1 2xl:w-[34px]" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Header;

const NavigationLinks = () => (
  <nav className="flex space-x-4">
    {navLinks.map((link) => (
      <NavLink className="group" key={link.name} to={link.href}>
        {({ isActive }) => (
          <div
            className={`${isActive && "text-grey"} group-hover-transition relative 2xl:text-xl`}
          >
            {link.name}
            <hr
              className={`${isActive && "w-full border-grey"} group-hover-transition absolute w-0 border-secondary group-hover:w-full sm:mt-1`}
            />
          </div>
        )}
      </NavLink>
    ))}
  </nav>
);

import { Link, NavLink } from "react-router";
import { whiteLogo } from "~/assets";
import { navLinks } from "~/constantData";
// import { useAppContext } from "~/context/AppContext";
import { LightMode } from "./svgs";
import { useEffect, useState } from "react";
const Header = () => {
  /* /////////////////////// */
  /* Context DarkMode Logic */
  // const { globalState, handleChange } = useAppContext();
  // const darkModeHandler = () =>
  // handleChange({ name: "isDarkMode", value: !globalState.isDarkMode });

  const [darkMode, setDarkMode] = useState(false);
  // Check localStorage while mounting the component
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <>
      {/* Top Header */}
      <div className="bg-primary/60 dark:bg-dark-mode/80 text-secondary-text z-10 col-span-full row-start-1 mt-10 flex h-10 items-center justify-center rounded-xl backdrop-blur-[3px] lg:mt-12 lg:h-20 lg:rounded-3xl 2xl:h-24">
        <div className="flex w-full items-center justify-evenly px-4">
          {/* Logo */}
          <Link to="/" className="mr-auto">
            <img
              src={whiteLogo}
              className="h-auto w-[30px] sm:w-[40px] lg:w-[60px]"
              alt="Logo"
            />
          </Link>

          {/* NavLinks */}
          <NavigationLinks />

          {/* Theme mode toggler */}
          <LightMode
            isDarkMode={darkMode}
            onClick={() => setDarkMode(!darkMode)}
            className="bg-primary fill-primary stroke-secondary-text dark:bg-secondary-bg dark:fill-dark-mode dark:stroke-dark-mode ml-auto h-auto w-[24px] cursor-pointer rounded-full p-1 shadow-white lg:w-[34px] lg:p-2 2xl:w-[34px]"
          />
        </div>
      </div>
    </>
  );
};

export default Header;

const NavigationLinks = () => (
  <nav className="flex space-x-4">
    {navLinks.map((link) => (
      <NavLink className="group" key={link.name} to={link.href} viewTransition>
        {({ isActive }) => (
          <div
            className={`${isActive && ""} group-hover-transition text-secondary-text relative 2xl:text-xl`}
          >
            {link.name}
            <hr
              className={`${isActive && "w-full"} group-hover-transition border-secondary-text absolute w-0 group-hover:w-full lg:mt-1`}
            />
          </div>
        )}
      </NavLink>
    ))}
  </nav>
);

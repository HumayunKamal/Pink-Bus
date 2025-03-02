import { Link, NavLink } from "react-router";
import { whiteLogo } from "~/assets";
import { navLinks } from "~/constantData";
import { LightMode } from "./svgs";
const Header = () => {
  return (
    <>
      {/* Top Header */}
      <div className="bg-primary/60 text-secondary-text z-10 col-span-full row-start-1 mt-10 flex h-10 items-center justify-center rounded-xl backdrop-blur-[3px] lg:mt-12 lg:h-20 lg:rounded-3xl 2xl:h-24">
        <div className="flex w-full items-center justify-evenly px-4">
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
          <LightMode className="bg-primary-light fill-primary ml-auto h-auto w-[24px] cursor-pointer rounded-full p-1 lg:w-[34px] lg:p-2 2xl:w-[34px]" />
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
            className={`${isActive && "text-secondary"} group-hover-transition group-hover:text-secondary relative 2xl:text-xl`}
          >
            {link.name}
            <hr
              className={`${isActive && "w-full"} group-hover-transition border-secondary absolute w-0 group-hover:w-full sm:mt-1`}
            />
          </div>
        )}
      </NavLink>
    ))}
  </nav>
);

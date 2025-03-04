import { Link } from "react-router";
import { pinkLogo } from "~/assets";
import { navLinks } from "~/constantData";
import { ArrowUp } from "./svgs";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };
  return (
    <div className="footer bg-secondary-bg text-primary col-span-full -mx-[2rem] p-2 sm:-mx-[7.5rem] lg:h-[277px] 2xl:h-[150px]">
      <div className="flex items-center lg:col-span-1 lg:col-end-12 lg:mx-[7.5rem] lg:mt-20 2xl:mt-0">
        {/* Logo Area */}
        <Link to="/" className="cursor-pointer">
          <img
            src={pinkLogo}
            alt="logo image"
            className="h-auto w-[60px] lg:w-[100px]"
          />
        </Link>
        <div>
          <h4 className="sub-title">Pink Bus</h4>
          <p className="caption">Safety and comfort</p>
        </div>
      </div>

      {/* Navigations and copyright */}
      <div className="flex items-center justify-end gap-2 lg:px-4">
        <div className="lg:mx-auto lg:pl-40">All rights reserved.</div>

        <div className="flex items-center gap-2 lg:gap-5">
          {/* NavLinks */}
          <nav className="flex space-x-4 max-lg:hidden">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} viewTransition>
                <div className="hover:text-secondary 2xl:text-xl">
                  {link.name}
                </div>
              </Link>
            ))}
          </nav>

          <div className="cursor-pointer" onClick={scrollToTop}>
            <ArrowUp className="bg-primary fill-secondary-text h-[32px] w-[32px] animate-pulse rounded-full p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
